
import { useState, type FormEvent } from "react";
import {
  Sparkles,
  GraduationCap,
  MapPin,
  Wallet,
  ArrowRight,
  LoaderCircle,
} from "lucide-react";
import { askCampusKhojAI } from "./aiService";

export default function AICollegeFinder() {
  const [course, setCourse] = useState("B.Tech CSE");
  const [budget, setBudget] = useState("₹1–2 lakh per year");
  const [location, setLocation] = useState("Greater Noida & NCR");
  const [marks, setMarks] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setResult("");

    const prompt = `Help me start my college search.
Preferred course: ${course}
Annual budget: ${budget}
Preferred location: ${location}
Marks/percentage (if provided): ${marks || "Not provided"}

Give me practical next steps and ask any important follow-up questions.
Do not invent specific college fees, rankings, cutoffs or admission availability.
No verified college database is connected yet, so clearly distinguish general
guidance from facts that need official verification.`;

    try {
      const reply = await askCampusKhojAI(
        [{ role: "user", content: prompt }],
        { course, budget, location, marks }
      );

      setResult(reply);
    } catch (error) {
      setResult(
        error instanceof Error
          ? error.message
          : "AI se connect nahi ho paaya. Please dobara try karein."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-7 w-full max-w-xl rounded-2xl border border-white/15 bg-[#10192c]/80 p-4 shadow-2xl backdrop-blur-xl sm:p-5">
      <div className="mb-4 flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-amber-400 text-[#10192c]">
          <Sparkles size={21} />
        </div>

        <div className="flex-1">
          <h2 className="text-sm font-extrabold text-white sm:text-base">
            Find Your College with AI
          </h2>
          <p className="mt-1 text-xs text-slate-300">
            Tell us what you are looking for.
          </p>
        </div>

        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-bold text-emerald-300">
          AI ASSISTED
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <label className="block">
          <span className="mb-1.5 flex items-center gap-2 text-xs font-semibold text-slate-200">
            <GraduationCap size={15} className="text-amber-300" />
            Preferred course
          </span>
          <select
            value={course}
            onChange={(event) => setCourse(event.target.value)}
            className="w-full rounded-xl border border-white/15 bg-[#18243a] px-3 py-3 text-sm text-white outline-none focus:border-amber-400"
          >
            <option>B.Tech CSE</option>
            <option>B.Tech AI & ML</option>
            <option>BCA</option>
            <option>BBA</option>
            <option>MBA</option>
            <option>MCA</option>
            <option>Other / Not sure</option>
          </select>
        </label>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 flex items-center gap-2 text-xs font-semibold text-slate-200">
              <Wallet size={14} className="text-amber-300" />
              Annual budget
            </span>
            <select
              value={budget}
              onChange={(event) => setBudget(event.target.value)}
              className="w-full rounded-xl border border-white/15 bg-[#18243a] px-3 py-3 text-sm text-white outline-none focus:border-amber-400"
            >
              <option>Below ₹1 lakh per year</option>
              <option>₹1–2 lakh per year</option>
              <option>₹2–4 lakh per year</option>
              <option>₹4 lakh+ per year</option>
              <option>Not sure yet</option>
            </select>
          </label>

          <label className="block">
            <span className="mb-1.5 flex items-center gap-2 text-xs font-semibold text-slate-200">
              <MapPin size={14} className="text-amber-300" />
              Preferred location
            </span>
            <select
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              className="w-full rounded-xl border border-white/15 bg-[#18243a] px-3 py-3 text-sm text-white outline-none focus:border-amber-400"
            >
              <option>Greater Noida & NCR</option>
              <option>Delhi</option>
              <option>Noida</option>
              <option>Greater Noida</option>
              <option>Anywhere in India</option>
            </select>
          </label>
        </div>

        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold text-slate-200">
            Marks / percentage (optional)
          </span>
          <input
            value={marks}
            onChange={(event) => setMarks(event.target.value)}
            placeholder="e.g. 75% or PCM 80%"
            maxLength={50}
            className="w-full rounded-xl border border-white/15 bg-[#18243a] px-3 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-amber-400"
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="group flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-300 px-4 py-3 text-sm font-extrabold text-[#10192c] transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-400/20 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
            <>
              <LoaderCircle size={18} className="animate-spin" />
              Finding your options...
            </>
          ) : (
            <>
              <Sparkles size={18} />
              Get AI College Guidance
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </>
          )}
        </button>
      </form>

      {result && (
        <div
          aria-live="polite"
          className="mt-4 whitespace-pre-wrap rounded-xl border border-amber-300/25 bg-white/[0.06] p-4 text-sm leading-6 text-slate-100"
        >
          <p className="mb-2 flex items-center gap-2 font-bold text-amber-300">
            <Sparkles size={16} />
            Your AI guidance
          </p>
          {result}
        </div>
      )}

      <p className="mt-3 text-center text-[10px] leading-4 text-slate-400">
        Suggestions are guidance, not a guarantee of eligibility or admission.
        Verify details with the official college.
      </p>
    </div>
  );
}
