# wax-client-side-zk-attestation-interface

> **Trust Label:** `educational-reference`  
> **Verification:** [VERIFICATION-LOG.md](VERIFICATION-LOG.md)  
> **Status:** Educational non-proof reference + Deep documentation pass  
> **Parent Catalog:** [wax-ecosystem-blueprint-catalog](https://github.com/pixel-journey/wax-ecosystem-blueprint-catalog)

**One-sentence goal:** Teach, with working code and tests, that a matching hash is **not** zero-knowledge and that this repository deliberately does **not** create, verify, or attest any zero-knowledge proof on WAX or elsewhere.

**Core rule (do not weaken):**  
`proof` is `false`. Nothing in this package is a ZK proof system. Nothing is attested on-chain by this code. A hash that matches is still not zero knowledge.

---

## Deep educational documentation

| Guide | What it teaches |
|-------|-----------------|
| [docs/WHY-NOT-ZK.md](docs/WHY-NOT-ZK.md) | Hash vs ZK, common confusions, catalog boundaries, review prompts |
| [docs/REQUEST-BUILDERS.md](docs/REQUEST-BUILDERS.md) | Unsent builders, validation rules, worked examples, what not to do |
| [ARCHITECTURE.md](ARCHITECTURE.md) | Layers, honesty boundaries, extension rules |

---

## 1. Overview & Goal

This blueprint exists to prevent a common educational mistake: treating a hash comparison, a signed message, or a simple attestation pattern as if it were a zero-knowledge proof.

It provides:
- A pure, unit-tested refusal function that always returns `proof: false`
- Typed, validated HTTP request *builders* for common WAX/Antelope public APIs that are **built and never sent** by this package
- An offline demo surface so the educational point is visible without network side effects
- Deep documentation that states what ZK is *not* in this context

**Why it matters for WAX / Antelope:**
- Developers frequently encounter “attestation”, “proof”, and “credential” language.
- Confusing a hash match with ZK leads to incorrect security claims in tooling and documentation.
- A clear, testable non-implementation is more valuable than a half-finished proof library that overclaims.

**Target users:**
- Blueprint authors and AI agents learning catalog honesty rules
- Developers evaluating whether they actually need ZK vs. simpler attestation patterns
- Anyone reading neighboring repos that *do* discuss verifiable credentials or hash patterns

**Success metrics for this educational repo:**
- Unit tests prove `attestation().proof === false`
- Request builders are pure (no `fetch`, no wallet, `executed: false`)
- Documentation never claims a live proof or on-chain attestation from this package

---

## 2. Concepts & Inspiration

### Core Concepts
- **Non-proof** — Explicit, tested refusal to implement a ZK system here.
- **Unsent request builders** — Typed construction of public API requests that remain inert until another layer chooses to execute them.
- **Educational boundary** — Neighboring ideas (hash patterns, verifiable credentials) live in other repos; this one refuses to absorb them.
- **Soft honesty** — Prefer a small, correct non-claim over an ambitious but incorrect “ZK” label.

### User Pain Points Addressed
- “Is this hash match a zero-knowledge proof?” → No.
- “Can I safely say this client-side code attests something on-chain?” → Not with this package.
- “Where do the actual request shapes for WAX public APIs live in an educational form?” → Here, as builders only.

**Related Blueprints (synergy — read carefully):**
- For hash / credential patterns that *can* be overclaimed, see `wax-verifiable-credential-patterns`. Do **not** move a proof library into this repository.

---

## 3. Design Specifications (Pixel Journey Standards)

### 3.1 Visual & Interaction Design
- Offline-first educational page (`src/Demo.tsx`)
- Clear visual and textual statements that no proof is produced
- Case list that reinforces educational scenarios without implying execution

### 3.2 Key Pieces
| Piece | Role |
|-------|------|
| `src/proof.ts` | Pure refusal — always `{ proof: false, why: ... }` |
| `src/proof.test.ts` | Locks the non-claim |
| `src/api.ts` | Validated, unsent WAX/Antelope request builders |
| `src/usecases.ts` | Example compositions |
| `src/Demo.tsx` / `src/Cases.tsx` | Offline educational surface |
| `docs/*` | Deep teaching guides |

### 3.3 Accessibility & Inclusive Design
- Straightforward language preferred over cryptographic jargon that could mislead

### 3.4 Performance & Optimization Targets
- Pure functions only for the core claim
- No network dependency for the educational truth of the package

---

## 4. Technical Architecture

See **[ARCHITECTURE.md](ARCHITECTURE.md)** for the full layer diagram and boundaries.

### Non-Proof Flow
```
attestation()
    → { proof: false, why: "This package does not create or verify a zero-knowledge proof..." }
```

### Request Builder Pattern (unsent)
Every builder returns `{ method, url, body?, executed: false }`. No `fetch`, no wallet.

### Folder Structure
```
app/
src/
  proof.ts · proof.test.ts
  api.ts · api.test.ts
  usecases.ts · usecases.test.ts
  Demo.tsx · Cases.tsx
docs/
  WHY-NOT-ZK.md
  REQUEST-BUILDERS.md
ARCHITECTURE.md
VERIFICATION-LOG.md
PUBLIC-READINESS.md
spec.yaml
LICENSE
```

---

## 5. Implementation Examples & Code Snippets

### The non-proof (unit-tested)
```ts
import { attestation } from "./src/proof";

const result = attestation();
// result.proof === false
```

### Build an unsent history request
```ts
import { historyActions, HISTORY_ORIGIN } from "./src/api";

const req = historyActions(HISTORY_ORIGIN, "someaccount", "eosio.token:transfer", 20);
// req.executed === false
```

More examples: [docs/REQUEST-BUILDERS.md](docs/REQUEST-BUILDERS.md).

---

## 6. Demo & Testing Strategy

```bash
npm install
npm test
npm run dev
```

See [VERIFICATION-LOG.md](VERIFICATION-LOG.md).

---

## 7. Roadmap & Development Phases

**Current state (intentional):**
- Minimal, correct non-proof core
- Unsent request builders
- Offline demo
- Deep educational documentation

**Explicit non-goals (do not “complete” into a proof system here):**
- Adding a ZK proving library
- Claiming zero-knowledge properties
- Submitting or verifying on-chain attestations from this package
- Treating a hash match as a proof

---

## 8. Visual References & Expected Experience

Offline page that states clearly that no proof is produced, shows the refusal result, and lists educational use-cases that do not execute network calls.

---

## 9. Related Blueprints & Ecosystem Fit

- Neighbor: `wax-verifiable-credential-patterns`
- Shares unsent-request-builder pattern with other catalog educational repos

---

## 10. License, Contributing & Credits

- MIT License
- Built to teach a negative: what this package is *not*
- Pixel Journey Design System & Standards alignment

**This blueprint makes the non-claim loud, testable, and hard to accidentally invert.**

*Pixel Journey — Honest interfaces and honest documentation for public blockchain data.*

---

*Last updated: 2026-10-29 — Deep educational pass: WHY-NOT-ZK, REQUEST-BUILDERS, expanded architecture, verification log.*
