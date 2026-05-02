import type { Metadata } from "next";
import Link from "next/link";
import { ContentImageThumb } from "@/components/ContentImage";
import { PageBand } from "@/components/page/PageBand";
import { ServiceCtaBand } from "@/components/services/ServiceCtaBand";
import { getBlogCover } from "@/lib/blog-cover-images";
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
    <>
      <PageBand tone="soft" contentMax="4xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Blog</h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-700">
          Moving tips, suburb guides, and practical advice for Alberton and Gauteng. From estate rules and insurance to
          checklists and avoiding scams.
        </p>
      </PageBand>

      <PageBand tone="dark" contentMax="4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-400">From the crew</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Guides you can use on move week</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">
          Every article is written to match how we actually work—monitored trucks, clear insurance language, and suburb
          realities on the East Rand.
        </p>
      </PageBand>

      <PageBand tone="light" contentMax="4xl">
        <ul className="space-y-6 sm:space-y-8">
          {BLOG_POSTS.map((post) => {
            const cover = getBlogCover(post.slug);
            return (
              <li key={post.slug}>
                <article className="min-w-0">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition hover:border-sky-600 hover:shadow-md sm:flex-row sm:items-stretch"
                  >
                    {cover ? <ContentImageThumb src={cover.src} alt={cover.alt} /> : null}
                    <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
                      <time dateTime={post.date} className="text-sm text-zinc-700">
                        {formatDate(post.date)}
                      </time>
                      <h2 className="mt-2 text-lg font-semibold text-zinc-900 group-hover:text-sky-700 sm:text-xl">
                        {post.title}
                      </h2>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-700 sm:text-base">{post.description}</p>
                      <span className="mt-3 text-sm font-medium text-sky-700 sm:text-base">Read more →</span>
                    </div>
                  </Link>
                </article>
              </li>
            );
          })}
        </ul>
      </PageBand>

      <PageBand tone="sky" contentMax="4xl" innerClassName="py-10 sm:py-12">
        <ServiceCtaBand
          id="blog-cta"
          heading="Prefer we plan the move for you?"
          description="Get a monitored quote—local Alberton or long-distance."
          primary={{ href: "/quote", label: "Get a free quote" }}
          secondary={{ href: "/contact", label: "Contact us" }}
        />
      </PageBand>
    </>
  );
}
