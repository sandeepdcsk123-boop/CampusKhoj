import { useEffect, useState, type FormEvent } from "react";

const NAV_LINKS = [
  { label: "Colleges", href: "/colleges" },
  { label: "Courses", href: "/courses" },
  { label: "Compare", href: "/compare" },
  { label: "Find My College", href: "/find-my-college" },
];

const PHONE_NUMBER = "9450604814";
const WHATSAPP_LINK =
  "https://wa.me/919450604814?text=Hello%20CampusKhoj%2C%20I%20need%20college%20counselling.";

const inputClass =
  "mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/10";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    course: "",
    location: "Greater Noida",
  });

  useEffect(() => {
    if (!showEnquiry) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setShowEnquiry(false);
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [showEnquiry]);

  function openCounselling() {
    setOpen(false);
    setSubmitted(false);
    setShowEnquiry(true);
  }
  
useEffect(() => {
  function handleOpenEnquiry() {
    openCounselling();
  }

  window.addEventListener("campuskhoj:open-enquiry", handleOpenEnquiry);

  return () => {
    window.removeEventListener(
      "campuskhoj:open-enquiry",
      handleOpenEnquiry
    );
  };
}, []);


  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Demo only: connect an API/backend to save real enquiries.
    console.log("CampusKhoj enquiry:", form);
    setSubmitted(true);
  }

  function closeModal() {
    setShowEnquiry(false);
  }

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 border-b border-[#D8DEE8] bg-[#F7F8FA]/95 shadow-sm backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[70px] items-center justify-between gap-3">
            {/* Logo */}
            <a
              href="/"
              aria-label="CampusKhoj home"
              className="group flex shrink-0 items-center gap-2.5"
            >
              <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-[#1E2A47] shadow-md transition duration-300 group-hover:scale-105">
                <span className="absolute inset-1.5 rounded-lg border border-white/25" />
                <span className="text-xl font-bold text-[#E8A33D]">C</span>
                <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[#E8A33D]" />
              </span>

              <span>
                <span
                  className="block text-[20px] font-semibold leading-tight tracking-tight text-[#1E2A47] sm:text-[21px]"
                  style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                >
                  Campus<span className="text-[#B87924]">Khoj</span>
                </span>
                <span className="mt-0.5 block text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  Discover your future
                </span>
              </span>
            </a>

            {/* Desktop navigation */}
            <nav
              aria-label="Main navigation"
              className="hidden items-center gap-6 lg:flex xl:gap-8"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative py-2 text-[13px] font-semibold text-[#43516A] transition-colors duration-200 hover:text-[#B87924] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#E8A33D] after:transition-all after:duration-300 hover:after:w-full xl:text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop contact and actions */}
            <div className="hidden items-center gap-3 md:flex">
              {/* Contact number */}
              <a
                href={`tel:+91${PHONE_NUMBER}`}
                className="hidden items-center gap-2 text-[#1E2A47] transition hover:text-[#B87924] xl:flex"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full border border-[#D8DEE8] bg-white">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.35 1.84.58 2.8.7A2 2 0 0 1 22 16.92Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <span>
                  <span className="block text-[10px] font-medium text-slate-500">
                    Contact Us
                  </span>
                  <span className="block text-sm font-bold">
                    {PHONE_NUMBER}
                  </span>
                </span>
              </a>

              {/* Counselling popup button */}
              <button
                type="button"
                onClick={openCounselling}
                className="inline-flex items-center gap-2 rounded-xl bg-[red] px-3 py-2.5 text-xs font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#293B60] sm:px-4 sm:text-sm"
              >
                <span className="text-base text-[#F0BB62]">✦</span>
                <span className="hidden xl:inline">Talk to a Counsellor</span>
                <span className="xl:hidden">Counsellor</span>
              </button>

              {/* WhatsApp button */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact CampusKhoj on WhatsApp"
                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-3 py-2.5 text-xs font-bold text-white shadow-md shadow-green-600/15 transition duration-300 hover:-translate-y-0.5 hover:bg-[#1EBE5D] sm:text-sm"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.5 0 .14 5.35.14 11.93c0 2.1.55 4.15 1.6 5.96L0 24l6.27-1.64a11.93 11.93 0 0 0 5.8 1.48h.01c6.58 0 11.94-5.35 11.94-11.93 0-3.18-1.24-6.17-3.5-8.43ZM12.08 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.97.99-3.62-.24-.37a9.85 9.85 0 0 1-1.52-5.26c0-5.47 4.45-9.92 9.91-9.92a9.84 9.84 0 0 1 7.01 2.91 9.84 9.84 0 0 1 2.9 7.02c0 5.46-4.45 9.91-9.92 9.91Zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.49-.89-.79-1.49-1.76-1.67-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.3 1.26.48 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={
                open ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={open}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white text-[#1E2A47] transition hover:border-[#E8A33D] hover:bg-amber-50 md:hidden"
            >
              {open ? (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
                </svg>
              ) : (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {open && (
          <nav
            aria-label="Mobile navigation"
            className="border-t border-[#D8DEE8] bg-white px-4 pb-5 pt-3 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-slate-100 py-3.5 text-sm font-semibold text-[#43516A] transition hover:text-[#B87924]"
              >
                {link.label}
                <span className="text-slate-400">↗</span>
              </a>
            ))}

            {/* Mobile contact number */}
            <a
              href={`tel:+91${PHONE_NUMBER}`}
              className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-[#1E2A47] transition hover:bg-slate-50"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.35 1.84.58 2.8.7A2 2 0 0 1 22 16.92Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Contact Us: {PHONE_NUMBER}
            </a>

            {/* Mobile WhatsApp */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#1EBE5D]"
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.5 0 .14 5.35.14 11.93c0 2.1.55 4.15 1.6 5.96L0 24l6.27-1.64a11.93 11.93 0 0 0 5.8 1.48h.01c6.58 0 11.94-5.35 11.94-11.93 0-3.18-1.24-6.17-3.5-8.43ZM12.08 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.97.99-3.62-.24-.37a9.85 9.85 0 0 1-1.52-5.26c0-5.47 4.45-9.92 9.91-9.92a9.84 9.84 0 0 1 7.01 2.91 9.84 9.84 0 0 1 2.9 7.02c0 5.46-4.45 9.91-9.92 9.91Z" />
                <path d="M17.52 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.49-.89-.79-1.49-1.76-1.67-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.3 1.26.48 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
              </svg>
              Chat on WhatsApp
            </a>

            {/* Mobile counselling */}
            <button
              type="button"
              onClick={openCounselling}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#1E2A47] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#293B60]"
            >
              <span className="text-[#F0BB62]">✦</span>
              Talk to a Counsellor
              <span className="text-[#F0BB62]">→</span>
            </button>
          </nav>
        )}
      </header>

      {/* ================= COMPACT ENQUIRY POPUP ================= */}
      {showEnquiry && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#101827]/65 p-3 backdrop-blur-sm sm:p-5"
          onClick={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-title"
            className="relative my-auto w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl sm:rounded-3xl"
          >
            {/* Popup heading */}
            <div className="relative overflow-hidden bg-[#1E2A47] px-5 py-5 text-white sm:px-7 sm:py-6">
              <div className="pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full border border-white/10" />
              <div className="pointer-events-none absolute -right-2 -top-5 h-24 w-24 rounded-full border border-[#E8A33D]/25" />

              <button
                type="button"
                onClick={closeModal}
                aria-label="Close enquiry form"
                className="absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-white/10 text-xl text-white transition hover:bg-white/20 sm:right-4 sm:top-4"
              >
                ×
              </button>

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F0BB62]">
                CampusKhoj Counselling
              </p>

              <h2
                id="enquiry-title"
                className="mt-1.5 pr-8 text-2xl font-semibold leading-tight sm:text-[28px]"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                Find your perfect college
              </h2>

              <p className="mt-1.5 text-xs leading-5 text-slate-300 sm:text-sm">
                Share your details and get personalised guidance.
              </p>
            </div>

            {/* Popup form */}
            <div className="p-5 sm:p-7">
              {submitted ? (
                <div className="py-5 text-center">
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-emerald-50 text-2xl text-emerald-600">
                    ✓
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-[#1E2A47]">
                    Thank you!
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Your form was submitted in this demo. To receive actual
                    enquiries, connect a backend or form service.
                  </p>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="mt-5 rounded-xl bg-[#1E2A47] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#293B60]"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-x-4 gap-y-3.5 sm:grid-cols-2">
                    <label className="block text-xs font-bold text-slate-700">
                      Full name *
                      <input
                        type="text"
                        name="name"
                        autoComplete="name"
                        required
                        maxLength={80}
                        placeholder="Enter your name"
                        value={form.name}
                        onChange={(event) =>
                          setForm({ ...form, name: event.target.value })
                        }
                        className={inputClass}
                      />
                    </label>

                    <label className="block text-xs font-bold text-slate-700">
                      Mobile number *
                      <input
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        inputMode="tel"
                        pattern="[0-9+() -]{10,16}"
                        required
                        placeholder="Enter mobile number"
                        value={form.phone}
                        onChange={(event) =>
                          setForm({ ...form, phone: event.target.value })
                        }
                        className={inputClass}
                      />
                    </label>

                    <label className="block text-xs font-bold text-slate-700">
                      Interested course *
                      <select
                        name="course"
                        required
                        value={form.course}
                        onChange={(event) =>
                          setForm({ ...form, course: event.target.value })
                        }
                        className={inputClass}
                      >
                        <option value="">Select course</option>
                        <option value="B.Tech">B.Tech</option>
                        <option value="BCA">BCA</option>
                        <option value="BBA">BBA</option>
                        <option value="MBA">MBA</option>
                        <option value="MCA">MCA</option>
                        <option value="Design">Design</option>
                        <option value="Other">Other</option>
                      </select>
                    </label>

                    <label className="block text-xs font-bold text-slate-700">
                      Preferred location
                      <select
                        name="location"
                        value={form.location}
                        onChange={(event) =>
                          setForm({ ...form, location: event.target.value })
                        }
                        className={inputClass}
                      >
                        <option value="Greater Noida">Greater Noida</option>
                        <option value="Noida">Noida</option>
                        <option value="Ghaziabad">Ghaziabad</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Anywhere in NCR">Anywhere in NCR</option>
                      </select>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#1E2A47] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#1E2A47]/15 transition hover:-translate-y-0.5 hover:bg-[#293B60] focus:outline-none focus:ring-4 focus:ring-amber-400/30"
                  >
                    Submit Enquiry
                    <span className="text-[#F0BB62]">→</span>
                  </button>

                  <p className="mt-3 text-center text-[10px] leading-4 text-slate-400">
                    Your details will be used to respond to your enquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
