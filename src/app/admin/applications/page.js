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

  return (
    <main className="min-h-screen bg-[#020617] px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-black text-cyan-400">
          Admin Dashboard
        </h1>

        <p className="mb-8 mt-2 text-slate-400">
          Internship applications received by Rudraksh Infotech.
        </p>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-white/5 p-6">
            <h2 className="text-3xl font-bold text-cyan-400">
              {applications.length}
            </h2>
            <p className="text-slate-400">Total Applications</p>
          </div>

          <div className="rounded-2xl bg-white/5 p-6">
            <h2 className="text-3xl font-bold text-yellow-400">
              Pending
            </h2>
            <p className="text-slate-400">Application Status</p>
          </div>

          <div className="rounded-2xl bg-white/5 p-6">
            <h2 className="text-3xl font-bold text-green-400">
              Live
            </h2>
            <p className="text-slate-400">System Status</p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.04]">
          <table className="w-full text-left">
            <thead className="bg-white/10">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Phone</th>
                <th className="p-4">College</th>
                <th className="p-4">Domain</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {applications.length === 0 ? (
                <tr>
                  <td colSpan="6" className="p-6 text-center text-slate-400">
                    No Applications Found
                  </td>
                </tr>
              ) : (
                applications.map((app) => (
                  <tr
                    key={app._id}
                    className="border-t border-white/10"
                  >
                    <td className="p-4">{app.name}</td>
                    <td className="p-4">{app.email}</td>
                    <td className="p-4">{app.phone}</td>
                    <td className="p-4">{app.college}</td>
                    <td className="p-4">{app.domain}</td>
                    <td className="p-4 text-yellow-300">
                      {app.status || "Pending"}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}