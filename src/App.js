import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import AboutSection from "./AboutSection";
import CertificationSection from "./CertificationSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import PortfolioSection from "./PortfolioSection";

import HomeSection from "./HomeSection";
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {


  return (
    <main>
      <Header/>
      <HomeSection/>
    <AboutSection/>
    <CertificationSection/>
    <EducationSection/>
    <ExperienceSection/>
    <PortfolioSection/>


      <Footer/>

    </main>
  )
};

export default App;
