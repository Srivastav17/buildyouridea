import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          gap: 2,
          background: "#0B0D10",
          borderRadius: 6,
          padding: "5px 5px 4px",
        }}
      >
        <div style={{ width: 5, height: 8, borderRadius: 1, background: "#F5A623" }} />
        <div style={{ width: 5, height: 13, borderRadius: 1, background: "#F5A623" }} />
        <div style={{ width: 5, height: 19, borderRadius: 1, background: "#F5A623" }} />
      </div>
    ),
    { ...size }
  );
}
