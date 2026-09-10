import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { LEAD_STATUSES } from "@/lib/leadOptions";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const status = body.status;
  if (typeof status !== "string" || !LEAD_STATUSES.includes(status as (typeof LEAD_STATUSES)[number])) {
    return NextResponse.json({ error: "Invalid status." }, { status: 400 });
  }

  try {
    const lead = await prisma.lead.update({
      where: { id },
      data: { status: status as (typeof LEAD_STATUSES)[number] },
    });
    return NextResponse.json({ ok: true, lead });
  } catch (err) {
    console.error("[api/admin/leads] failed to update lead:", err);
    return NextResponse.json({ error: "Lead not found or update failed." }, { status: 404 });
  }
}
