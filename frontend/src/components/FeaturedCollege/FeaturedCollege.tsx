const colleges = [
  {
    name: "Bennett University",
    location: "Greater Noida, Uttar Pradesh",
    courses: ["B.Tech", "BBA", "MBA", "Media"],
    fee: "Fees vary by programme",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=80",
    tag: "Private University",
    description:
      "Explore technology, management and media programmes.",
    color: "#D9A441",
  },
  {
    name: "Sharda University",
    location: "Knowledge Park III, Greater Noida",
    courses: ["B.Tech", "BCA", "BBA", "MBA"],
    fee: "Fees vary by programme",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80",
    tag: "Explore Programmes",
    description:
      "Discover courses across engineering, business and more.",
    color: "#D9A441",
  },
  {
    name: "Galgotias University",
    location: "Yamuna Expressway, Greater Noida",
    courses: ["B.Tech", "BCA", "BBA", "MCA"],
    fee: "Fees vary by programme",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=900&q=80",
    tag: "Multiple Courses",
    description:
      "Compare study options to find a course that suits you.",
    color: "#D9A441",
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FeaturedColleges() {
  return (
    <section
      id="featured-colleges"
      className="relative overflow-hidden bg-[#F5F7FA] py-16 sm:py-20 lg:py-24"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-amber-200/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#9B7127] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D9A441]" />
              Explore your future
            </span>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#172440] sm:text-4xl lg:text-5xl">
              Colleges worth
              <span className="text-[#B8872F]"> exploring.</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              Discover colleges around Greater Noida and NCR.
              Compare courses, explore your options and take
              the next step towards your future.
            </p>
          </div>

          <a
            href="/colleges"
            className="group inline-flex w-fit items-center gap-3 rounded-xl bg-[#172440] px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#172440]/10 transition hover:-translate-y-0.5 hover:bg-[#263958]"
          >
            Explore All Colleges
            <ArrowIcon />
          </a>
        </div>

        {/* College Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {colleges.map((college, index) => (
            <article
              key={college.name}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#D9A441]/50 hover:shadow-[0_24px_60px_-20px_rgba(23,36,64,0.22)]"
            >
              {/* Image */}
              <a
                href={`/colleges?search=${encodeURIComponent(college.name)}`}
                aria-label={`Explore ${college.name}`}
                className="relative block h-56 overflow-hidden bg-slate-200"
              >
                <img
                  src={college.image}
                  alt={`Campus-style image for ${college.name}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#101A30]/85 via-[#101A30]/10 to-[#101A30]/15 transition-opacity duration-300 group-hover:from-[#101A30]/75" />

                <span className="absolute left-4 top-4 rounded-full border border-white/50 bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-[#172440] shadow-sm">
                  {college.tag}
                </span>

                <span className="absolute bottom-4 left-4 right-4 text-sm font-medium text-white/90">
                  <span className="mr-2 text-[#E9BC63]">⌖</span>
                  {college.location}
                </span>

                <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md transition duration-300 group-hover:rotate-[-45deg] group-hover:bg-[#D9A441] group-hover:text-[#172440]">
                  <ArrowIcon />
                </span>
              </a>

              {/* Card content */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold tracking-tight text-[#172440] transition-colors group-hover:text-[#9B7127]">
                    {college.name}
                  </h3>
                  <span className="mt-1 shrink-0 text-xs font-bold text-[#B8872F]">
                    0{index + 1}
                  </span>
                </div>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {college.description}
                </p>

                {/* Courses */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {college.courses.map((course) => (
                    <span
                      key={course}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[11px] font-semibold text-slate-600 transition-colors group-hover:border-amber-200 group-hover:bg-amber-50/50"
                    >
                      {course}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-auto pt-6">
                  <div className="mb-4 border-t border-slate-100" />

                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Tuition fees
                      </p>
                      <p className="mt-1 text-xs font-medium text-[#172440]">
                        {college.fee}
                      </p>
                    </div>

                    <a
                      href={`/colleges?search=${encodeURIComponent(college.name)}`}
                      className="group/button inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#172440] px-3.5 py-3 text-xs font-bold text-white transition hover:bg-[#B8872F]"
                    >
                      View Details
                      <ArrowIcon />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-10 overflow-hidden rounded-2xl bg-[#172440] p-6 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-24 h-52 w-52 rounded-full border border-white/10"
          />
          <div className="relative">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E9BC63]">
              Still deciding?
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
              Your perfect college is waiting to be discovered.
            </h3>
            <p className="mt-2 text-sm leading-6 text-white/60">
              Explore more colleges and find an option that fits your goals.
            </p>
          </div>

          <a
            href="/find-my-college"
            className="group relative mt-5 inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#E9BC63] px-5 py-3.5 text-sm font-bold text-[#172440] transition hover:bg-white lg:mt-0"
          >
            Find My College
            <ArrowIcon />
          </a>
        </div>

        <p className="mt-5 text-xs leading-5 text-slate-400">
          Programme availability, tuition fees and admission criteria
          should be verified with each college before publishing.
        </p>
      </div>
    </section>
  );
}