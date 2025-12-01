import Image from "next/image"

export const Banner = () => {

    return (
      <div className="bg-linear-to-b from-[#6A8DBB] to-zinc-50 w-full">
        <section className="w-full max-w-full md:max-w-2xl mx-auto flex flex-col items-center md:items-start md:flex-row gap-8 pb-8">
          <div>
            <h1>Jéssica & David</h1>
            <h2 className="text-center md:text-end mt-0 md:-mt-6">07 de Março de 2026, sábado - 16h30</h2>  
          </div>
          <div className="p-4 pb-8 bg-white w-[220px]">
            <Image
              alt="First photo"
              src="/img/abcd.png"
              width={250}
              height={500}
              style={{
                width: "200px",
                height: "auto",
              }}
              className="mobile-image"
            />
          </div>
        </section>
      </div>
    )
}