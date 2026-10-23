import { useState, type FormEvent } from "react";

const courses = [
  { value: "btech", label: "B.Tech", icon: "⌘" },
  { value: "bca", label: "BCA", icon: "⌨" },
  { value: "bba", label: "BBA", icon: "▤" },
  { value: "mba", label: "MBA", icon: "↗" },
  { value: "mca", label: "MCA", icon: "⌘" },
  { value: "design", label: "Design", icon: "✳" },
];

const locations = [
  { value: "greater-noida", label: "Greater Noida" },
  { value: "noida", label: "Noida" },
  { value: "ghaziabad", label: "Ghaziabad" },
  { value: "delhi", label: "Delhi" },
];

const budgets = [
  { value: "0-2", label: "Under ₹2 lakh" },
  { value: "2-4", label: "₹2–4 lakh" },
  { value: "4-6", label: "₹4–6 lakh" },
  { value: "6+", label: "Above ₹6 lakh" },
];

const selectClass =
  "mt-2 w-full appearance-none rounded-xl border border-slate-200/80 bg-white px-4 py-3.5 pr-10 text-sm font-medium text-[#172440] outline-none transition duration-200 hover:border-amber-300 focus:border-[#D9A441] focus:ring-4 focus:ring-[#D9A441]/15";

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path d="m16 16 4.5 4.5" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="pointer-events-none absolute right-3.5 top-[42px] h-4 w-4 text-slate-400"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="m7 10 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CollegeSearch() {
  const [course, setCourse] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const params = new URLSearchParams();
    if (course) params.set("course", course);
    if (location) params.set("location", location);
    if (budget) params.set("budget", budget);

    window.location.href = `/colleges${
      params.size ? `?${params.toString()}` : ""
    }`;
  }

  return (
    <section
      id="college-search"
      className="relative z-20 mx-auto -mt-8 max-w-7xl px-4 sm:-mt-12 sm:px-6 lg:px-10"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-3 top-5 -z-10 h-36 rounded-[40px] bg-gradient-to-r from-amber-300/20 via-blue-200/20 to-amber-200/20 blur-3xl"
      />

      <div className="relative overflow-hidden rounded-2xl border border-white/80 bg-white shadow-[0_25px_80px_-25px_rgba(23,36,64,0.25)] sm:rounded-3xl">
        {/* Premium top strip */}
        <div className="h-1 w-full bg-gradient-to-r from-[#172440] via-[#D9A441] to-[#172440]" />

        <div className="p-5 sm:p-8 lg:p-9">
          {/* Heading */}
          <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-amber-50 px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C89532]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#956A20]">
                  Your future starts here
                </span>
              </div>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#172440] sm:text-3xl lg:text-4xl">
                Find a college that
                <span className="text-[#B8872F]"> fits you.</span>
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                Filter by course, location and budget. Discover
                college options that match your goals.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-[#F5F7FA] px-4 py-3 md:max-w-[190px]">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#172440] text-[#E9BC63]">
                <SearchIcon />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#172440]">
                  Smart search
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  Your choice, your future
                </p>
              </div>
            </div>
          </div>

          {/* Search form */}
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1.1fr_1fr_auto] lg:items-end">
              <label className="relative block text-xs font-bold text-slate-700">
                <span className="flex items-center gap-2">
                  <span className="text-base text-[#B8872F]">✳</span>
                  Choose your course
                </span>

                <select
                  className={selectClass}
                  value={course}
                  onChange={(event) => setCourse(event.target.value)}
                >
                  <option value="">All courses</option>
                  {courses.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>

                <ChevronIcon />
              </label>

              <label className="relative block text-xs font-bold text-slate-700">
                <span className="flex items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4 text-[#B8872F]"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  Preferred location
                </span>

                <select
                  className={selectClass}
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                >
                  <option value="">Anywhere in NCR</option>
                  {locations.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>

                <ChevronIcon />
              </label>

              <label className="relative block text-xs font-bold text-slate-700">
                <span className="flex items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4 text-[#B8872F]"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <rect x="3" y="6" width="18" height="13" rx="2" />
                    <path d="M3 10h18M7 15h3" strokeLinecap="round" />
                  </svg>
                  Annual budget
                </span>

                <select
                  className={selectClass}
                  value={budget}
                  onChange={(event) => setBudget(event.target.value)}
                >
                  <option value="">Any budget</option>
                  {budgets.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>

                <ChevronIcon />
              </label>

              <button
                type="submit"
                className="group flex min-h-[49px] items-center justify-center gap-2 rounded-xl bg-[#172440] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#172440]/15 transition duration-300 hover:-translate-y-0.5 hover:bg-[#263958] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#D9A441]/25 lg:min-w-[165px]"
              >
                <SearchIcon />
                Search Colleges
                <span className="text-[#E9BC63] transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </form>

          {/* Bottom details */}
          <div className="mt-6 flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-center gap-2 text-xs text-slate-500">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4 shrink-0 text-emerald-600"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  d="m5 12 4 4L19 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Choose your preferences to get started.
            </p>

            <a
              href="/find-my-college"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#172440] transition hover:text-[#B8872F]"
            >
              Not sure where to start?
              <span className="text-[#B8872F]">Find my college →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}