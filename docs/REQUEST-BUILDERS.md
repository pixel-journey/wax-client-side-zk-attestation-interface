# Unsent Request Builders

**Trust label:** `educational-reference`  
**Repo:** `wax-client-side-zk-attestation-interface`

---

## Purpose

This package includes **typed constructors** for common WAX/Antelope public API requests. They validate inputs and return an `HttpRequest` object. They do **not** call `fetch`, a wallet, or any host.

```ts
type HttpRequest = {
  method: "GET" | "POST";
  url: string;
  body?: Record<string, unknown>;
  executed: false; // literal
};
```

`executed: false` is part of the type’s educational contract.

---

## Why builders without execution?

1. **Teach shapes safely** — Learners see real URL and body structure without side effects.
2. **Share patterns** — Several educational catalog repos use the same style.
3. **Avoid false “integration complete” claims** — Building a URL is not the same as a production integration.
4. **Compose later** — Another layer may choose to send; this layer does not.

---

## Origins (examples only)

| Constant | Example host |
|----------|----------------|
| `CHAIN_ORIGIN` | `https://wax.greymass.com` |
| `HISTORY_ORIGIN` | `https://wax.eosusa.io` |
| `ATOMIC_ORIGIN` | `https://wax.api.atomicassets.io` |

Availability of these hosts is **not** a claim of this repository.

---

## Validation rules (summary)

- **Antelope names** — Match a conservative name regex (no `..`, length and charset limits).
- **Origins** — Must be `https://` host with no path.
- **Transaction ids** — 64 hex characters when required.
- **Limits** — Integer ranges enforced (e.g. history limit 1–100).
- **Symbols** — Token symbols constrained to uppercase letter patterns where applicable.

Invalid input → throw. Valid input → inert `HttpRequest`.

---

## Builder catalog

| Function | Intent |
|----------|--------|
| `historyActions` | Hyperion-style filtered action history |
| `historyTransaction` | Single transaction by id |
| `currencyBalance` | `get_currency_balance` |
| `getAccount` | `get_account` |
| `tableRows` | `get_table_rows` |
| `atomicSales` | AtomicMarket sales listing |
| `atomicAssets` | AtomicAssets by owner/collection |
| `active` | Attach `active` authorization shape to an action (still not sent) |

See `src/api.ts` for exact signatures and error messages.

---

## Worked examples

### Account lookup (unsent)

```ts
import { getAccount, CHAIN_ORIGIN } from "../src/api";

const req = getAccount(CHAIN_ORIGIN, "alice");
// req.method === "POST"
// req.executed === false
// req.body === { account_name: "alice" }
```

### History filter (unsent)

```ts
import { historyActions, HISTORY_ORIGIN } from "../src/api";

const req = historyActions(
  HISTORY_ORIGIN,
  "alice",
  "eosio.token:transfer",
  20
);
```

### Composition in use-cases

`src/usecases.ts` pairs educational titles with unsent requests and **null** transactions — reinforcing that no attest action is built and no proof is produced.

---

## What not to do

- Do not remove `executed: false` to “make it real” inside this package without a new trust discussion
- Do not claim host uptime or response schema stability from this repo
- Do not treat a successful builder call as an on-chain attestation

---

## Tests

- `src/api.test.ts` — builders produce valid shapes
- `src/usecases.test.ts` — use-cases stay unsent and consistent with the non-proof rule

---

*Pixel Journey — Construct carefully; execute deliberately elsewhere.*
