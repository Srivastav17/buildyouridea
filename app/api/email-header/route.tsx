import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B0D10",
          backgroundImage:
            "linear-gradient(rgba(245,166,35,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(245,166,35,0.08) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 5 }}>
            <div style={{ width: 16, height: 26, borderRadius: 3, background: "#F5A623" }} />
            <div style={{ width: 16, height: 42, borderRadius: 3, background: "#F5A623" }} />
            <div style={{ width: 16, height: 62, borderRadius: 3, background: "#F5A623" }} />
          </div>
          <div style={{ fontSize: 34, fontWeight: 600, color: "#FFFFFF", letterSpacing: "-0.02em" }}>
            builidea
          </div>
        </div>
      </div>
    ),
    { width: 600, height: 180 }
  );
}
