import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #7C5CFF 0%, #3FE0C5 100%)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 44,
              background: "rgba(255,255,255,0.14)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div style={{ display: "flex", gap: 16 }}>
              <div style={{ width: 12, height: 12, borderRadius: 6, background: "rgba(255,255,255,0.85)" }} />
              <div style={{ width: 14, height: 14, borderRadius: 7, background: "white", marginTop: -4 }} />
              <div style={{ width: 12, height: 12, borderRadius: 6, background: "rgba(255,255,255,0.85)" }} />
            </div>
          </div>
          <div style={{ width: 34, height: 14, borderRadius: 5, background: "rgba(255,255,255,0.6)", marginTop: 8 }} />
          <div style={{ width: 28, height: 12, borderRadius: 5, background: "rgba(255,255,255,0.4)", marginTop: 4 }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
