import { AlertTriangle } from "react-feather";

export default function blog() {
  return (
    <section className="flex flex-col gap-y-2 justify-center items-center pt-40">
      <div className="text-blue-500">
        <AlertTriangle size={80} strokeWidth={1.5} />
      </div>
      <h1 className="lg:text-6xl md:text-4xl texl-2xl font-black text-gray-200 text-center">This page is under <br /> <span className="text-slate-400">construction</span></h1>
    </section>
  );
}