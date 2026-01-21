import Image from "next/image"

export const Banner = () => {

  return (
    <div className="relative h-[75vh] lg:h-screen w-full overflow-hidden">
      {/* Background Image with subtle zoom animation */}
      <div
        className="absolute inset-0 bg-[url('/img/parque.png')] bg-cover bg-center scale-105 transition-transform duration-[8000ms] ease-out hover:scale-100"
        style={{ willChange: 'transform' }}
      />

      {/* Gradient Overlays - Layered for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

      {/* Glass effect overlay for modern look */}
      <div className="absolute inset-0 backdrop-blur-[0.5px]" />

      {/* Logo Section */}
      <div className="relative z-10 grid grid-cols-4 w-full pt-6 md:pt-8">
        <div className="col-span-4 md:flex justify-center hidden md:col-start-2 md:col-end-3 md:justify-start opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards]">
          <Image
            alt="Logo"
            src='/img/logo-branco.png'
            width={150}
            height={150}
            className="drop-shadow-2xl transition-transform duration-500 hover:scale-105"
            priority
          />
        </div>
        <div className="col-span-4 flex justify-center items-center md:hidden opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards]">
          <Image
            alt="Logo"
            src='/img/logo-branco.png'
            width={70}
            height={70}
            className="drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* Hero Content */}
      <section className="relative z-10 w-full max-w-full h-3/5 md:max-w-2xl mx-auto flex flex-col items-center justify-end md:justify-center md:items-end md:flex-row px-4">
        <div className="text-center md:text-right space-y-2 md:space-y-0">
          <h1 className="text-white drop-shadow-2xl">
            Jéssica & David
          </h1>
          <h2 className="text-white/95 drop-shadow-lg mt-0 md:-mt-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
            07 de Março de 2026, sábado - 16h30
          </h2>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-0 animate-[fadeIn_1s_ease-out_1.5s_forwards]">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-2 bg-white/60 rounded-full animate-[float_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  )
}