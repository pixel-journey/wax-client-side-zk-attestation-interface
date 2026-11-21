# Security — deliberate non-proof

## Closed in tests

| Issue | Behavior |
| --- | --- |
| Any call to `attestation()` | `proof: **false**` |
| Why string | contains `not zero knowledge` |
| Request builders | `executed: false` |

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
4. Renaming `proof: false` → `true` in a fork and shipping it.  
5. Collapsing this repo into the VC lab because both say "attestation."

## Honesty limits

No network on the proof path. No wasm. No circuit.

| Sibling | Distinction |
| --- | --- |
| [VC patterns](https://github.com/pixel-journey/wax-verifiable-credential-patterns) | Salted reveal; signature `not-checked` |
| [privacy sharer](https://github.com/pixel-journey/wax-privacy-preserving-attestation-sharer) | Omission only |
| [reputation exporter](https://github.com/pixel-journey/wax-on-chain-reputation-attestation-exporter) | Typed score 0..100 |

[docs.wax.io](https://docs.wax.io/) · [WHY-NOT-ZK](docs/WHY-NOT-ZK.md).
