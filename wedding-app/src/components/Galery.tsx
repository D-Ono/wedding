import Image from "next/image"

export const Galery = () => {

    return (
        <section className="flex items-center flex-col">
          <h4>Te esperamos no nosso casamento! 👰🏻‍♀️💕🤵🏻</h4>
          <Image src='/img/final.png' alt="Ultima foto" width={350} height={400} style={{ paddingLeft: '10px', paddingRight: '10px', borderRadius: '20px' }} />
        </section>
    )
}