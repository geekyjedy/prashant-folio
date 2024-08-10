import AboutSection from "@/components/AboutSection";
import ConnectSection from "@/components/ConnectSection";
import HeroSection from "@/components/HeroSection";
import MyWorkSection from "@/components/MyWorkSection";
import NavBar from "@/components/NavBar";
import QuoteComponent from "@/components/QuoteComponent";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets:['latin'],
  weight:['400','700'],
})


export default function Home() {
  return (
    <div className={`px-6 md:px-3 bg-gradient-to-br from-black via-purple-950 to-pink-950 scroll-smooth transition-all duration-1000 ${raleway.className}`}>
      <NavBar/>
      <HeroSection/>
      <MyWorkSection/>
      <QuoteComponent/>
      <AboutSection/>
      <ConnectSection/>
    </div>
  );
}
