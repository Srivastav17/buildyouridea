import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Builidea — From idea to working product";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0B0D10",
          backgroundImage:
            "linear-gradient(rgba(245,166,35,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(245,166,35,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 6 }}>
            <div style={{ width: 20, height: 32, borderRadius: 3, background: "#F5A623" }} />
            <div style={{ width: 20, height: 52, borderRadius: 3, background: "#F5A623" }} />
            <div style={{ width: 20, height: 78, borderRadius: 3, background: "#F5A623" }} />
          </div>
          <div
            style={{
              fontSize: 40,
              fontWeight: 600,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
            }}
          >
            builidea
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: 56,
            fontSize: 60,
            fontWeight: 600,
            color: "#FFFFFF",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            maxWidth: 960,
          }}
        >
          <span>From idea to&nbsp;</span>
          <span style={{ color: "#F5A623" }}>working product</span>
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 28,
            color: "#9CA3AF",
            maxWidth: 880,
          }}
        >
          No product team to hire. No engineers to find. Just a working prototype.
        </div>
      </div>
    ),
    { ...size }
  );
}
