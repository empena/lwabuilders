import React from "react";
import "../styles/Home.css";
import ContactForm from "../forms/ContactForm";

const Home = () => {
  return (
    <>
      <section id="header">
        <div className="containerHeaderOne">
          <div className="containerHeaderTwo">
            <div className="head">
              <h5>Carpentry Contractor</h5>
              <h8>Locally owned and operated business. LWA Builders takes pride in every job we do and guarantee 100% customer satisfaction.</h8>
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="containerServicesOne">
          <div className="containerServicesTwo">
            <h1>Services</h1>
            <div className="row">
              <div className="column">
                <h4>Decks</h4>
                <img
                  width="auto"
                  height="100"
                  alt="Pro Referral"
                  src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1594178364/LWA/icons-01_azdauz.png"
                />
                <p>
                  We can help you build the deck of your dreams. High quality
                  craftmanship, durable materials and on-time delivery.
                </p>
              </div>

              <div className="column">
                <h4>Home Renovation</h4>
                <img
                  width="auto"
                  height="100"
                  alt="Pro Referral"
                  src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1594178364/LWA/icons-03_sjcvh6.png"
                />
                <p>
                  From finishing the basement or updating a bathroom, we can
                  help you remodel your home.
                </p>
              </div>

              <div className="column">
                <h4>Fencing</h4>
                <img
                  width="auto"
                  height="100"
                  alt="Pro Referral"
                  src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1594178364/LWA/icons-04_motn8m.png"
                />
                <p>
                  LWA Builders has a history of delivering superior fence
                  projects, whether vinyl or wood, all at an affordable price.
                </p>
              </div>

              <div className="column">
                <h4>Handyman</h4>
                <img
                  width="auto"
                  height="100"
                  alt="Pro Referral"
                  src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1594178364/LWA/icons-02_ad0ayu.png"
                />
                <p>
                  No task is to small for our team. Hardware installation, door
                  replacement, drywall repair to name a few.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews">
        <div className="containerReviewsOne">
          <div className="containerReviewsTwo">
            <h5>
              You're in good company. See what others are saying about what we
              do.
            </h5>
            <a href="https://www.proreferral.com/public-profile/570351">
              <img
                className="images"
                width="150"
                height="100"
                alt="Pro Referral"
                src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1590634483/LWA/ProRef_wm4hsv.png"
              />
            </a>
            <a href="https://member.angieslist.com/member/store/24264261/about?categoryId=111">
              <img
                className="images"
                width="150"
                height="100"
                alt="Angies List"
                src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1590634483/LWA/AngieL_dy6vwi.png"
              />
            </a>
            <a href="https://www.instagram.com/lwabuilders/?hl=en">
              <img
                className="images"
                width="150"
                height="100"
                alt="Instagram"
                src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1590634483/LWA/Insta_pu0cve.png"
              />
            </a>
            <a href="https://porch.com/north-salt-lake-ut/framing-contractors/lwa-builders/pp">
              <img
                className="images"
                width="150"
                height="100"
                alt="Porch"
                src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1590634483/LWA/Porch_y61psn.png"
              />
            </a>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="containerContactOne">
          <div className="containerContactTwo">
            <h1>Have a Question?</h1>
            <h3>
              Whether you are ready to get started on your project or needs more
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
        <img
          width="50"
          height="90"
          alt="Porch"
          src="https://res.cloudinary.com/dvwwzmsmn/image/upload/v1590618404/LWA/LOGO_contc6.png"
        />
        <p>&copy; LWA Builders 2020</p>
      </div>
    </>
  );
};

export default Home;
