# Sources

| Source | Use |
| --- | --- |
| [docs.wax.io](https://docs.wax.io/) | WAX context |
| [docs/WHY-NOT-ZK.md](docs/WHY-NOT-ZK.md) | Hash vs ZK |
| [VC patterns](https://github.com/pixel-journey/wax-verifiable-credential-patterns) | Salted disclosure (not ZK) |
| [privacy sharer](https://github.com/pixel-journey/wax-privacy-preserving-attestation-sharer) | Field omission (not ZK) |

## Product facts locked by tests

- `attestation().proof === false` always.
- Why-string states a matching hash is **not** zero knowledge.
- Request builders remain `executed: false`.
