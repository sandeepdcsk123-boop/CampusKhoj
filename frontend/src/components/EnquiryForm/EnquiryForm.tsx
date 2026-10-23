import { useState } from "react";

type FormData = {
  name: string;
  phone: string;
  course: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  phone: "",
  course: "",
  message: "",
};

const inputClass =
  "w-full rounded-xl border border-slate-200/90 bg-slate-50/80 px-4 py-3 text-sm text-[#172440] outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-[#D9A441] focus:bg-white focus:ring-4 focus:ring-[#D9A441]/10";

export default function EnquiryForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setSuccess(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Frontend demo only. Connect the backend API here later.
    console.log("CampusKhoj enquiry:", form);

    setSuccess(true);
    setForm(initialForm);
  };

  return (
    <section
      id="enquiry"
      className="relative isolate overflow-hidden px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      style={{
        backgroundColor: "#F4F6FA",
        backgroundImage: `
          radial-gradient(ellipse at 8% 15%, rgba(217,164,65,0.18), transparent 35%),
          radial-gradient(ellipse at 90% 75%, rgba(54,100,170,0.16), transparent 38%),
          linear-gradient(135deg, #F8F9FC 0%, #EDF2F8 50%, #F7F5F0 100%)
        `,
      }}
    >
      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.20]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30,42,71,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(30,42,71,0.08) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage: "linear-gradient(to bottom, black, transparent 90%)",
        }}
      />

      {/* Decorative glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-blue-300/25 blur-3xl"
      />

      {/* Decorative rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-12 hidden h-36 w-36 rounded-full border border-[#D9A441]/25 lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[10%] top-16 hidden h-28 w-28 rounded-full border border-[#D9A441]/20 lg:block"
      />

      <div className="relative z-10 mx-auto grid max-w-5xl items-center gap-9 md:grid-cols-2 md:gap-12">

        {/* Left Content */}
        <div className="max-w-lg">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D9A441]/30 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#C99A3B]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#946A20]">
              Your future starts here
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[#172440] sm:text-4xl lg:text-[46px]">
            Find Your
            <span className="block text-[#B8872F]">
              Perfect College.
            </span>
          </h2>

          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600 sm:text-base">
            Your dream career begins with the right college.
            Tell us what you are looking for and take the first
            step towards your future.
          </p>

          {/* Benefits */}
          <div className="mt-7 space-y-4">
            {[
              {
                title: "Discover the right colleges",
                text: "Explore options across Greater Noida and NCR.",
              },
              {
                title: "Compare courses and budgets",
                text: "Find options that match your preferences.",
              },
              {
                title: "Plan your next step",
                text: "Share your questions and admission goals.",
              },
            ].map((item, index) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#D9A441]/25 bg-white/80 text-sm font-bold text-[#B8872F] shadow-sm">
                  0{index + 1}
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#172440]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3 border-t border-slate-300/60 pt-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#172440] text-lg text-[#E9BC63]">
              ✦
            </div>
            <div>
              <p className="text-sm font-bold text-[#172440]">
                CampusKhoj
              </p>
              <p className="text-xs text-slate-500">
                Discover. Compare. Choose.
              </p>
            </div>
          </div>
        </div>

        {/* Compact Premium Form */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-1 rounded-[26px] bg-gradient-to-br from-[#D9A441]/40 via-white/40 to-blue-300/40 blur-sm"
          />

          <form
            onSubmit={handleSubmit}
            className="relative rounded-2xl border border-white/90 bg-white/95 p-5 shadow-[0_25px_70px_-20px_rgba(23,36,64,0.20)] backdrop-blur-xl sm:p-7"
          >
            <div className="mb-5 flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B8872F]">
                  Student enquiry
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#172440]">
                  Quick Enquiry
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Just a few details to get started.
                </p>
              </div>

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#172440] text-xl text-[#E9BC63] shadow-md">
                ✦
              </div>
            </div>

            {success && (
              <div
                role="status"
                className="mb-4 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-xs leading-5 text-emerald-800"
              >
                <p className="font-semibold">Demo submission successful!</p>
                <p>
                  Backend connection pending. Your enquiry is not saved
                  to a database yet.
                </p>
              </div>
            )}

            <div className="space-y-3.5">
              <div>
                <label
                  htmlFor="enquiry-name"
                  className="mb-1.5 block text-xs font-semibold text-slate-700"
                >
                  Full name *
                </label>
                <input
                  id="enquiry-name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  maxLength={100}
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="enquiry-phone"
                  className="mb-1.5 block text-xs font-semibold text-slate-700"
                >
                  Mobile number *
                </label>
                <input
                  id="enquiry-phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  autoComplete="tel"
                  inputMode="numeric"
                  pattern="[6-9][0-9]{9}"
                  title="Enter a valid 10-digit Indian mobile number"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="enquiry-course"
                  className="mb-1.5 block text-xs font-semibold text-slate-700"
                >
                  Interested course *
                </label>
                <select
                  id="enquiry-course"
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  required
                  className={`${inputClass} cursor-pointer`}
                >
                  <option value="">Select your preferred course</option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="BCA">BCA</option>
                  <option value="BBA">BBA</option>
                  <option value="MBA">MBA</option>
                  <option value="MCA">MCA</option>
                  <option value="M.Tech">M.Tech</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="enquiry-message"
                  className="mb-1.5 block text-xs font-semibold text-slate-700"
                >
                  Your message *
                </label>
                <textarea
                  id="enquiry-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={2}
                  maxLength={1000}
                  required
                  className={`${inputClass} min-h-20 resize-y`}
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#172440] px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#172440]/15 transition duration-300 hover:-translate-y-0.5 hover:bg-[#263958] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#D9A441]/25"
              >
                Submit Enquiry
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E9BC63"
                  strokeWidth="2"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14m-6-6 6 6-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <p className="text-center text-[10px] leading-5 text-slate-400">
                Your college journey starts here · CampusKhoj
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}