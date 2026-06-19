import {
  CONTENT_HEIGHT,
  CONTENT_WIDTH,
  PAGE_HEIGHT,
  PAGE_WIDTH,
} from "./constants";
import type { ContentBounds } from "./types";

export function calculateOverflowSlices(
  totalHeight: number,
  pageHeight: number = PAGE_HEIGHT,
): number {
  return Math.max(1, Math.ceil(totalHeight / pageHeight));
}

export function getContentBounds(
  element: HTMLElement,
  pageWidth: number = PAGE_WIDTH,
  pageHeight: number = PAGE_HEIGHT,
): ContentBounds {
  const width = Math.ceil(element.scrollWidth);
  const height = Math.ceil(element.scrollHeight);

  return {
    width,
    height,
    exceedsWidth: width > pageWidth,
    exceedsHeight: height > pageHeight,
  };
}

export function fitsWithinPage(
  width: number,
  height: number,
  maxWidth: number = CONTENT_WIDTH,
  maxHeight: number = CONTENT_HEIGHT,
): boolean {
  return width <= maxWidth && height <= maxHeight;
}

export function clampDimensions(
  width: number,
  height: number,
  maxWidth: number = PAGE_WIDTH,
  maxHeight: number = PAGE_HEIGHT,
): { width: number; height: number } {
  return {
    width: Math.min(width, maxWidth),
    height: Math.min(height, maxHeight),
  };
}

export function getSliceHeight(
  offsetY: number,
  totalHeight: number,
  pageHeight: number = PAGE_HEIGHT,
): number {
  return Math.min(pageHeight, totalHeight - offsetY);
}

/** Tracks vertical cursor and triggers page breaks for vector PDF content. */
export class PdfLayoutCursor {
  private pageIndex = 0;

  constructor(
    private readonly margins = { top: 36, right: 40, bottom: 36, left: 40 },
    private readonly pageHeight: number = PAGE_HEIGHT,
    private readonly onPageBreak?: (
      reason: string,
      pageIndex: number,
    ) => void,
  ) {}

  y = this.margins.top;

  get contentWidth(): number {
    return PAGE_WIDTH - this.margins.left - this.margins.right;
  }

  get maxY(): number {
    return this.pageHeight - this.margins.bottom;
  }

  remainingSpace(): number {
    return Math.max(0, this.maxY - this.y);
  }

  ensureSpace(requiredHeight: number, reason = "content_overflow"): boolean {
    if (this.y + requiredHeight <= this.maxY) {
      return false;
    }

    this.pageIndex += 1;
    this.y = this.margins.top;
    this.onPageBreak?.(reason, this.pageIndex);
    return true;
  }

  advance(amount: number, spacing = 0): void {
    this.y += amount + spacing;
  }

  reset(): void {
    this.pageIndex = 0;
    this.y = this.margins.top;
  }
}
