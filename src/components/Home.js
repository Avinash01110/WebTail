import React from "react";
import "../style/Home.css";
import { Helmet } from "react-helmet";

export const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>WebTail - Home</title>
        <meta name="description" content="WebTail - Home" />
        <link rel="icon" href="favicon1.ico " sizes="16x16" />
      </Helmet>
      <div className="header">
        <div className="container">
          <div className="personal-details">
            <div className="name">Avinash Gupta</div>
            <div className="email">itsavinashgupta01@gmail.com</div>
            <div className="contact">+918103620490</div>
          </div>
        </div>
      </div>
    </>
  );
};
