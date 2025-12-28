import { Balloon, Cake, Camera, Check, MailX, PartyPopper, Shirt, VibrateOff } from "lucide-react"
import { ReactNode } from "react"

const Information = ({ children, text }: { children: ReactNode, text: string }) => {
  return (
    <div className="flex items-center justify-start gap-2">
      {children}
      <p className="w-full items-center">
        <b>{text}</b>
      </p>
    </div>
  )
}

export const GeneralInfo = () => {

  return (
    <section className="max-w-2xl w-full">
      <h4>Manual do convidado</h4>
      <div className="flex flex-col md:flex-row gap-4 md:gap-16 w-full">
        <div className="w-full md:w-1/2 flex items-start gap-3 flex-col px-4">
          <Information text="Confirme sua presença">
            <Check color="green" size={50} />
          </Information>
          <Information text="Convidado não convida!">
            <MailX color="red" size={50} />
          </Information>
          <Information text="Participe da cerimônia">
            <PartyPopper color="#2701b2" size={50} />
          </Information>
          <Information text="Branco é a cor da noiva">
            <Shirt color="#ccc8da" size={50} />
          </Information>
        </div>
        <div className="w-full md:w-1/2 flex items-start gap-3 flex-col px-4">
          <Information text="Não leve a decoração para casa">
            <Balloon color="blue" size={50} />
          </Information>
          <Information text="Aguarde a liberação da mesa dos doces">
            <Cake color="pink" size={50} />
          </Information>
          <Information text="Não atrapalhe os fotografos">
            <Camera color="black" size={50} />
          </Information>
          <Information text="Deixe seu celular no silencioso!">
            <VibrateOff color="gray" size={50} />
          </Information>
        </div>
      </div>
    </section>
  )
}