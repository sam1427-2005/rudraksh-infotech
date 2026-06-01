"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    domain: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        alert(data.error || "Enquiry submit failed");
        setLoading(false);
        return;
      }

      alert("Enquiry submitted successfully!");
      setForm({
        name: "",
        email: "",
        phone: "",
        domain: "",
        message: "",
      });
    } catch (error) {
      alert("Something went wrong: " + error.message);
    }

    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 sm:p-8"
    >
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        required
        className="mb-4 w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm outline-none focus:border-cyan-400 sm:text-base"
        placeholder="Full Name"
      />

      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        required
        className="mb-4 w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm outline-none focus:border-cyan-400 sm:text-base"
        placeholder="Email Address"
      />

      <input
        name="phone"
        value={form.phone}
        onChange={handleChange}
        required
        className="mb-4 w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm outline-none focus:border-cyan-400 sm:text-base"
        placeholder="Phone Number"
      />

      <input
        name="domain"
        value={form.domain}
        onChange={handleChange}
        required
        className="mb-4 w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm outline-none focus:border-cyan-400 sm:text-base"
        placeholder="Service / Internship Domain"
      />

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        required
        className="mb-4 w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm outline-none focus:border-cyan-400 sm:text-base"
        rows="5"
        placeholder="Message"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-2xl bg-cyan-400 py-4 font-black text-black hover:bg-cyan-300 disabled:opacity-60"
      >
        {loading ? "Submitting..." : "Submit Enquiry"}
      </button>
    </form>
  );
}