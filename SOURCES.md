# Sources

| Source | Use |
| --- | --- |
| [docs.wax.io](https://docs.wax.io/) | WAX context |
| [docs/WHY-NOT-ZK.md](docs/WHY-NOT-ZK.md) | Hash vs ZK |
| [VC patterns](https://github.com/pixel-journey/wax-verifiable-credential-patterns) | Salted disclosure (not ZK) |
| [privacy sharer](https://github.com/pixel-journey/wax-privacy-preserving-attestation-sharer) | Field omission (not ZK) |
| [reputation exporter](https://github.com/pixel-journey/wax-on-chain-reputation-attestation-exporter) | Typed score only |

## Product facts locked by tests

- `attestation().proof === false` always.
- Why-string states a matching hash is **not** zero knowledge.
- Request builders remain `executed: false`.
- **Not** a circuit, snark, or on-chain attestation.

## Privacy triangle

| Pattern | Lab |
| --- | --- |
| Omission | privacy sharer |
| Salted hash + reveal | VC patterns |
| Zero knowledge | **this** — deliberately refuses |
