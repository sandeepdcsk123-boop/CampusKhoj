import { useEffect, useState } from "react";
import AICollegeFinder from "../AI/AICollegeFinder";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  GraduationCap,
  MapPin,
  MessageCircle,
  Search,
  Sparkles,
  UsersRound,
} from "lucide-react";
<AICollegeFinder />;
import banner1 from "../../assets/Hero/bannar.jpg";
import banner2 from "../../assets/Hero/bannar2.jpg";

const slides = [
  {
    tag: "ADMISSIONS OPEN · 2026–27",
    eyebrow: "YOUR FUTURE. YOUR CHOICE.",
    title: "Your Dream College Is",
    highlight: "Closer Than You Think.",
    description:
      "Confused about which college to choose? Explore colleges in Greater Noida & NCR, compare courses and fees, and take your next step with confidence.",
    image: banner1,
    imageAlt: "Campus atmosphere for college admissions",
    primary: "Explore Colleges",
    kind: "colleges",
  },
  {
    tag: "PERSONALISED ADMISSION GUIDANCE",
    eyebrow: "YOUR JOURNEY STARTS HERE.",
    title: "The Right Choice",
    highlight: "Changes Everything.",
    description:
      "Find a course that matches your goals, understand your options, and get personal guidance to make your college decision easier.",
    image: banner2,
    imageAlt: "Explore college and course options",
    primary: "Get Free Counselling",
    kind: "enquiry",
  },
];

// const WHATSAPP_LINK =
//   "https://wa.me/919450604814?text=Hello%20CampusKhoj%2C%20I%20need%20help%20with%20college%20admission.";

