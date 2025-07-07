import { Separator } from "@/components/ui/separator";
import CardExperiences from "./card-experiences";
import Link from "next/link";

export function ExperiencesSection() {
  return (
    <section className="min-h-screen p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl text-center mx-auto space-y-12 my-16">
        <h2 className="text-xl sm:text-3xl font-semibold tracking-[0.6rem] sm:tracking-[0.8rem]">
          EXPERIÊNCIAS
        </h2>
        <Separator className="!h-px rounded-full bg-black" />

        {/* Grid Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mt-8 gap-12">
          <CardExperiences />
          <CardExperiences />
          <CardExperiences />
          <CardExperiences />
        </div>

        <Link
          href="/"
          className="text-sm sm:text-base uppercase tracking-[0.2rem] font-medium hover:underline underline-offset-3"
        >
          Outras Experiências
        </Link>
      </div>
    </section>
  );
}
