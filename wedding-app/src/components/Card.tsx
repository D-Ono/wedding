"use client";

import { useState } from "react";
import Image from "next/image";

export const Card = ({
  type,
}: {
  type: "bronze" | "prata" | "ouro" | "platina" | "diamante" | "personalizado";
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const value = {
    bronze: "R$ 100,00",
    prata: "R$ 200,00",
    ouro: "R$ 400,00",
    platina: "R$ 800,00",
    diamante: "R$ 1.000,00",
    personalizado: "Escolha o valor :)",
  }[type];

  const title = {
    bronze: "Bronze",
    prata: "Prata",
    ouro: "Ouro",
    platina: "Platina",
    diamante: "Diamante",
    personalizado: "Personalizado",
  }[type];

  const image = {
    bronze: "/trophy.svg",
    prata: "/trophy-silver.svg",
    ouro: "/trophy-gold.svg",
    platina: "/trophy-platinum.svg",
    diamante: "/trophy-diamond.svg",
    personalizado: "/img/rings.png",
  }[type];

  const colorClass = {
    bronze: "text-[#A77454]",
    prata: "text-[#A3A3A3]",
    ouro: "text-[#CFAF3C]",
    platina: "text-[#B5B5B5]",
    diamante: "text-[#4DC4D7]",
    personalizado: "text-[#CFAF3C]",
  }[type];

  const gradientBg = {
    bronze: "from-[#A77454]/5 to-transparent",
    prata: "from-[#A3A3A3]/5 to-transparent",
    ouro: "from-[#CFAF3C]/5 to-transparent",
    platina: "from-[#B5B5B5]/5 to-transparent",
    diamante: "from-[#4DC4D7]/5 to-transparent",
    personalizado: "from-[#CFAF3C]/5 to-transparent",
  }[type];

  const borderGlow = {
    bronze: "hover:shadow-[0_0_20px_rgba(167,116,84,0.15)]",
    prata: "hover:shadow-[0_0_20px_rgba(163,163,163,0.15)]",
    ouro: "hover:shadow-[0_0_20px_rgba(207,175,60,0.15)]",
    platina: "hover:shadow-[0_0_20px_rgba(181,181,181,0.15)]",
    diamante: "hover:shadow-[0_0_20px_rgba(77,196,215,0.15)]",
    personalizado: "hover:shadow-[0_0_20px_rgba(77,196,215,0.15)]",
  }[type];

  const copyValue = () => {
    const valuePix = {
      'bronze': BRONZE_PIX,
      'prata': PRATA_PIX,
      'ouro': OURO_PIX,
      'platina': PLATINA_PIX,
      'diamante': DIAMANTE_PIX,
      'personalizado': PERSONAL_PIX
    }[type]

    navigator.clipboard.writeText(valuePix);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 1800);
  };

  return (
    <div
      className={`
        group relative
        w-full max-w-[280px]
        bg-gradient-to-br ${gradientBg}
        backdrop-blur-sm
        border border-gray-200/40
        rounded-3xl
        px-6 py-8
        flex flex-col items-center text-center
        transition-all duration-500 ease-out
        hover:scale-[1.05] 
        hover:-translate-y-2
        shadow-lg hover:shadow-2xl
        ${borderGlow}
        cursor-default
      `}
    >
      {/* Subtle shine effect on hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <h2 className={`relative text-2xl font-semibold tracking-wide ${colorClass} mb-6`}>
        {title}
      </h2>

      <div className="relative w-20 h-20 mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
        <Image src={image} alt="Troféu" fill className="object-contain drop-shadow-lg" />
      </div>

      <p className="relative text-xl font-bold text-gray-900 mb-6">{value}</p>

      <div className="relative mt-auto w-full flex justify-center">
        <button
          onClick={copyValue}
          className="
            relative px-6 py-3 rounded-2xl 
            bg-gradient-to-r from-gray-900 to-gray-800
            text-white text-sm font-medium
            shadow-md hover:shadow-xl
            transition-all duration-300
            hover:scale-105
            active:scale-95
            overflow-hidden
            group/btn
          "
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />

          <span className="relative z-10">Copiar chave Pix</span>
        </button>

        {showTooltip && (
          <div className="
            absolute -top-12 left-1/2 -translate-x-1/2 
            px-4 py-2 
            bg-gray-900 text-white 
            text-sm rounded-xl 
            shadow-2xl 
            animate-[fadeInUp_0.3s_ease-out]
            whitespace-nowrap
          ">
            Copiado! 🎉
            {/* Tooltip arrow */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
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
const PERSONAL_PIX = '00020126620014br.gov.bcb.pix0111391739038840225Casamento Jessica e David5204000053039865802BR5925JESSICA KAROLINA GALINDO 6015PRESIDENTE PRUD62580520SAN2026012102022254750300017br.gov.bcb.brcode01051.0.06304CB62'