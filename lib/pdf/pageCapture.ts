"use client";

import { toCanvas } from "html-to-image";
import {
  assertCanvasHasContent,
  copyComputedStyles,
  isCanvasMostlyBlank,
  normalizeCanvas,
  prepareCloneForCapture,
  setPdfCaptureMode,
  syncImagesFromSource,
  waitForPaint,
} from "./captureUtils";
import {
  CAPTURE_JPEG_QUALITY,
  CAPTURE_PIXEL_RATIO,
  PAGE_HEIGHT,
  PAGE_WIDTH,
  REPORT_COLORS,
  REPORT_PAGE_SELECTOR,
} from "./constants";
import { preloadReportAssets, waitForImagesInElement } from "./assetLoader";
import { PdfDebugLogger } from "./logger";
import type { CapturedPageSlice } from "./types";

const CAPTURE_BACKGROUND = REPORT_COLORS.cream;

async function canvasToSlice(
  canvas: HTMLCanvasElement,
): Promise<{ imageBase64: string; mimeType: "image/jpeg" | "image/png" }> {
  const dataUrl = canvas.toDataURL("image/jpeg", CAPTURE_JPEG_QUALITY);
  const [, base64 = ""] = dataUrl.split(",");

  if (!base64 || base64.length < 1024) {
    throw new Error(
      `Capture produced an empty image buffer (${PAGE_WIDTH}x${PAGE_HEIGHT}).`,
    );
  }

  return { imageBase64: base64, mimeType: "image/jpeg" };
}

async function captureElementToCanvas(
  element: HTMLElement,
): Promise<HTMLCanvasElement> {
  const rawCanvas = await toCanvas(element, {
    pixelRatio: CAPTURE_PIXEL_RATIO,
    cacheBust: true,
    skipFonts: false,
    includeQueryParams: true,
    backgroundColor: CAPTURE_BACKGROUND,
    fetchRequestInit: {
      mode: "cors",
      cache: "no-cache",
    },
    filter: (node) => {
      if (!(node instanceof HTMLElement)) {
        return true;
      }
      return node.dataset.pdfIgnore !== "true";
    },
  });

  return normalizeCanvas(
    rawCanvas,
    PAGE_WIDTH,
    PAGE_HEIGHT,
    CAPTURE_BACKGROUND,
  );
}

async function captureReportPage(
  page: HTMLElement,
  pageIndex: number,
  logger: PdfDebugLogger,
): Promise<CapturedPageSlice> {
  const label =
    page.dataset.pageLabel || page.dataset.reportPage || `page-${pageIndex + 1}`;

  page.scrollIntoView({ block: "start", behavior: "instant" });
  await waitForImagesInElement(page, logger);

  logger.log({
    type: "render_start",
    element: label,
    pageIndex,
    sliceIndex: 0,
  });

  const clone = page.cloneNode(true) as HTMLElement;
  copyComputedStyles(page, clone);
  syncImagesFromSource(page, clone);
  prepareCloneForCapture(clone, PAGE_WIDTH, PAGE_HEIGHT, 0);

  const host = document.createElement("div");
  host.setAttribute("data-pdf-capture-host", "true");
  host.style.position = "fixed";
  host.style.top = "0";
  host.style.left = "0";
  host.style.width = `${PAGE_WIDTH}px`;
  host.style.height = `${PAGE_HEIGHT}px`;
  host.style.overflow = "hidden";
  host.style.pointerEvents = "none";
  host.style.zIndex = "2147483646";
  host.style.backgroundColor = CAPTURE_BACKGROUND;
  host.style.margin = "0";
  host.style.padding = "0";
  host.style.boxSizing = "border-box";
  host.appendChild(clone);
  document.body.appendChild(host);

  await waitForPaint();

  let canvas: HTMLCanvasElement;
  try {
    canvas = await captureElementToCanvas(host);
    assertCanvasHasContent(canvas, label, logger);

    if (isCanvasMostlyBlank(canvas)) {
      throw new Error(`Unable to capture visible content for "${label}".`);
    }
  } finally {
    document.body.removeChild(host);
  }

  const { imageBase64, mimeType } = await canvasToSlice(canvas);

  logger.log({
    type: "render_complete",
    element: label,
    pageIndex,
    sliceIndex: 0,
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
  });

  return {
    label,
    pageIndex,
    sliceIndex: 0,
    totalSlices: 1,
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
    imageBase64,
    mimeType,
  };
}

export async function captureAllReportPages(
  logger = new PdfDebugLogger(),
): Promise<CapturedPageSlice[]> {
  setPdfCaptureMode(true);

  try {
    await preloadReportAssets(document, logger);

    const pages = Array.from(
      document.querySelectorAll<HTMLElement>(REPORT_PAGE_SELECTOR),
    );

    if (pages.length === 0) {
      throw new Error(
        "No report pages found. Ensure ReportPageShell renders data-report-page.",
      );
    }

    const slices: CapturedPageSlice[] = [];

    for (let pageIndex = 0; pageIndex < pages.length; pageIndex += 1) {
      if (pageIndex > 0) {
        logger.log({
          type: "page_break",
          reason: "next_report_page",
          element:
            pages[pageIndex].dataset.pageLabel || `page-${pageIndex + 1}`,
          pageIndex,
          sliceIndex: 0,
        });
      }

      slices.push(await captureReportPage(pages[pageIndex], pageIndex, logger));
    }

    if (slices.length !== pages.length) {
      logger.log({
        type: "warning",
        message: `Expected ${pages.length} PDF pages but captured ${slices.length}.`,
      });
    }

    return slices;
  } finally {
    setPdfCaptureMode(false);
  }
}

export { PdfDebugLogger };
