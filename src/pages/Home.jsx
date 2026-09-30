import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code,
  Database,
  Smartphone,
  Bot,
  Cloud,
  Globe,
  CheckCircle,
  Play,
  Pause,
  TrendingUp,
  Sparkles,
  Gem,
  Users,
  Shield,
  Quote,
  Search,
  FileText,
  Pencil,
  Rocket,
  ShoppingCart,
  Factory,
  HeartPulse,
  GraduationCap,
  Building2,
  Truck,
  Tv,
  LayoutGrid,
} from "lucide-react";
import GridServices from "../components/GridServices";
import ScrollAnimatedHeading from "../components/ScrollAnimatedHeading";
import { AnimatedHeroText } from "../components/HeroEffects";
import heroBgDesktop from "../../assets/images/Hero_bg_desktop_view.png";
import heroBgMobile from "../../assets/images/Hero_bg_mobile_view.png";
import imgAboutServices from "../../assets/images/zavyx_about_services_transparent.png";

const ScrollSlideSection = ({
  children,
  className = "",
  delay = "0ms",
  direction = "left",
}) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" },
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const translateMap = {
    left: "-translate-x-12",
    right: "translate-x-12",
    up: "translate-y-20",
    down: "-translate-y-12",
  };
  const translateClass = translateMap[direction] || "-translate-x-12";

  return (
    <div
      ref={containerRef}
      className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
        isVisible
          ? "translate-x-0 translate-y-0 opacity-100"
          : `${translateClass} opacity-0`
      } ${className}`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
};

import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaPython,
  FaDocker,
  FaDatabase,
  FaJsSquare,
  FaGithub,
  FaFigma,
  FaVuejs,
  FaAngular,
  FaPhp,
  FaJava,
  FaSwift,
  FaLinux,
  FaAndroid,
  FaApple,
  FaDigitalOcean,
  FaGitlab,
} from "react-icons/fa";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";

const MobileProcessSection = ({ steps }) => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollY = -rect.top;
      const maxScroll = rect.height - window.innerHeight;

      if (maxScroll <= 0) return;

      let currentProgress = scrollY / maxScroll;
      if (currentProgress < 0) currentProgress = 0;
      if (currentProgress > 1) currentProgress = 1;

      const newIndex = Math.min(
        steps.length - 1,
        Math.floor(currentProgress * steps.length),
      );
      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [steps.length]);

  return (
    <div
      ref={containerRef}
      className="relative w-full block sm:hidden py-0"
      style={{ height: `${steps.length * 75}vh` }}
    >
      <div className="sticky top-16 h-[calc(100dvh-75px)] flex flex-col justify-between items-center w-full px-5 py-3 overflow-hidden z-10">
        {/* Mobile Header Row */}
        <div className="w-full text-left space-y-1">
          <div className="flex items-center gap-3">
            <span className="text-pink-600 dark:text-pink-400 font-normal uppercase tracking-widest text-xs sm:text-sm">
              OUR PROCESS
            </span>
            <span className="w-8 h-[2px] bg-pink-500 inline-block"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            A simple and transparent process
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
            Our structured 5-step methodology ensures seamless execution and
            predictable success.
          </p>
        </div>

        {/* Step Card Container */}
        <div className="relative w-full max-w-[285px] h-[215px] my-auto flex items-center justify-center">
          {steps.map((p, i) => {
            const Icon = p.icon;
            const isActive = i === activeIndex;

            // Step index alignment: next step at top-right, previous step at bottom-left (wraps around 0..4)
            const isTopRight = i === (activeIndex + 1) % steps.length;
            const isBottomLeft =
              i === (activeIndex + steps.length - 1) % steps.length;

            let transformClass = "opacity-0 scale-75 pointer-events-none";

            if (isActive) {
              transformClass =
                "translate-x-0 translate-y-0 opacity-100 scale-100 z-30 bg-[#00016E] dark:bg-slate-800 text-white border-0 shadow-none";
            } else if (isTopRight) {
              transformClass =
                "translate-x-12 -translate-y-12 opacity-60 scale-90 z-10 bg-slate-100/90 dark:bg-slate-800/80 text-slate-400 border-0 shadow-none";
            } else if (isBottomLeft) {
              transformClass =
                "-translate-x-12 translate-y-12 opacity-60 scale-90 z-10 bg-slate-100/90 dark:bg-slate-800/80 text-slate-400 border-0 shadow-none";
            }

            return (
              <div
                key={i}
                className={`absolute inset-0 p-4 rounded-2xl transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] flex flex-col justify-between ${transformClass}`}
              >
                <div className="flex items-center justify-between w-full">
                  {/* Icon Container: No border, no background color, no shadow */}
                  <div
                    className={`flex items-center justify-center shrink-0 ${
                      isActive ? "text-white" : "text-slate-500"
                    }`}
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <span
                    className={`text-3xl font-normal tracking-tight ${isActive ? "text-sky-300" : "text-slate-400"}`}
                  >
                    {p.step}
                  </span>
                </div>

                <div className="flex flex-col gap-0.5 my-auto">
                  <h4
                    className={`text-[21px] sm:text-2xl font-normal whitespace-nowrap tracking-tight ${isActive ? "text-white" : "text-slate-600 dark:text-slate-300"}`}
                  >
                    {p.title}
                  </h4>
                  <p
                    className={`text-sm sm:text-base leading-relaxed font-normal ${isActive ? "text-slate-200" : "text-slate-400"}`}
                  >
                    {p.desc}
                  </p>

                  {/* Highlights right below description with no space between them, and bottom padding before footer */}
                  {p.highlights && (
                    <div className="flex flex-wrap gap-2 pt-0.5 pb-3">
                      {p.highlights.map((h, hIdx) => (
                        <span
                          key={hIdx}
                          className={`text-xs font-normal ${isActive ? "text-sky-200" : "text-slate-400"}`}
                        >
                          ✓ {h}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between w-full pt-1.5 border-t-0">
                  <span
                    className={`text-[10px] uppercase tracking-wider font-normal ${isActive ? "text-sky-200" : "text-slate-400"}`}
                  >
                    Step {i + 1} of {steps.length}
                  </span>
                  <div className="flex gap-1">
                    {steps.map((_, dotIdx) => (
                      <div
                        key={dotIdx}
                        className={`h-1.5 rounded-full transition-all ${
                          dotIdx === activeIndex
                            ? "w-4 bg-sky-400"
                            : "w-1.5 bg-white/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const MobileIndustriesAccordion = ({ items }) => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollY = -rect.top;
      const maxScroll = rect.height - window.innerHeight;

      if (maxScroll <= 0) return;

      let currentProgress = scrollY / maxScroll;
      if (currentProgress < 0) currentProgress = 0;
      if (currentProgress > 1) currentProgress = 1;

      const newIndex = Math.min(
        items.length - 1,
        Math.floor(currentProgress * items.length),
      );
      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items.length]);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${items.length * 75}vh` }}
    >
      <div className="sticky top-16 h-[calc(100dvh-70px)] flex flex-col justify-center items-center w-full max-w-[360px] mx-auto px-4 overflow-hidden z-10">
        <div className="w-full flex flex-col gap-1.5">
          {items.map((item, idx) => {
            const isActive = idx === activeIndex;
            const IconComponent = item.icon;

            return (
              <div
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] relative overflow-hidden rounded-none cursor-pointer ${
                  isActive
                    ? "w-full h-[235px] p-4 opacity-100 shadow-none bg-gradient-to-br from-[#0284c7] via-[#0284c7] to-[#39b54a] text-white border-t border-white/30 border-x-0 border-b-0 flex flex-col justify-between"
                    : "w-full h-[40px] bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 border-x-0 border-b-0 opacity-90 shadow-none px-3.5 flex items-center justify-between"
                }`}
              >
                {/* Header Row: Title + Clean Icon */}
                <div
                  className={`flex items-center justify-between w-full ${isActive ? "mb-1" : "h-full"}`}
                >
                  <h3
                    className={`tracking-wide transition-all truncate mr-2 ${
                      isActive
                        ? "text-white text-lg sm:text-xl font-normal"
                        : "text-slate-800 dark:text-slate-200 text-sm sm:text-base font-normal uppercase"
                    }`}
                  >
                    {item.title}
                  </h3>
                  {/* Clean Icon with NO background and NO border */}
                  <IconComponent
                    className={
                      isActive
                        ? "w-5 h-5 text-white shrink-0"
                        : "w-4.5 h-4.5 text-sky-600 dark:text-sky-400 shrink-0"
                    }
                  />
                </div>

                {/* Expanded Content Section */}
                {isActive && (
                  <div className="flex flex-col justify-between flex-1 mt-1 animate-fadeIn">
                    <div>
                      <div className="text-white font-normal text-sm leading-snug drop-shadow-sm mb-1">
                        {item.subheading}
                      </div>
                      <div className="w-10 h-[1.5px] bg-white/60 mb-1.5" />
                      <p className="text-white/95 text-xs sm:text-sm leading-relaxed font-normal line-clamp-3">
                        {item.desc}
                      </p>
                    </div>

                    {/* Right Bottom Arrow Button */}
                    <div className="flex justify-end w-full pt-1">
                      <Link
                        to="/contact"
                        onClick={(e) => e.stopPropagation()}
                        className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all shadow-none hover:scale-110"
                      >
                        <ArrowRight className="w-4 h-4 text-white" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const stackRow1 = [
  { name: "React", icon: FaReact, hex: "#61DAFB" },
  { name: "Node.js", icon: FaNodeJs, hex: "#5FA04E" }, // Real Node.js color
  { name: "AWS", icon: FaAws, hex: "#FF9900" },
  { name: "Python", icon: FaPython, hex: "#3776AB" },
  { name: "Docker", icon: FaDocker, hex: "#2496ED" },
  { name: "MongoDB", icon: FaDatabase, hex: "#47A248" },
  { name: "JavaScript", icon: FaJsSquare, hex: "#F7DF1E" },
  { name: "GitHub", icon: FaGithub, hex: "#181717" },
  { name: "Tailwind CSS", icon: TbBrandTailwind, hex: "#06B6D4" },
  { name: "Vue.js", icon: FaVuejs, hex: "#4FC08D" },
  { name: "DigitalOcean", icon: FaDigitalOcean, hex: "#0080FF" },
  { name: "PHP", icon: FaPhp, hex: "#777BB4" },
  { name: "Next.js", icon: TbBrandNextjs, hex: "#000000" },
];

export default function Home() {
  const [activeIndustry, setActiveIndustry] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonialsList = [
    {
      text: "It’s a super product with professional support team. I can’t wait to see the future features.",
      author: "Emily Peterson",
      role: "CEO",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      text: "We’ve been looking for this product since the creation of our business. The best for exporting getting the right results and for free.",
      author: "Adrien Jacob",
      role: "Head of Sales",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      text: "This product has exceeded my expectations. I highly recommend it!",
      author: "Sarah Jones",
      role: "Marketing Manager",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
  ];

  useEffect(() => {
    const t = setInterval(() => {
      setActiveTestimonial(
        (prev) =>
          (prev - 1 + testimonialsList.length) % testimonialsList.length,
      );
    }, 4000);
    return () => clearInterval(t);
  }, [testimonialsList.length]);

  const industriesList = [
    {
      title: "Retail & E-commerce",
      icon: ShoppingCart,
      img: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1000&q=80",
      subheading: "Digital storefronts connecting the globe",
      desc: "Transform your retail experience with advanced e-commerce solutions, seamless integrations, and modern digital shopping platforms engineered for performance and scale.",
    },
    {
      title: "Manufacturing",
      icon: Factory,
      img: "https://images.unsplash.com/photo-1565439390234-fcac3e4811b3?auto=format&fit=crop&w=1000&q=80",
      subheading: "Smart production and automation",
      desc: "Optimize your supply chain and factory floor operations with real-time tracking, intelligent integrations, and highly reliable modern production software.",
    },
    {
      title: "Healthcare",
      icon: HeartPulse,
      img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80",
      subheading: "Secure and connected patient care",
      desc: "Enhance patient care with highly secure, compliant digital health platforms, telemedicine applications, and streamlined digital medical record systems.",
    },
    {
      title: "Education",
      icon: GraduationCap,
      img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80",
      subheading: "E-learning and campus technology",
      desc: "Empower remote learning through intuitive educational platforms, robust student portals, and highly scalable virtual classroom environments.",
    },
    {
      title: "Real Estate",
      icon: Building2,
      img: "https://images.unsplash.com/photo-1560518846-993d56b0606b?auto=format&fit=crop&w=1000&q=80",
      subheading: "Innovative property tech solutions",
      desc: "Bridge the gap between property agents and buyers using advanced digital property management softwares, immersive virtual tours, and modern CRM platforms.",
    },
    {
      title: "Logistics",
      icon: Truck,
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
      subheading: "Supply chain tracking & optimization",
      desc: "Monitor easily and manage fleets globally in real time with our customized digital routing, intelligent logistics tracking, and warehouse management systems.",
    },
    {
      title: "Media & Entertainment",
      icon: Tv,
      img: "https://images.unsplash.com/photo-1470229722913-7c090be5bc64?auto=format&fit=crop&w=1000&q=80",
      subheading: "High-bandwidth content delivery",
      desc: "Instantly deliver high-quality digital content flawlessly to your audience with our reliable, high-uptime streaming architecture and active engagement tools.",
    },
    {
      title: "Travel & Tourism",
      icon: Globe,
      img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80",
      subheading: "Booking and hospitality portals",
      desc: "Create unforgettable trips for your customers using comprehensive online booking engines, dynamic hospitality systems, and specialized travel CRMs.",
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 min-h-screen transition-colors duration-300">
      {/* REDESIGNED HERO SECTION MATCHING EXACT REFERENCE LAYOUT */}
      <section className="custom-mobile-hero relative overflow-hidden bg-white dark:bg-slate-900 pt-20 pb-2 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-24 min-h-0 sm:min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-center transition-colors duration-300">
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-20 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center">
            {/* LEFT COLUMN: Text Content, Image, CTAs & Startup Stats Counter */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center text-left relative z-20">
              {/* Hero Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-normal leading-tight sm:leading-[1.12] tracking-tight mb-3 sm:mb-6 text-slate-900 dark:text-white">
                Digital Solutions That Move Your Business{" "}
                <span className="text-slate-900 dark:text-white font-normal inline-block">
                  Forward
                </span>
              </h1>

              {/* Sub-headline / Paragraph */}
              <p className="text-slate-600 dark:text-slate-300 text-[18px] sm:text-lg lg:text-xl leading-normal sm:leading-relaxed mb-3 sm:mb-8 max-w-2xl font-normal">
                We empower businesses with smart technology solutions that drive
                efficiency, connection, and sustainable growth.
              </p>

              {/* MOBILE ONLY IMAGE SECTION: Soft Blue Background Circle + Overlays + Uncropped Image */}
              <div className="block lg:hidden -mt-10 sm:-mt-12 mb-2 relative w-full flex flex-col items-center justify-center">
                {/* Container for Image & Overlays */}
                <div className="relative w-full max-w-[340px] mx-auto flex items-center justify-center">
                  {/* Soft Ambient Logo Blue Background Circle Shape - Shifted lower */}
                  <div className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] sm:w-[270px] sm:h-[270px] rounded-full bg-[#e0f2fe]/70 dark:bg-sky-950/40 pointer-events-none z-0" />

                  {/* Uncropped Mobile Building Image */}
                  <img
                    src={heroBgMobile}
                    alt="ZAVYX Infotech Mobile Building"
                    className="w-full max-w-[325px] sm:max-w-[340px] max-h-[275px] sm:max-h-[295px] h-auto object-contain z-10 mx-auto transform scale-105"
                  />

                  {/* People / Ideas / Solutions Overlay directly UPON the image (shifted lower) */}
                  <div className="absolute top-[22%] left-[5%] z-30 flex flex-col text-left pointer-events-none">
                    <div className="w-5 h-[2px] bg-sky-500 mb-1" />
                    <div className="text-slate-800 dark:text-slate-100 font-semibold text-sm leading-tight tracking-tight">
                      <div>People</div>
                      <div>Technology</div>
                      <div className="text-slate-900 dark:text-white font-bold">
                        Impact
                      </div>
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-normal mt-0.5">
                      Building What's Next
                    </div>
                  </div>

                  {/* Turning Ideas into Real Impact Overlay Card (shifted inwards away from floating WhatsApp icon) */}
                  <div className="absolute bottom-[2%] right-[14%] z-20 bg-white dark:bg-slate-800 rounded-lg shadow-md px-2 py-1 border border-slate-100 dark:border-slate-700/60 flex items-center gap-1.5 max-w-[155px]">
                    <div className="w-5.5 h-5.5 rounded-md bg-gradient-to-tr from-[#ec4899] to-[#f43f5e] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <TrendingUp className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <div>
                      <div className="text-[9px] font-normal text-slate-900 dark:text-white leading-tight">
                        Turning Ideas
                      </div>
                      <div className="text-[9px] text-slate-900 dark:text-white font-normal mt-0.5">
                        into Real Impact
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons Row - One line on mobile */}
              <div className="flex flex-row items-center gap-2.5 sm:gap-6 my-2.5 sm:mb-12 w-full">
                <Link
                  to="/contact"
                  className="relative inline-flex h-11 sm:h-14 overflow-hidden rounded-md p-[2px] group flex-1 sm:flex-none shadow-sm cursor-pointer"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] text-white font-semibold px-3 sm:px-8 gap-1.5 sm:gap-2 text-xs sm:text-lg whitespace-nowrap z-10 transition-all border border-[#00016E] group-hover:border-transparent">
                    Get Started{" "}
                    <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 text-white group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link
                  to="/services"
                  className="relative inline-flex h-11 sm:h-14 overflow-hidden rounded-md p-[2px] group flex-1 sm:flex-none shadow-sm cursor-pointer"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-white dark:bg-slate-800 text-[#00016E] dark:text-sky-400 font-semibold px-3 sm:px-8 gap-1.5 sm:gap-2 text-xs sm:text-lg whitespace-nowrap z-10 transition-all border border-slate-200 dark:border-slate-700 group-hover:border-transparent">
                    Explore Services{" "}
                    <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 text-[#00016E] dark:text-sky-400 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>

              {/* Startup Stats Counter Row - Black text & non-bold */}
              <div className="grid grid-cols-3 gap-3 sm:gap-8 pt-4 sm:pt-6 border-t border-slate-200/80 dark:border-slate-800">
                <div>
                  <div className="text-xl sm:text-3xl lg:text-4xl font-normal text-slate-900 dark:text-white tracking-tight">
                    Day 1
                  </div>
                  <div className="text-[11px] sm:text-sm font-normal text-slate-500 dark:text-slate-400 mt-0.5 sm:mt-1">
                    Startup Drive
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-3xl lg:text-4xl font-normal text-slate-900 dark:text-white tracking-tight">
                    100
                    <span className="text-slate-900 dark:text-white font-normal">
                      %
                    </span>
                  </div>
                  <div className="text-[11px] sm:text-sm font-normal text-slate-500 dark:text-slate-400 mt-0.5 sm:mt-1">
                    Dedicated Focus
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-3xl lg:text-4xl font-normal text-slate-900 dark:text-white tracking-tight">
                    24
                    <span className="text-slate-900 dark:text-white font-normal">
                      /7
                    </span>
                  </div>
                  <div className="text-[11px] sm:text-sm font-normal text-slate-500 dark:text-slate-400 mt-0.5 sm:mt-1">
                    Agile Support
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Building Graphic & Overlays (Desktop Only) */}
            <div className="hidden lg:flex lg:col-span-6 xl:col-span-6 relative items-center justify-end">
              {/* Soft Ambient Logo Blue Background Circle Shape */}
              <div className="absolute -left-12 sm:-left-20 lg:-left-28 top-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[480px] sm:h-[480px] lg:w-[580px] lg:h-[580px] rounded-full bg-[#e0f2fe]/50 dark:bg-sky-950/20 pointer-events-none z-0" />

              <div className="relative w-full flex items-center justify-end z-10">
                {/* Building Graphic Image */}
                <div className="relative w-full flex justify-end">
                  {/* Desktop View Image */}
                  <img
                    src={heroBgDesktop}
                    alt="ZAVYX Infotech Building"
                    style={{
                      WebkitMaskImage:
                        "linear-gradient(to right, transparent 0%, transparent 32%, black 62%, black 100%)",
                      maskImage:
                        "linear-gradient(to right, transparent 0%, transparent 32%, black 62%, black 100%)",
                    }}
                    className="w-full lg:w-[135%] xl:w-[150%] max-w-[1100px] xl:max-w-[1250px] h-auto object-contain object-right-center transform scale-135 lg:scale-145 xl:scale-155 origin-right-center -mr-8 sm:-mr-16 lg:-mr-24 xl:-mr-32 lg:-translate-y-4"
                  />
                </div>

                {/* People / Ideas / Solutions Overlay */}
                <div className="absolute top-[5%] sm:top-[7%] lg:top-[9%] left-[3rem] sm:left-[5rem] lg:left-[7rem] z-30 flex flex-col text-left">
                  <div className="w-8 h-[2.5px] bg-sky-500 mb-3" />
                  <div className="text-slate-800 dark:text-slate-100 font-semibold text-base sm:text-lg leading-tight tracking-tight">
                    <div>People</div>
                    <div>Technology</div>
                    <div className="text-slate-900 dark:text-white font-bold">
                      Impact
                    </div>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-normal mt-2">
                    Building What's Next
                  </div>
                </div>

                {/* Turning Ideas into Real Impact Overlay Card */}
                <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-6 z-20 bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl shadow-lg px-3.5 py-2 sm:px-5 sm:py-3.5 border border-slate-100 dark:border-slate-700/60 flex items-center gap-2.5 sm:gap-3.5 max-w-[200px] sm:max-w-[270px]">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-tr from-[#ec4899] to-[#f43f5e] text-white flex items-center justify-center shrink-0 shadow-md">
                    <TrendingUp className="w-4 h-4 sm:w-5.5 sm:h-5.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-sm font-normal text-slate-900 dark:text-white leading-tight">
                      Turning Ideas
                    </div>
                    <div className="text-[11px] sm:text-sm text-slate-900 dark:text-white font-normal mt-0.5">
                      into Real Impact
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE SERVICES GRID SECTION */}
      <ScrollSlideSection>
        <GridServices />
      </ScrollSlideSection>

      {/* ABOUT ZAVYX SECTION */}
      <ScrollSlideSection>
        <section className="py-6 sm:py-16 lg:py-24 bg-transparent transition-colors duration-300 relative z-20">
          <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Text & Features */}
              <div className="lg:col-span-6 flex flex-col text-left">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sky-600 dark:text-sky-400 font-normal uppercase tracking-widest text-xs sm:text-sm">
                    ABOUT ZAVYX
                  </span>
                  <span className="w-8 h-[2px] bg-sky-500 inline-block"></span>
                </div>

                <ScrollAnimatedHeading
                  text="A Technology Partner You Can Trust"
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-normal tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6 transition-opacity"
                />
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 font-normal max-w-xl">
                  ZAVYX Infotech is a growing technology company focused on
                  helping businesses use modern digital solutions to work
                  smarter, connect better and grow with confidence.
                </p>

                <div className="mb-10">
                  <Link
                    to="/about"
                    className="relative inline-flex h-12 sm:h-13 overflow-hidden rounded-md p-[2px] group w-max shadow-sm"
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#00016E_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="inline-flex h-full w-full items-center justify-center rounded-[4px] bg-[#00016E] dark:bg-white text-white dark:text-[#00016E] font-normal px-6 gap-2 text-sm sm:text-base z-10 transition-all border border-transparent group-hover:border-transparent">
                      Learn More About Us{" "}
                      <ArrowRight className="w-4 h-4 text-white dark:text-[#00016E] group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </div>

                {/* 3 Features */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-200/80 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0 bg-transparent border-0 p-0 shadow-none">
                      <Gem
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="text-sm sm:text-base font-normal text-slate-800 dark:text-slate-200 leading-snug">
                      Client-Centric Approach
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0 bg-transparent border-0 p-0 shadow-none">
                      <Users
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="text-sm sm:text-base font-normal text-slate-800 dark:text-slate-200 leading-snug">
                      Collaborative and Transparent
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0 bg-transparent border-0 p-0 shadow-none">
                      <Shield
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="text-sm sm:text-base font-normal text-slate-800 dark:text-slate-200 leading-snug">
                      Reliable and Supportive
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Realistic Logo-Themed Image with Modern Curved Frame & Logo-Color Background Shapes */}
              <div className="lg:col-span-6 relative flex justify-center items-center py-4">
                <div className="relative w-full max-w-[500px] flex items-center justify-center">
                  {/* Decorative Logo Color Theme Background Shapes */}
                  <div className="absolute -top-3 -left-3 w-44 h-44 bg-gradient-to-tr from-sky-500/30 via-pink-500/20 to-emerald-500/25 rounded-full blur-2xl pointer-events-none"></div>
                  <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-gradient-to-br from-pink-500/25 via-emerald-500/25 to-sky-500/30 rounded-full blur-2xl pointer-events-none"></div>

                  {/* Angled Backdrop Card in Logo Colors */}
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 via-rose-400/15 to-emerald-400/20 rounded-[2.5rem] rounded-tr-[5rem] rounded-bl-[5rem] -rotate-2 transform scale-102 pointer-events-none"></div>

                  {/* Floating Logo Color Accents */}
                  <div className="absolute -top-2 -right-2 w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500 to-pink-500 opacity-30 rotate-12 pointer-events-none"></div>
                  <div className="absolute -bottom-3 -left-2 w-10 h-10 rounded-full bg-emerald-500/30 pointer-events-none"></div>

                  {/* Main Image Container (NO Border, NO Shadow) */}
                  <div className="relative w-full overflow-hidden rounded-[2.5rem] rounded-tr-[5rem] rounded-bl-[5rem] border-0 shadow-none bg-transparent group z-10">
                    <img
                      src={imgAboutServices}
                      alt="ZAVYX Software Engineering Team"
                      className="w-full h-auto object-cover rounded-[2.5rem] rounded-tr-[5rem] rounded-bl-[5rem] border-0 shadow-none transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Floating Quote Card: Hidden on Mobile View */}
                  <div className="hidden sm:block absolute bottom-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-xl p-4 sm:p-5 border border-slate-100 dark:border-slate-800 max-w-[280px] z-20">
                    <Quote className="w-5 h-5 text-sky-500 fill-sky-500/20 mb-2 rotate-180" />
                    <p className="text-xs sm:text-sm font-normal text-slate-800 dark:text-slate-200 leading-snug mb-2">
                      Building meaningful digital solutions for businesses and
                      communities.
                    </p>
                    <div className="w-16 h-1 rounded-full bg-gradient-to-r from-sky-500 via-rose-500 via-emerald-500 to-amber-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollSlideSection>

      {/* OUR PROCESS SECTION (Desktop / Tablet) */}
      <div className="hidden sm:block">
        <ScrollSlideSection>
          <section className="py-16 lg:py-24 bg-transparent transition-colors duration-300 relative z-10 overflow-hidden">
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header Row */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-pink-600 dark:text-pink-400 font-normal uppercase tracking-widest text-xs sm:text-sm">
                      OUR PROCESS
                    </span>
                    <span className="w-8 h-[2px] bg-pink-500 inline-block"></span>
                  </div>
                  <ScrollAnimatedHeading
                    text="A simple and transparent process"
                    className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight text-slate-900 dark:text-white leading-[1.1] transition-opacity"
                  />
                </div>
              </div>

              {/* 5 Steps Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative">
                {[
                  {
                    step: "01",
                    title: "Discover",
                    desc: "Understand your goals and requirements.",
                    icon: Search,
                  },
                  {
                    step: "02",
                    title: "Plan",
                    desc: "Create the right strategy and roadmap.",
                    icon: FileText,
                  },
                  {
                    step: "03",
                    title: "Design",
                    desc: "Craft simple and effective designs.",
                    icon: Pencil,
                  },
                  {
                    step: "04",
                    title: "Develop",
                    desc: "Build, test and refine the solution.",
                    icon: Code,
                  },
                  {
                    step: "05",
                    title: "Launch & Support",
                    desc: "Deploy and provide ongoing support.",
                    icon: Rocket,
                  },
                ].map((p, i, arr) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={i}
                      className="flex flex-col items-start relative group p-5 sm:p-6 rounded-2xl overflow-hidden transition-all h-full"
                    >
                      <div className="absolute inset-0 bg-[#00016E] dark:bg-slate-800 origin-bottom transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out z-0"></div>

                      <div className="flex items-center gap-4 mb-5 w-full relative z-10">
                        <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#00016E] dark:bg-sky-950 text-white flex items-center justify-center shrink-0 border border-slate-700/50 transition-colors">
                          <Icon
                            className="w-6 h-6 text-white"
                            strokeWidth={2}
                          />
                        </div>
                        <span className="text-3xl sm:text-4xl font-normal text-slate-400 dark:text-slate-500 tracking-tight group-hover:text-white transition-colors duration-300">
                          {p.step}
                        </span>
                        {i < arr.length - 1 && (
                          <ArrowRight className="hidden lg:block w-4 h-4 text-slate-300 dark:text-slate-700 ml-auto transition-colors" />
                        )}
                      </div>

                      <h4 className="text-lg font-normal text-slate-900 dark:text-white mb-2 group-hover:text-white transition-colors duration-300 relative z-10">
                        {p.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm lg:text-base leading-relaxed font-normal group-hover:text-slate-200 transition-colors duration-300 relative z-10">
                        {p.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </ScrollSlideSection>
      </div>

      {/* OUR PROCESS SECTION (Mobile Only - Unwrapped so sticky works 100%) */}
      <MobileProcessSection
        steps={[
          {
            step: "01",
            title: "Discover",
            desc: "Understand your goals and requirements.",
            icon: Search,
            highlights: ["Goal Mapping", "Requirement Analysis"],
          },
          {
            step: "02",
            title: "Plan",
            desc: "Create the right strategy and roadmap.",
            icon: FileText,
            highlights: ["Tech Roadmap", "Wireframe Specs"],
          },
          {
            step: "03",
            title: "Design",
            desc: "Craft simple and effective designs.",
            icon: Pencil,
            highlights: ["UI/UX Prototypes", "Design System"],
          },
          {
            step: "04",
            title: "Develop",
            desc: "Build, test and refine the solution.",
            icon: Code,
            highlights: ["Clean Code", "QA & Testing"],
          },
          {
            step: "05",
            title: "Launch & Support",
            desc: "Deploy and provide ongoing support.",
            icon: Rocket,
            highlights: ["Cloud Launch", "24/7 Monitoring"],
          },
        ]}
      />

      {/* INDUSTRIES WE SERVE SECTION */}
      <ScrollSlideSection>
        {/* Adjusted padding to remove unwanted space below the section */}
        <section className="pt-6 sm:pt-16 lg:pt-24 pb-2 lg:pb-16 bg-transparent transition-colors duration-300 relative z-20">
          <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Row */}
            <div className="flex flex-col justify-between gap-4 lg:gap-6 mb-10 lg:mb-14 w-full">
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-sky-600 dark:text-sky-400 font-normal uppercase tracking-widest text-xs sm:text-sm">
                    INDUSTRIES WE SERVE
                  </span>
                  <span className="w-6 sm:w-8 h-[2px] bg-sky-500 inline-block"></span>
                </div>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors shrink-0"
                >
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </Link>
              </div>

              <ScrollAnimatedHeading
                text="Helping Businesses Across Industries"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-normal tracking-tight text-slate-900 dark:text-white leading-[1.1] transition-opacity"
              />
            </div>

            {/* Mobile Scroll Accordion (Overrides grid and models) */}
            <div className="block sm:hidden -mx-4">
              <MobileIndustriesAccordion items={industriesList} />
            </div>

            {/* Industries Expanding Cards Row (Desktop / Tablet only) */}
            <div className="hidden sm:grid grid-cols-1 lg:grid-cols-2 w-full gap-3 lg:gap-4 pt-4 pb-8 relative z-20 group/grid">
              {industriesList.map((ind, i) => {
                const Icon = ind.icon;

                return (
                  <ScrollSlideSection
                    key={`ind-${i}`}
                    direction="up"
                    delay={`${(i % 4) * 100}ms`}
                    className="w-full shrink-0"
                  >
                    <div
                      onMouseEnter={() => setActiveIndustry(i)}
                      onMouseLeave={() => setActiveIndustry(null)}
                      onClick={() => setActiveIndustry(i)}
                      className={`group relative flex flex-row items-center gap-3 lg:gap-4 p-3 lg:p-4 w-full h-[80px] lg:h-[100px] rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden shadow-sm hover:shadow-md bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 ${
                        activeIndustry !== null && activeIndustry !== i
                          ? "blur-sm opacity-60"
                          : "hover:border-sky-400"
                      }`}
                    >
                      <div
                        className={`w-10 h-10 lg:w-12 lg:h-12 shrink-0 flex items-center justify-center transition-colors ${activeIndustry === i ? "text-sky-600 dark:text-sky-400" : "text-slate-700 dark:text-slate-300 group-hover:text-sky-600"} `}
                      >
                        <Icon
                          className="w-7 h-7 lg:w-8 lg:h-8"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div
                        className={`font-normal text-base lg:text-lg tracking-wide uppercase transition-colors ${activeIndustry === i ? "text-sky-700 dark:text-sky-300" : "text-slate-700 dark:text-slate-200"}`}
                      >
                        {ind.title}
                      </div>
                    </div>
                  </ScrollSlideSection>
                );
              })}
            </div>

            {/* Global Hover / Click Overlay (Desktop / Tablet only) */}
            <div
              className={`hidden sm:flex fixed inset-0 z-[100] items-center justify-center transition-all duration-500 pointer-events-none ${
                activeIndustry !== null ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Blurred Overlay Background - No pointer events to allow hovering underlying cards */}
              <div className="absolute inset-0 bg-white/5 dark:bg-slate-900/10 pointer-events-none"></div>

              {/* Center Persistent Explanation Cards */}
              {industriesList.map((ind, i) => {
                const Icon = ind.icon;
                return (
                  <div
                    key={`modal-${i}`}
                    className={`absolute p-4 flex flex-col items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      activeIndustry === i
                        ? "opacity-100 scale-100 z-20 pointer-events-auto"
                        : "opacity-0 scale-95 -z-10 pointer-events-none"
                    }`}
                  >
                    <div className="relative w-full min-w-[85vw] md:min-w-[500px] max-w-xl p-6 lg:p-10 rounded-3xl flex flex-col justify-end text-left shadow-2xl overflow-hidden border border-white/20 mt-10 pointer-events-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(2,132,199,0.98)] to-[rgba(57,181,74,0.98)] shadow-inner"></div>

                      <div className="relative z-10 flex flex-col items-start gap-4">
                        <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-sm hover:scale-105 transition-transform">
                          <Icon
                            className="w-7 h-7 lg:w-8 lg:h-8"
                            strokeWidth={1.5}
                          />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                          <h3 className="text-2xl lg:text-3xl font-normal text-white">
                            {ind.title}
                          </h3>
                          <div className="text-white/95 text-base lg:text-lg font-normal tracking-wide">
                            {ind.subheading}
                          </div>
                          <div className="w-16 h-[2px] bg-white mt-1 mb-1"></div>
                          <p className="text-white/95 text-sm lg:text-base leading-relaxed font-normal">
                            {ind.desc}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveIndustry(null);
                        }}
                        onTouchEnd={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setActiveIndustry(null);
                        }}
                        className="absolute top-4 right-4 lg:top-5 lg:right-5 w-10 h-10 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors z-50 cursor-pointer"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollSlideSection>

      {/* TESTIMONIALS SECTION */}
      <ScrollSlideSection>
        {/* Adjusted top padding to synergize with Industries bottom padding fix */}
        <section className="pt-4 sm:pt-8 lg:pt-16 pb-6 sm:pb-16 lg:pb-24 overflow-hidden relative bg-transparent transition-colors duration-300">
          {/* Constrained Header Container */}
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col">
            {/* Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 lg:mb-14 gap-6 w-full">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-emerald-600 dark:text-emerald-400 font-normal uppercase tracking-widest text-xs sm:text-sm">
                    TESTIMONIALS
                  </span>
                  <span className="w-8 h-[2px] bg-emerald-500 inline-block"></span>
                </div>
                <ScrollAnimatedHeading
                  text="What Our Customers Say"
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-normal tracking-tight text-slate-900 dark:text-white leading-[1.1] transition-opacity"
                />
              </div>
            </div>
          </div>

          {/* FULL WIDTH SLIDER */}
          <div className="relative w-full h-[380px] lg:h-[420px] flex items-center justify-center overflow-visible mt-6 lg:mt-8">
            {testimonialsList.map((t, idx) => {
              let positionOffset = idx - activeTestimonial;
              // Wrap indices for a seamless 3-item look
              if (positionOffset === -2) positionOffset = 1;
              if (positionOffset === 2) positionOffset = -1;

              const isCenter = positionOffset === 0;

              return (
                <div
                  key={idx}
                  className="absolute w-[90%] max-w-[380px] md:max-w-[420px] lg:max-w-[500px] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  style={{
                    transform: `translateX(${positionOffset * 105}%) scale(${isCenter ? 1 : 0.85})`,
                    opacity: isCenter ? 1 : 0.4,
                    zIndex: isCenter ? 10 : 0,
                  }}
                >
                  <div className="flex flex-col bg-white dark:bg-slate-800 rounded-[20px] overflow-hidden w-full h-full border border-slate-100/50 dark:border-slate-700/50">
                    {/* Top part with Quote and Text */}
                    <div className="p-8 pt-10 flex flex-col flex-grow bg-white dark:bg-slate-800">
                      <Quote className="w-12 h-12 text-sky-400 fill-sky-200 dark:fill-sky-900 mb-6 rotate-180 opacity-60" />
                      <p className="text-slate-600 dark:text-slate-300 font-normal leading-relaxed lg:text-lg min-h-[100px]">
                        {t.text}
                      </p>
                    </div>
                    {/* Bottom part with Author */}
                    <div className="px-8 py-6 bg-slate-50 dark:bg-slate-900/50 flex items-center gap-4">
                      <img
                        src={t.img}
                        alt={t.author}
                        className="w-12 h-12 rounded-full object-cover shadow-none border-0"
                      />
                      <div className="flex flex-col">
                        <h4 className="text-slate-900 dark:text-white font-semibold text-[17px]">
                          {t.author}
                        </h4>
                        <p className="text-sky-500 dark:text-sky-400 text-[14px] font-medium">
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Constrained Navigation Controls */}
          <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-center gap-6 mt-12 relative z-10 w-full">
            <button
              onClick={() =>
                setActiveTestimonial(
                  (prev) =>
                    (prev - 1 + testimonialsList.length) %
                    testimonialsList.length,
                )
              }
              className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-sky-500 hover:bg-sky-50 dark:hover:bg-slate-700 transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
            </button>
            <div className="flex gap-2">
              {testimonialsList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`rounded-full transition-all duration-300 ${idx === activeTestimonial ? "w-2.5 h-2.5 bg-sky-500" : "w-2 h-2 bg-slate-200 dark:bg-slate-700 mt-[1px]"}`}
                />
              ))}
            </div>
            <button
              onClick={() =>
                setActiveTestimonial(
                  (prev) => (prev + 1) % testimonialsList.length,
                )
              }
              className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-sky-500 hover:bg-sky-50 dark:hover:bg-slate-700 transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </ScrollSlideSection>
    </div>
  );
}
