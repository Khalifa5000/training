import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import MainContent from "../components/mainContent";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home page</title>
        <meta
      name="description"
      content="Web site created using create-react-app"
        />
      </Helmet>

      <Header/>
      <MainContent pageName="Home page" designer="Mohamed Khalifa"/>
      <Footer/>
    </>
  );
}

export default Home;
