# wax-client-side-zk-attestation-interface

> **Trust Label:** `educational-reference`  
> **Verification:** [VERIFICATION-LOG.md](VERIFICATION-LOG.md)  
> **Status:** Educational non-proof reference (intentional minimal surface)  
> **Parent Catalog:** [wax-ecosystem-blueprint-catalog](https://github.com/pixel-journey/wax-ecosystem-blueprint-catalog)

**One-sentence goal:** Teach, with working code and tests, that a matching hash is **not** zero-knowledge and that this repository deliberately does **not** create, verify, or attest any zero-knowledge proof on WAX or elsewhere.

**Core rule (do not weaken):**  
`proof` is `false`. Nothing in this package is a ZK proof system. Nothing is attested on-chain by this code. A hash that matches is still not zero knowledge.

---

## 1. Overview & Goal

This blueprint exists to prevent a common educational mistake: treating a hash comparison, a signed message, or a simple attestation pattern as if it were a zero-knowledge proof.

It provides:
- A pure, unit-tested refusal function that always returns `proof: false`
- Typed, validated HTTP request *builders* for common WAX/Antelope public APIs (Hyperion-style history, AtomicAssets, chain tables) that are **built and never sent** by this package
- An offline demo surface so the educational point is visible without network side effects

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

### Inspirations
- Catalog discipline that prioritizes accurate trust labels
- Separation of “how to talk to public APIs” from “how to claim cryptographic properties”

**Related Blueprints (synergy — read carefully):**
- For hash / credential patterns that *can* be overclaimed, see `wax-verifiable-credential-patterns` (and similar). Do **not** move a proof library into this repository.
- Other educational request-builder and soft-fail patterns across the catalog.

---

## 3. Design Specifications (Pixel Journey Standards)

### 3.1 Visual & Interaction Design
- Offline-first educational page (`src/Demo.tsx`)
- Clear visual and textual statements that no proof is produced
- Case list that reinforces the educational scenarios without implying execution

### 3.2 Key Pieces
| Piece | Role |
|-------|------|
| `src/proof.ts` | Pure refusal — always `{ proof: false, why: ... }` |
| `src/proof.test.ts` | Locks the non-claim |
| `src/api.ts` | Validated, unsent WAX/Antelope request builders |
| `src/usecases.ts` | Example compositions of those builders |
| `src/api.test.ts` / `src/usecases.test.ts` | Prove requests are built and not sent |
| `src/Demo.tsx` / `src/Cases.tsx` | Offline educational surface |
| `app/page.tsx` | Next.js entry |

### 3.3 Accessibility & Inclusive Design
- Straightforward language and structure preferred over cryptographic jargon that could mislead

### 3.4 Performance & Optimization Targets
- Pure functions only for the core claim
- No network dependency for the educational truth of the package

---

## 4. Technical Architecture

### 4.1 Core Tech Stack
- TypeScript (strict) + Vitest
- Next.js App Router for the offline demo shell
- No ZK libraries, no proving systems, no remote model or circuit dependencies

### 4.2 Non-Proof Flow
```
attestation()
    → { proof: false, why: "This package does not create or verify a zero-knowledge proof..." }
```

### 4.3 Request Builder Pattern (unsent)
Every builder returns an `HttpRequest` object with:
- `method`, `url`, optional `body`
- **`executed: false`** (literal)

No function in this package calls `fetch` or a wallet. Hosts are public examples; availability is not a claim of this repository.

### 4.4 Folder Structure (current)
```
app/
  layout.tsx
  page.tsx
  globals.css
src/
  proof.ts              # The pure rules (proof is false)
  proof.test.ts
  api.ts                # Unsent request builders
  api.test.ts
  usecases.ts
  usecases.test.ts
  Demo.tsx
  Cases.tsx
.github/workflows/ci.yml
VERIFICATION-LOG.md
ARCHITECTURE.md
PUBLIC-READINESS.md
spec.yaml
LICENSE
```

### 4.5 Security & Privacy Notes
- No private keys, no signing, no on-chain submission from this package
- Request builders only construct URLs and bodies; execution is out of scope
- The educational value is the *absence* of a proof system, not the presence of one

---

## 5. Implementation Examples & Code Snippets

### The non-proof (unit-tested)
```ts
import { attestation } from "./src/proof";

const result = attestation();
// result.proof === false
// result.why explains that a matching hash is not zero knowledge
```

### Build an unsent history request
```ts
import { historyActions, HISTORY_ORIGIN } from "./src/api";

const req = historyActions(HISTORY_ORIGIN, "someaccount", "eosio.token:transfer", 20);
// req.executed === false
// No network call has occurred
```

### Build other common unsent queries
```ts
import {
  getAccount,
  currencyBalance,
  atomicAssets,
  tableRows,
  CHAIN_ORIGIN,
  ATOMIC_ORIGIN,
} from "./src/api";
```

---

## 6. Demo & Testing Strategy

```bash
npm install
npm test          # proof, api, usecases
npm run dev       # offline educational page
```

- `src/proof.test.ts` verifies the permanent non-claim
- `src/api.test.ts` and `src/usecases.test.ts` verify builders produce valid shapes with `executed: false`
- No test claims a live endpoint match or an on-chain attestation

See [VERIFICATION-LOG.md](VERIFICATION-LOG.md).

---

## 7. Roadmap & Development Phases

**Current state (intentional):**
- Minimal, correct non-proof core
- Unsent request builders shared in spirit with other educational repos
- Offline demo and verification log

**Explicit non-goals (do not “complete” into a proof system here):**
- Adding a ZK proving library
- Claiming zero-knowledge properties
- Submitting or verifying on-chain attestations from this package
- Treating a hash match as a proof

If a full ZK or credential pattern is needed, it belongs in a differently named, differently labeled repository.

---

## 8. Visual References & Expected Experience

**Key screen:**  
Offline page that states clearly that no proof is produced, shows the refusal result, and optionally lists educational use-cases that still do not execute network calls.

---

## 9. Related Blueprints & Ecosystem Fit

- Neighbor for hash / credential discussion: `wax-verifiable-credential-patterns` (and related)
- Shares the unsent-request-builder educational pattern with other catalog entries
- Reinforces Pixel Journey standards around accurate trust labels and non-overclaiming

---

## 10. License, Contributing & Credits

- MIT License
- Built to teach a negative: what this package is *not*
- Pixel Journey Design System & Standards alignment
- See [VERIFICATION-LOG.md](VERIFICATION-LOG.md) and [PUBLIC-READINESS.md](PUBLIC-READINESS.md)

**This blueprint makes the non-claim loud, testable, and hard to accidentally invert.**

*Pixel Journey — Honest interfaces and honest documentation for public blockchain data.*

---

*Last updated: 2026-10-29 — README elevated to full educational blueprint standard while preserving the permanent rule that this repository does not make a proof.*
