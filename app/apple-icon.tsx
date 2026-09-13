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
          gap: 12,
          background: "#0B0D10",
          padding: "34px 34px 28px",
        }}
      >
        <div style={{ width: 26, height: 46, borderRadius: 6, background: "#F5A623" }} />
        <div style={{ width: 26, height: 74, borderRadius: 6, background: "#F5A623" }} />
        <div style={{ width: 26, height: 104, borderRadius: 6, background: "#F5A623" }} />
      </div>
    ),
    { ...size }
  );
}
