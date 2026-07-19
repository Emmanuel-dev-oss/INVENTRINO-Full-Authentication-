import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import heroBg from "../assets/HeroBackground1.png"
import Navbar from "../components/NavBar.jsx";
import FooterSection from "../components/Footers.jsx";

import FeatureSection from "../components/FeatureSection.jsx"
import SolutionSection from "../components/SolutionSection.jsx"
import PricingSection from "../components/PricingSection.jsx"
import AboutSection from "../components/AboutSection.jsx"
import ContactSection from "../components/ContactSection.jsx"
import HeroSection from "../components/Heros.jsx"

export default function LandingPage({
    onLoginClick,
    onSignupClick
}) {

    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);

      if (!section) return;

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setActiveSection(sectionId);

      const navbarHeight = 90;

      const offset = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    };

   const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
      const handleScroll = () => {
        const sections = [
          "home",
          "features",
          "about",
          "solutions",
          "pricing",
          "contact",
        ];

        const scrollPosition = window.scrollY + 150;

        for (const id of sections) {
          const section = document.getElementById(id);

          if (!section) continue;

          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;

          if (
            scrollPosition >= top &&
            scrollPosition < bottom
          ) {
            setActiveSection(id);
            break;
          }
        }
      };

      window.addEventListener(
        "scroll",
        handleScroll
      );

      handleScroll();

      return () =>
        window.removeEventListener(
          "scroll",
          handleScroll
        );
    }, []);

  return (
    <div   className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900 text-white">
      {/* Navbar */}
      <Navbar
       onLoginClick={() => navigate("/login")}
       onSignupClick={() => navigate("/signup")}
       scrollToSection={scrollToSection}
       activeSection={activeSection}
       setActiveSection={setActiveSection}
      />
      
      {/* Hero Section */}
      <section id="home" style={{ backgroundImage: `url(${heroBg})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }} className=" text-center">
       <HeroSection/>
      </section>

      {/* Features */}
      <section id="features">
        <FeatureSection/>
      </section>

      {/* About */}
      <section id="about">
        <AboutSection/>
      </section>

      {/* Solution */}
      <section id="solutions">
        <SolutionSection/>
      </section>

      {/* Pricing */}
      <section id="pricing">
        <PricingSection/>
      </section>

      {/* Contact */}
      <section id="contact">
        <ContactSection/>
      </section>

      {/* Footer */}
      <section>
        <FooterSection/>
      </section>
    </div>
  );
}