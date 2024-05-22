import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import MainContent from "../components/mainContent";

const Css = () => {
  return (
    <>
      <Header/>
      <main>
      <MainContent pageName="CSS page" designer="Designer"/>
      </main>
      <Footer/>
    </>

  );
}

export default Css;
