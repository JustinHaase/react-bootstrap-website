import React, { useState, useEffect } from "react";
import './App.css';
import HeaderBar from "./Components/HeaderBar";
import MenuSlide from "./Components/MenuSlide";
import Footer from "./Components/Footer";

function App() {
  const [offsetY, setOffsetY] = useState(0);
//creating use state to determine how much the user has scrolled the page for the parallax scroll effect
//the offsetY variable will contain the number of pixels scrolled from the the top of the page and default value is 0
const handleScroll = () => setOffsetY(window.pageYoffset);
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

const renderContent = () => (
  <>
  <div>
    <HeaderBar />
  </div>
  <div>
    <MenuSlide />
  </div>
  <div>
    <Footer />
  </div>
  </>
);



  return (
    <section className="Parallax">
      <div className="" 
      style={{transform: `translateY(${offsetY * 0.5}px)` }}/>
      <div className=""
      style={{transform: `translateY(${offsetY * 0.5}px)` }}/>
      <div className="">{renderContent()}</div>
    </section>
  );
}

export default App;
