import React from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./sass/index.scss";
import Insight1 from "./components/Insight1";
import Insight2 from "./components/Insight2";
import Article from "./components/Article";
import Section from "./components/Section";
import Cover from "./components/Cover";
function App() {
  return (
    <div className="app-container">
      <Nav />
      <Home />
      <Insight1 />
      <Insight2 />
      <Article />
      <Section />
      <Cover />
      <Footer />
    </div>
  );
}

export default App;
