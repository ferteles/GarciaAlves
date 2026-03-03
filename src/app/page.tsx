import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PracticeAreas from "@/components/PracticeAreas";
import Numbers from "@/components/Numbers";
import Lawyers from "@/components/Lawyers";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <PracticeAreas />
      <Numbers />
      <Lawyers />
      <Blog />
      <Footer />
    </main>
  );
}
