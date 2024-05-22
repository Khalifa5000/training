import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import MainContent from "../components/mainContent";

const Html = () => {
  return (
    <>
      <Header/>
      <main>
      <MainContent pageName="HTML page" designer="Developer"/>
      </main>
      <Footer/>
    </>
  
  );
}

export default Html;
