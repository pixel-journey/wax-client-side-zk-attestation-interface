# This repo does not make a proof

**Trust label:** `educational-reference`  
**Catalog:** [wax-ecosystem-blueprint-catalog](https://github.com/pixel-journey/wax-ecosystem-blueprint-catalog)

proof is false. A matching hash is not zero knowledge, and that hash lives in another repo. Nothing is attested on chain.

This repo was empty. It now contains one rule and two unsent queries.

## What is actually in the repo

| Piece | Role |
| --- | --- |
| `src/proof.ts` | The pure rules |
| `src/proof.test.ts` | The claims in the verification log |
| `src/usecases.ts` | HTTP requests, built and not sent |
| `src/api.ts` | The same unsent WAX query builders as the other educational repos |
| `src/Demo.tsx` | Offline page |

`npm test` runs the rules. `npm run dev` opens the page.

## Where the neighboring idea lives

If you want the hash that can be overclaimed, read `wax-verifiable-credential-patterns`. Do not add a proof library here and keep the sentence that this repo does not make one.

## Queries

`executed` is false. This repo did not call any host. No transaction is invented.
