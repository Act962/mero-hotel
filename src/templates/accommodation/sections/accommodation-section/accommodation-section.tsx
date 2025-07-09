import { Button } from "@/components/ui/button";
import Image from "next/image";

export function AccommodationSection() {
  return (
    <section className="min-h-screen py-8 px-4">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-start">
        {/* Card Left */}
        <div className="flex items-center gap-16">
          <div className="overflow-hidden w-full h-64">
            <Image
              src="/image-5.jpg"
              alt="Imagem"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col items-start">
            <div>
              <h3 className="uppercase">Select</h3>
              <p>
                Localizados no térreo e no 1º piso, área total de 23 m²,
                distribuídos entre varanda privativa, quarto e banheiro.
                Acomodam até 02 pessoas em cama de casal (King Size). Possui ar
                condicionado split, 01 TV Smart 40”, acesso gratuito ao wi-fi,
                mesa de trabalho, frigobar, cofre eletrônico, e apoio de
                cabeceira. Espelho de corpo inteiro, armário com cabides e
                portas, ferro e mesa de passar roupa, secador de cabelo e
                blackout nas cortinas.
              </p>
            </div>

            <div className="flex items-center justify-between w-full">
              <Button variant="primary" className="uppercase">
                Reserve agora
              </Button>
              <span>Saiba mais</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
