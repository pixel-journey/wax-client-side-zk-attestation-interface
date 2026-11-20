# Security — deliberate non-proof

## Closed in tests

| Issue | Behavior |
| --- | --- |
| Any call to `attestation()` | `proof: false` |
| Why string | contains `not zero knowledge` |

## Not closed (production)

| Concern | Guidance |
| --- | --- |
| Real ZK | Use a reviewed proving stack; do not extend this file into one |
| Request builders | Unsent only; host must decide whether to fetch |
| Hash / VC | Neighbor repos; still not ZK |

## Attack angles

1. UI copy that says "ZK verified" while calling this function.  
2. Shipping builders as if they submitted an attestation.  
3. Equating hash equality with knowledge soundness.

## Honesty limits

No network on the proof path. No wasm. [docs.wax.io](https://docs.wax.io/) · [WHY-NOT-ZK](docs/WHY-NOT-ZK.md).
