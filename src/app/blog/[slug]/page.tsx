import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs } from "@/lib/blog-posts";
import { SITE } from "@/lib/site-config";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Blog" };
  const canonical = `${SITE.url}/blog/${slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-ZA", { year: "numeric", month: "long", day: "numeric" });
}

function BlogPostingJsonLd({
  title,
  description,
  date,
  slug,
}: {
  title: string;
  description: string;
  date: string;
  slug: string;
}) {
  const url = `${SITE.url}/blog/${slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <BlogPostingJsonLd title={post.title} description={post.description} date={post.date} slug={slug} />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <header>
        <Link
          href="/blog"
          className="text-sm font-medium text-sky-700 hover:underline"
        >
          ← Blog
        </Link>
        <time
          dateTime={post.date}
          className="mt-4 block text-sm text-zinc-500 dark:text-zinc-400"
        >
          {formatDate(post.date)}
        </time>
        <h1 className="mt-2 text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          {post.description}
        </p>
      </header>

      <div className="mt-10 space-y-10">
        {post.sections.map((section, i) => (
          <section key={i}>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              {section.heading}
            </h2>
            <div className="mt-3 space-y-3 text-zinc-600 dark:text-zinc-400 [&>p]:leading-relaxed">
              {section.body.split("\n\n").map((para, j) => (
                <p key={j}>{para}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <footer className="mt-14 border-t border-zinc-200 pt-10 dark:border-zinc-700">
        <p className="text-zinc-600 dark:text-zinc-400">
          Need a quote for your move? {SITE.name} offers monitored furniture removals across Alberton and nationwide. Get a free quote or call {SITE.phone}.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/quote"
            className="inline-block rounded-full bg-sky-600 px-6 py-3 font-medium text-white hover:bg-sky-700"
          >
            Get a free quote
          </Link>
          <Link href="/blog" className="inline-block rounded-full border border-zinc-300 px-6 py-3 font-medium dark:border-zinc-600">
            More blog posts
          </Link>
        </div>
      </footer>
    </article>
    </>
  );
}
