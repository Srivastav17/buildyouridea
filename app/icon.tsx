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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #7C5CFF 0%, #3FE0C5 100%)",
          borderRadius: 8,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 9,
              background: "rgba(255,255,255,0.16)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: 6, height: 6, borderRadius: 3, background: "white" }} />
          </div>
          <div style={{ width: 8, height: 3, background: "rgba(255,255,255,0.5)", marginTop: 2 }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
