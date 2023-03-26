import React from "react";
import AboutUs from "../../Components/Homepage/About Us/AboutUs";
import Contact from "../../Components/Homepage/Contact/Contact";
import Customer from "../../Components/Homepage/Customer/Customer";
import Experience from "../../Components/Homepage/Experience/Experience";
import Footer from "../../Components/Homepage/Footer/Footer";
import GameDeveloper from "../../Components/Homepage/Game Developer/GameDeveloper";
import Header from "../../Components/Homepage/Header/Header";
import TopNavBar from "../../Components/Homepage/NavBar/TopNavBar";

const HomePage = () => {
  return (
    <div>
      <TopNavBar />
      <Header />
      <AboutUs />
      <GameDeveloper />
      <Customer />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
