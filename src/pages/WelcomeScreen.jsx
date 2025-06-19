import { useNavigate } from "react-router-dom";
import quranLogo from "../assets/quran-logo.png"; // ✅ same logo as loading screen
import TransitionWraper from "../components/TransitionWraper";

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <TransitionWraper>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#073b4c] via-[#118ab2] to-[#06d6a0] text-white px-4 text-center">
      
      {/* 🔵 Bouncing Quran Logo */}
      <img
        src={quranLogo}
        alt="Quran Logo"
        className="w-32 h-32 mb-6 rounded-full border-4 border-white shadow-2xl animate-bounce duration-1000 ease-in-out"
      />

      <h1 className="text-4xl font-bold mb-4 drop-shadow-md">Welcome to QQ Academy</h1>

      <p className="text-lg max-w-xl mb-6 text-white/90 font-medium">
        QQ Academy is an Islamic online platform where students can easily learn the Quran and religious education under the guidance of certified teachers.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <button
          onClick={() => navigate("/signup")}
          className="bg-white text-[#073b4c] px-6 py-2 rounded-full font-semibold hover:scale-105 transition-all"
        >
          New Student? Sign Up
        </button>

        <button
          onClick={() => navigate("/login")}
          className="bg-[#118ab2] text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-all"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
    </TransitionWraper >
  );
};

export default WelcomeScreen;
