import React from "react";
import {
  BLOG_URL,
  LINKEDIN_URL,
  GITHUB_URL,
  EMAIL,
  DOMAIN,
} from "../../utils/constants";

const SocialLinks = () => (
  <ul className="social-links">
    {[
      { url: LINKEDIN_URL, icon: "icofont-linkedin" },
      { url: GITHUB_URL, icon: "icofont-github" },
      { url: `mailto:${EMAIL}`, icon: "icofont-email" },
    ].map((link, index) => (
      <li key={index}>
        <a href={link.url}>
          <i className={link.icon}></i>
        </a>
      </li>
    ))}
  </ul>
);

const QuickLinks = () => {
  const links = [
    "/home",
    "/about-me",
    "/coming-soon",
    "/coming-soon",
    BLOG_URL,
  ];
  const linkNames = ["Home", "About", "Portfolio", "Contact", "Blog"];
  return (
    <ul className="list">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link}>{linkNames[index]}</a>
        </li>
      ))}
    </ul>
  );
};

const FooterContactInfo = () => (
  <ul className="footer-contact-info">
    <li>
      <i className="icofont-email"></i>
      <span>Email:</span>
      <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
    </li>
  </ul>
);

const Footer = () => (
  <footer className="footer-area ptb-120 pb-0">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="single-footer-widget">
            <div className="logo">
              <a href="#">
                <img src={"images/logo.png"} alt="logo" loading="lazy" />
              </a>
            </div>
            <SocialLinks />
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-footer-widget ml-4">
            <h3>Quick Links</h3>
            <QuickLinks />
          </div>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-6">
          <div className="single-footer-widget">
            <h3>Get in Touch</h3>
            <p>I'd love to chat!</p>
            <FooterContactInfo />
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
