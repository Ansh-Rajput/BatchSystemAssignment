import AdvantageSection from "@/components/AdvantageSection";
import FaqSection from "@/components/FaqSection";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import TestamoniSection from "@/components/TestamoniSection";

export default function Home() {
  return (
    <div className="max-w-7xl m-auto">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <AdvantageSection />
      <TestamoniSection />
      <FaqSection />
      <div className="p-3">
        <div className="space-y-7 bg-[url('../public/frame.png')] text-white p-14 sm:py-60 bg-no-repeat bg-cover sm:bg-contain rounded-xl">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Ready To Get Started?
          </h2>
          <p className="sm:text-2xl sm:w-1/2">
            Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
          </p>
          <button className="flex gap-2 items-center sm:text-2xl rounded-md bg-white p-3 sm:p-5 sm:px-10">
            <span className="text-black">Download</span>{" "}
            <img src="Vector.png" alt="vector" />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
