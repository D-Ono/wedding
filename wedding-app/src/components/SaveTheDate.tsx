'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const SaveTheDate = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date("2026-03-07T16:30:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center min-w-[70px] md:min-w-[90px]">
      <div className="text-4xl md:text-6xl font-bold text-white mb-1 md:mb-2 tabular-nums tracking-tight">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-xs md:text-sm text-white/80 uppercase tracking-widest font-medium">
        {label}
      </div>
    </div>
  );

  const Separator = () => (
    <div className="hidden md:flex items-center justify-center mx-2">
      <div className="w-px h-16 bg-white/30"></div>
    </div>
  );

  return (
    <section className="flex items-center flex-col px-4 py-12 w-full max-w-4xl opacity-0 fade-in stagger-2">
      <h4 className="mb-6">Salve a data</h4>

      <p className="text-center mb-8 text-gray-600 leading-relaxed">
        07 de Março de 2026 - 16h30
        <br />
        Paróquia São Judas Tadeu - Presidente Prudente
      </p>

      {/* Premium Countdown Card */}
      <div className="
        relative w-full max-w-2xl mb-10
        bg-gradient-to-br from-[#6A8DBB] via-[#7A9DCC] to-[#5A7DAB]
        rounded-3xl p-6 md:p-10
        shadow-2xl
        overflow-hidden
      ">
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />

        {/* Decorative gradient orbs */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl" />

        {/* Countdown Display */}
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 md:gap-2">
          <TimeUnit value={timeLeft.days} label="Dias" />
          <Separator />
          <TimeUnit value={timeLeft.hours} label="Horas" />
          <Separator />
          <TimeUnit value={timeLeft.minutes} label="Minutos" />
          <Separator />
          <TimeUnit value={timeLeft.seconds} label="Segundos" />
        </div>
      </div>

      {/* Church Image */}
      <div className="relative w-full max-w-2xl rounded-3xl overflow-hidden shadow-xl opacity-0 scale-in stagger-4">
        <Image
          src='/img/igreja_maringa.png'
          alt="Foto da igreja"
          width={800}
          height={533}
          className="w-full h-auto transition-transform duration-700 hover:scale-105"
        />
      </div>
    </section>
  )
}