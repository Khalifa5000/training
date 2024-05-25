import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import MainContent from "../components/mainContent";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Html = () => {
  return (
    <>
      <Helmet>
        <title>HTML page</title>
        <meta
      name="description"
      content="Web site created using create-react-app"
         />
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <Header/>
      <main>
      <MainContent pageName="HTML page" designer="Developer"/>
      </main>
      <Footer/>
    </>
  
  );
}

export default Html;
