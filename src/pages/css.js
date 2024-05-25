import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import MainContent from "../components/mainContent";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Css = () => {
  return (
    <>
      <Helmet>
        <title>CSS page</title>
        <meta
      name="description"
      content="Web site created using create-react-app"
        />
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <Header/>
      <main>
      <MainContent pageName="CSS page" designer="Designer"/>
      </main>
      <Footer/>
    </>

  );
}

export default Css;