export default function Hero() {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  function openEnquiry() {
    window.dispatchEvent(new Event("campuskhoj:open-enquiry"));
  }

  function nextSlide() {
    setActive((current) => (current + 1) % slides.length);
  }

  function previousSlide() {
    setActive((current) => (current - 1 + slides.length) % slides.length);
  }

  return (
    <section
      aria-label="CampusKhoj college admissions"
      className="relative isolate mx-auto w-full overflow-hidden bg-[#09152b] text-white"
    >
      {/* Background images */}
      {slides.map((item, index) => (
        <img
          key={item.image}
          src={item.image}
          alt={item.imageAlt}
          fetchPriority={index === 0 ? "high" : "auto"}
          className={`absolute inset-0 -z-30 h-full w-full object-cover object-center transition-opacity duration-1000 ${
            active === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Deep navy overlays for readability */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#081329] via-[#081329]/95 to-[#081329]/45" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-[#081329]/90 via-transparent to-[#081329]/15" />

      {/* Decorative background details */}
      <div className="pointer-events-none absolute -left-32 top-0 -z-10 h-80 w-80 rounded-full border border-white/[0.07]" />
      <div className="pointer-events-none absolute -left-20 top-10 -z-10 h-64 w-64 rounded-full border border-white/[0.06]" />
      <div className="pointer-events-none absolute right-[15%] top-[10%] -z-10 h-56 w-56 rounded-full bg-amber-400/10 blur-[100px]" />

      {/* Main hero content */}
      <div className="mx-auto grid min-h-[560px] max-w-7xl items-center gap-10 px-5 pb-28 pt-14 sm:px-8 sm:pb-32 sm:pt-16 lg:min-h-[610px] lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:px-12 lg:py-20">
        <div
          key={active}
          className="relative z-10 max-w-3xl animate-[heroReveal_650ms_ease-out]"
        >
          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[3px] w-10 rounded-full bg-amber-400" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-amber-300 sm:text-xs">
              {slide.eyebrow}
            </span>
          </div>

          {/* Admission tag */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2.5 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[10px] font-bold tracking-[0.12em] text-white sm:text-xs">
              {slide.tag}
            </span>
          </div>

          {/* Headline */}
          <h1 className="max-w-3xl text-[38px] font-black leading-[1.12] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-[62px]">
            {slide.title}
            <span className="mt-1 block bg-gradient-to-r from-amber-200 via-amber-400 to-orange-300 bg-clip-text text-transparent">
              {slide.highlight}
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
            {slide.description}
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {slide.kind === "colleges" ? (
              <a
                href="#featured-colleges"
                className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-300 px-6 py-3.5 text-sm font-extrabold text-[#10192c] shadow-[0_8px_35px_rgba(251,191,36,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(251,191,36,0.32)]"
              >
                <GraduationCap size={21} />
                Explore Colleges
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            ) : (
              <button
                type="button"
                onClick={openEnquiry}
                className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-300 px-6 py-3.5 text-sm font-extrabold text-[#10192c] shadow-[0_8px_35px_rgba(251,191,36,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(251,191,36,0.32)]"
              >
                <MessageCircle size={19} />
                Get Free Counselling
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            )}

            <a
              href="#college-search"
              className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/[0.07] px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition duration-300 hover:border-amber-300/70 hover:bg-white/[0.13]"
            >
              <Search size={19} />
              Find My College
              <ArrowDownRight
                size={18}
                className="text-amber-300 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </a>
          </div>

          {/* Key benefits */}
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-4 border-t border-white/15 pt-6 sm:gap-x-8">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-amber-400/40 bg-amber-400/10 text-amber-300">
                <BookOpen size={20} />
              </span>
              <span className="text-xs font-semibold leading-5 text-white/90">
                Course & Fee
                <br />
                Guidance
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-amber-400/40 bg-amber-400/10 text-amber-300">
                <MapPin size={20} />
              </span>
              <span className="text-xs font-semibold leading-5 text-white/90">
                Greater Noida
                <br />& NCR
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-amber-400/40 bg-amber-400/10 text-amber-300">
                <UsersRound size={20} />
              </span>
              <span className="text-xs font-semibold leading-5 text-white/90">
                Personalised
                <br />
                Admission Support
              </span>
            </div>
          </div>
        </div>

        {/* Right-side visual accent */}
        <div className="relative hidden h-full min-h-[360px] items-center justify-center lg:flex">
          <div className="absolute right-2 top-[12%] h-56 w-56 rounded-full bg-amber-300/10 blur-[85px]" />

          <div className="relative w-full max-w-[390px]">
            <div className="absolute -inset-4 rounded-[34px] border border-white/10 rotate-3" />
            <div className="absolute -inset-2 rounded-[30px] border border-amber-300/20 -rotate-2" />

            <div className="relative rounded-[26px] border border-white/20 bg-white/[0.08] p-6 shadow-2xl backdrop-blur-xl">
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-amber-300">
                    YOUR NEXT CHAPTER
                  </p>
                  <p className="mt-1 text-lg font-extrabold">
                    Starts with a choice.
                  </p>
                </div>
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-amber-400 text-[#10192c]">
                  <Sparkles size={22} />
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0b1830]/75 p-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blue-400/15 text-blue-200">
                    <GraduationCap size={25} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold">Explore Colleges</p>
                    <p className="mt-1 text-xs leading-5 text-slate-300">
                      Discover options for your future
                    </p>
                  </div>
                  <ArrowRight size={18} className="text-amber-300" />
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0b1830]/75 p-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-amber-400/15 text-amber-300">
                    <Search size={23} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold">Compare Your Options</p>
                    <p className="mt-1 text-xs leading-5 text-slate-300">
                      Courses, fees and locations
                    </p>
                  </div>
                  <ArrowRight size={18} className="text-amber-300" />
                </div>

                <button
                  type="button"
                  onClick={openEnquiry}
                  className="flex w-full items-center gap-4 rounded-2xl border border-amber-300/30 bg-gradient-to-r from-amber-400/20 to-orange-300/10 p-4 text-left transition hover:border-amber-300/60 hover:bg-amber-400/15"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-amber-400 text-[#10192c]">
                    <MessageCircle size={23} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-extrabold">
                      Get Personal Guidance
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-slate-300">
                      Let’s find the right path for you
                    </span>
                  </span>
                  <ArrowRight size={18} className="text-amber-300" />
                </button>
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-white/15 pt-5">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <p className="text-xs text-slate-300">
                  Your college search, made simpler.
                </p>
              </div>
            </div>

            {/* Floating WhatsApp card */}
            {/* <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-7 -right-5 flex items-center gap-3 rounded-2xl border border-emerald-200/40 bg-white px-4 py-3 text-[#142033] shadow-xl transition hover:-translate-y-1 sm:-right-8"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-500 text-white">
                <MessageCircle size={22} />
              </span>
              <span>
                <span className="block text-xs font-bold">Have a question?</span>
                <span className="mt-1 block text-xs font-extrabold text-emerald-600">
                  Chat with us on WhatsApp
                </span>
              </span>
              <ArrowRight size={17} className="text-emerald-600" />
            </a> */}
          </div>
        </div>
      </div>

      {/* Slider controls */}
      <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between sm:bottom-7 sm:left-8 sm:right-8 lg:bottom-8 lg:left-12 lg:right-12">
        <div className="flex items-center gap-3">
          <span className="text-xl font-black tabular-nums text-white">
            0{active + 1}
          </span>
          <span className="text-sm text-white/40">/ 0{slides.length}</span>

          <div className="ml-2 flex gap-1.5 sm:ml-4">
            {slides.map((item, index) => (
              <button
                key={item.tag}
                type="button"
                aria-label={`Show slide ${index + 1}`}
                aria-pressed={active === index}
                onClick={() => setActive(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  active === index
                    ? "w-10 bg-amber-400"
                    : "w-4 bg-white/35 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous slide"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/25 bg-white/[0.08] text-white backdrop-blur transition hover:border-amber-300 hover:bg-amber-400 hover:text-[#10192c]"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/25 bg-white/[0.08] text-white backdrop-blur transition hover:border-amber-300 hover:bg-amber-400 hover:text-[#10192c]"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes heroReveal {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
("");
