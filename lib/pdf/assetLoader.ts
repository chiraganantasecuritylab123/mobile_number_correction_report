import type { PdfDebugLogger } from "./logger";

const IMAGE_LOAD_TIMEOUT_MS = 15_000;

function isImageLoaded(img: HTMLImageElement): boolean {
  return img.complete && img.naturalWidth > 0;
}

async function loadImage(
  img: HTMLImageElement,
  logger?: PdfDebugLogger,
): Promise<void> {
  if (isImageLoaded(img)) {
    return;
  }

  await new Promise<void>((resolve, reject) => {
    const timeout = window.setTimeout(() => {
      reject(new Error(`Timed out loading image: ${img.currentSrc || img.src}`));
    }, IMAGE_LOAD_TIMEOUT_MS);

    const finish = () => {
      window.clearTimeout(timeout);
      logger?.log({ type: "image_loaded", src: img.currentSrc || img.src });
      resolve();
    };

    img.addEventListener("load", finish, { once: true });
    img.addEventListener(
      "error",
      () => {
        window.clearTimeout(timeout);
        logger?.log({
          type: "warning",
          message: `Failed to load image: ${img.currentSrc || img.src}`,
        });
        resolve();
      },
      { once: true },
    );

    if (img.loading === "lazy") {
      img.loading = "eager";
    }

    const src = img.currentSrc || img.src;
    if (!src) {
      window.clearTimeout(timeout);
      resolve();
      return;
    }

    if (!isImageLoaded(img)) {
      img.decode?.().then(finish).catch(finish);
    }
  });
}

async function preloadBackgroundImages(
  root: HTMLElement,
  logger?: PdfDebugLogger,
): Promise<void> {
  const elements = [root, ...Array.from(root.querySelectorAll<HTMLElement>("*"))];

  const urls = new Set<string>();
  for (const element of elements) {
    const background = window.getComputedStyle(element).backgroundImage;
    if (!background || background === "none") {
      continue;
    }

    for (const match of background.matchAll(/url\(["']?([^"')]+)["']?\)/g)) {
      urls.add(match[1]);
    }
  }

  await Promise.all(
    [...urls].map(
      (url) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => {
            logger?.log({ type: "image_loaded", src: url });
            resolve();
          };
          img.onerror = () => {
            logger?.log({ type: "warning", message: `Background failed: ${url}` });
            resolve();
          };
          img.src = url;
        }),
    ),
  );
}

export async function waitForFonts(): Promise<void> {
  if (document.fonts?.ready) {
    await document.fonts.ready;
  }
}

export async function waitForImagesInElement(
  root: HTMLElement,
  logger?: PdfDebugLogger,
): Promise<void> {
  root.scrollIntoView({ block: "center", inline: "nearest" });

  const images = Array.from(root.querySelectorAll("img"));
  await Promise.all(images.map((img) => loadImage(img, logger)));
  await preloadBackgroundImages(root, logger);
}

export async function preloadReportAssets(
  root: ParentNode = document,
  logger?: PdfDebugLogger,
): Promise<void> {
  await waitForFonts();

  const pages = Array.from(
    root.querySelectorAll<HTMLElement>("[data-report-page]"),
  );

  for (const page of pages) {
    await waitForImagesInElement(page, logger);
  }

  await new Promise((resolve) => window.setTimeout(resolve, 150));
}
