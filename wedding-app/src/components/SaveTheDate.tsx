'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export const SaveTheDate = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDay = new Date("2026-03-07T16:30:00");

    const calculate = () => {
      const now = new Date();
      const today = new Date(now);
      today.setMonth(today.getMonth());

      let remainingMs = weddingDay.getTime() - today.getTime();

      const days = Math.floor(remainingMs / (1000 * 60 * 60 * 24));
      remainingMs -= days * (1000 * 60 * 60 * 24);

      const hours = Math.floor(remainingMs / (1000 * 60 * 60));
      remainingMs -= hours * (1000 * 60 * 60);

      const minutes = Math.floor(remainingMs / (1000 * 60));
      remainingMs -= minutes * (1000 * 60);

      const seconds = Math.floor(remainingMs / (1000));

      if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        setTime({ seconds: 0, days: 0, hours: 0, minutes: 0 });
      } else {
        setTime({ seconds, days, hours, minutes });
      }
    };

    calculate();
    const interval = setInterval(calculate, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <section className="flex items-center flex-col px-md">
      <h4>Salve a data</h4>
      <p className="text-center">
        07 de Março de 2026 - 16h30
        <br />
        Paróquia São Judas Tadeu - Presidente Prudente
        <br />
      </p>
      <br />
      <div className="
        bg-[#6A8DBB] text-white px-6 md:px-8 py-4 rounded-xl 
        flex items-center gap-4 md:gap-6
      ">
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold">{time.days}</span>
          <span className="text-sm text-neutral-300">Dias</span>
        </div>

        <div className="w-full h-px bg-neutral-600 md:h-10 md:w-px"></div>

        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold">{time.hours}</span>
          <span className="text-sm text-neutral-300">Horas</span>
        </div>

        <div className="w-full h-px bg-neutral-600 md:h-10 md:w-px"></div>

        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold">{time.minutes}</span>
          <span className="text-sm text-neutral-300">Minutos</span>
        </div>

        <div className="w-full h-px bg-neutral-600 md:h-10 md:w-px"></div>


        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold">{time.seconds}</span>
          <span className="text-sm text-neutral-300">Segundos</span>
        </div>
      </div>
      <br />

      <Image src='/img/igreja_maringa.png' alt="Foto no parque" width={600} height={400} style={{ paddingLeft: '10px', paddingRight: '10px', borderRadius: '20px' }} />
    </section>
  )
}