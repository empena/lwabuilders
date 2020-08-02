import React from "react";
import "../styles/Home.css";
import ContactForm from "../forms/ContactForm";

const Home = () => {
  return (
    <>
      <section id="header">
        <div className="containerHeaderOne">
          <video autoplay="autoplay" muted loop width="100%" height="100%">
            <source
              src="https://res.cloudinary.com/dvwwzmsmn/video/upload/v1596406428/LWA/LWA_Builders_Promo_Clip_ottc7i.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      <section id="reviews">
        <div className="containerReviewsOne">
          <div className="containerReviewsTwo">
            <h1>
              Locally owned and operated business. We take pride in everything
              we do. See what other are saying about us.
            </h1>
            <a href="https://www.proreferral.com/public-profile/570351">
              <img
                className="images"
                width="120"
                height="70"
                alt="Pro Referral"
                src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1590634483/LWA/ProRef_wm4hsv.png"
              />
            </a>
            <a href="https://member.angieslist.com/member/store/24264261/about?categoryId=111">
              <img
                className="images"
                width="120"
                height="70"
                alt="Angies List"
                src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1590634483/LWA/AngieL_dy6vwi.png"
              />
            </a>
            <a href="https://www.instagram.com/lwabuilders/?hl=en">
              <img
                className="images"
                width="120"
                height="70"
                alt="Instagram"
                src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1590634483/LWA/Insta_pu0cve.png"
              />
            </a>
            <a href="https://porch.com/north-salt-lake-ut/framing-contractors/lwa-builders/pp">
              <img
                className="images"
                width="120"
                height="70"
                alt="Porch"
                src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1590634483/LWA/Porch_y61psn.png"
              />
            </a>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="containerServicesOne">
          <div className="containerServicesTwo">
            <h1>Services</h1>
            <div className="row">
              <div className="column">
                <img
                  width="90%"
                  height="auto"
                  max-width="200px"
                  alt="deck_icon"
                  src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1590632144/LWA/architecture-bungalow-clouds-countryside-449023_aaovig.jpg"
                />
                <h4>Decks</h4>
                <p>
                  We can help you build the deck of your dreams. High quality
                  craftmanship, durable materials and on-time delivery.
                </p>
              </div>

              <div className="column">
                <img
                  width="90%"
                  height="auto"
                  max-width="200px"
                  alt="home_icon"
                  src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1590632137/LWA/home-real-estate-106399_m4ekpc.jpg"
                />
                <h4>Home Renovation</h4>
                <p>
                  From finishing the basement or updating a bathroom, bring to
                  life your home renovation project with the help of our skilled
                  team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="containerContactOne">
          <div className="containerContactTwo">
            <h1>Have a Question?</h1>
            <h3>
              Whether you are ready to get started on your project or need more
              answers, contact us with the form below.
            </h3>
            <h3>
              Or call <b>801-592-0158</b>
            </h3>
            <ContactForm />
          </div>
        </div>
      </section>

      <div className="containerFillerOne">
        <div className="containerFillerTwo">
          <h5>
            Licensed and Insured Contractor with |<b> 5</b> | Star Customer
            Rating
          </h5>
        </div>
      </div>

      <div className="containerFooter">
        <p>&copy; LWA Builders 2020</p>
      </div>
    </>
  );
};

export default Home;
