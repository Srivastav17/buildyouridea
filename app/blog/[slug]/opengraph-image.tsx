import { ImageResponse } from "next/og";
import { getBlogPost } from "@/lib/blog";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const heading = post ? post.title : "Builidea Blog";
  const eyebrow = post ? `Blog / ${post.tags[0]}` : "Builidea";

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
        <div style={{ display: "flex", alignItems: "flex-end", gap: 6 }}>
          <div style={{ width: 16, height: 26, borderRadius: 3, background: "#F5A623" }} />
          <div style={{ width: 16, height: 42, borderRadius: 3, background: "#F5A623" }} />
          <div style={{ width: 16, height: 62, borderRadius: 3, background: "#F5A623" }} />
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 24,
            fontWeight: 600,
            color: "#F5A623",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          {eyebrow}
        </div>

        <div
          style={{
            marginTop: 20,
            fontSize: 48,
            fontWeight: 600,
            color: "#FFFFFF",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            maxWidth: 1000,
          }}
        >
          {heading}
        </div>

        <div
          style={{
            marginTop: 32,
            fontSize: 26,
            color: "#9CA3AF",
          }}
        >
          builidea.com/blog
        </div>
      </div>
    ),
    { ...size }
  );
}
