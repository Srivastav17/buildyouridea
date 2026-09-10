import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};

export function proxy(req: NextRequest) {
  const auth = req.headers.get("authorization");
  const user = process.env.ADMIN_USER || "admin";
  const pass = process.env.ADMIN_PASSWORD || "change-me-now";
  const expected = "Basic " + Buffer.from(`${user}:${pass}`).toString("base64");

  if (auth === expected) {
    return NextResponse.next();
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Admin"' },
  });
}
