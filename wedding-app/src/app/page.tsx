import { Banner } from "@/components/Banner";
import { ConfirmAttendance } from "@/components/ConfirmAttendance";
import { Galery } from "@/components/Galery";
import { GeneralInfo } from "@/components/GeneralInfo";
import { SaveTheDate } from "@/components/SaveTheDate";
import { WeddingRegistry } from "@/components/WeddingRegistry";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-black w-full flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans">
      {/* <Header /> */}
      <main className="flex min-h-screen w-full flex-col items-center gap-8 mb-8 sm:items-start justify-center">
        <Banner />
        <div className="flex flex-col items-center w-full gap-8">
          <GeneralInfo /> 
          <SaveTheDate />
          <WeddingRegistry />
          <ConfirmAttendance />
          <Galery />
        </div>
      </main>
      <footer>
        <Image alt="Logo" src='/img/logo.png' width={100} height={100} /> 
        <p className="text-center mb-8">Feito com 💕</p>
      </footer>
    </div>
  );
}
