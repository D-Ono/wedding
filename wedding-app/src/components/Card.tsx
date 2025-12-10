"use client";

import { useState } from "react";
import Image from "next/image";

export const Card = ({
  type,
}: {
  type: "bronze" | "prata" | "ouro" | "platina" | "diamante";
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const value = {
    bronze: "R$ 100,00",
    prata: "R$ 200,00",
    ouro: "R$ 400,00",
    platina: "R$ 800,00",
    diamante: "R$ 1000,00",
  }[type];

  const title = {
    bronze: "Bronze",
    prata: "Prata",
    ouro: "Ouro",
    platina: "Platina",
    diamante: "Diamante",
  }[type];

  const image = {
    bronze: "/trophy.svg",
    prata: "/trophy-silver.svg",
    ouro: "/trophy-gold.svg",
    platina: "/trophy-platinum.svg",
    diamante: "/trophy-diamond.svg",
  }[type];

  const color = {
    bronze: "text-[#A77454]",
    prata: "text-[#A3A3A3]",
    ouro: "text-[#CFAF3C]",
    platina: "text-[#B5B5B5]",
    diamante: "text-[#4DC4D7]",
  }[type];

  const copyValue = () => {
    const valuePix = {
      'bronze': BRONZE_PIX,
      'prata': PRATA_PIX,
      'ouro': OURO_PIX,
      'platina': PLATINA_PIX,
      'diamante': DIAMANTE_PIX
    }[type]

    navigator.clipboard.writeText(valuePix);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 1800);
  };

  return (
    <div
      className="
        relative
        w-full max-w-[260px]
        bg-white
        border border-black/5
        rounded-3xl
        px-6 py-7
        flex flex-col items-center text-center
        transition-all duration-200 
        hover:scale-[1.02] hover:shadow-sm
      "
    >
      <h2 className={`text-xl font-medium tracking-wide ${color}`}>
        {title}
      </h2>

      <div className="w-16 h-16 relative my-5 opacity-80">
        <Image src={image} alt="Troféu" fill className="object-contain" />
      </div>

      <p className="text-lg font-semibold text-gray-900">{value}</p>

      <div className="relative mt-5 w-full flex justify-center">
        <button
          onClick={copyValue}
          className="
            px-4 py-2 rounded-xl 
            border border-black/10 
            text-gray-800 
            bg-white
            hover:bg-black/5
            transition active:scale-95
            text-[11px]
            md:text-[14px]
            cursor-pointer
          "
        >
          Copiar chave Pix
        </button>

        {showTooltip && (
          <div className="
            absolute -top-10 left-1/2 -translate-x-1/2 
            px-3 py-1 
            bg-black text-white 
            text-xs rounded-lg 
            shadow-lg 
            opacity-90
          ">
            Copiado! 🎉
          </div>
        )}
      </div>
    </div>
  );
};

  const BRONZE_PIX = '00020126610014br.gov.bcb.pix0111391739038840224Casamento Jessica  David5204000053039865406100.005802BR5925JESSICA KAROLINA GALINDO 6015PRESIDENTE PRUD62580520SAN2025120802070719050300017br.gov.bcb.brcode01051.0.06304157B'
  const PRATA_PIX = '00020101021126870014br.gov.bcb.pix01362b1ebd32-7154-4520-8578-18e4920955bf0225Casamento Jessica e David5204000053039865406200.005802BR5911DAVID H ONO6013PRESIDENTE PR62070503***630472C2'
  const OURO_PIX = '00020126620014br.gov.bcb.pix0111391739038840225Casamento jessica e david5204000053039865406400.005802BR5925JESSICA KAROLINA GALINDO 6015PRESIDENTE PRUD62500512Casamento40050300017br.gov.bcb.brcode01051.0.06304CD6D'
  const PLATINA_PIX = '00020101021126870014br.gov.bcb.pix01362b1ebd32-7154-4520-8578-18e4920955bf0225Casamento Jessica e David5204000053039865406800.005802BR5911DAVID H ONO6013PRESIDENTE PR62070503***6304520A'
  const DIAMANTE_PIX = '00020126670014br.gov.bcb.pix0111391739038840230Casamento jessica e david 100052040000530398654071000.005802BR5925JESSICA KAROLINA GALINDO 6015PRESIDENTE PRUD62510513Casamento100050300017br.gov.bcb.brcode01051.0.0630422F5'