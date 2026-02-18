import React, { lazy, Suspense, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";

const HeroSection = lazy(() => import("./components/HeroSection"));

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
      offset: 100,
    });
  }, []);

  return (
    <div className="overflow-hidden h-screen">
      <Navbar />
      <Suspense fallback={<div style={{display:"flex", justifyContent:"center"}}>Loading Section...</div>}>
        <HeroSection />
      </Suspense>
    </div>
  );
};

export default App;
