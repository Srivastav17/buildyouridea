import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import FinalCTA from "@/components/FinalCTA";
import Reveal from "@/components/Reveal";
import { getSortedBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on AI-native product development, scoping AI MVPs, and case studies from real products built end to end.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-IN", { dateStyle: "long" }).format(new Date(iso));
}

export default function BlogIndexPage() {
  const posts = getSortedBlogPosts();

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Notes on building AI products."
        description="Product thinking, scoping frameworks, and real case studies — no filler, no fabricated stats."
      />
      <section className="section">
        <div className="container-px mx-auto max-w-4xl">
          <div className="space-y-6">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.05}>
                <Link href={`/blog/${post.slug}`} className="card group block p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-ink-500">
                    <time dateTime={post.publishedAt} className="font-mono">
                      {formatDate(post.publishedAt)}
                    </time>
                    <span>·</span>
                    <span>{post.readingTime}</span>
                    <span>·</span>
                    <span className="text-accent-400">{post.tags.join(", ")}</span>
                  </div>
                  <h2 className="mt-3 font-display text-xl font-semibold text-white transition group-hover:text-accent-400 sm:text-2xl">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">{post.description}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
