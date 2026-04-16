"use client";

import Image from "next/image";
import { AnimatePresence, motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  SiWordpress,
  SiWoocommerce,
  SiShopify,
  SiWix,
  SiWebflow,
  SiSquarespace,
  SiElementor,
  SiGutenberg,
  SiYoast,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiMysql,
  SiTailwindcss,
  SiOpenai,
  SiClaude,
  SiGithubcopilot,
  SiCloudflare,
  SiVercel,
  SiNetlify,
  SiHostinger,
  SiFigma,
  SiCanva,
  SiFramer,
  SiGit,
  SiGithub,
  SiGitlab,
  SiBitbucket,
  SiPostman,
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiZapier,
  SiMake,
  SiAirtable,
  SiNotion,
} from "react-icons/si";
import { MdLaptopMac } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import {
  aboutSpecialties,
  faqs,
  navItems,
  stats,
  testimonials,
  workExperiences,
  workFilters,
} from "@/components/data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

const techRows = [
  [
    { icon: SiWordpress, color: "text-sky-400" },
    { icon: SiWoocommerce, color: "text-violet-400" },
    { icon: SiShopify, color: "text-green-500" },
    { icon: SiWix, color: "text-zinc-100" },
    { icon: SiWebflow, color: "text-blue-500" },
    { icon: SiSquarespace, color: "text-zinc-200" },
    { icon: SiElementor, color: "text-pink-500" },
    { icon: SiGutenberg, color: "text-zinc-200" },
    { icon: SiYoast, color: "text-red-400" },
    { icon: SiReact, color: "text-cyan-400" },
    { icon: SiNextdotjs, color: "text-zinc-100" },
    { icon: SiTailwindcss, color: "text-cyan-500" },
  ],
  [
    { icon: SiOpenai, color: "text-emerald-400" },
    { icon: SiClaude, color: "text-orange-300" },
    { icon: SiGithubcopilot, color: "text-zinc-100" },
    { icon: SiZapier, color: "text-pink-400" },
    { icon: SiMake, color: "text-zinc-100" },
    { icon: SiAirtable, color: "text-amber-400" },
    { icon: SiNotion, color: "text-zinc-100" },
    { icon: SiCloudflare, color: "text-orange-400" },
    { icon: SiVercel, color: "text-zinc-100" },
    { icon: SiNetlify, color: "text-cyan-400" },
    { icon: SiHostinger, color: "text-violet-500" },
  ],
  [
    { icon: SiGit, color: "text-orange-500" },
    { icon: SiGithub, color: "text-zinc-100" },
    { icon: SiGitlab, color: "text-orange-400" },
    { icon: SiBitbucket, color: "text-blue-500" },
    { icon: SiFigma, color: "text-pink-500" },
    { icon: SiCanva, color: "text-cyan-400" },
    { icon: SiFramer, color: "text-zinc-200" },
    { icon: SiJavascript, color: "text-yellow-400" },
    { icon: SiTypescript, color: "text-blue-500" },
    { icon: SiPhp, color: "text-indigo-400" },
    { icon: SiMysql, color: "text-sky-500" },
    { icon: SiPostman, color: "text-amber-400" },
    { icon: SiGoogleanalytics, color: "text-orange-400" },
    { icon: SiGooglesearchconsole, color: "text-emerald-400" },
  ],
];

const heroSlides = [
  {
    title: "UpAlerts Platform",
    subtitle: "Upwork Job Alerts Tool that helps freelancers win more projects",
    badge: "JOB ALERTS TOOL",
    image: "/next.svg",
  },
  {
    title: "Custom Gutenberg Blocks",
    subtitle: "Dynamic WordPress blocks with seamless post rendering",
    badge: "WORDPRESS PLUGIN",
    image: "/vercel.svg",
  },
  {
    title: "WooCommerce Optimization",
    subtitle: "Performance-focused eCommerce UI improvements and UX flow",
    badge: "E-COMMERCE",
    image: "/globe.svg",
  },
];

