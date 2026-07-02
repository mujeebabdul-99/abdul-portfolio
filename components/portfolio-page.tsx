"use client";

import Image from "next/image";
import { AnimatePresence, motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  SiContentful,
  SiSanity,
  SiStrapi,
  SiGhost,
  SiBigcommerce,
  SiDrupal,
  SiJoomla,
  SiHubspot,
  SiSass,
  SiBootstrap,
  SiHtml5,
  SiNodedotjs,
  SiVuedotjs,
  SiMongodb,
} from "react-icons/si";
import { MdLaptopMac } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import { FiMoon, FiSun } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { FiMenu, FiX } from "react-icons/fi";
import {
  aboutSpecialties,
  faqs,
  navItems,
  stats,
  testimonials,
  workExperiences,
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
    { icon: SiContentful, color: "text-blue-400" },
    { icon: SiSanity, color: "text-red-500" },
    { icon: SiStrapi, color: "text-indigo-400" },
    { icon: SiGhost, color: "text-zinc-300" },
    { icon: SiBigcommerce, color: "text-blue-500" },
    { icon: SiDrupal, color: "text-sky-600" },
    { icon: SiJoomla, color: "text-orange-400" },
    { icon: SiHubspot, color: "text-orange-500" },
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
    { icon: SiHtml5, color: "text-orange-500" },
    { icon: SiSass, color: "text-pink-400" },
    { icon: SiBootstrap, color: "text-violet-500" },
    { icon: SiJavascript, color: "text-yellow-400" },
    { icon: SiTypescript, color: "text-blue-500" },
    { icon: SiVuedotjs, color: "text-green-500" },
    { icon: SiNodedotjs, color: "text-green-400" },
    { icon: SiPhp, color: "text-indigo-400" },
    { icon: SiMysql, color: "text-sky-500" },
    { icon: SiMongodb, color: "text-green-500" },
    { icon: SiPostman, color: "text-amber-400" },
    { icon: SiGoogleanalytics, color: "text-orange-400" },
    { icon: SiGooglesearchconsole, color: "text-emerald-400" },
  ],
];

const heroSlides = [
  {
    title: "Accessible healthcare platform connecting digital health providers and APAC users.",
    subtitle: "Peach Health Asia",
    badge: "HEALTHCARE PLATFORM",
    metrics: [
      { value: "APAC", label: "Regional healthcare market focus" },
      { value: "B2B + B2C", label: "Dual commercial and individual pathways" },
      { value: "Singapore HQ", label: "Regional expansion-driven positioning" },
    ],
    image: "/images/portfolio-01.png",
    url: "https://www.peachhealthasia.com/",
  },
  {
    title: "Executive coaching website for founders and CEOs with conversion-first copy.",
    subtitle: "Allen Adjamian",
    badge: "COACHING WEBSITE",
    metrics: [
      { value: "Founder/CEO", label: "Clear target audience positioning" },
      { value: "Guarantee", label: "Trust-driven coaching offer framing" },
      { value: "Newsletter", label: "Owned audience growth funnel" },
    ],
    image: "/images/portfolio-02.png",
    url: "https://adjamian.com/",
  },
  {
    title: "Executive coaching and consulting brand with insight-to-execution messaging.",
    subtitle: "Kinetic Method",
    badge: "CONSULTING BRAND",
    metrics: [
      { value: "1:1 Accelerator", label: "Structured flagship service offer" },
      { value: "Workshops", label: "B2B team capability expansion" },
      { value: "Speaking", label: "Authority and demand generation channel" },
    ],
    image: "/images/portfolio-03.png",
    url: "https://kineticmethod.com/",
  },
  {
    title: "Student-athlete mentorship website built around outcomes and admissions strategy.",
    subtitle: "Athlete Advisors",
    badge: "SPORTS EDUCATION",
    metrics: [
      { value: "3 Divisions", label: "Sports, Academic, and ECA pathways" },
      { value: "Families", label: "Parent-aligned decision journey UX" },
      { value: "Clear CTA", label: "Story and contact conversion flow" },
    ],
    image: "/images/portfolio-04.png",
    url: "https://www.aaamentors.com/",
  },
  {
    title: "Somatic healing personal brand site with high-trust storytelling and lead magnet.",
    subtitle: "Leanna Hunt",
    badge: "PERSONAL BRAND",
    metrics: [
      { value: "Membership", label: "Recurring community-based offer" },
      { value: "Podcast", label: "Content-driven authority channel" },
      { value: "Lead Magnet", label: "Survival response map capture flow" },
    ],
    image: "/images/portfolio-05.png",
    url: "https://leannahunt.com/",
  },
  {
    title: "Handcrafted furniture and epoxy e-commerce narrative with premium craft positioning.",
    subtitle: "Sovza Wooden Dreams",
    badge: "E-COMMERCE STORE",
    metrics: [
      { value: "100%", label: "Handmade product narrative" },
      { value: "300+", label: "Custom projects showcased" },
      { value: "Slovenian Wood", label: "Localized material trust signal" },
    ],
    image: "/images/portfolio-06.png",
    url: "https://sovza.si/en/home/",
  },
];

