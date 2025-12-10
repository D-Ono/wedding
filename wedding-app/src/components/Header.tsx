import Image from "next/image"

export const Header = () => {

    return (
      <header className="grid grid-cols-4 w-full h-16">
        <div className="col-span-4 flex justify-center items-center md:col-start-2 md:col-end-3 md:justify-start">
          <Image alt="Logo" src='/img/logo.png' width={70} height={70} /> 
        </div>
      </header>
    )
}