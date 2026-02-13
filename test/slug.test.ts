import { describe, expect, it } from "vitest";
import { isValidSlug, normalizeSlug } from "@/src/lib/slug";

describe("slug helper", () => {
  it("normalizes input safely", () => {
    expect(normalizeSlug("  Web Delivery Stack! ")).toBe("web-delivery-stack");
  });

  it("validates slug format", () => {
    expect(isValidSlug("web-delivery-stack")).toBe(true);
    expect(isValidSlug("Web Delivery Stack")).toBe(false);
  });
});
