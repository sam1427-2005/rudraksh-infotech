"use client";

import { useState } from "react";

export default function ApplyPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    branch: "",
    domain: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          phone: "",
          college: "",
          branch: "",
          domain: "",
          message: "",
        });
      } else {
        setStatus(data.error || data.message || "Application submission failed");
      }
    } catch (err) {
      setStatus(err.message || "API connection error");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-4 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-black text-cyan-400">
            Internship Application
          </h1>
          <p className="mt-3 text-slate-400">
            Rudraksh Infotech Software House
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <form onSubmit={submitForm} className="grid gap-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="rounded-xl border border-white/10 bg-black/30 p-4 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="rounded-xl border border-white/10 bg-black/30 p-4 outline-none"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="rounded-xl border border-white/10 bg-black/30 p-4 outline-none"
            />

            <input
              type="text"
              name="college"
              placeholder="College Name"
              value={form.college}
              onChange={handleChange}
              className="rounded-xl border border-white/10 bg-black/30 p-4 outline-none"
            />

            <input
              type="text"
              name="branch"
              placeholder="Branch"
              value={form.branch}
              onChange={handleChange}
              className="rounded-xl border border-white/10 bg-black/30 p-4 outline-none"
            />

            <select
              name="domain"
              value={form.domain}
              onChange={handleChange}
              required
              className="rounded-xl border border-white/10 bg-black/30 p-4 outline-none"
            >
              <option value="">Select Internship Domain</option>
              <option value="Web Development">Web Development</option>
              <option value="Python Programming">Python Programming</option>
              <option value="Flutter Development">Flutter Development</option>
              <option value="PHP & MySQL">PHP & MySQL</option>
              <option value="AI & ML">AI & ML</option>
              <option value="UI/UX Design">UI/UX Design</option>
            </select>

            <textarea
              name="message"
              rows="5"
              placeholder="Why do you want to join this internship?"
              value={form.message}
              onChange={handleChange}
              className="rounded-xl border border-white/10 bg-black/30 p-4 outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-cyan-400 py-4 text-lg font-bold text-black transition hover:bg-cyan-300 disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Apply Now"}
            </button>
          </form>

          {status === "success" && (
            <div className="mt-6 rounded-xl bg-green-500/20 p-4 text-green-300">
              Application submitted successfully ✅
            </div>
          )}

          {status !== "" && status !== "success" && (
            <div className="mt-6 rounded-xl bg-red-500/20 p-4 text-red-300">
              {status}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}