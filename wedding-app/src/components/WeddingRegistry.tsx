import { Card } from "./Card";

export const WeddingRegistry = () => {

  return (
    <section className="max-w-2xl w-full flex items-center flex-col">
      <h4>Lista de Presente 🎁</h4>
      <p className="text-center mb-4">
        Como já temos nosso cantinho montado, organizamos nossa lista de presentes em valores por Pix. <br />
        Escolha o valor que desejar — cada gesto faz toda a diferença no nosso grande dia.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 place-items-center items-center justify-center py-10">
        <Card type="bronze" />
        <Card type="prata" />
        <Card type="ouro" />
        <Card type="platina" />
        <Card type="diamante" />
      </div>
      <p className="text-center mt-4">Obrigada(o) por fazer parte da nossa história! 💍✨</p>
    </section>
  )
}