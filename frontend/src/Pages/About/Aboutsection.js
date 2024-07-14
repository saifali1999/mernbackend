import React from "react";
import Navbar from "../../Components/Navbar";
import Teamslider from "../../Components/Teamslider";
import "./aboutsection.css";
import Footer from "../../Components/Footer";
import Readytotalk from "../../Components/Readytotalk";
import Section3 from "../../Components/Section3";

const Aboutsection = () => {
  return (
    <>
      <div className="aboutpage">
        <Navbar />

        <div className="container3">
          <div className="header">
            <div className="box">
              <h2>About Us</h2>
            </div>
          </div>
        </div>

        <div className="section4">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="aboutus-img">
                  <img src="" className="img1" alt="about-img" />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="section-content">
                  <h2>About Us</h2>
                  <p>
                    Lorem ipsum dolor sit amet, con se ctetur adipiscing elit.
                    In sagittis eg esta ante, sed viverra nunc tinci dunt nec
                    elei fend et tiram.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    sagittis egestas ante, sed viverra nunc tincidunt nec nteger
                    nonsed condimntum elit, sit amet feugiat lorem. Proin tempus
                    sagittis velit vitae scelerisque.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    sagittis egestas ante, sed viverra nunc tincidunt nec nteger
                    nonsed condimntum elit, sit amet feugiat lorem. Proin tempus
                    sagittis velit vitae scelerisque.
                  </p>
                  <p>
                    Business-to-business metrics analytics value proposition
                    funding angel investor entrepreneur alpha ramen equity
                    gamification. Social proof partner network research
                  </p>
                </div>
              </div>
            </div>

            <div className="about-inner">
              <div className="row">
                <div className="col-lg-4">
                  <div className="inner">
                    <h3>Our History</h3>
                    <p>
                      Lorem ipsum dolor sit amet, con se ctetur adipiscing elit.
                      In sagittis eg esta ante, sed viverra nunc tinci dunt nec
                      elei fend et tiram
                    </p>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="inner">
                    <h3>Our Mission</h3>
                    <p>
                      Lorem ipsum dolor sit amet, con se ctetur adipiscing elit.
                      In sagittis eg esta ante, sed viverra nunc tinci dunt nec
                      elei fend et tiram
                    </p>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="inner">
                    <h3>Who We Are</h3>
                    <p>
                      Lorem ipsum dolor sit amet, con se ctetur adipiscing elit.
                      In sagittis eg esta ante, sed viverra nunc tinci dunt nec
                      elei fend et tiram
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="team-section">
          <div className="container">
            <div className="box2 text-center py-5">
              <h2>Our Awesome Team</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="row">
              <Teamslider />
            </div>
          </div>
        </div>

        <Readytotalk />

        <Section3 />
      </div>

      <Footer />
    </>
  );
};

export default Aboutsection;
