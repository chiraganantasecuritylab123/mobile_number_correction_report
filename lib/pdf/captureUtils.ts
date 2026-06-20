import type { PdfDebugLogger } from "./logger";

export type SavedElementStyles = {
  transform: string;
  height: string;
  minHeight: string;
  overflow: string;
  marginTop: string;
  marginBottom: string;
  boxShadow: string;
};

export function saveElementStyles(element: HTMLElement): SavedElementStyles {
  return {
    transform: element.style.transform,
    height: element.style.height,
    minHeight: element.style.minHeight,
    overflow: element.style.overflow,
    marginTop: element.style.marginTop,
    marginBottom: element.style.marginBottom,
    boxShadow: element.style.boxShadow,
  };
}

export function restoreElementStyles(
  element: HTMLElement,
  saved: SavedElementStyles,
): void {
  element.style.transform = saved.transform;
  element.style.height = saved.height;
  element.style.minHeight = saved.minHeight;
  element.style.overflow = saved.overflow;
  element.style.marginTop = saved.marginTop;
  element.style.marginBottom = saved.marginBottom;
  element.style.boxShadow = saved.boxShadow;
}

export function applySliceCaptureStyles(
  element: HTMLElement,
  offsetY: number,
  sliceHeight: number,
): void {
  element.style.transform = `translateY(-${offsetY}px)`;
  element.style.transformOrigin = "top left";
  element.style.height = `${sliceHeight}px`;
  element.style.minHeight = `${sliceHeight}px`;
  element.style.overflow = "hidden";
  element.style.marginTop = "0";
  element.style.marginBottom = "0";
  element.style.boxShadow = "none";
}

export function prepareCloneForCapture(
  clone: HTMLElement,
  width: number,
  pageHeight: number,
  offsetY = 0,
): void {
  clone.classList.remove("mx-auto");
  clone.style.margin = "0";
  clone.style.marginLeft = "0";
  clone.style.marginRight = "0";
  clone.style.left = "0";
  clone.style.top = "0";
  clone.style.position = "relative";
  clone.style.boxSizing = "border-box";
  clone.style.width = `${width}px`;
  clone.style.maxWidth = `${width}px`;
  clone.style.minWidth = `${width}px`;
  clone.style.height = `${pageHeight}px`;
  clone.style.minHeight = `${pageHeight}px`;
  clone.style.maxHeight = `${pageHeight}px`;
  clone.style.overflow = "hidden";
  clone.style.transform = offsetY > 0 ? `translateY(-${offsetY}px)` : "none";
  clone.style.transformOrigin = "top left";
  clone.style.boxShadow = "none";

  const inner = clone.querySelector<HTMLElement>("[data-report-page-inner]");
  if (inner) {
    inner.style.height = "100%";
    inner.style.maxHeight = `${pageHeight}px`;
    inner.style.overflow = "hidden";
    inner.style.boxSizing = "border-box";
  }
}

export function normalizeCanvas(
  source: HTMLCanvasElement,
  targetWidth: number,
  targetHeight: number,
  backgroundColor = "#fdf5e6",
): HTMLCanvasElement {
  if (source.width === targetWidth && source.height === targetHeight) {
    return source;
  }

  const canvas = document.createElement("canvas");
  canvas.width = targetWidth;
  canvas.height = targetHeight;

  const context = canvas.getContext("2d");
  if (!context) {
    return source;
  }

  context.fillStyle = backgroundColor;
  context.fillRect(0, 0, targetWidth, targetHeight);
  context.drawImage(source, 0, 0, targetWidth, targetHeight);

  return canvas;
}

export function copyComputedStyles(source: Element, target: Element): void {
  if (!(source instanceof HTMLElement) || !(target instanceof HTMLElement)) {
    return;
  }

  const computed = window.getComputedStyle(source);
  for (let index = 0; index < computed.length; index += 1) {
    const property = computed.item(index);
    const value = computed.getPropertyValue(property);
    if (value) {
      target.style.setProperty(property, value, computed.getPropertyPriority(property));
    }
  }

  const sourceChildren = source.children;
  const targetChildren = target.children;
  for (let index = 0; index < sourceChildren.length; index += 1) {
    copyComputedStyles(sourceChildren[index], targetChildren[index]);
  }
}

export function syncImagesFromSource(
  source: HTMLElement,
  target: HTMLElement,
): void {
  const sourceImages = source.querySelectorAll("img");
  const targetImages = target.querySelectorAll("img");

  targetImages.forEach((targetImage, index) => {
    const sourceImage = sourceImages[index];
    if (!(sourceImage instanceof HTMLImageElement) || !(targetImage instanceof HTMLImageElement)) {
      return;
    }

    const resolvedSrc =
      sourceImage.currentSrc ||
      sourceImage.src ||
      sourceImage.getAttribute("src") ||
      "";

    if (resolvedSrc) {
      targetImage.src = resolvedSrc;
      targetImage.removeAttribute("srcset");
      targetImage.removeAttribute("loading");
    }

    if (sourceImage.naturalWidth > 0) {
      targetImage.width = sourceImage.naturalWidth;
      targetImage.height = sourceImage.naturalHeight;
    }
  });
}

export async function waitForPaint(): Promise<void> {
  await new Promise<void>((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => resolve());
    });
  });
}

export function setPdfCaptureMode(active: boolean): void {
  document.body.dataset.pdfCapturing = active ? "true" : "false";
}

export function isCanvasMostlyBlank(canvas: HTMLCanvasElement): boolean {
  const context = canvas.getContext("2d");
  if (!context) {
    return true;
  }

  const sampleWidth = Math.min(64, canvas.width);
  const sampleHeight = Math.min(64, canvas.height);
  if (sampleWidth === 0 || sampleHeight === 0) {
    return true;
  }

  const { data } = context.getImageData(0, 0, sampleWidth, sampleHeight);
  let lightPixels = 0;
  const totalPixels = data.length / 4;

  for (let index = 0; index < data.length; index += 4) {
    const red = data[index];
    const green = data[index + 1];
    const blue = data[index + 2];
    const alpha = data[index + 3];

    if (alpha < 8 || (red > 248 && green > 248 && blue > 248)) {
      lightPixels += 1;
    }
  }

  return lightPixels / totalPixels > 0.98;
}

export function assertCanvasHasContent(
  canvas: HTMLCanvasElement,
  label: string,
  logger?: PdfDebugLogger,
): void {
  if (!isCanvasMostlyBlank(canvas)) {
    return;
  }

  logger?.log({
    type: "warning",
    message: `Captured canvas for "${label}" appears blank — retrying with alternate capture strategy.`,
  });
}
