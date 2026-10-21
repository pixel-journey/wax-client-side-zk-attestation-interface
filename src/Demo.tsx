"use client";

import { attestation } from "./proof";

export function Demo() {
  const row = attestation();
  return (
    <main className="wrap">
      <p className="kicker">Educational reference</p>
      <h1>This repo does not make a proof</h1>
      <p className="lede">{row.why}</p>
      <p>proof: {String(row.proof)}.</p>
    </main>
  );
}
