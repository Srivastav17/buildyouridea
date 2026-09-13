import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import BlogPostBody from "@/components/BlogPostBody";
import CtaLink from "@/components/CtaLink";
import JsonLd from "@/components/JsonLd";
import { blogPosts, getBlogPost } from "@/lib/blog";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
    },
    twitter: { title: post.title, description: post.description },
  };
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-IN", { dateStyle: "long" }).format(new Date(iso));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.publishedAt,
          dateModified: post.publishedAt,
          author: { "@type": "Organization", name: "Builidea" },
          publisher: { "@id": `${siteUrl}/#organization` },
          mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
            { "@type": "ListItem", position: 3, name: post.title, item: `${siteUrl}/blog/${post.slug}` },
          ],
        }}
      />

      <section className="relative overflow-hidden bg-grid-fade border-b border-ink-800/60">
        <div className="bg-noise absolute inset-0 opacity-30" />
        <div className="container-px relative mx-auto max-w-3xl pt-14 sm:pt-20 pb-10 sm:pb-14">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-400 transition hover:text-accent-400"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            /blog
          </Link>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-ink-500">
            <time dateTime={post.publishedAt} className="font-mono">
              {formatDate(post.publishedAt)}
            </time>
            <span>·</span>
            <span>{post.readingTime}</span>
            <span>·</span>
            <span className="text-accent-400">{post.tags.join(", ")}</span>
          </div>
          <h1 className="h2 mt-3">{post.title}</h1>
          <p className="lede">{post.description}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-px mx-auto max-w-3xl">
          <BlogPostBody content={post.content} />

          <div className="mt-14 border-t border-ink-800/60 pt-10">
            <p className="text-sm text-ink-400">Have an idea like this one?</p>
            <h2 className="mt-2 font-display text-xl font-semibold text-white">
              Tell me what you're trying to build.
            </h2>
            <div className="mt-6">
              <CtaLink href="/start" label="Tell Me Your Idea" location={`blog-${post.slug}`} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
