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
          alignItems: "flex-end",
          justifyContent: "center",
          gap: 14,
          background: "linear-gradient(135deg, #7C5CFF 0%, #3FE0C5 100%)",
          padding: "34px 34px 28px",
        }}
      >
        <div style={{ width: 26, height: 46, borderRadius: 8, background: "rgba(255,255,255,0.95)" }} />
        <div style={{ width: 26, height: 74, borderRadius: 8, background: "rgba(255,255,255,0.95)" }} />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ width: 34, height: 34, borderRadius: 17, background: "white", marginBottom: 10 }} />
          <div style={{ width: 26, height: 96, borderRadius: 8, background: "white" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
