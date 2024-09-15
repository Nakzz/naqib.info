import React from "react";
import PropTypes from "prop-types";

// Extracted Service component
const Service = ({ data }) => {
  const { icoFont, title, body } = data;
  return (
    <div className="col-lg-4 col-md-6">
      <div className="single-services">
        <div className="icon">
          <i className={icoFont}></i>
        </div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
};

// Prop-types validation for Service component
Service.propTypes = {
  data: PropTypes.object.isRequired,
};

// Extracted function to map data to Service components
const mapDataToServices = (data) => {
  return data.map((item, ind) => <Service data={item} key={ind} />);
};

// Converted Services to functional component
const Services = ({ data }) => {
  const items = mapDataToServices(data);

  if (data && data.length !== 0) {
    return (
      <section className="welcome-services ptb-120 bg-38d16a">
        <div className="container">
          <div className="section-title">
            <span className="wow fadeInUp">I am passionate about</span>
            <h2 className="wow fadeInDown">Leading Innovations in...</h2>
          </div>
          <div className="row justify-content-md-center">{items}</div>
        </div>
        <div className="circle-top rotateme">
          <img src={"images/circle-shape.png"} alt="circle" />
        </div>
        <div className="circle-bottom rotateme">
          <img src={"images/circle-shape.png"} alt="circle" />
        </div>
      </section>
    );
  } else {
    return null;
  }
};

// Prop-types validation for Services component
Services.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Services;
