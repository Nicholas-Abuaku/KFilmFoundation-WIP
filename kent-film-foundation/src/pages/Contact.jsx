import React from "react";
import { ContactForm } from "../components/ContactForm";
import { Helmet } from "react-helmet-async";
const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Kent Film Foundation | Contact Us | We're Here to Help</title>
        <meta
          name="description"
          content="Have a question for Kent Film Foundation? Find our contact information, address, and easy-to-use inquiry form"
        />
        <link
          rel="canonical"
          href="https://kentfilmfoundation.netlify.app/contact"
        />
        {/* Social Tags */}
        <meta
          property="og:description"
          content="Have a question for Kent Film Foundation? Find our contact information, address, and easy-to-use inquiry form!"
        />
        <meta
          property="og:image"
          content="https://img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/logo/c5a56d23-b292-4dd3-b3fa-06fdeadebab1.jpg/:/rs=h:80,cg:true,m/qt=q:95"
        />
        <meta property="og:url" content="http://localhost:5173/contact" />
        <meta property="og:title" content="Kent Film Foundation | Contact Us" />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:title"
          content="Kent Film Foundation | Contact Us"
        />
        <meta
          name="twitter:description"
          content="Connect with Ramsgate Community Cinema - inquire about screenings, events, or reach us via the provided contact form. Your cinematic experience begins with us!"
        />
      </Helmet>
      <ContactForm />
    </>
  );
};

export default Contact;
