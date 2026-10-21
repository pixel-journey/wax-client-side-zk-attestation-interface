import { ATOMIC_ORIGIN, CHAIN_ORIGIN, getAccount } from "./api";
import { attestation } from "./proof";
import type { ChainAction, HttpRequest } from "./api";

export type UseCase = {
  title: string;
  detail: string;
  request: HttpRequest;
  transaction: { note: string; actions: ChainAction[] } | null;
};

const row = attestation();

export const USE_CASES: UseCase[] = [
  {
    title: "An account is not a proof",
    detail: "proof is false. The account request is not sent.",
    request: getAccount(CHAIN_ORIGIN, "alice"),
    transaction: null,
  },
  {
    title: "An asset is not an attestation",
    detail: "No attest action is built.",
    request: { method: "GET", url: `${ATOMIC_ORIGIN}/atomicassets/v1/assets/1`, executed: false },
    transaction: null,
  },
];

export function assertUseCases(): void {
  if (row.proof !== false) throw new Error("proof");
}
