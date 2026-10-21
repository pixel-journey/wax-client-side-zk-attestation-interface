import { describe, expect, it } from "vitest";
import { attestation } from "./proof";

describe("no proof", () => {
  it("stays false", () => {
    const row = attestation();
    expect(row.proof).toBe(false);
    expect(row.why).toContain("not zero knowledge");
  });
});
