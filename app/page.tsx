import Header from "./components/Header";
import Hero from "./components/Hero";
import Team from "./components/Team";
import JobDescription from "./components/JobDescription";
import Schedule from "./components/Schedule";
import FAQ from "./components/FAQ";
import BottomCTA from "./components/BottomCTA";
import Footer from "./components/Footer";
import ScrollAnimation from "./components/ScrollAnimation";

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-dark text-white selection:bg-neon-blue selection:text-black">
      <Header />
      <Hero />
      <ScrollAnimation><Team /></ScrollAnimation>
      <ScrollAnimation><JobDescription /></ScrollAnimation>
      <ScrollAnimation><Schedule /></ScrollAnimation>
      <ScrollAnimation><FAQ /></ScrollAnimation>
      <ScrollAnimation><BottomCTA /></ScrollAnimation>
      <Footer />
    </main>
  );
}
