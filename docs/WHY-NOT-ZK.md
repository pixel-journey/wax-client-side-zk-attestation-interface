# Why This Repo Does Not Make a Zero-Knowledge Proof

**Trust label:** `educational-reference`  
**Repo:** `wax-client-side-zk-attestation-interface`

---

## The permanent rule

```ts
attestation() → { proof: false, why: "..." }
```

This is not a placeholder. It is the product.

A matching hash is **not** zero knowledge. A signed message is **not** automatically a ZK proof. An “attestation” string in a UI is **not** a proof system. This repository exists so those mistakes are harder to make by accident.

---

## What zero-knowledge roughly means (educational level)

At a high level, a zero-knowledge proof lets a prover convince a verifier that a statement is true **without revealing the secret witness** that makes it true, under cryptographic assumptions and a defined proof system.

That is a strong claim. It requires:

- A formal statement and language
- A proving system (circuits, arguments, etc.)
- Soundness and (for ZK) zero-knowledge properties
- Careful implementation and usually specialized libraries

This package provides **none** of those.

---

## Common confusions this repo pushes back on

| Pattern people call “proof” | Why it is not ZK (here) |
|----------------------------|-------------------------|
| Hash equality (`H(x) === digest`) | Reveals or commits to data; no ZK property claimed or implemented |
| Wallet signature over a message | Authentication / authorization, not a ZK proof system |
| “Attestation” JSON in a client | Naming is not cryptography |
| Reading an account or asset via public API | Observation, not proof |
| Merkle inclusion without a defined proof system | May be useful; still not what this repo implements |

If you need hash commitments or credential patterns, see **`wax-verifiable-credential-patterns`** (and read its non-claims carefully). Do not import a proving library into *this* repository and keep the sentence that this repo does not make a proof.

---

## What this repo *does* provide

1. **A tested refusal** — `src/proof.ts` + `src/proof.test.ts`
2. **Unsent request builders** — typed WAX/Antelope public API shapes with `executed: false`
3. **Educational use-cases** — “an account is not a proof”, “an asset is not an attestation”
4. **An offline demo** — shows `proof: false` without opening a socket or signing

---

## Classroom / review prompts

1. Why is “I hashed the credential” insufficient as a ZK claim?
2. What would you need to add (libraries, threat model, formal statement) before the word “zero-knowledge” becomes honest?
3. How does separating *request builders* from *cryptographic claims* reduce documentation risk?

---

## Related reading in the catalog

- `wax-verifiable-credential-patterns` — hash / credential patterns (still not automatically ZK)
- Other educational repos that use the same unsent-request-builder pattern

---

*Pixel Journey — Prefer a correct no to an incorrect yes.*
