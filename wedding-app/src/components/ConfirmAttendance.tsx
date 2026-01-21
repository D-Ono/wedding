import { MessageCircle } from "lucide-react"

export const ConfirmAttendance = () => {

  return (
    <section className="max-w-3xl w-full px-4 py-12">
      <h4 className="mb-6">Confirmação de presença</h4>

      <p className="text-center text-gray-600 leading-relaxed mb-8">
        Sua presença é muito importante para nós, ajude-nos a planejar este dia
        <br className="hidden md:block" />
        especial confirmando sua presença até 20/02/2026.
      </p>

      <div className="flex items-center justify-center">
        <a
          target="_blank"
          href="https://wa.me/5518991551617?text=Ol%C3%A1%2C%20eu%20gostaria%20de%20confirmar%20a%20minha%20presen%C3%A7a%20no%20casamento%20da%20J%C3%A9ssica%20e%20do%20David%2C%20no%20dia%2007%2F03%2F2026%2E%20Os%20nomes%20dos%20convidados%20s%C3%A3o%3A"
          className="
                group relative
                inline-flex items-center gap-3
                px-8 py-4 rounded-2xl
                bg-gradient-to-r from-green-600 to-green-500
                text-white font-semibold text-base
                shadow-lg hover:shadow-2xl
                transition-all duration-300
                hover:scale-105
                active:scale-95
                overflow-hidden
              "
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

          <MessageCircle
            size={24}
            className="relative z-10 transition-transform duration-300 group-hover:rotate-12"
          />
          <span className="relative z-10">Confirme sua presença aqui!</span>
        </a>
      </div>
    </section>
  )
}