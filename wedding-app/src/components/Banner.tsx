import Image from "next/image"

export const Banner = () => {

    return (
      <div className="bg-[url('/img/parque.png')] h-[75vh] lg:h-dvh bg-cover bg-center w-full" >
        <div className="grid grid-cols-4 w-full">
          <div className="col-span-4 md:flex justify-center hidden md:col-start-2 md:col-end-3 md:justify-start">
            <Image alt="Logo" src='/img/logo-branco.png' width={150} height={150} /> 
          </div>
          <div className="col-span-4 flex justify-center items-center md:hidden">
            <Image alt="Logo" src='/img/logo-branco.png' width={70} height={70} /> 
          </div>
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-black/60 to-transparent"></div>
        <section className="w-full max-w-full h-3/5 md:max-w-2xl mx-auto flex flex-col items-center justify-end md:justify-center md:items-end md:flex-row">
          <div>
            <h1 className="text-white text-center">Jéssica & David</h1>
            <h2 className="text-white text-center md:text-end mt-0 md:-mt-6">07 de Março de 2026, sábado - 16h30</h2>  
          </div>
        </section>
      </div>
    )
}