import { describe, expect, it } from "vitest";
import { isNotThreadOwner } from "@/lib/instagram/send-messages";
import { ZernioApiError } from "@/lib/zernio/client";

describe("isNotThreadOwner", () => {
  it("matches only 409 not_thread_owner", () => {
    expect(isNotThreadOwner(new ZernioApiError(409, "not_thread_owner"))).toBe(true);
    expect(isNotThreadOwner(new ZernioApiError(409, "other"))).toBe(false);
    expect(isNotThreadOwner(new ZernioApiError(403, "not_thread_owner"))).toBe(false);
  });
});
