import { Banner } from "@/components/Banner";
import { ConfirmAttendance } from "@/components/ConfirmAttendance";
import { Galery } from "@/components/Galery";
import { GeneralInfo } from "@/components/GeneralInfo";
import { SaveTheDate } from "@/components/SaveTheDate";
import { WeddingRegistry } from "@/components/WeddingRegistry";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col min-h-screen items-center bg-white">
      <main className="flex min-h-screen w-full flex-col items-center">
        <Banner />

        {/* Content Sections with generous spacing */}
        <div className="flex flex-col items-center w-full gap-16 md:gap-24 py-12">
          <GeneralInfo />
          <SaveTheDate />
          <WeddingRegistry />
          <ConfirmAttendance />
          <Galery />
        </div>
      </main>

      {/* Premium Footer */}
      <footer className="w-full flex flex-col items-center py-12 mt-16 bg-gray-50 border-t border-gray-200">
        <div className="opacity-90 hover:opacity-100 transition-opacity duration-300 mb-4">
          <Image alt="Logo" src='/img/logo.png' width={80} height={80} className="drop-shadow-sm" />
        </div>
        <p className="text-center text-gray-700 text-sm font-medium">Feito com 💕</p>
      </footer>
    </div>
  );
}
