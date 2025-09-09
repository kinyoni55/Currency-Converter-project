import React from 'react';
import bgImage from '../assets/images/LpBG.png'; // ✅ path correct for /pages

const LandingPage = () => {
  return (
    <main className="relative flex flex-col text-white items-center text-center min-h-screen flex-1 h-screen">
      {/* Background image with opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 "
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Content */}
      <section className="relative max-w-2xl my-[100px] p-8">
        <h1 className="justify-items-center text-black text-[39px] font-[800] mb-[50px] ">
          Kinyoni Konverter
        </h1>
        <p className="mb-[50px] text-black p-5 font-medium">
          Welcome to Kinyoni Konverter, your reliable currency converter.
          Instantly convert between major world currencies with real-time
          exchange rates. Simple, fast, and accurate so you can make smarter
          financial decisions with ease.
        </p>
        <a
          className="bg-slate-200 px-12 py-[6px] 
          text-[24px] rounded-full text-black shadow-[inset_0_4px_6px_rgba(0,0,0,0.3)]
          font-medium"
          href="/converter"
        >
          Continue
        </a>
      </section>
    </main>
  );
};

export default LandingPage;
