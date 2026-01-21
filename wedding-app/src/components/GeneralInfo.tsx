import { Balloon, Cake, Camera, Check, MailX, PartyPopper, Shirt, VibrateOff } from "lucide-react"
import { ReactNode } from "react"

const Information = ({ children, text, delay }: { children: ReactNode, text: string, delay: string }) => {
  return (
    <div
      className={`
        flex items-center gap-4 p-4 rounded-2xl
        bg-white/60 backdrop-blur-sm
        border border-gray-200/50
        transition-all duration-300 ease-out
        hover:scale-[1.02] hover:shadow-lg hover:bg-white/80
        opacity-0 slide-in-left ${delay}
        cursor-default
      `}
    >
      <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
        {children}
      </div>
      <p className="text-gray-800 font-medium text-sm md:text-base leading-snug">
        {text}
      </p>
    </div>
  )
}

export const GeneralInfo = () => {

  return (
    <section className="max-w-5xl w-full px-4 py-12">
      <h4 className="mb-8 opacity-0 fade-in stagger-1">Manual do convidado</h4>

      <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full">
        {/* Left Column */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <Information text="Confirme sua presença" delay="stagger-2">
            <Check className="text-green-600" size={40} strokeWidth={2.5} />
          </Information>
          <Information text="Convidado não convida!" delay="stagger-3">
            <MailX className="text-red-600" size={40} strokeWidth={2.5} />
          </Information>
          <Information text="Participe da cerimônia" delay="stagger-4">
            <PartyPopper className="text-purple-600" size={40} strokeWidth={2.5} />
          </Information>
          <Information text="Branco é a cor da noiva" delay="stagger-5">
            <Shirt className="text-gray-300" size={40} strokeWidth={2.5} />
          </Information>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <Information text="Não leve a decoração para casa" delay="stagger-6">
            <Balloon className="text-blue-500" size={40} strokeWidth={2.5} />
          </Information>
          <Information text="Aguarde a liberação da mesa dos doces" delay="stagger-7">
            <Cake className="text-pink-500" size={40} strokeWidth={2.5} />
          </Information>
          <Information text="Não atrapalhe os fotógrafos" delay="stagger-8">
            <Camera className="text-gray-800" size={40} strokeWidth={2.5} />
          </Information>
          <Information text="Deixe seu celular no silencioso!" delay="stagger-1">
            <VibrateOff className="text-gray-500" size={40} strokeWidth={2.5} />
          </Information>
        </div>
      </div>
    </section>
  )
}