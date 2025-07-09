import Image from "next/image";

export function AccommodationSection() {
  return (
    <section className="min-h-screen py-8">
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        {/* Card Left */}
        <div>
          <div className="">
            <Image
              src="/image-5.jpg"
              alt="Imagem"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