function TechRow({
  row,
  reverse = false,
  speed = 22,
  isLightMode = false,
}: {
  row: { icon: React.ComponentType<{ className?: string }>; color: string }[];
  reverse?: boolean;
  speed?: number;
  isLightMode?: boolean;
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
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-20 ${
          isLightMode
            ? "bg-gradient-to-r from-[#f6f8ff] via-[#f6f8fff5] to-transparent"
            : "bg-gradient-to-r from-[#0a0d14] to-transparent"
        }`}
      />
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-20 ${
          isLightMode
            ? "bg-gradient-to-l from-[#f6f8ff] via-[#f6f8fff5] to-transparent"
            : "bg-gradient-to-l from-[#0a0d14] to-transparent"
        }`}
      />
      <motion.div
        ref={trackRef}
        className="flex w-max gap-3 py-2.5 sm:gap-3.5"
        style={{ x }}
      >
        {doubledRow.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={`${item.color}-${index}`}
              whileHover={{ y: -2, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className={`grid h-[60px] w-[60px] place-items-center rounded-[15px] border sm:h-[66px] sm:w-[66px] ${
                isLightMode
                  ? "border-black/10 bg-white/85 shadow-[0_12px_24px_rgba(15,23,42,0.08)]"
                  : "border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
              }`}
            >
              <Icon className={`h-6 w-6 ${item.color} sm:h-7 sm:w-7`} />
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
  isLightMode = false,
}: {
  items: {
    platform: string;
    name: string;
    initials: string;
    quote: string;
  }[];
  reverse?: boolean;
  speed?: number;
  isLightMode?: boolean;
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
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-20 sm:w-28 ${
          isLightMode
            ? "bg-gradient-to-r from-[#f6f8ff] via-[#f6f8fff0] to-transparent"
            : "bg-gradient-to-r from-[#0a0d14] via-[#0a0d14f0] to-transparent"
        }`}
      />
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-20 sm:w-28 ${
          isLightMode
            ? "bg-gradient-to-l from-[#f6f8ff] via-[#f6f8fff0] to-transparent"
            : "bg-gradient-to-l from-[#0a0d14] via-[#0a0d14f0] to-transparent"
        }`}
      />
      <motion.div ref={trackRef} className="flex w-max gap-3 py-2" style={{ x }}>
        {tripled.map((item, index) => (
          <article
            key={`${item.name}-${index}`}
            className={`w-[300px] rounded-xl p-4 will-change-transform ${
              isLightMode
                ? "border border-black/10 bg-white/75 shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
                : "border border-white/10 bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
            }`}
          >
            <div className="flex items-center justify-between">
              <p className={`text-xs ${isLightMode ? "text-zinc-500" : "text-zinc-400"}`}>
                {item.platform}
              </p>
              <p className="text-[11px] tracking-wide text-yellow-300">★★★★★</p>
            </div>
            <p className={`mt-2 text-sm leading-6 ${isLightMode ? "text-zinc-700" : "text-zinc-300"}`}>
              &ldquo;{item.quote}&rdquo;
            </p>
            <div className="mt-4 flex items-center gap-2.5">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/80 text-[10px] font-semibold text-white">
                {item.initials}
              </span>
              <span className={`text-sm font-medium ${isLightMode ? "text-zinc-800" : "text-zinc-100"}`}>
                {item.name}
              </span>
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const aboutSectionRef = useRef<HTMLElement | null>(null);
  const aboutImageRef = useRef<HTMLDivElement | null>(null);
  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 15000);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const shouldUseLight = savedTheme ? savedTheme === "light" : prefersLight;
    setIsLightMode(shouldUseLight);
    document.documentElement.classList.toggle("light", shouldUseLight);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!aboutSectionRef.current) return;

    const ctx = gsap.context(() => {
      const selector = gsap.utils.selector(aboutSectionRef);
      const badges = selector(".about-badge");
      const copyBlocks = selector(".about-copy");
      const skillCards = selector(".about-skill-card");
      const ctaRow = selector(".about-cta");
      const glowOrb = selector(".about-glow");

      if (aboutImageRef.current) {
        const introTl = gsap.timeline({
          scrollTrigger: {
            trigger: aboutSectionRef.current,
            start: "top 74%",
          },
        });

        introTl.fromTo(
          badges,
          { y: 20, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.45, stagger: 0.09, ease: "power2.out" },
          "-=0.5"
        );

        introTl.fromTo(
          copyBlocks,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.55, stagger: 0.08, ease: "power2.out" },
          "-=0.3"
        );

        introTl.fromTo(
          skillCards,
          { y: 26, opacity: 0, rotateX: -16 },
          { y: 0, opacity: 1, rotateX: 0, duration: 0.48, stagger: 0.06, ease: "power2.out" },
          "-=0.25"
        );

        introTl.fromTo(
          ctaRow,
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.45, ease: "power2.out" },
          "-=0.2"
        );

        gsap.to(glowOrb, {
          xPercent: 12,
          yPercent: -8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          duration: 4.2,
        });
      }
    }, aboutSectionRef);

    return () => ctx.revert();
  }, []);

  const handleThemeToggle = () => {
    const nextThemeIsLight = !isLightMode;
    setIsLightMode(nextThemeIsLight);
    document.documentElement.classList.toggle("light", nextThemeIsLight);
    window.localStorage.setItem("theme", nextThemeIsLight ? "light" : "dark");
  };

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div
      className={`relative min-h-screen overflow-x-hidden transition-colors duration-300 ${
        isLightMode ? "bg-[#f6f8ff] text-zinc-900" : "bg-[#0a0d14] text-zinc-100"
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-0 ${
          isLightMode
            ? "bg-[radial-gradient(circle_at_50%_18%,#93c5fd55,transparent_38%),radial-gradient(circle_at_50%_65%,#c4b5fd44,transparent_45%)]"
            : "bg-[radial-gradient(circle_at_50%_18%,#1d4ed866,transparent_36%),radial-gradient(circle_at_50%_65%,#1e3a8a44,transparent_42%)]"
        }`}
      />

      <header className="fixed left-0 right-0 top-0 z-50 px-2 pt-3 transition-all duration-300 sm:px-4">
        <nav
          className={`mx-auto flex w-full items-center justify-between px-4 py-3 transition-all duration-300 sm:px-6 ${
            isScrolled
              ? isLightMode
                ? "max-w-6xl rounded-[18px] border border-black/10 bg-white/85 shadow-[0_10px_28px_rgba(15,23,42,0.12)] backdrop-blur-xl"
                : "max-w-6xl rounded-[18px] border border-white/15 bg-[#0b0f17]/85 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl"
              : "max-w-[1202px] rounded-[24px] bg-transparent"
          }`}
        >
          <a
            href="#"
            className={`text-sm font-semibold tracking-tight ${
              isLightMode ? "text-zinc-900" : "text-zinc-100"
            }`}
          >
            Abdul M.
          </a>
          <ul
            className={`hidden items-center gap-6 text-xs md:flex ${
              isLightMode ? "text-zinc-600" : "text-zinc-300"
            }`}
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`transition ${
                    activeId === item.id
                      ? isLightMode
                        ? "text-zinc-900"
                        : "text-zinc-100"
                      : isLightMode
                        ? "text-zinc-600 hover:text-zinc-800"
                        : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden items-center gap-2.5 md:flex">
            <a
              href="#contact"
              className="rounded-xl bg-yellow-400 px-4 py-2 text-xs font-semibold text-zinc-900 transition hover:brightness-110"
            >
              Contact Me
            </a>
            <button
              type="button"
              onClick={handleThemeToggle}
              className={`grid h-9 w-9 place-items-center rounded-full border transition hover:border-yellow-300/60 hover:text-yellow-300 ${
                isLightMode
                  ? "border-black/15 bg-white text-zinc-700"
                  : "border-white/20 bg-white/[0.02] text-zinc-200"
              }`}
              aria-label={isLightMode ? "Switch to dark mode" : "Switch to light mode"}
              title={isLightMode ? "Dark mode" : "Light mode"}
            >
              {isLightMode ? <FiMoon className="h-4 w-4" /> : <FiSun className="h-4 w-4" />}
            </button>
          </div>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className={`grid h-9 w-9 place-items-center rounded-full border transition md:hidden ${
              isLightMode
                ? "border-black/15 bg-white text-zinc-700 hover:bg-zinc-100"
                : "border-white/20 bg-white/[0.02] text-zinc-200 hover:bg-white/[0.08]"
            }`}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <FiX className="h-4 w-4" /> : <FiMenu className="h-4 w-4" />}
          </button>
        </nav>
        <AnimatePresence>
          {isMobileMenuOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mx-auto mt-2 w-full max-w-6xl md:hidden"
            >
              <div
                className={`rounded-2xl border p-4 shadow-xl backdrop-blur-xl ${
                  isLightMode
                    ? "border-black/10 bg-white/95"
                    : "border-white/10 bg-[#0b0f17]/95"
                }`}
              >
                <ul className="space-y-1">
                  {navItems.map((item) => (
                    <li key={`mobile-${item.id}`}>
                      <a
                        href={`#${item.id}`}
                        onClick={handleNavLinkClick}
                        className={`block rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                          activeId === item.id
                            ? isLightMode
                              ? "bg-black/5 text-zinc-900"
                              : "bg-white/10 text-zinc-100"
                            : isLightMode
                              ? "text-zinc-700 hover:bg-black/5"
                              : "text-zinc-300 hover:bg-white/10"
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center gap-2.5">
                  <a
                    href="#contact"
                    onClick={handleNavLinkClick}
                    className="flex-1 rounded-xl bg-yellow-400 px-4 py-2.5 text-center text-xs font-semibold text-zinc-900 transition hover:brightness-110"
                  >
                    Contact Me
                  </a>
                  <button
                    type="button"
                    onClick={handleThemeToggle}
                    className={`grid h-10 w-10 place-items-center rounded-full border transition hover:border-yellow-300/60 hover:text-yellow-300 ${
                      isLightMode
                        ? "border-black/15 bg-white text-zinc-700"
                        : "border-white/20 bg-white/[0.02] text-zinc-200"
                    }`}
                    aria-label={isLightMode ? "Switch to dark mode" : "Switch to light mode"}
                  >
                    {isLightMode ? <FiMoon className="h-4 w-4" /> : <FiSun className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <main className="relative mx-auto w-full max-w-6xl space-y-20 px-5 pb-20 pt-28 sm:px-8 sm:pt-32">
        <section className="space-y-7 pt-6 text-center sm:space-y-8 md:pt-10">
          <Reveal className="mx-auto max-w-4xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-zinc-300">
              Available for New Opportunities
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
            </p>
            <h1 className="font-display text-[2.5rem] leading-[1.03] font-semibold tracking-tight text-zinc-100 sm:text-[3.4rem] md:text-[4.4rem]">
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

          <Reveal delay={0.08} className="mx-auto w-full max-w-6xl space-y-5">
            <div
              className={`relative overflow-hidden rounded-[28px] border p-4 sm:p-6 ${
                isLightMode
                  ? "border-black/10 bg-white shadow-[0_30px_70px_rgba(15,23,42,0.12)]"
                  : "border-white/15 bg-[#0f1118] shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_40px_100px_rgba(0,0,0,0.6)]"
              }`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.42, ease: "easeOut" }}
                  className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]"
                >
                  <div className="text-left">
                    <div className="flex items-center justify-end">
                      <span
                        className={`rounded-full px-2.5 py-1 text-[11px] ${
                          isLightMode ? "bg-black/5 text-zinc-600" : "bg-black/30 text-zinc-300"
                        }`}
                      >
                        {activeSlide + 1} / {heroSlides.length}
                      </span>
                    </div>

                    <p className="mt-4 text-xs font-semibold tracking-[0.12em] text-yellow-400">
                      {heroSlides[activeSlide].badge}
                    </p>
                    <h3
                      className={`mt-2 text-[1.8rem] leading-tight font-semibold sm:text-[2.2rem] ${
                        isLightMode ? "text-zinc-900" : "text-white"
                      }`}
                    >
                      {heroSlides[activeSlide].title}
                    </h3>
                    <p className={`mt-3 text-sm ${isLightMode ? "text-zinc-600" : "text-zinc-300"}`}>
                      {heroSlides[activeSlide].subtitle}
                    </p>

                    <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
                      {heroSlides[activeSlide].metrics.map((item) => (
                        <div
                          key={item.value}
                          className={`rounded-xl border px-3 py-2.5 ${
                            isLightMode ? "border-black/10 bg-white/75" : "border-white/10 bg-white/[0.03]"
                          }`}
                        >
                          <p className="text-base font-semibold text-yellow-400">{item.value}</p>
                          <p className={`mt-0.5 text-[11px] leading-4 ${isLightMode ? "text-zinc-600" : "text-zinc-400"}`}>
                            {item.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center gap-2.5">
                      <a
                        href={heroSlides[activeSlide].url}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl bg-yellow-400 px-4 py-2 text-xs font-semibold text-zinc-900 transition hover:brightness-110"
                      >
                        Visit Website
                      </a>
                      <button
                        type="button"
                        onClick={() =>
                          setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
                        }
                        className={`grid h-9 w-9 place-items-center rounded-full text-lg transition ${
                          isLightMode
                            ? "border border-black/10 bg-white text-zinc-700 hover:bg-zinc-100"
                            : "border border-white/15 bg-black/40 text-zinc-200 hover:bg-black/60"
                        }`}
                        aria-label="Previous slide"
                      >
                        ‹
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveSlide((prev) => (prev + 1) % heroSlides.length)}
                        className={`grid h-9 w-9 place-items-center rounded-full text-lg transition ${
                          isLightMode
                            ? "border border-black/10 bg-white text-zinc-700 hover:bg-zinc-100"
                            : "border border-white/15 bg-black/40 text-zinc-200 hover:bg-black/60"
                        }`}
                        aria-label="Next slide"
                      >
                        ›
                      </button>
                    </div>
                  </div>

                  <div className="relative min-h-[370px] sm:min-h-[420px]">
                    <div
                      className={`absolute inset-0 overflow-hidden rounded-[24px] border ${
                        isLightMode ? "border-black/10 bg-white" : "border-white/15 bg-[#0b0f17]"
                      }`}
                    >
                      <Image
                        src={heroSlides[activeSlide].image}
                        alt=""
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="scale-110 object-cover object-center blur-2xl"
                        priority
                        aria-hidden="true"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                      <Image
                        src={heroSlides[activeSlide].image}
                        alt={heroSlides[activeSlide].subtitle}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="h-full w-full object-cover object-center opacity-100 [mix-blend-mode:normal]"
                        priority
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-3 py-4 sm:gap-4 sm:py-6 lg:grid-cols-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className={`rounded-2xl border px-4 py-5 text-center sm:px-5 sm:py-6 ${
                    isLightMode ? "border-black/10 bg-white/70" : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  <p className={`text-xl font-semibold sm:text-2xl ${isLightMode ? "text-zinc-900" : "text-white"}`}>
                    {item.value}
                  </p>
                  <p
                    className={`mt-2 text-[11px] uppercase tracking-wider sm:text-xs ${
                      isLightMode ? "text-zinc-500" : "text-zinc-400"
                    }`}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section ref={aboutSectionRef} id="about" className="scroll-mt-24 space-y-9">
          <Reveal>
            <p className={`text-center text-xs font-semibold tracking-[0.2em] ${isLightMode ? "text-zinc-500" : "text-zinc-400"}`}>
              WHO I AM
            </p>
            <h2 className={`mt-2 text-center text-4xl font-semibold tracking-tight sm:text-5xl ${isLightMode ? "text-zinc-900" : "text-zinc-100"}`}>
              About Me
            </h2>
          </Reveal>

          <div className="grid items-start gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:gap-9">
            <Reveal
              className={`relative mx-auto w-full max-w-[500px] overflow-hidden rounded-[24px] border p-3 ${
                isLightMode
                  ? "border-black/10 bg-white shadow-[0_20px_45px_rgba(15,23,42,0.1)]"
                  : "border-white/10 bg-[#0f1320]"
              }`}
            >
              <div
                ref={aboutImageRef}
                className="about-image relative aspect-[4/5] overflow-hidden rounded-[18px] bg-[linear-gradient(140deg,#d8c7ab_0%,#ba9874_24%,#272a30_62%,#11141d_100%)]"
              >
                <Image
                  src="/imgs/abdulmujeeb.png"
                  alt="Abdul Mujeeb"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,#ffffff30,transparent_38%),radial-gradient(circle_at_80%_72%,#00000070,transparent_40%)]" />
              </div>

              <span className="about-badge absolute left-6 top-6 rounded-full border border-emerald-300/40 bg-emerald-300/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-emerald-200">
                Available for Projects
              </span>
              <span className={`about-badge absolute bottom-6 left-6 rounded-full px-3 py-1 text-[11px] font-semibold ${
                isLightMode ? "bg-black/75 text-white" : "bg-white/90 text-zinc-900"
              }`}>
                Islamabad, Pakistan
              </span>
            </Reveal>

            <Reveal
              delay={0.08}
              className={`relative overflow-hidden rounded-[24px] border p-6 sm:p-8 ${
                isLightMode
                  ? "border-black/10 bg-white/90 shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              <div className={`about-glow pointer-events-none absolute -right-16 -top-20 h-40 w-40 rounded-full blur-3xl ${
                isLightMode ? "bg-cyan-300/35" : "bg-blue-500/20"
              }`} />

              <h3 className={`about-copy relative text-3xl leading-tight font-semibold ${isLightMode ? "text-zinc-900" : "text-zinc-100"}`}>
                Hi, I&apos;m Abdul Mujeeb -
                <span className="block text-yellow-400">Full-Stack Web Developer</span>
              </h3>

              <p className={`about-copy mt-4 text-sm leading-7 ${isLightMode ? "text-zinc-600" : "text-zinc-300"}`}>
                I&apos;m a Full-Stack Web Developer specialized in WordPress, with hands-on
                experience building custom themes, plugins, and WooCommerce stores. I also work
                across modern frontend stacks including React and Next.js for performance-focused
                interfaces.
              </p>

              <div className="about-copy mt-6 grid gap-2.5 sm:grid-cols-3">
                <div className={`rounded-xl border px-3 py-2 ${isLightMode ? "border-black/10 bg-white" : "border-white/10 bg-white/[0.03]"}`}>
                  <p className="text-xs uppercase tracking-wider text-yellow-400">Experience</p>
                  <p className={`mt-1 text-sm font-semibold ${isLightMode ? "text-zinc-900" : "text-zinc-100"}`}>6+ Years</p>
                </div>
                <div className={`rounded-xl border px-3 py-2 ${isLightMode ? "border-black/10 bg-white" : "border-white/10 bg-white/[0.03]"}`}>
                  <p className="text-xs uppercase tracking-wider text-yellow-400">Projects</p>
                  <p className={`mt-1 text-sm font-semibold ${isLightMode ? "text-zinc-900" : "text-zinc-100"}`}>WordPress + React</p>
                </div>
                <div className={`rounded-xl border px-3 py-2 ${isLightMode ? "border-black/10 bg-white" : "border-white/10 bg-white/[0.03]"}`}>
                  <p className="text-xs uppercase tracking-wider text-yellow-400">Focus</p>
                  <p className={`mt-1 text-sm font-semibold ${isLightMode ? "text-zinc-900" : "text-zinc-100"}`}>Business Growth UX</p>
                </div>
              </div>

              <h4 className={`about-copy mt-6 text-base font-semibold ${isLightMode ? "text-zinc-900" : "text-zinc-100"}`}>
                Core Focus Areas
              </h4>

              <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {aboutSpecialties.slice(0, 8).map((item) => (
                  <p
                    key={item}
                    className={`about-skill-card flex items-start gap-2 rounded-xl border px-3 py-2 text-sm leading-6 ${
                      isLightMode ? "border-black/10 bg-white text-zinc-700" : "border-white/10 bg-white/[0.03] text-zinc-300"
                    }`}
                  >
                    <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </p>
                ))}
              </div>

              <p className={`about-copy mt-5 text-sm leading-7 ${isLightMode ? "text-zinc-600" : "text-zinc-300"}`}>
                Based in Islamabad, Pakistan, I focus on building scalable, responsive, and
                business-driven web experiences with strong design execution and reliable technical
                delivery. Let&apos;s build something impactful together.
              </p>

              <div className="about-cta mt-7 flex flex-wrap items-center gap-2.5">
                <a
                  href="#services"
                  className="rounded-xl bg-yellow-400 px-5 py-2.5 text-xs font-semibold tracking-wide text-zinc-900 transition hover:brightness-110"
                >
                  View Services
                </a>
                <a
                  href="#contact"
                  className={`rounded-xl px-5 py-2.5 text-xs font-semibold tracking-wide transition ${
                    isLightMode
                      ? "border border-yellow-500/30 bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                      : "border border-yellow-300/35 bg-yellow-300/5 text-yellow-100 hover:bg-yellow-300/10"
                  }`}
                >
                  Hire Now
                </a>
                <a
                  href="https://www.linkedin.com/in/abdul-mujeeb-36192b221/"
                  target="_blank"
                  rel="noreferrer"
                  className={`px-4 py-2.5 text-xs font-semibold tracking-wide transition ${
                    isLightMode ? "text-zinc-600 hover:text-zinc-900" : "text-zinc-300 hover:text-white"
                  }`}
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
          <div
            className={`mt-9 space-y-2.5 rounded-[28px] p-2.5 sm:mt-11 sm:space-y-3 sm:p-3 ${
              isLightMode
                ? "border border-black/10 bg-white/65 shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
                : "border border-white/5 bg-white/[0.015]"
            }`}
          >
            <TechRow row={techRows[0]} speed={18} isLightMode={isLightMode} />
            <TechRow row={techRows[1]} reverse speed={16} isLightMode={isLightMode} />
            <TechRow row={techRows[2]} speed={17} isLightMode={isLightMode} />
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

          <div className="relative mt-8 space-y-8 pl-8 [--timeline-x:0.75rem] [--timeline-offset:2rem] sm:pl-10 sm:[--timeline-x:1rem] sm:[--timeline-offset:2.5rem]">
            <div className="absolute bottom-3 top-2 left-[var(--timeline-x)] w-px bg-white/10" />
            {workExperiences.map((item, index) => (
              <Reveal key={item.company} delay={0.04 * index} className="relative">
                <span className="absolute top-3 left-[calc(var(--timeline-x)-var(--timeline-offset))] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-yellow-400 shadow-[0_0_0_4px_rgba(250,204,21,0.08)]" />
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
                          className="relative aspect-[16/10] overflow-hidden rounded-lg border border-white/10 bg-zinc-900"
                        >
                          <Image
                            src={preview}
                            alt={`${item.company} preview ${previewIndex + 1}`}
                            fill
                            className="object-cover"
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
            <TestimonialRow items={testimonials.slice(0, 4)} speed={13} isLightMode={isLightMode} />
            <TestimonialRow
              items={testimonials.slice(4, 8)}
              reverse
              speed={12}
              isLightMode={isLightMode}
            />
            <TestimonialRow items={testimonials.slice(8, 12)} speed={11} isLightMode={isLightMode} />
          </div>
        </section>

        <section
          id="contact"
          className={`section-contact scroll-mt-24 rounded-3xl p-6 sm:p-8 ${
            isLightMode
              ? "border-y border-black/10 bg-white/80 shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
              : "border-y border-white/10 bg-[#0f1320]"
          }`}
        >
          <Reveal>
            <h2 className={`text-2xl font-semibold sm:text-3xl ${isLightMode ? "text-zinc-900" : "text-zinc-100"}`}>
              Frequently Asked Questions
            </h2>
            <div
              className={`mt-6 divide-y rounded-2xl ${
                isLightMode ? "divide-black/10 border border-black/10" : "divide-white/10 border border-white/10"
              }`}
            >
              {faqs.map((question, index) => (
                <article key={question} className="px-5 py-4">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex((prev) => (prev === index ? null : index))}
                    className={`flex w-full items-center justify-between gap-3 text-left text-sm font-medium ${
                      isLightMode ? "text-zinc-800" : "text-zinc-100"
                    }`}
                  >
                    <span>{question}</span>
                    <FiChevronDown
                      className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                        openFaqIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaqIndex === index ? (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        className={`overflow-hidden pr-6 text-sm leading-6 ${
                          isLightMode ? "text-zinc-600" : "text-zinc-300"
                        }`}
                      >
                        <span className="mt-2 block">
                          Yes. This is placeholder content designed to preserve the visual structure
                          and interaction pattern from the reference design.
                        </span>
                      </motion.p>
                    ) : null}
                  </AnimatePresence>
                </article>
              ))}
            </div>
            <div
              className={`mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl p-5 ${
                isLightMode
                  ? "border border-black/10 bg-white"
                  : "border border-white/10 bg-white/[0.02]"
              }`}
            >
              <div>
                <p className={`text-sm ${isLightMode ? "text-zinc-600" : "text-zinc-300"}`}>
                  Need WordPress + React development support?
                </p>
                <p className={`text-lg font-semibold ${isLightMode ? "text-zinc-900" : "text-zinc-100"}`}>
                  Let&apos;s discuss your next web project.
                </p>
              </div>
              <a
                href="mailto:info@abdulmujeebahsan.com"
                className="rounded-full bg-yellow-400 px-5 py-3 text-xs font-semibold text-zinc-900 transition hover:brightness-110"
              >
                info@abdulmujeebahsan.com
              </a>
            </div>
            <div className={`mt-3 flex flex-wrap gap-2 text-xs ${isLightMode ? "text-zinc-600" : "text-zinc-400"}`}>
              <a
                href="tel:+923424201891"
                className={`rounded-full px-3 py-1.5 ${
                  isLightMode ? "border border-black/15" : "border border-white/15"
                }`}
              >
                +92 342 4201891
              </a>
              <a
                href="https://www.linkedin.com/in/abdul-mujeeb-36192b221/"
                target="_blank"
                rel="noreferrer"
                className={`rounded-full px-3 py-1.5 ${
                  isLightMode
                    ? "border border-black/15 hover:text-zinc-800"
                    : "border border-white/15 hover:text-zinc-200"
                }`}
              >
                linkedin.com/in/abdul-mujeeb-36192b221
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="px-5 pb-8 sm:px-8 sm:pb-10">
        <div
          className={`relative w-full overflow-hidden rounded-[30px] border p-7 sm:p-10 ${
            isLightMode
              ? "border-black/10 bg-white/80 shadow-[0_30px_60px_rgba(15,23,42,0.1)]"
              : "border-white/10 bg-[#0d1120]"
          }`}
        >
          <div className="mx-auto w-full max-w-6xl">
            <div
              className={`pointer-events-none absolute -right-10 -top-16 h-52 w-52 rounded-full blur-3xl ${
                isLightMode ? "bg-cyan-300/40" : "bg-blue-500/20"
              }`}
            />
            <div
              className={`pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full blur-3xl ${
                isLightMode ? "bg-violet-300/40" : "bg-fuchsia-500/20"
              }`}
            />

            <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <p
                  className={`font-display text-3xl leading-tight font-semibold sm:text-4xl ${
                    isLightMode ? "text-zinc-900" : "text-white"
                  }`}
                >
                  Let&apos;s build a high-converting website for your business.
                </p>
                <p className={`mt-3 max-w-xl text-sm leading-7 ${isLightMode ? "text-zinc-600" : "text-zinc-300"}`}>
                  From strategy to launch, I design and develop modern, fast, and SEO-ready web
                  experiences that help brands grow with confidence.
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  <a
                    href="mailto:info@abdulmujeebahsan.com"
                    className="rounded-xl bg-yellow-400 px-5 py-3 text-xs font-semibold tracking-wide text-zinc-900 transition hover:brightness-110"
                  >
                    Start a Project
                  </a>
                  <a
                    href="#work"
                    className={`rounded-xl px-5 py-3 text-xs font-semibold tracking-wide transition ${
                      isLightMode
                        ? "border border-black/15 bg-white text-zinc-700 hover:bg-zinc-100"
                        : "border border-white/15 bg-white/[0.04] text-zinc-200 hover:bg-white/[0.09]"
                    }`}
                  >
                    View Portfolio
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className={`text-[11px] uppercase tracking-[0.16em] ${isLightMode ? "text-zinc-500" : "text-zinc-400"}`}>
                    Navigation
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {navItems.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                          isLightMode
                            ? "border border-black/10 bg-white text-zinc-700 hover:bg-zinc-100"
                            : "border border-white/10 bg-white/[0.03] text-zinc-300 hover:bg-white/[0.08]"
                        }`}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <p className={`text-[11px] uppercase tracking-[0.16em] ${isLightMode ? "text-zinc-500" : "text-zinc-400"}`}>
                    Contact
                  </p>
                  <div className="mt-3 space-y-2 text-sm">
                    <a
                      href="mailto:info@abdulmujeebahsan.com"
                      className={`block transition ${isLightMode ? "text-zinc-700 hover:text-zinc-900" : "text-zinc-300 hover:text-white"}`}
                    >
                      info@abdulmujeebahsan.com
                    </a>
                    <a
                      href="tel:+923424201891"
                      className={`block transition ${isLightMode ? "text-zinc-700 hover:text-zinc-900" : "text-zinc-300 hover:text-white"}`}
                    >
                      +92 342 4201891
                    </a>
                    <a
                      href="https://www.linkedin.com/in/abdul-mujeeb-36192b221/"
                      target="_blank"
                      rel="noreferrer"
                      className={`block transition ${isLightMode ? "text-zinc-700 hover:text-zinc-900" : "text-zinc-300 hover:text-white"}`}
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`relative mt-8 flex flex-col gap-2 border-t pt-5 text-xs sm:flex-row sm:items-center sm:justify-between ${
                isLightMode ? "border-black/10 text-zinc-500" : "border-white/10 text-zinc-400"
              }`}
            >
              <p>© {new Date().getFullYear()} Abdul Mujeeb. All rights reserved.</p>
              <p>Crafted for performance, SEO, and high conversions.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
