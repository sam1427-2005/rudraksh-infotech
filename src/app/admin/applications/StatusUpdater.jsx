"use client";

import { useState } from "react";

export default function StatusUpdater({ id, currentStatus }) {
  const [status, setStatus] = useState(currentStatus || "Pending");
  const [loading, setLoading] = useState(false);

  async function updateStatus() {
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("status", status);

      const res = await fetch(`/api/applications/${id}/status`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!data.success) {
        alert(data.error || "Status update failed");
        setLoading(false);
        return;
      }

      alert("Status updated successfully");
      window.location.reload();
    } catch (error) {
      alert("API error: " + error.message);
    }

    setLoading(false);
  }

  return (
    <div className="flex gap-2">
      <select
        id={`status-${id}`}
        name={`status-${id}`}
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
        className="rounded-lg bg-cyan-400 px-3 py-2 text-sm font-bold text-black disabled:opacity-60"
      >
        {loading ? "Saving..." : "Save"}
      </button>
    </div>
  );
}