# Architecture

**Trust label:** `educational-reference`  
**Repo:** `wax-client-side-zk-attestation-interface`

---

## Purpose

Document the intentional minimal architecture: a constant cryptographic non-claim, pure request builders, and an offline demo. The verifiable-credential patterns repo may show hashes and still say that is not zero knowledge. This repo refuses to implement a proof system at all.

---

## System overview

```
┌──────────────────────────────────────────────┐
│              Offline demo UI                  │
│         Demo.tsx · Cases.tsx · page           │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│              Non-proof core                   │
│         proof.ts → proof: false               │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│         Unsent request builders               │
│    api.ts · usecases.ts  (executed: false)    │
└──────────────────────────────────────────────┘
         │
         └── no fetch · no wallet · no sign
```

---

## Layers

### 1. Non-proof core (`src/proof.ts`)

- Single export: `attestation()`
- Always returns `{ proof: false, why: string }`
- Unit-tested permanent claim

### 2. Request builders (`src/api.ts`)

- Validated constructors for public API shapes
- Every result includes `executed: false`
- Throws on invalid names, origins, limits

### 3. Use-cases (`src/usecases.ts`)

- Educational titles paired with unsent requests
- Transactions are `null` (no attest actions built)
- Asserts `proof === false`

### 4. Demo UI

- Renders the refusal and educational framing
- Does not open sockets or sign

---

## Honesty boundaries

| Boundary | How it is held |
|----------|----------------|
| No ZK proof system | `proof: false` + docs |
| No on-chain attestation from this package | No signing / submit path |
| No network side effects in core | Builders only |
| Neighbor repos own hash/VC patterns | Explicit pointers only |

---

## Testing map

| Area | Tests |
|------|-------|
| Non-proof | `src/proof.test.ts` |
| Builders | `src/api.test.ts` |
| Use-cases | `src/usecases.test.ts` |

---

## Deep docs

- [docs/WHY-NOT-ZK.md](docs/WHY-NOT-ZK.md)
- [docs/REQUEST-BUILDERS.md](docs/REQUEST-BUILDERS.md)
- [VERIFICATION-LOG.md](VERIFICATION-LOG.md)
- [README.md](README.md)

---

## Extension rules

Do **not** “finish” this repo by adding a proving library while keeping the name and trust label unchanged. If a real proof system is required, create a differently named, differently labeled repository and state its assumptions explicitly.

---

*Pixel Journey — Architecture that refuses the wrong claim.*
