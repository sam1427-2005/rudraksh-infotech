import { headers } from "next/headers";

async function getEnquiries() {
  try {
    const headersList = await headers();
    const host = headersList.get("host");
    const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

    const res = await fetch(`${protocol}://${host}/api/contact`, {
      cache: "no-store",
    });

    if (!res.ok) return [];

    const data = await res.json();
    return data.enquiries || [];
  } catch {
    return [];
  }
}

export default async function AdminEnquiries() {
  const enquiries = await getEnquiries();

  return (
    <main className="min-h-screen bg-[#020617] px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-black text-cyan-400">
          Contact Enquiries
        </h1>
        <p className="mb-8 mt-2 text-slate-400">
          Project and internship enquiries received from website contact form.
        </p>

        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.04]">
          <table className="w-full min-w-[900px] text-left">
            <thead className="bg-white/10">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Phone</th>
                <th className="p-4">Domain</th>
                <th className="p-4">Message</th>
              </tr>
            </thead>

            <tbody>
              {enquiries.length === 0 ? (
                <tr>
                  <td colSpan="5" className="p-6 text-center text-slate-400">
                    No Enquiries Found
                  </td>
                </tr>
              ) : (
                enquiries.map((item) => (
                  <tr key={item._id} className="border-t border-white/10">
                    <td className="p-4">{item.name}</td>
                    <td className="p-4">{item.email}</td>
                    <td className="p-4">{item.phone}</td>
                    <td className="p-4">{item.domain}</td>
                    <td className="p-4">{item.message}</td>
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