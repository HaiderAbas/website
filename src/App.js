import React from "react";
import Analytices from "./components/analytices/analytices";
import Cards from "./components/Cards/cards";
import Footer from "./components/Footer/Footer";
import Hero from "./components/hero/hero";
import Nav from "./components/navabr/nav";
import NewsLatters from "./components/NewsLetter/newslatters";
function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Analytices />
      <NewsLatters />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
