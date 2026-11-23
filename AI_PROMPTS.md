# AI handoff — ZK non-proof

## Non-negotiables

1. `attestation().proof === false` always.
2. The why-string states a matching hash is **not** zero knowledge.
3. Request builders stay `executed: false`.
4. **Not** a circuit, snark, or on-chain attestation.
5. Privacy triangle: omission is the sharer; salted hash is the VC lab; **this lab refuses ZK**.

## Prompt seeds

- "Does attestation().proof ever become true?"
- "A student equates SHA-256 match with ZK. Correct them using this lab."
- "Keep builders unsent."

## Do not

- Add a circuit "upgrade" inside this repo.
- Claim an on-chain proof.
