import { CardGroup } from "./card-group";

export function GroupSection() {
  return (
    <section className="min-h-screen bg-[url('/image-2.jpg')]  bg-bottom object-cover px-4 py-8 flex flex-col items-center justify-center text-white">
      <div className="w-full max-w-5xl text-center mx-auto space-y-12 my-16">
        <h2 className="text-xl sm:text-3xl font-semibold tracking-[0.6rem] sm:tracking-[0.8rem]">
          O GRUPO
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* Card */}
          <CardGroup />
          <CardGroup />
          <CardGroup />
        </div>
      </div>
    </section>
  );
}
