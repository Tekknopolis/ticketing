import { CountdownTimer } from "./CountdownTimer";
import { ArrowRight } from "lucide-react";

export function Hero() {
  // Set countdown to 30 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);

  return (
    <div className="relative py-20 sm:py-28 lg:py-36 px-6 bg-gradient-to-br from-[#00A86B] to-[#008557]">
      <div className="max-w-5xl mx-auto text-center">
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Join the Ultimate Event Experience
        </h1>

        <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Discover and register for amazing events happening around you. Don&apos;t miss out on unforgettable experiences.
        </p>
        
        <div className="mb-12">
          <CountdownTimer targetDate={targetDate} />
        </div>

        <button className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white rounded-full shadow-xl bg-[#FF6B35] hover:bg-[#FF5520] hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200">
          Register Now
          <ArrowRight className="w-5 h-5" />
        </button>

      </div>
    </div>
  );
}