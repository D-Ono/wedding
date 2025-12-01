import Image from "next/image"

export const WeddingRegistry = () => {

    return (
        <section className="max-w-2xl w-full flex items-center flex-col">
          <h4>Lista de Presente 🎁</h4>
          <p className="text-center mb-4">
            Nós já moramos juntos e temos todos os eletrodomésticos e móveis da casa! <br /> Mas, caso queira nos ajudar, separamos a chave pix para o envio do valor em dinheiro para ajudar no casamento!  
          </p>
          <div className="flex justify-evenly w-full">
            <Image src='/trophy.svg' alt="Medalha" width={100} height={150} className="text-amber-700" />
            <Image src='/trophy.svg' alt="Medalha" width={100} height={150} className="text-amber-700" />
            <Image src='/trophy.svg' alt="Medalha" width={100} height={150} className="text-amber-700" />
          </div>
          <div className="flex justify-evenly w-full">
            <Image src='/trophy.svg' alt="Medalha" width={100} height={150} className="text-amber-700" />
            <Image src='/trophy.svg' alt="Medalha" width={100} height={150} className="text-amber-700" />
          </div>
        </section>
    )
}