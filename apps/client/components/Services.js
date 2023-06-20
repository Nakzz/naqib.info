import React, { Component } from "react";

function Service(props) {
  const { data, i } = props;
  const item = data;

  return (
    <div key={i} className="col-lg-4 col-md-6">
      <div className="single-services">
        <div className="icon">
          <i className={item.icoFont}></i>
        </div>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
      </div>
    </div>
  );
}

export class Services extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //console.log("props from services render: " + JSON.stringify(this.props));

    let items = this.props.data.map((item, ind) => {
      return <Service data={item} key={ind} />;
    });

    if (this.props.data && this.props.data.length != 0)
      return (
        <section className="welcome-services ptb-120 bg-38d16a">
          <div className="container">
            <div className="section-title">
              <span className="wow fadeInUp">I am currently </span>
              <h2 className="wow fadeInDown">Interested in...</h2>
            </div>

            <div className="row justify-content-md-center">
              {this.props.data ? items : ""}

              {/* <div className="col-lg-12 col-md-12">
                            <div className="more-services-btn wow fadeInUp">
                                <a href="services-2.html" className="btn btn-primary">More Services</a>
                            </div>
                        </div> */}
            </div>
          </div>

          <div className="circle-top rotateme">
            <img src={require("../images/circle-shape.png")} alt="circle" />
          </div>
          <div className="circle-bottom rotateme">
            <img src={require("../images/circle-shape.png")} alt="circle" />
          </div>
        </section>
      );
    else return null;
  }
}

export default Services;
