import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Models } from "@/components/Models";
import { Projects } from "@/components/Projects";
import { Expertise } from "@/components/Expertise";
import { Tools } from "@/components/Tools";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Models />
      <Projects />
      <Expertise />
      <Tools />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
