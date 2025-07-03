import Image from "next/image";

export function GroupSection() {
  return (
    <section className="min-h-screen bg-[url('/image-2.jpg')] object-cover bg-center p-8 flex flex-col items-center justify-center text-white">
      <div className="w-full max-w-4xl text-center mx-auto bg-red-500">
        <h2 className="text-xl sm:text-3xl font-semibold tracking-[0.8rem]">
          O GRUPO
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <div className="text-start flex flex-col gap-4">
            <h3 className="text-xl font-normal tracking-[0.6rem]">
              MERO HOTEL
            </h3>
            <Image
              src="/image-3.jpg"
              alt="Mero Hotel"
              className="h-96 object-cover"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
