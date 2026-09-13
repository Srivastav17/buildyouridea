import type { ContentBlock } from "@/lib/blog";

export default function BlogPostBody({ content }: { content: ContentBlock[] }) {
  return (
    <div className="space-y-6">
      {content.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2 key={i} className="pt-4 font-display text-2xl font-semibold text-white">
              {block.text}
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3 key={i} className="pt-2 font-display text-lg font-semibold text-white">
              {block.text}
            </h3>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={i} className="space-y-2.5">
              {block.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-300">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-400" />
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === "quote") {
          return (
            <blockquote
              key={i}
              className="border-l-2 border-accent-400 pl-5 text-base italic leading-relaxed text-ink-200"
            >
              {block.text}
            </blockquote>
          );
        }
        return (
          <p key={i} className="text-sm leading-relaxed text-ink-300 sm:text-base">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