function TechRow({
  row,
  reverse = false,
  speed = 22,
}: {
  row: { icon: React.ComponentType<{ className?: string }>; color: string }[];
  reverse?: boolean;
  speed?: number;
}) {
  const doubledRow = [...row, ...row];
  const [isHovered, setIsHovered] = useState(false);
  const [loopWidth, setLoopWidth] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  useEffect(() => {
    const updateWidth = () => {
      const width = trackRef.current?.scrollWidth ?? 0;
      const singleLoopWidth = width / 2;
      setLoopWidth(singleLoopWidth);
      x.set(reverse ? -singleLoopWidth : 0);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [reverse, x]);

  useAnimationFrame((_, delta) => {
    if (isHovered || !loopWidth) return;

    const direction = reverse ? 1 : -1;
    const distance = (speed * delta * direction) / 1000;
    let next = x.get() + distance;

    if (!reverse && next <= -loopWidth) next += loopWidth;
    if (reverse && next >= 0) next -= loopWidth;

    x.set(next);
  });

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#0a0d14] to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#0a0d14] to-transparent sm:w-20" />
      <motion.div
        ref={trackRef}
        className="flex w-max gap-2.5 py-2 sm:gap-3"
        style={{ x }}
      >
        {doubledRow.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={`${item.color}-${index}`}
              whileHover={{ y: -2, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="grid h-[52px] w-[52px] place-items-center rounded-[13px] border border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:h-14 sm:w-14"
            >
              <Icon className={`h-5 w-5 ${item.color} sm:h-[22px] sm:w-[22px]`} />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

function TestimonialRow({
  items,
  reverse = false,
  speed = 16,
}: {
  items: {
    platform: string;
    name: string;
    initials: string;
    quote: string;
  }[];
  reverse?: boolean;
  speed?: number;
}) {
  const tripled = [...items, ...items, ...items];
  const [isHovered, setIsHovered] = useState(false);
  const [loopWidth, setLoopWidth] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  useEffect(() => {
    const updateWidth = () => {
      const width = trackRef.current?.scrollWidth ?? 0;
      const singleLoopWidth = width / 3;
      setLoopWidth(singleLoopWidth);
      // Start from the middle copy to hide seam boundaries.
      x.set(-singleLoopWidth);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [reverse, x]);

  useAnimationFrame((_, delta) => {
    if (isHovered || !loopWidth) return;
    const direction = reverse ? 1 : -1;
    const distance = (speed * delta * direction) / 1000;
    let next = x.get() + distance;
    if (!reverse && next <= -2 * loopWidth) next += loopWidth;
    if (reverse && next >= 0) next -= loopWidth;
    x.set(next);
  });

  return (
    <div
      className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#0a0d14] via-[#0a0d14f0] to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#0a0d14] via-[#0a0d14f0] to-transparent sm:w-28" />
      <motion.div ref={trackRef} className="flex w-max gap-3 py-2" style={{ x }}>
        {tripled.map((item, index) => (
          <article
            key={`${item.name}-${index}`}
            className="w-[300px] rounded-xl border border-white/10 bg-white/[0.04] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] will-change-transform"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs text-zinc-400">{item.platform}</p>
              <p className="text-[11px] tracking-wide text-yellow-300">★★★★★</p>
            </div>
            <p className="mt-2 text-sm leading-6 text-zinc-300">&ldquo;{item.quote}&rdquo;</p>
            <div className="mt-4 flex items-center gap-2.5">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/80 text-[10px] font-semibold text-white">
                {item.initials}
              </span>
              <span className="text-sm font-medium text-zinc-100">{item.name}</span>
            </div>
          </article>
        ))}
      </motion.div>
    </div>
  );
}

export default function PortfolioPage() {
  const [activeId, setActiveId] = useState("about");
  const [activeSlide, setActiveSlide] = useState(0);
  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3800);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { threshold: 0.35 }
      );
      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [sectionIds]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0a0d14] text-zinc-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,#1d4ed866,transparent_36%),radial-gradient(circle_at_50%_65%,#1e3a8a44,transparent_42%)]" />

      <header className="sticky top-0 z-50 bg-[#0a0d14]/75 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-8">
          <a href="#" className="text-sm font-semibold tracking-tight text-zinc-200">
            Abdul M.
          </a>
          <ul className="hidden items-center gap-6 text-xs text-zinc-400 md:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`transition ${
                    activeId === item.id
                      ? "text-zinc-100"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-xl bg-yellow-400 px-4 py-2 text-xs font-semibold text-zinc-900 transition hover:brightness-110"
          >
            Contact Me
          </a>
        </nav>
      </header>

      <main className="relative mx-auto w-full max-w-6xl space-y-20 px-5 pb-20 pt-10 sm:px-8 sm:pt-14">
        <section className="space-y-7 pt-6 text-center sm:space-y-8 md:pt-10">
          <Reveal className="mx-auto max-w-4xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-zinc-300">
              Available for New Opportunities
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
            </p>
            <h1 className="text-[2.5rem] leading-[1.05] font-medium tracking-tight text-zinc-100 sm:text-[3.4rem] md:text-[4.4rem]">
              Full-Stack Web Developer
              <span className="block bg-gradient-to-r from-blue-500 via-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                specialized in WordPress
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-zinc-300 sm:text-base">
              I build high-performing websites, custom CMS solutions, and conversion-focused user
              interfaces using WordPress, React, and Next.js.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              <a
                href="#services"
                className="rounded-xl bg-yellow-400 px-5 py-2.5 text-xs font-semibold tracking-wide text-zinc-900 transition hover:brightness-110"
              >
                View My Services
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-yellow-300/40 bg-yellow-300/5 px-5 py-2.5 text-xs font-semibold tracking-wide text-yellow-100 transition hover:bg-yellow-300/10"
              >
                Get in Touch
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="mx-auto w-full max-w-5xl space-y-5">
            <div className="relative overflow-hidden rounded-[20px] border border-white/15 bg-[#0f1118] p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_40px_100px_rgba(0,0,0,0.6)]">
              <div className="relative overflow-hidden rounded-[14px] border border-white/10 bg-[#2b2d34]">
                <div className="flex h-9 items-center justify-between border-b border-white/10 bg-[#17191f] px-3">
                  <span className="text-xs font-medium text-zinc-300">UpAlerts</span>
                  <span className="rounded-full bg-black/30 px-2 py-0.5 text-[11px] text-zinc-300">
                    {activeSlide + 1} / {heroSlides.length}
                  </span>
                </div>

                <div className="relative aspect-[16/8.6]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSlide}
                      initial={{ opacity: 0.35, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0.2, scale: 0.99 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="absolute inset-0"
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(140deg,#111827,#3f3f46)]" />
                      <div className="absolute inset-0 grid place-items-center">
                        <Image
                          src={heroSlides[activeSlide].image}
                          width={164}
                          height={34}
                          alt={heroSlides[activeSlide].title}
                          priority
                        />
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent px-4 pb-4 pt-8 text-left">
                    <span className="inline-flex rounded-sm bg-yellow-400 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-zinc-900">
                      {heroSlides[activeSlide].badge}
                    </span>
                    <p className="mt-2 text-2xl font-semibold leading-tight text-white">
                      {heroSlides[activeSlide].title}
                    </p>
                    <p className="mt-1 text-sm text-zinc-300">{heroSlides[activeSlide].subtitle}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
                    }
                    className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/55 text-lg text-zinc-200 transition hover:bg-black/75"
                    aria-label="Previous slide"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveSlide((prev) => (prev + 1) % heroSlides.length)}
                    className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/55 text-lg text-zinc-200 transition hover:bg-black/75"
                    aria-label="Next slide"
                  >
                    ›
                  </button>

                  <a
                    href="#work"
                    className="absolute right-4 top-4 rounded-lg bg-yellow-400 px-4 py-2 text-xs font-semibold text-zinc-900 transition hover:brightness-110"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="mx-auto grid w-full max-w-2xl grid-cols-2 gap-2.5 sm:grid-cols-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-center"
                >
                  <p className="text-base font-semibold text-white sm:text-lg">{item.value}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-zinc-400 sm:text-[11px]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="about" className="scroll-mt-24 space-y-9">
          <Reveal>
            <h2 className="text-center text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">
              About Me
            </h2>
          </Reveal>

          <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
            <Reveal className="relative mx-auto w-full max-w-[530px] overflow-hidden rounded-[18px] border border-white/10 bg-[#11141d]">
              <div className="aspect-[4/5] bg-[linear-gradient(140deg,#d8c7ab_0%,#ba9874_24%,#272a30_62%,#11141d_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,#ffffff30,transparent_38%),radial-gradient(circle_at_80%_72%,#00000070,transparent_40%)]" />
            </Reveal>

            <Reveal delay={0.08}>
              <h3 className="text-3xl leading-tight font-semibold text-zinc-100">
                Hi, I&apos;m Abdul Mujeeb -
                <span className="block text-yellow-400">Full-Stack Web Developer</span>
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-300">
                I&apos;m a Full-Stack Web Developer specialized in WordPress, with hands-on
                experience building custom themes, plugins, and WooCommerce stores. I also work
                across modern frontend stacks including React and Next.js for performance-focused
                interfaces.
              </p>

              <h4 className="mt-5 text-xl font-semibold text-zinc-100">I specialize in:</h4>

              <div className="mt-4 grid gap-x-6 gap-y-1.5 text-sm text-zinc-300 sm:grid-cols-2">
                {aboutSpecialties.map((item) => (
                  <p key={item} className="flex items-start gap-2.5 leading-6">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </p>
                ))}
              </div>

              <p className="mt-5 text-sm leading-7 text-zinc-300">
                Based in Islamabad, Pakistan, I focus on building scalable, responsive, and
                business-driven web experiences with strong design execution and reliable technical
                delivery. Let&apos;s build something impactful together.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-2.5">
                <a
                  href="#services"
                  className="rounded-xl bg-yellow-400 px-5 py-2.5 text-xs font-semibold tracking-wide text-zinc-900 transition hover:brightness-110"
                >
                  View Services
                </a>
                <a
                  href="#contact"
                  className="rounded-xl border border-yellow-300/35 bg-yellow-300/5 px-5 py-2.5 text-xs font-semibold tracking-wide text-yellow-100 transition hover:bg-yellow-300/10"
                >
                  Hire Now
                </a>
                <a
                  href="https://www.linkedin.com/in/abdul-mujeeb-36192b221/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 text-xs font-semibold tracking-wide text-zinc-300 transition hover:text-white"
                >
                  View LinkedIn
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="services" className="scroll-mt-24">
          <Reveal>
            <h2 className="text-center text-[2.6rem] font-semibold leading-[1.02] tracking-tight text-zinc-100 sm:text-[3.6rem]">
              Expertise Across
              <span className="block bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Modern Technologies
              </span>
              <span className="mt-0.5 inline-flex items-center gap-2 sm:gap-2.5">
                <MdLaptopMac className="h-7 w-7 text-zinc-300 sm:h-8 sm:w-8" />
                <span>& Frameworks</span>
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-[460px] text-center text-sm leading-7 text-zinc-400">
              Building scalable solutions with cutting-edge tools across web, mobile, AI, and cloud
              technologies
            </p>
          </Reveal>
          <div className="mt-9 space-y-2.5 rounded-[28px] border border-white/5 bg-white/[0.015] p-2.5 sm:mt-11 sm:space-y-3 sm:p-3">
            <TechRow row={techRows[0]} speed={18} />
            <TechRow row={techRows[1]} reverse speed={16} />
            <TechRow row={techRows[2]} speed={17} />
          </div>
        </section>

        <section id="work" className="scroll-mt-24">
          <Reveal>
            <h2 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">
              <span className="bg-gradient-to-r from-fuchsia-500 via-violet-400 to-blue-500 bg-clip-text text-transparent">
                Work Experience
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-zinc-400">
              My professional journey and the roles I&apos;ve held throughout my career
            </p>
          </Reveal>

          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {workFilters.map((filter, index) => (
              <button
                key={filter}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
                  index === 0
                    ? "bg-yellow-400 text-zinc-900"
                    : "bg-white/[0.04] text-zinc-300 hover:bg-white/[0.08]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="relative mt-8 space-y-8 pl-8 sm:pl-10">
            <div className="absolute bottom-3 left-3 top-2 w-px bg-white/10 sm:left-4" />
            {workExperiences.map((item, index) => (
              <Reveal key={item.company} delay={0.04 * index} className="relative">
                <span className="absolute -left-[30px] top-3 h-2.5 w-2.5 rounded-full bg-yellow-400 shadow-[0_0_0_4px_rgba(250,204,21,0.08)] sm:-left-[35px]" />
                <article className="rounded-2xl border border-white/8 bg-white/[0.015] p-4 sm:p-5">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-[1.7rem] leading-tight font-semibold text-zinc-100">
                        {item.company}
                      </h3>
                      <p className="text-sm text-zinc-400">{item.location}</p>
                    </div>
                    {item.cta ? (
                      <a
                        href="#"
                        className="inline-flex items-center gap-1 rounded-full border border-yellow-300/40 px-4 py-1.5 text-xs font-medium text-yellow-200 transition hover:bg-yellow-300/10"
                      >
                        {item.cta}
                        <FiArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ) : null}
                  </div>

                  <h4 className="mt-4 text-xl font-semibold">{item.role}</h4>
                  <p className="mt-1 text-sm text-zinc-400">{item.period}</p>
                  <p className="mt-3 text-sm leading-7 text-zinc-300">{item.summary}</p>

                  {item.previews ? (
                    <div className="mt-4 grid gap-2.5 sm:grid-cols-4">
                      {item.previews.map((preview, previewIndex) => (
                        <div
                          key={`${preview}-${previewIndex}`}
                          className="flex aspect-[16/10] items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-zinc-900"
                        >
                          <Image
                            src={preview}
                            alt={`${item.company} preview ${previewIndex + 1}`}
                            width={92}
                            height={22}
                          />
                        </div>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-yellow-300/25 bg-yellow-300/10 px-2.5 py-1 text-[11px] font-medium text-yellow-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="testimonials" className="scroll-mt-24 space-y-6">
          <Reveal>
            <h2 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">
              What Clients Say
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-7 text-zinc-400">
              Don&apos;t just take my word for it. Here&apos;s what my clients have to say about
              working with me.
            </p>
          </Reveal>

          <div className="space-y-2.5">
            <TestimonialRow items={testimonials.slice(0, 4)} speed={13} />
            <TestimonialRow items={testimonials.slice(4, 8)} reverse speed={12} />
            <TestimonialRow items={testimonials.slice(8, 12)} speed={11} />
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 rounded-3xl border border-white/10 bg-[#0f1320] p-6 sm:p-8">
          <Reveal>
            <h2 className="text-2xl font-semibold sm:text-3xl">Frequently Asked Questions</h2>
            <div className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10">
              {faqs.map((question) => (
                <details key={question} className="group px-5 py-4">
                  <summary className="cursor-pointer list-none text-sm font-medium text-zinc-100">
                    {question}
                  </summary>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">
                    Yes. This is placeholder content designed to preserve the visual structure and
                    interaction pattern from the reference design.
                  </p>
                </details>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <div>
                <p className="text-sm text-zinc-300">Need WordPress + React development support?</p>
                <p className="text-lg font-semibold">Let&apos;s discuss your next web project.</p>
              </div>
              <a
                href="mailto:mujeebabdul525@gmail.com"
                className="rounded-full bg-yellow-400 px-5 py-3 text-xs font-semibold text-zinc-900 transition hover:brightness-110"
              >
                mujeebabdul525@gmail.com
              </a>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-400">
              <a href="tel:+923424201891" className="rounded-full border border-white/15 px-3 py-1.5">
                +92 342 4201891
              </a>
              <a
                href="https://www.linkedin.com/in/abdul-mujeeb-36192b221/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-3 py-1.5 hover:text-zinc-200"
              >
                linkedin.com/in/abdul-mujeeb-36192b221
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-5 text-xs text-zinc-400 sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} Portfolio Replica</p>
          <p>Built with Next.js, Tailwind CSS, and Framer Motion</p>
        </div>
      </footer>
    </div>
  );
}
