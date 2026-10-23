
import {
//   Instagram,
//   Facebook,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  GraduationCap,
  Heart,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Explore Colleges", href: "/colleges" },
  { label: "Find My College", href: "/find-my-college" },
  { label: "Free Counselling", href: "/counselling" },
];

const exploreLinks = [
  { label: "Engineering Colleges", href: "/colleges?course=engineering" },
  { label: "Management Colleges", href: "/colleges?course=management" },
  { label: "Courses & Fees", href: "/colleges" },
  { label: "Admission Guidance", href: "/counselling" },
];

const contactNumbers = [
  "9450604814",
  "7236821997",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0B1220] text-white">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-amber-400/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blue-500/[0.08] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 pb-6 pt-14 sm:px-8 sm:pt-20 lg:px-12">

        {/* Top CTA */}
        <div className="mb-14 overflow-hidden rounded-3xl border border-amber-300/20 bg-gradient-to-r from-[#18243B] via-[#17243A] to-[#202B40] p-6 sm:p-9 lg:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1.5 text-xs font-semibold text-amber-300">
                <Sparkles size={14} />
                YOUR FUTURE STARTS HERE
              </span>

              <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
                Find your dream college.
                <span className="mt-1 block text-amber-300">
                  Build your future.
                </span>
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
                Explore colleges, compare courses and take the next step
                towards your career with CampusKhoj.
              </p>
            </div>

            <a
              href="/find-my-college"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 to-amber-500 px-5 py-3.5 text-sm font-bold text-[#111827] shadow-lg shadow-amber-500/10 transition hover:-translate-y-1 hover:shadow-amber-400/20"
            >
              Find My College
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        {/* Main footer columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-4">
            <a
              href="/"
              aria-label="CampusKhoj home"
              className="inline-flex items-center gap-3"
            >
              {/* Replace this icon with your logo image if available */}
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-amber-300/30 bg-gradient-to-br from-amber-300 to-amber-500 text-[#111827] shadow-lg shadow-amber-500/10">
                <GraduationCap size={28} strokeWidth={2.2} />
              </span>

              <span className="text-2xl font-black tracking-tight sm:text-3xl">
                Campus<span className="text-amber-400">Khoj</span>
                <span className="ml-1.5 align-top text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  ®
                </span>
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Your trusted starting point for college discovery. Explore
              educational opportunities in Greater Noida and NCR, compare
              your options and make informed decisions about your future.
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm text-slate-300">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-amber-400/10 text-amber-300">
                <Heart size={15} />
              </span>
              Made for students, built for their future.
            </div>

            {/* Social links */}
            <div className="mt-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                Follow CampusKhoj
              </p>

              <div className="flex flex-wrap gap-3">
                {/* <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:-translate-y-1 hover:border-pink-400/50 hover:bg-pink-500/10 hover:text-pink-300"
                >
                  <Instagram size={20} />
                </a> */}

                {/* <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-300"
                >
                  <Facebook size={20} />
                </a> */}

                <a
                  href={`https://wa.me/91${contactNumbers[0]}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:-translate-y-1 hover:border-emerald-400/50 hover:bg-emerald-500/10 hover:text-emerald-300"
                >
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 text-base font-bold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-amber-300"
                  >
                    <ChevronRight
                      size={14}
                      className="text-slate-600 transition group-hover:translate-x-0.5 group-hover:text-amber-300"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 text-base font-bold text-white">
              Explore & Discover
            </h3>

            <ul className="space-y-3.5">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-amber-300"
                  >
                    <ChevronRight
                      size={14}
                      className="text-slate-600 transition group-hover:translate-x-0.5 group-hover:text-amber-300"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-amber-300/15 bg-amber-300/[0.05] p-4">
              <div className="flex items-center gap-2 text-sm font-bold text-amber-300">
                <Sparkles size={16} />
                Need guidance?
              </div>
              <p className="mt-2 text-xs leading-5 text-slate-400">
                Have questions about choosing the right college? Get in touch
                with our team.
              </p>
              <a
                href="/counselling"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-white transition hover:text-amber-300"
              >
                Get counselling
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 text-base font-bold text-white">
              Get in Touch
            </h3>

            <div className="space-y-5">

              {/* Phone numbers */}
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-amber-300/15 bg-amber-300/[0.07] text-amber-300">
                  <Phone size={18} />
                </span>

                <div className="min-w-0 flex-1">
                  <p className="mb-2 text-xs font-medium text-slate-500">
                    Call us for enquiries
                  </p>

                  {contactNumbers.map((number) => (
                    <a
                      key={number}
                      href={`tel:${number}`}
                      className="mb-2 block w-fit text-sm font-semibold tracking-wide text-slate-200 transition hover:text-amber-300"
                    >
                      +91 {number}
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/91${contactNumbers[0]}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] p-3.5 transition hover:border-emerald-400/40 hover:bg-emerald-400/10"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-400/10 text-emerald-300">
                  <MessageCircle size={20} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold text-white">
                    Chat on WhatsApp
                  </span>
                  <span className="mt-1 block text-xs text-slate-400">
                    Get in touch with us
                  </span>
                </span>

                <ArrowUpRight size={16} className="text-emerald-300" />
              </a>

              {/* Location */}
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-amber-300/15 bg-amber-300/[0.07] text-amber-300">
                  <MapPin size={18} />
                </span>

                <div>
                  <p className="text-sm font-semibold text-slate-200">
                    Greater Noida
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>

              {/* Email placeholder */}
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-amber-300/15 bg-amber-300/[0.07] text-amber-300">
                  <Mail size={18} />
                </span>

                <div>
                  <p className="text-sm font-semibold text-slate-200">
                    Email Enquiries
                  </p>
                  <a
                    href="/counselling"
                    className="mt-1 inline-flex items-center gap-1 text-xs text-slate-400 transition hover:text-amber-300"
                  >
                    Contact us through our form
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-xs leading-5 text-slate-500">
              © {currentYear}{" "}
              <span className="font-semibold text-slate-300">
                CampusKhoj
              </span>
              . All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-500">
              <a
                href="/privacy-policy"
                className="transition hover:text-amber-300"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="transition hover:text-amber-300"
              >
                Terms & Conditions
              </a>
              <a
                href="/counselling"
                className="transition hover:text-amber-300"
              >
                Contact
              </a>
            </div>

            <p className="flex items-center gap-1.5 text-xs text-slate-500">
              Made with <Heart size={12} className="fill-rose-400 text-rose-400" />{" "}
              for students
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
