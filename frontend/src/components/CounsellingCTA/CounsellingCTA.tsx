// import { useState, type FormEvent } from "react";
// import {
//   Search,
//   GraduationCap,
//   MapPin,
//   Wallet,
//   ArrowRight,
//   Sparkles,
// } from "lucide-react";

// export default function CollegeSearch() {
//   const [course, setCourse] = useState("");
//   const [location, setLocation] = useState("");
//   const [budget, setBudget] = useState("");

//   function handleSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();

//     const params = new URLSearchParams();

//     if (course) params.set("course", course);
//     if (location) params.set("location", location);
//     if (budget) params.set("budget", budget);

//     window.location.href = `/colleges${
//       params.size ? `?${params.toString()}` : ""
//     }`;
//   }

//   const selectClass =
//     "mt-2.5 w-full appearance-none rounded-xl border border-slate-200/90 bg-slate-50/80 px-4 py-3.5 text-sm font-medium text-slate-700 outline-none transition duration-300 hover:border-amber-400 focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/10";

//   return (
//     <section
//       id="college-search"
//       className="relative z-20 mx-auto -mt-12 max-w-7xl px-4 pb-8 sm:-mt-14 sm:px-6 lg:px-8"
//     >
//       {/* Soft background glow */}
//       <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-48 w-4/5 -translate-x-1/2 rounded-full bg-blue-200/30 blur-3xl" />

//       <form
//         onSubmit={handleSubmit}
//         className="relative overflow-hidden rounded-3xl border border-white bg-white p-5 shadow-[0_24px_80px_-25px_rgba(15,23,42,0.22)] sm:p-8 lg:p-9"
//       >
//         {/* Decorative top line */}
//         <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#17233d] via-amber-400 to-[#17233d]" />

//         <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-center">
//           <div className="flex items-start gap-3.5">
//             <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#17233d] text-amber-400 shadow-lg shadow-slate-900/15">
//               <GraduationCap size={25} strokeWidth={1.8} />
//             </div>

//             <div>
//               <div className="mb-1.5 flex flex-wrap items-center gap-2">
//                 <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-amber-600">
//                   Your future starts here
//                 </span>
//                 <Sparkles size={14} className="text-amber-500" />
//               </div>

//               <h2 className="text-2xl font-extrabold tracking-tight text-[#17233d] sm:text-3xl">
//                 Find Your Perfect College
//               </h2>

//               <p className="mt-1.5 max-w-xl text-sm leading-6 text-slate-500">
//                 Discover colleges that match your course, location and budget.
//               </p>
//             </div>
//           </div>

//           <div className="hidden items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 md:flex">
//             <span className="h-2 w-2 rounded-full bg-emerald-500" />
//             <span className="text-xs font-semibold text-emerald-800">
//               Your college journey, simplified
//             </span>
//           </div>
//         </div>

//         {/* Search fields */}
//         <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:items-end">
//           <label className="block text-sm font-bold text-slate-700">
//             <span className="flex items-center gap-2">
//               <GraduationCap size={16} className="text-amber-600" />
//               Choose your course
//             </span>

//             <select
//               className={selectClass}
//               value={course}
//               onChange={(event) => setCourse(event.target.value)}
//             >
//               <option value="">All courses</option>
//               <option value="btech">B.Tech</option>
//               <option value="bca">BCA</option>
//               <option value="bba">BBA</option>
//               <option value="mba">MBA</option>
//               <option value="mca">MCA</option>
//               <option value="design">Design</option>
//             </select>
//           </label>

//           <label className="block text-sm font-bold text-slate-700">
//             <span className="flex items-center gap-2">
//               <MapPin size={16} className="text-amber-600" />
//               Preferred location
//             </span>

//             <select
//               className={selectClass}
//               value={location}
//               onChange={(event) => setLocation(event.target.value)}
//             >
//               <option value="">Anywhere in NCR</option>
//               <option value="greater-noida">Greater Noida</option>
//               <option value="noida">Noida</option>
//               <option value="ghaziabad">Ghaziabad</option>
//               <option value="delhi">Delhi</option>
//             </select>
//           </label>

//           <label className="block text-sm font-bold text-slate-700">
//             <span className="flex items-center gap-2">
//               <Wallet size={16} className="text-amber-600" />
//               Annual budget
//             </span>

//             <select
//               className={selectClass}
//               value={budget}
//               onChange={(event) => setBudget(event.target.value)}
//             >
//               <option value="">Any budget</option>
//               <option value="0-2">Under ₹2 lakh</option>
//               <option value="2-4">₹2–4 lakh</option>
//               <option value="4-6">₹4–6 lakh</option>
//               <option value="6+">Above ₹6 lakh</option>
//             </select>
//           </label>

//           <div>
//             <button
//               type="submit"
//               className="group flex min-h-[49px] w-full items-center justify-center gap-2.5 rounded-xl bg-[#17233d] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#17233d]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#24385e] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-amber-400/30 active:translate-y-0"
//             >
//               <Search size={18} className="text-amber-400" />
//               Find Colleges
//               <ArrowRight
//                 size={17}
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </button>

//             <p className="mt-2 text-center text-[11px] text-slate-400">
//               Start exploring your options
//             </p>
//           </div>
//         </div>

//         {/* Bottom trust line */}
//         <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-slate-100 pt-5">
//           <span className="text-xs font-bold text-slate-500">
//             Popular searches:
//           </span>

//           {[
//             { label: "B.Tech", value: "btech" },
//             { label: "BCA", value: "bca" },
//             { label: "MBA", value: "mba" },
//             { label: "Greater Noida", value: "greater-noida", type: "location" },
//           ].map((item) => (
//             <button
//               key={item.label}
//               type="button"
//               onClick={() => {
//                 if (item.type === "location") {
//                   setLocation(item.value);
//                 } else {
//                   setCourse(item.value);
//                 }
//               }}
//               className="text-xs font-semibold text-slate-500 transition hover:text-amber-600"
//             >
//               {item.label}
//               <span className="ml-1 text-amber-500">↗</span>
//             </button>
//           ))}
//         </div>
//       </form>
//     </section>
//   );
// }