import { PDF_DEBUG } from "./constants";
import type { PdfLogEvent } from "./types";

export class PdfDebugLogger {
  private readonly events: PdfLogEvent[] = [];

  log(event: PdfLogEvent): void {
    this.events.push(event);

    if (!PDF_DEBUG) {
      return;
    }

    switch (event.type) {
      case "page_break":
        console.info(
          `[PDF] Page break (${event.reason}) — element="${event.element}" pageIndex=${event.pageIndex} slice=${event.sliceIndex ?? 0}`,
        );
        break;
      case "render_start":
        console.info(
          `[PDF] Rendering "${event.element}" (page ${event.pageIndex}, slice ${event.sliceIndex})`,
        );
        break;
      case "render_complete":
        console.info(
          `[PDF] Rendered "${event.element}" — ${event.width}x${event.height}px`,
        );
        break;
      case "overflow_detected":
        console.warn(
          `[PDF] Overflow on "${event.element}" — scrollHeight=${event.scrollHeight}px, splitting into ${event.slices} slice(s)`,
        );
        break;
      case "bounds_warning":
        console.warn(
          `[PDF] Bounds issue on "${event.element}" — ${event.message} (${event.width}x${event.height})`,
        );
        break;
      case "image_loaded":
        console.debug(`[PDF] Image loaded: ${event.src}`);
        break;
      case "warning":
        console.warn(`[PDF] ${event.message}`);
        break;
      default:
        break;
    }
  }

  getEvents(): PdfLogEvent[] {
    return [...this.events];
  }
}
