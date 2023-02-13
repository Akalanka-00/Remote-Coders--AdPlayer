import React from "react";
import TopNavBar from "../../Components/NavBar/TopNavBar";
import Header from "../../Components/Header/Header";
import About from "../../Components/About Us/AboutUs";
import Developer from "../../Components/Game Developer/GameDeveloper";
import Customer from "../../Components/Customer/Customer";
import Experience from "../../Components/Experience/Experience";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <TopNavBar />
      <Header />
      <About />
      <Developer />
      <Customer />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
