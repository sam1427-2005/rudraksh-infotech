import { headers } from "next/headers";

async function getApplications() {
  try {
    const headersList = await headers();
    const host = headersList.get("host");
    const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

    const res = await fetch(`${protocol}://${host}/api/applications`, {
      cache: "no-store",
    });

    if (!res.ok) return [];

    const data = await res.json();
    return data.applications || [];
  } catch (error) {
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

  const domains = [...new Set(applications.map((app) => app.domain).filter(Boolean))];

  return (
    <main className="min-h-screen bg-[#020617] px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-4xl font-black text-cyan-400">
              Admin Dashboard
            </h1>
            <p className="mt-2 text-slate-400">
              Internship applications received by Rudraksh Infotech.
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="/api/export/excel"
              className="rounded-xl bg-green-400 px-4 py-3 font-bold text-black"
            >
              Export Excel
            </a>
            <a
              href="/api/export/pdf"
              className="rounded-xl bg-cyan-400 px-4 py-3 font-bold text-black"
            >
              Export PDF
            </a>
          </div>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl bg-white/5 p-6">
            <h2 className="text-3xl font-bold text-cyan-400">
              {totalApplications}
            </h2>
            <p className="text-slate-400">Total Applications</p>
          </div>

          <div className="rounded-2xl bg-yellow-500/10 p-6">
            <h2 className="text-3xl font-bold text-yellow-400">
              {totalPending}
            </h2>
            <p className="text-slate-400">Pending</p>
          </div>

          <div className="rounded-2xl bg-green-500/10 p-6">
            <h2 className="text-3xl font-bold text-green-400">
              {totalApproved}
            </h2>
            <p className="text-slate-400">Approved</p>
          </div>

          <div className="rounded-2xl bg-red-500/10 p-6">
            <h2 className="text-3xl font-bold text-red-400">
              {totalRejected}
            </h2>
            <p className="text-slate-400">Rejected</p>
          </div>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-3">
          <input
            id="searchInput"
            placeholder="Search by name, email, phone..."
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none"
          />

          <select
            id="domainFilter"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none"
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
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none"
          >
            <option value="">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.04]">
          <table className="w-full text-left" id="applicationsTable">
            <thead className="bg-white/10">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Phone</th>
                <th className="p-4">College</th>
                <th className="p-4">Domain</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {applications.length === 0 ? (
                <tr>
                  <td colSpan="7" className="p-6 text-center text-slate-400">
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
                    className="application-row border-t border-white/10"
                  >
                    <td className="p-4">{app.name}</td>
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

                    <td className="flex gap-2 p-4">
                      <form action={`/api/applications/${app._id}/approve`} method="POST">
                        <button className="rounded-lg bg-green-500 px-3 py-2 text-sm font-bold text-white">
                          Approve
                        </button>
                      </form>

                      <form action={`/api/applications/${app._id}/reject`} method="POST">
                        <button className="rounded-lg bg-yellow-500 px-3 py-2 text-sm font-bold text-black">
                          Reject
                        </button>
                      </form>

                      <form action={`/api/applications/${app._id}/delete`} method="POST">
                        <button className="rounded-lg bg-red-500 px-3 py-2 text-sm font-bold text-white">
                          Delete
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
                    matchesSearch && matchesDomain && matchesStatus
                      ? ""
                      : "none";
                });
              }

              searchInput.addEventListener("input", filterRows);
              domainFilter.addEventListener("change", filterRows);
              statusFilter.addEventListener("change", filterRows);
            `,
          }}
        />
      </div>
    </main>
  );
}