import { CardGroup } from "./card-group";

const GROUPS = [
  {
    title: "MERO HOTEL",
    description:
      "Lorem ipsum dolor sit amet consectetur aLorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a",
    imageUrl: "/image-3.jpg",
    link: "/",
  },
  {
    title: "MERO HOTEL",
    description:
      "Lorem ipsum dolor sit amet consectetur aLorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a",
    imageUrl: "/image-3.jpg",
    link: "/",
  },
  {
    title: "MERO HOTEL",
    description:
      "Lorem ipsum dolor sit amet consectetur aLorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a",
    imageUrl: "/image-3.jpg",
    link: "/",
  },
];

export function GroupSection() {
  return (
    <section className="min-h-screen bg-[url('/image-2.jpg')]  bg-bottom object-cover px-4 py-8 flex flex-col items-center justify-center text-white">
      <div className="w-full max-w-6xl text-center mx-auto space-y-12 my-16">
        <h2 className="text-xl sm:text-3xl font-semibold tracking-[0.6rem] sm:tracking-[0.8rem]">
          O GRUPO
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* Card */}
          {GROUPS.map((group, index) => (
            <CardGroup
              key={`${group.title}-${index}`}
              title={group.title}
              description={group.description}
              imageUrl={group.imageUrl}
              link={group.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
