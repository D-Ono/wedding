import Image from "next/image"

export const Galery = () => {

  return (
    <section className="flex items-center flex-col px-4 py-12 w-full max-w-2xl">
      <h4 className="mb-8">Te esperamos no nosso casamento! 👰🏻‍♀️💕🤵🏻</h4>

      <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl opacity-0 scale-in stagger-2">
        <Image
          src='/img/final.png'
          alt="Última foto"
          width={700}
          height={933}
          className="w-full h-auto transition-transform duration-700 hover:scale-105"
        />
      </div>
    </section>
  )
}