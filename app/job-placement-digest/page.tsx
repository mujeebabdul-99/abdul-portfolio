import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Job Placement Digest",
  description: "Personal statement and job placement materials for Abdul Mujeeb Ahsan.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function JobPlacementDigestPage() {
  return (
    <main className="min-h-full px-6 py-16 sm:py-24">
      <article className="mx-auto w-full max-w-3xl">
        <header className="mb-12 border-b border-white/10 pb-10 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-zinc-500">
            Job Placement Digest
          </p>
          <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Personal Statement
          </h1>
          <p className="mt-4 text-sm text-zinc-500">Abdul Mujeeb Ahsan · Final</p>
        </header>

        <div className="space-y-6 text-base leading-relaxed text-zinc-300 sm:text-lg">
          <p>
            I&apos;m a WordPress full-stack developer with 6+ years of experience shipping
            production websites, e-commerce stores, and custom CMS solutions. My core strength
            isn&apos;t memorizing syntax — it&apos;s architecting reliable solutions and
            delivering them using modern AI tools as a force multiplier in my daily workflow.
          </p>

          <p>
            At MaltaThemes, I lead a team of 5–7 developers. My role goes beyond writing code:
            I set technical direction, review architecture before it hits production, and step
            in strategically when the team hits complex blockers. I&apos;m responsible for how
            we build — not just what gets built — including code standards, reusable patterns,
            and keeping delivery predictable across multiple active projects.
          </p>

          <p>
            Two recent examples of that approach in practice:
          </p>

          <ul className="list-disc space-y-3 pl-6 text-zinc-300">
            <li>
              A WordPress + Laravel filter integration wired to GA4 and GTM — architected so
              marketing analytics and front-end filtering stay in sync without brittle
              one-off fixes.
            </li>
            <li>
              I architected the Memorial Tribute Editor — a self-serve subscription platform
              where end users register, select a membership tier (Keepsake, Legacy, or Eternal),
              pick from prebuilt Elementor templates, and fill a dynamic front-end form with live
              preview. Using ACF custom post types and real-time JS updates, users can publish
              tributes instantly without developer involvement — transforming the client&apos;s
              manual workflow into a scalable, revenue-generating product.
            </li>
          </ul>

          <p>
            My stack centers on WordPress, WooCommerce, PHP, JavaScript, React, and Next.js.
            Alongside MaltaThemes, I&apos;ve freelanced since 2019 for remote clients — including
            international e-commerce and real-estate work — which keeps my delivery discipline
            sharp across different teams, timelines, and expectations.
          </p>

          <p>
            Mentorship is part of how I lead. I don&apos;t hand people answers — I teach
            patterns they can reuse: how to break down a problem, where to look first, and when
            to escalate. I jump in hands-on when it unblocks the team or sets a reference
            implementation the rest of the squad can follow.
          </p>

          <p>
            <strong className="font-semibold text-zinc-100">Current job target:</strong>{" "}
            Senior WordPress Developer or Tech Lead — a hybrid role where I stay hands-on
            while guiding architecture, code quality, and team direction.
          </p>

          <p>
            <strong className="font-semibold text-zinc-100">Aim:</strong> Technical Leadership
            or Product-focused Engineering Manager — roles where I drive architectural
            decisions, mentor teams on AI-augmented development workflows, and own outcomes
            while remaining deeply technical.
          </p>

          <p>
            I&apos;m based in Islamabad, Pakistan, working remotely with teams across time
            zones. I&apos;m looking for organizations that value practical delivery, strong
            technical judgment, and leaders who still build.
          </p>
        </div>

        <footer className="mt-16 border-t border-white/10 pt-10 text-center">
          <Link
            href="/"
            className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
          >
            ← Back to portfolio
          </Link>
        </footer>
      </article>
    </main>
  );
}
