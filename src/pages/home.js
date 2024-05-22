import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import MainContent from "../components/mainContent";

const Html = () => {
  return (
    <>
      <Header/>
      <MainContent pageName="Home page" designer="Mohamed Khalifa"/>
      <Footer/>
    </>
  );
}

export default Html;
