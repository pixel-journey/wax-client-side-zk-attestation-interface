# Education — proof is false on purpose

> **Rung:** `npm test` passes. `attestation().proof` is always `false`. Nothing is attested on-chain.  
> **The test is the rule.** Deep notes: [docs/WHY-NOT-ZK.md](docs/WHY-NOT-ZK.md) · builders: [docs/REQUEST-BUILDERS.md](docs/REQUEST-BUILDERS.md).

Official context: [docs.wax.io](https://docs.wax.io/). Hash disclosure is [wax-verifiable-credential-patterns](https://github.com/pixel-journey/wax-verifiable-credential-patterns). Field omission is [wax-privacy-preserving-attestation-sharer](https://github.com/pixel-journey/wax-privacy-preserving-attestation-sharer).

## Learning outcomes

| Level | After this file |
| --- | --- |
| Beginner | Show that `proof` is false and the why-string names zero knowledge |
| Intermediate | Separate hash match, omission, and ZK |
| Masterclass | Keep unsent request builders from becoming a fake prover |

---

## Beginner — one scene

```ts
attestation()
// { proof: false, why: "... A matching hash is not zero knowledge." }
```

There is no input. There is no circuit. The function refuses every time.

```bash
npm test
```

---

## Intermediate — three different privacy words

| Pattern | Lab | What the verifier learns |
| --- | --- | --- |
| Omission | privacy sharer | Only the kept plaintext fields |
| Salted hash + reveal | VC patterns | The revealed claim and its salt |
| Zero knowledge | **not this package** | A statement without the witness — **not implemented here** |

A matching hash is still not ZK: the party who recomputes the hash already has the preimage, or is only checking equality of two digests they both hold.

---

## Masterclass

### Common mistakes

1. Renaming `proof: false` to `proof: true` in a fork and shipping it as ZK.  
2. Treating an unsent `get_info` builder as an attestation.  
3. Collapsing this repo into the VC lab because both say "attestation."  
4. Claiming on-chain verification from a pure client refusal.

### Exercises

1. What is `attestation().proof`? (`false`.)  
2. Does a matching SHA-256 make this ZK? (No.)  
3. Are request builders executed? (`executed: false`.)

---

## What this course will not teach

- Circuits, snarks, or starx
- On-chain attestation actions
- How to turn a hash match into a proof system
