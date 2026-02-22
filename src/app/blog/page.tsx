import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Blog",
  description: `Moving tips, suburb guides, and advice from ${SITE.name}. Alberton furniture removals, insurance, packing, and safe moving in Gauteng.`,
  alternates: { canonical: `${SITE.url}/blog` },
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-ZA", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Blog</h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        Moving tips, suburb guides, and practical advice for Alberton and Gauteng. From estate rules and insurance to checklists and avoiding scams.
      </p>

      <ul className="mt-12 space-y-8">
        {BLOG_POSTS.map((post) => (
          <li key={post.slug}>
            <article>
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-xl border border-zinc-200 p-6 transition hover:border-sky-600 hover:shadow-md dark:border-zinc-700 dark:hover:border-sky-600"
              >
                <time
                  dateTime={post.date}
                  className="text-sm text-zinc-500 dark:text-zinc-400"
                >
                  {formatDate(post.date)}
                </time>
                <h2 className="mt-2 text-xl font-semibold text-zinc-900 group-hover:text-sky-700 dark:text-white dark:group-hover:text-sky-400">
                  {post.title}
                </h2>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {post.description}
                </p>
                <span className="mt-3 inline-block font-medium text-sky-700">
                  Read more →
                </span>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
