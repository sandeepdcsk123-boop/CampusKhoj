import { useState } from "react";

const questions = [
  { q: "How do I choose the right college?", a: "Compare the course curriculum, recognised approvals, total fees, location, placement information and student support. Shortlist a few colleges and verify details from their official websites." },
  { q: "Is CampusKhoj counselling free?", a: "This sample homepage presents counselling as free. Make sure that matches your actual service and policies before publishing." },
  { q: "Can I compare colleges by fees and location?", a: "Yes. Use the college search form to choose a course, preferred location and annual budget. The form passes those selections as URL query parameters." },
  { q: "Are the fees and admission details always up to date?", a: "Fees, seat availability and admission deadlines can change. Confirm the latest information with the college before making a decision." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="bg-[#f5f7fb] py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
        <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-amber-600">FAQs</p><h2 className="mt-2 text-3xl font-extrabold text-[#17233d] sm:text-4xl">Questions, answered.</h2><p className="mt-4 max-w-md leading-7 text-slate-600">A few helpful things to know before you start your college search.</p><a href="#counselling" className="mt-6 inline-flex font-bold text-[#17233d] hover:text-amber-700">Still have questions? Talk to us →</a></div>
        <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-5 sm:px-7">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;
            return <div key={item.q} className="py-5"><button type="button" className="flex w-full items-center justify-between gap-4 text-left font-bold text-[#17233d]" aria-expanded={isOpen} onClick={() => setOpenIndex(isOpen ? null : index)}><span>{item.q}</span><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-slate-100 text-lg" aria-hidden="true">{isOpen ? "−" : "+"}</span></button>{isOpen && <p className="mt-3 pr-8 text-sm leading-7 text-slate-600">{item.a}</p>}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
