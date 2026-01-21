import { Card } from "./Card";

export const WeddingRegistry = () => {

  return (
    <section className="max-w-6xl w-full flex items-center flex-col px-4 py-12">
      <h4 className="mb-6">Lista de Presente 🎁</h4>

      <p className="text-center mb-12 max-w-2xl text-gray-600 leading-relaxed">
        Como já temos nosso cantinho montado, organizamos nossa lista de presentes em valores por Pix.
        <br />
        Escolha o valor que desejar — cada gesto faz toda a diferença no nosso grande dia.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:px-16 gap-6 md:gap-8 place-items-center w-full mb-8">
        <div className="opacity-0 scale-in stagger-1"><Card type="bronze" /></div>
        <div className="opacity-0 scale-in stagger-2"><Card type="prata" /></div>
        <div className="opacity-0 scale-in stagger-3"><Card type="ouro" /></div>
        <div className="opacity-0 scale-in stagger-4"><Card type="platina" /></div>
        <div className="opacity-0 scale-in stagger-5"><Card type="diamante" /></div>
        <div className="opacity-0 scale-in stagger-6"><Card type="personalizado" /></div>
      </div>

      <p className="text-center text-gray-700 font-medium">
        Obrigada(o) por fazer parte da nossa história! 💍✨
      </p>
    </section>
  )
}