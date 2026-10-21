/**
 * A refusal. This file does not implement a proof system.
 */

export function attestation(): { proof: false; why: string } {
  return {
    proof: false,
    why: "This package does not create or verify a zero-knowledge proof. A matching hash is not zero knowledge.",
  };
}
