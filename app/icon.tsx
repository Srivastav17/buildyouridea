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
          gap: 2.5,
          background: "linear-gradient(135deg, #7C5CFF 0%, #3FE0C5 100%)",
          borderRadius: 8,
          padding: "6px 6px 5px",
        }}
      >
        <div style={{ width: 4.5, height: 8, borderRadius: 1.5, background: "rgba(255,255,255,0.95)" }} />
        <div style={{ width: 4.5, height: 13, borderRadius: 1.5, background: "rgba(255,255,255,0.95)" }} />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: 3,
              background: "white",
              marginBottom: 2,
            }}
          />
          <div style={{ width: 4.5, height: 17, borderRadius: 1.5, background: "white" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
