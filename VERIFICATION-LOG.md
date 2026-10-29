# Verification log

**Trust label:** educational-reference  
**Updated:** 2026-10-29 (Deep educational pass)

| Claim | Evidence | State |
| --- | --- | --- |
| proof is false | `src/proof.test.ts` | verified (unit) |
| Requests are built and not sent | `src/usecases.test.ts` and `src/api.test.ts` | verified (unit) |
| Demo renders the same functions | `src/Demo.tsx` | partial (inspection) |
| WHY-NOT-ZK documented | `docs/WHY-NOT-ZK.md` | verified (docs) |
| Request builders documented | `docs/REQUEST-BUILDERS.md` | verified (docs) |
| Architecture documented | `ARCHITECTURE.md` | verified (docs) |
| A live endpoint matches this repo | none | untested |
| Creates or verifies a ZK proof | **not claimed** | permanent non-goal |
| On-chain attestation from this package | **not claimed** | permanent non-goal |

```bash
npm test
```

## Deep-pass notes (2026-10-29)

- Added `docs/WHY-NOT-ZK.md` and `docs/REQUEST-BUILDERS.md`
- Expanded `ARCHITECTURE.md`
- Non-proof rule unchanged
