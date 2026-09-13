import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const GEAR_PATH =
  "M44.20 32.00 L47.47 32.93 L47.00 35.90 L43.60 35.77 L41.87 39.17 L43.97 41.85 L41.85 43.97 L39.17 41.87 L35.77 43.60 L35.90 47.00 L32.93 47.47 L32.00 44.20 L28.23 43.60 L26.33 46.43 L23.66 45.06 L24.83 41.87 L22.13 39.17 L18.94 40.34 L17.57 37.67 L20.40 35.77 L19.80 32.00 L16.53 31.07 L17.00 28.10 L20.40 28.23 L22.13 24.83 L20.03 22.15 L22.15 20.03 L24.83 22.13 L28.23 20.40 L28.10 17.00 L31.07 16.53 L32.00 19.80 L35.77 20.40 L37.67 17.57 L40.34 18.94 L39.17 22.13 L41.87 24.83 L45.06 23.66 L46.43 26.33 L43.60 28.23 Z";
const INNER_HOLE = "M32 20.4 A11.6 11.6 0 1 1 31.99 20.4 Z";
const SPARK_PATH = "M32 23 L34.6 29.4 L41 32 L34.6 34.6 L32 41 L29.4 34.6 L23 32 L29.4 29.4 Z";

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
        <svg width="128" height="128" viewBox="0 0 64 64">
          <path d={`${GEAR_PATH} ${INNER_HOLE}`} fillRule="evenodd" fill="white" />
          <path d={SPARK_PATH} fill="white" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
