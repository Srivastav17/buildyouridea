import { prisma } from "@/lib/prisma";
import LeadStatusSelect from "@/components/admin/LeadStatusSelect";

export const dynamic = "force-dynamic";

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export default async function AdminLeadsPage() {
  const leads = await prisma.lead.findMany({ orderBy: { createdAt: "desc" } });

  const counts = leads.reduce<Record<string, number>>((acc, lead) => {
    acc[lead.status] = (acc[lead.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-ink-950 font-sans text-ink-100">
      <div className="container-px mx-auto max-w-7xl py-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="font-display text-2xl font-semibold text-white">Leads</h1>
            <p className="mt-1 text-sm text-ink-400">{leads.length} total submissions</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {Object.entries(counts).map(([status, count]) => (
              <span
                key={status}
                className="rounded-full border border-ink-700 bg-ink-900 px-3 py-1 text-xs text-ink-300"
              >
                {status}: {count}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-ink-800">
          <table className="w-full min-w-[1000px] text-left text-sm">
            <thead className="bg-ink-900 text-xs uppercase tracking-wider text-ink-400">
              <tr>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Contact</th>
                <th className="px-4 py-3">Idea</th>
                <th className="px-4 py-3">Goal</th>
                <th className="px-4 py-3">Stage</th>
                <th className="px-4 py-3">Budget</th>
                <th className="px-4 py-3">Source</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-800">
              {leads.map((lead) => (
                <tr key={lead.id} className="align-top hover:bg-ink-900/50">
                  <td className="whitespace-nowrap px-4 py-3 text-ink-400">
                    {formatDate(lead.createdAt)}
                  </td>
                  <td className="px-4 py-3 font-medium text-white">{lead.name}</td>
                  <td className="px-4 py-3 text-ink-300">
                    <div>{lead.email}</div>
                    <div className="text-ink-500">{lead.phone}</div>
                  </td>
                  <td className="max-w-xs px-4 py-3 text-ink-300">
                    <p className="line-clamp-3">{lead.idea}</p>
                  </td>
                  <td className="px-4 py-3 text-ink-300">{lead.goal}</td>
                  <td className="px-4 py-3 text-ink-300">{lead.stage}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-ink-300">{lead.budget}</td>
                  <td className="px-4 py-3 text-ink-400">
                    {lead.utmSource ? (
                      <div>
                        <div>{lead.utmSource}</div>
                        <div className="text-xs text-ink-600">{lead.utmCampaign}</div>
                      </div>
                    ) : (
                      "direct"
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <LeadStatusSelect id={lead.id} status={lead.status} />
                  </td>
                </tr>
              ))}
              {leads.length === 0 && (
                <tr>
                  <td colSpan={9} className="px-4 py-10 text-center text-ink-500">
                    No leads yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
