import React, { component } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Title from "./component/Title";
import About from "./component/About";
import Footer from "./component/Footer";
import ProjectSection from "./component/ProjectSection";
import SkillStack from "./component/SkillStack";
import RecommendationSection from "./component/RecommendationSection";
import BlogSection from "./component/BlogSection";
import Contact from "./component/Contact";

//functional component Example
function App() {
  return (
    <div>
      <Navbar />;
      <Title />;
      <RecommendationSection />
      <SkillStack />
      <ProjectSection />
      <About />
      <BlogSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
