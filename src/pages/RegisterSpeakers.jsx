/*index.jsx*/
import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import logosquare from "../../src/images/elevate_square.png";
import ElevateVideoReveal from "../elevate-logo-reveal.mp4";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Footer from "./Footer";

//Functional Component
export default function RegisterSpeakers() {
  const easing = [0.6, -0.05, 0.01, 0.99];
  const fade1 = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: easing,
      },
    },
  };

  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <motion.div variants={fade1} className="py-3">
        <div
          id="register-speaker-script-holder"
          className="container py-5 text-center"
        >
          <div className="d-md-flex d-block align-items-center justify-content-center bg-dark">
            <Link to="/" className="py-2">
              <img
                src={logosquare}
                alt="conf_elevate"
                height="150vh"
                className="pb-3 pt-3"
                srcset=""
              />
            </Link>
            <div className="h3 text-white pl-md-4 pl-0 pb-3 pb-md-0">
              connect. learn. elevate^
            </div>
          </div>
          {/*           
          <div
            className="container pt-5 text-white"
            id="speakerRegistration"
          ></div> */}

          <iframe
            title="speaker-register-form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfrnJKV5_r4eIl8GeuOACL3UfbBX06kGAbZ2jyaDFlYJ2bH7g/viewform?usp=sf_link"
            className="container"
            height="1000px"
            style={{ backgroundColor: "#222222", overflow: "hidden" }}
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
          >
            Loading…
          </iframe>
        </div>
        <div
          style={{
            filter: "saturate(20%) contrast(200%)",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            height: "300px",
          }}
          className="container pb-0 pb-md-5 pr-2"
        >
          <video
            className="pt-0 pt-md-5"
            loop="true"
            autoPlay="true"
            src={ElevateVideoReveal}
            width="100%"
          ></video>
        </div>
      </motion.div>
      <Footer></Footer>
    </motion.div>
  );
}
