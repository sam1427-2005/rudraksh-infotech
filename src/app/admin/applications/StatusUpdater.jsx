"use client";

import { useState } from "react";

export default function StatusUpdater({ id, currentStatus }) {
  const [status, setStatus] = useState(currentStatus || "Pending");
  const [loading, setLoading] = useState(false);

  async function updateStatus() {
    setLoading(true);

    try {
      const res = await fetch(`/api/applications/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      const data = await res.json();

      if (data.success) {
        window.location.reload();
      } else {
        alert("Status update failed");
      }
    } catch {
      alert("API error");
    }

    setLoading(false);
  }

  return (
    <div className="flex gap-2">
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="rounded-lg bg-slate-800 px-3 py-2 text-sm text-white"
      >
        <option value="Pending">Pending</option>
        <option value="Approved">Approved</option>
        <option value="Rejected">Rejected</option>
      </select>

      <button
        type="button"
        onClick={updateStatus}
        disabled={loading}
        className="rounded-lg bg-cyan-400 px-3 py-2 text-sm font-bold text-black hover:bg-cyan-300 disabled:opacity-60"
      >
        {loading ? "Saving..." : "Save"}
      </button>
    </div>
  );
}