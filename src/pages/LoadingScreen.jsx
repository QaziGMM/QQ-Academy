import React from "react";
import quranLogo from "../assets/quran-logo.png"; // Replace with your logo
import TransitionWraper from "../components/TransitionWraper";

const LoadingScreen = () => {
  return (
    <TransitionWraper>
    <div className="w-full h-screen bg-gradient-to-br from-[#073b4c] via-[#118ab2] to-[#06d6a0] flex items-center justify-center">
      <div className="text-center">
        <img
          src={quranLogo}
          alt="Quran Sticker"
          className="w-40 h-40 mx-auto rounded-full border-4 border-white shadow-2xl animate-bounce duration-1000 ease-in-out hover:scale-105 transition-all"
        />

        <h1 className="mt-6 text-3xl font-bold text-white drop-shadow-lg tracking-wide">
          QQ Academy
        </h1>

        <p className="mt-2 text-lg text-white/90 font-medium italic animate-pulse">
          بِسْمِ ٱللّٰهِ ... Loading
        </p>
      </div>
    </div>
    </TransitionWraper>
  );
};

export default LoadingScreen;
