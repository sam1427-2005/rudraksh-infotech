"use client";

import { useState } from "react";

export default function VerifyCertificate() {
  const [certificateId, setCertificateId] = useState("");
  const [result, setResult] = useState(null);

  const verify = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/certificates/verify?id=${certificateId}`);
    const data = await res.json();

    setResult(data);
  };

  return (
    <main className="min-h-screen bg-[#020617] px-6 py-16 text-white">
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 text-center">
        <h1 className="text-4xl font-black text-cyan-400">
          Certificate Verification
        </h1>
        <p className="mb-8 mt-3 text-slate-400">
          Verify Rudraksh Infotech internship certificate.
        </p>

        <form onSubmit={verify} className="flex flex-col gap-4 md:flex-row">
          <input
            value={certificateId}
            onChange={(e) => setCertificateId(e.target.value)}
            placeholder="Enter Certificate ID"
            required
            className="flex-1 rounded-xl bg-black/40 p-4 outline-none"
          />
          <button className="rounded-xl bg-cyan-400 px-8 py-4 font-bold text-black">
            Verify
          </button>
        </form>

        {result && (
          <div className="mt-8 rounded-2xl border border-green-400/30 bg-green-400/10 p-6 text-left">
            <h2 className="text-2xl font-bold text-green-300">
              Certificate {result.status}
            </h2>
            <p className="mt-3">Certificate ID: {result.certificateId}</p>
            <p>Holder: {result.holder}</p>
          </div>
        )}
      </div>
    </main>
  );
}