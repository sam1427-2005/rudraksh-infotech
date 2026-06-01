export const dynamic = "force-dynamic";
export const revalidate = 0;

import { headers } from "next/headers";

async function getApplications() {
  try {
    const headersList = await headers();
    const host = headersList.get("host");
    const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

    const res = await fetch(`${protocol}://${host}/api/applications`, {
      cache: "no-store",
      next: { revalidate: 0 },
    });

    if (!res.ok) return [];

    const data = await res.json();
    return data.applications || [];
  } catch {
    return [];
  }
}

export default async function AdminApplications() {
  const applications = await getApplications();

  const totalApplications = applications.length;
  const totalApproved = applications.filter(
    (app) => app.status === "Approved"
  ).length;
  const totalRejected = applications.filter(
    (app) => app.status === "Rejected"
  ).length;
  const totalPending = applications.filter(
    (app) => !app.status || app.status === "Pending"
  ).length;

  const domains = [
    ...new Set(applications.map((app) => app.domain).filter(Boolean)),
  ];

  return (
    <main className="min-h-screen bg-[#020617] px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold text-cyan-400">
              Rudraksh Infotech Admin
            </p>
            <h1 className="text-3xl font-black text-white sm:text-4xl">
              Internship Applications
            </h1>
            <p className="mt-2 text-sm text-slate-400 sm:text-base">
              Manage applications, status, exports and enquiries.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="/admin/enquiries"
              className="rounded-xl bg-purple-500 px-5 py-3 text-center font-bold text-white hover:bg-purple-400"
            >
              View Enquiries
            </a>

            <a
              href="/api/export/excel"
              className="rounded-xl bg-green-400 px-5 py-3 text-center font-bold text-black hover:bg-green-300"
            >
              Export Excel
            </a>

            <a
              href="/api/export/pdf"
              className="rounded-xl bg-cyan-400 px-5 py-3 text-center font-bold text-black hover:bg-cyan-300"
            >
              Export PDF
            </a>
          </div>
        </div>

        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-cyan-500/10 p-5">
            <h2 className="text-3xl font-black text-cyan-400">
              {totalApplications}
            </h2>
            <p className="text-sm text-slate-400">Total Applications</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-yellow-500/10 p-5">
            <h2 className="text-3xl font-black text-yellow-400">
              {totalPending}
            </h2>
            <p className="text-sm text-slate-400">Pending</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-green-500/10 p-5">
            <h2 className="text-3xl font-black text-green-400">
              {totalApproved}
            </h2>
            <p className="text-sm text-slate-400">Approved</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-red-500/10 p-5">
            <h2 className="text-3xl font-black text-red-400">
              {totalRejected}
            </h2>
            <p className="text-sm text-slate-400">Rejected</p>
          </div>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-3">
          <input
            id="searchInput"
            placeholder="Search by name, email, phone..."
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-cyan-400 sm:text-base"
          />

          <select
            id="domainFilter"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-cyan-400 sm:text-base"
          >
            <option value="">All Domains</option>
            {domains.map((domain) => (
              <option key={domain} value={domain}>
                {domain}
              </option>
            ))}
          </select>

          <select
            id="statusFilter"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-cyan-400 sm:text-base"
          >
            <option value="">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.04]">
          <table className="w-full min-w-[950px] text-left">
            <thead className="bg-white/10 text-sm text-slate-300">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Phone</th>
                <th className="p-4">College</th>
                <th className="p-4">Domain</th>
                <th className="p-4">Status</th>
                <th className="p-4">Update Status</th>
              </tr>
            </thead>

            <tbody>
              {applications.length === 0 ? (
                <tr>
                  <td colSpan="7" className="p-8 text-center text-slate-400">
                    No Applications Found
                  </td>
                </tr>
              ) : (
                applications.map((app) => (
                  <tr
                    key={app._id}
                    data-name={app.name || ""}
                    data-email={app.email || ""}
                    data-phone={app.phone || ""}
                    data-domain={app.domain || ""}
                    data-status={app.status || "Pending"}
                    className="application-row border-t border-white/10 text-sm"
                  >
                    <td className="p-4 font-semibold">{app.name}</td>
                    <td className="p-4">{app.email}</td>
                    <td className="p-4">{app.phone}</td>
                    <td className="p-4">{app.college}</td>
                    <td className="p-4">{app.domain}</td>

                    <td className="p-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold ${
                          app.status === "Approved"
                            ? "bg-green-500/20 text-green-300"
                            : app.status === "Rejected"
                            ? "bg-red-500/20 text-red-300"
                            : "bg-yellow-500/20 text-yellow-300"
                        }`}
                      >
                        {app.status || "Pending"}
                      </span>
                    </td>

                    <td className="p-4">
                      <form
                        action={`/admin/applications/${app._id}/status`}
                        method="POST"
                        className="flex gap-2"
                      >
                        <select
                          name="status"
                          defaultValue={app.status || "Pending"}
                          className="rounded-lg bg-slate-800 px-3 py-2 text-sm text-white"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Approved">Approved</option>
                          <option value="Rejected">Rejected</option>
                        </select>

                        <button
                          type="submit"
                          className="rounded-lg bg-cyan-400 px-3 py-2 text-sm font-bold text-black hover:bg-cyan-300"
                        >
                          Save
                        </button>
                      </form>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              const searchInput = document.getElementById("searchInput");
              const domainFilter = document.getElementById("domainFilter");
              const statusFilter = document.getElementById("statusFilter");
              const rows = document.querySelectorAll(".application-row");

              function filterRows() {
                const search = searchInput.value.toLowerCase();
                const domain = domainFilter.value;
                const status = statusFilter.value;

                rows.forEach((row) => {
                  const name = row.dataset.name.toLowerCase();
                  const email = row.dataset.email.toLowerCase();
                  const phone = row.dataset.phone.toLowerCase();
                  const rowDomain = row.dataset.domain;
                  const rowStatus = row.dataset.status;

                  const matchesSearch =
                    name.includes(search) ||
                    email.includes(search) ||
                    phone.includes(search);

                  const matchesDomain = !domain || rowDomain === domain;
                  const matchesStatus = !status || rowStatus === status;

                  row.style.display =
                    matchesSearch && matchesDomain && matchesStatus ? "" : "none";
                });
              }

              searchInput?.addEventListener("input", filterRows);
              domainFilter?.addEventListener("change", filterRows);
              statusFilter?.addEventListener("change", filterRows);
            `,
          }}
        />
      </div>
    </main>
  );
}