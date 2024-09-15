import React, { Component } from "react";

export class HowWeWork extends Component {
  render() {
    return (
      <section className="how-we-work ptb-120">
        <div className="container">
          <div className="section-title">
            <span className="wow fadeInUp">Around the World</span>
            <h2 className="wow fadeInDown">Superior design & concept work</h2>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-work-box">
                <div className="number">01</div>
                <h3>Research</h3>
                <p>Quis ipsum suspendisse ultrices gravida Risus.</p>

                <i className="icofont-light-bulb"></i>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-work-box">
                <div className="number">02</div>
                <h3>UI Design</h3>
                <p>Quis ipsum suspendisse ultrices gravida Risus.</p>

                <i className="icofont-ruler-alt-2"></i>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-work-box">
                <div className="number">03</div>
                <h3>Development</h3>
                <p>Quis ipsum suspendisse ultrices gravida Risus.</p>

                <i className="icofont-calculator"></i>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-work-box">
                <div className="number">04</div>
                <h3>Analysis</h3>
                <p>Quis ipsum suspendisse ultrices gravida Risus.</p>

                <i className="icofont-mathematical-alt-2"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="shape10 rotateme">
          <img src={require("./../images/shapes/10.png")} alt="shape" />
        </div>
        <div className="shape6">
          <img src={require("./../images/shapes/6.png")} alt="shape" />
        </div>
        <div className="shape7">
          <img src={require("./../images/shapes/7.png")} alt="shape" />
        </div>
      </section>
    );
  }
}

export default HowWeWork;
--------------------------------------------------
import React, { Component } from "react";

export class Funfacts extends Component {
  render() {
    return (
      <section className="funfacts-area ptb-120 bg-38d16a">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count="520">
                    520
                  </span>
                </h3>
                <p>Awards Winning</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count="99">
                    99
                  </span>
                  %
                </h3>
                <p>Satisfied Clients</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count="3325">
                    3325
                  </span>
                </h3>
                <p>Creative Projects</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count="54380">
                    54380
                  </span>
                </h3>
                <p>Lines of Code</p>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-top rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
        <div className="circle-bottom rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
      </section>
    );
  }
}

export default Funfacts;
--------------------------------------------------
import React, { Component } from "react";

export class Team extends Component {
  render() {
    return (
      <section className="team-area bg-image ptb-120">
        <div className="container">
          <div className="section-title">
            <span className="wow fadeInUp">Team Member</span>
            <h2 className="wow fadeInDown">We have quality full team</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-team-box">
                <div className="team-image">
                  <img
                    src={require("./../images/team-image/1.jpg")}
                    alt="team"
                  />
                </div>

                <div className="team-content">
                  <h3>Jennifer Aniston</h3>
                  <span>Photographer</span>

                  <ul className="social">
                    <li>
                      <a href="#">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-team-box">
                <div className="team-image">
                  <img
                    src={require("./../images/team-image/2.jpg")}
                    alt="team"
                  />
                </div>

                <div className="team-content">
                  <h3>Monica Bellucci</h3>
                  <span>Web Developer</span>

                  <ul className="social">
                    <li>
                      <a href="#">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
              <div className="single-team-box">
                <div className="team-image">
                  <img
                    src={require("./../images/team-image/3.jpg")}
                    alt="team"
                  />
                </div>

                <div className="team-content">
                  <h3>Kate Winslet</h3>
                  <span>Web Designer</span>

                  <ul className="social">
                    <li>
                      <a href="#">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-top rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
        <div className="shape2">
          <img src={require("./../images/shapes/2.png")} alt="shape" />
        </div>
        <div className="shape10 rotateme">
          <img src={require("./../images/shapes/10.png")} alt="shape" />
        </div>
        <div className="circle-bottom rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
        <div className="shape6">
          <img src={require("./../images/shapes/6.png")} alt="shape" />
        </div>
      </section>
    );
  }
}

export default Team;
--------------------------------------------------
import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <section className="cta-about">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="cta-about-image">
                <img
                  src={require("./../images/cta-about.jpg")}
                  alt="cta-image"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="cta-about-content ptb-120">
                <div className="section-title">
                  <span className="wow fadeInUp">About Us</span>
                  <h2 className="wow fadeInDown">
                    We are Creative Agency <br /> from the USA
                  </h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>

                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>

                <a href="#" className="btn btn-primary wow fadeInUp">
                  Let's Talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
--------------------------------------------------
import React, { Component } from "react";

export class Features extends Component {
  render() {
    return (
      <section className="features-area ptb-120 bg-08071c">
        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6">
              <div className="features-content">
                <div className="section-title">
                  <span>Our Features</span>
                  <h2>Create the lifestyle you really desire it.</h2>
                </div>

                <div className="single-features-item">
                  <div className="icon">
                    <i className="icofont-globe-alt"></i>
                  </div>
                  <h3>Beautiful and easy to use</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consecte tuer adipiscing elit
                    enean consecte tuer adipiscing elit enean.
                  </p>
                </div>

                <div className="single-features-item">
                  <div className="icon">
                    <i className="icofont-brand-designfloat"></i>
                  </div>
                  <h3>Pixel perfect design</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consecte tuer adipiscing elit
                    enean consecte tuer adipiscing elit enean.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="features-image text-center">
                <img src={require("./../images/1.jpg")} alt="image" />
              </div>
            </div>
          </div>
        </div>

        <div className="shape7">
          <img src={require("./../images/shapes/7.png")} alt="shape" />
        </div>
        <div className="shape14 rotateme">
          <img src={require("./../images/shapes/14.png")} alt="shape" />
        </div>
        <div className="shape15 rotateme">
          <img src={require("./../images/shapes/15.png")} alt="shape" />
        </div>
      </section>
    );
  }
}

export default Features;
--------------------------------------------------
import React, { Component } from "react";

export class HowWeWork extends Component {
  render() {
    return (
      <section className="how-we-work ptb-120">
        <div className="container">
          <div className="section-title">
            <span className="wow fadeInUp">Around the World</span>
            <h2 className="wow fadeInDown">Superior design & concept work</h2>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-work-box">
                <div className="number">01</div>
                <h3>Research</h3>
                <p>Quis ipsum suspendisse ultrices gravida Risus.</p>

                <i className="icofont-light-bulb"></i>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-work-box">
                <div className="number">02</div>
                <h3>UI Design</h3>
                <p>Quis ipsum suspendisse ultrices gravida Risus.</p>

                <i className="icofont-ruler-alt-2"></i>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-work-box">
                <div className="number">03</div>
                <h3>Development</h3>
                <p>Quis ipsum suspendisse ultrices gravida Risus.</p>

                <i className="icofont-calculator"></i>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-work-box">
                <div className="number">04</div>
                <h3>Analysis</h3>
                <p>Quis ipsum suspendisse ultrices gravida Risus.</p>

                <i className="icofont-mathematical-alt-2"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="shape10 rotateme">
          <img src={require("./../images/shapes/10.png")} alt="shape" />
        </div>
        <div className="shape6">
          <img src={require("./../images/shapes/6.png")} alt="shape" />
        </div>
        <div className="shape7">
          <img src={require("./../images/shapes/7.png")} alt="shape" />
        </div>
      </section>
    );
  }
}

export default HowWeWork;
--------------------------------------------------
import React, { Component } from "react";

export class Funfacts extends Component {
  render() {
    return (
      <section className="funfacts-area ptb-120 bg-38d16a">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count="520">
                    520
                  </span>
                </h3>
                <p>Awards Winning</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count="99">
                    99
                  </span>
                  %
                </h3>
                <p>Satisfied Clients</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count="3325">
                    3325
                  </span>
                </h3>
                <p>Creative Projects</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count="54380">
                    54380
                  </span>
                </h3>
                <p>Lines of Code</p>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-top rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
        <div className="circle-bottom rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
      </section>
    );
  }
}

export default Funfacts;
--------------------------------------------------
import React, { Component } from "react";

export class Team extends Component {
  render() {
    return (
      <section className="team-area bg-image ptb-120">
        <div className="container">
          <div className="section-title">
            <span className="wow fadeInUp">Team Member</span>
            <h2 className="wow fadeInDown">We have quality full team</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-team-box">
                <div className="team-image">
                  <img
                    src={require("./../images/team-image/1.jpg")}
                    alt="team"
                  />
                </div>

                <div className="team-content">
                  <h3>Jennifer Aniston</h3>
                  <span>Photographer</span>

                  <ul className="social">
                    <li>
                      <a href="#">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-team-box">
                <div className="team-image">
                  <img
                    src={require("./../images/team-image/2.jpg")}
                    alt="team"
                  />
                </div>

                <div className="team-content">
                  <h3>Monica Bellucci</h3>
                  <span>Web Developer</span>

                  <ul className="social">
                    <li>
                      <a href="#">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
              <div className="single-team-box">
                <div className="team-image">
                  <img
                    src={require("./../images/team-image/3.jpg")}
                    alt="team"
                  />
                </div>

                <div className="team-content">
                  <h3>Kate Winslet</h3>
                  <span>Web Designer</span>

                  <ul className="social">
                    <li>
                      <a href="#">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-top rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
        <div className="shape2">
          <img src={require("./../images/shapes/2.png")} alt="shape" />
        </div>
        <div className="shape10 rotateme">
          <img src={require("./../images/shapes/10.png")} alt="shape" />
        </div>
        <div className="circle-bottom rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
        <div className="shape6">
          <img src={require("./../images/shapes/6.png")} alt="shape" />
        </div>
      </section>
    );
  }
}

export default Team;
--------------------------------------------------
import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <section className="cta-about">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="cta-about-image">
                <img
                  src={require("./../images/cta-about.jpg")}
                  alt="cta-image"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="cta-about-content ptb-120">
                <div className="section-title">
                  <span className="wow fadeInUp">About Us</span>
                  <h2 className="wow fadeInDown">
                    We are Creative Agency <br /> from the USA
                  </h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>

                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>

                <a href="#" className="btn btn-primary wow fadeInUp">
                  Let's Talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
--------------------------------------------------
import React, { Component } from "react";

export class Features extends Component {
  render() {
    return (
      <section className="features-area ptb-120 bg-08071c">
        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6">
              <div className="features-content">
                <div className="section-title">
                  <span>Our Features</span>
                  <h2>Create the lifestyle you really desire it.</h2>
                </div>

                <div className="single-features-item">
                  <div className="icon">
                    <i className="icofont-globe-alt"></i>
                  </div>
                  <h3>Beautiful and easy to use</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consecte tuer adipiscing elit
                    enean consecte tuer adipiscing elit enean.
                  </p>
                </div>

                <div className="single-features-item">
                  <div className="icon">
                    <i className="icofont-brand-designfloat"></i>
                  </div>
                  <h3>Pixel perfect design</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consecte tuer adipiscing elit
                    enean consecte tuer adipiscing elit enean.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="features-image text-center">
                <img src={require("./../images/1.jpg")} alt="image" />
              </div>
            </div>
          </div>
        </div>

        <div className="shape7">
          <img src={require("./../images/shapes/7.png")} alt="shape" />
        </div>
        <div className="shape14 rotateme">
          <img src={require("./../images/shapes/14.png")} alt="shape" />
        </div>
        <div className="shape15 rotateme">
          <img src={require("./../images/shapes/15.png")} alt="shape" />
        </div>
      </section>
    );
  }
}

export default Features;
--------------------------------------------------
import React, { Component } from "react";

export class HowWeWork extends Component {
  render() {
    return (
      <section className="how-we-work ptb-120">
        <div className="container">
          <div className="section-title">
            <span className="wow fadeInUp">Around the World</span>
            <h2 className="wow fadeInDown">Superior design & concept work</h2>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-work-box">
                <div className="number">01</div>
                <h3>Research</h3>
                <p>Quis ipsum suspendisse ultrices gravida Risus.</p>

                <i className="icofont-light-bulb"></i>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-work-box">
                <div className="number">02</div>
                <h3>UI Design</h3>
                <p>Quis ipsum suspendisse ultrices gravida Risus.</p>

                <i className="icofont-ruler-alt-2"></i>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-work-box">
                <div className="number">03</div>
                <h3>Development</h3>
                <p>Quis ipsum suspendisse ultrices gravida Risus.</p>

                <i className="icofont-calculator"></i>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-work-box">
                <div className="number">04</div>
                <h3>Analysis</h3>
                <p>Quis ipsum suspendisse ultrices gravida Risus.</p>

                <i className="icofont-mathematical-alt-2"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="shape10 rotateme">
          <img src={require("./../images/shapes/10.png")} alt="shape" />
        </div>
        <div className="shape6">
          <img src={require("./../images/shapes/6.png")} alt="shape" />
        </div>
        <div className="shape7">
          <img src={require("./../images/shapes/7.png")} alt="shape" />
        </div>
      </section>
    );
  }
}

export default HowWeWork;
--------------------------------------------------
import React, { Component } from "react";

export class Funfacts extends Component {
  render() {
    return (
      <section className="funfacts-area ptb-120 bg-38d16a">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count="520">
                    520
                  </span>
                </h3>
                <p>Awards Winning</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count="99">
                    99
                  </span>
                  %
                </h3>
                <p>Satisfied Clients</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count="3325">
                    3325
                  </span>
                </h3>
                <p>Creative Projects</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count="54380">
                    54380
                  </span>
                </h3>
                <p>Lines of Code</p>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-top rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
        <div className="circle-bottom rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
      </section>
    );
  }
}

export default Funfacts;
--------------------------------------------------
import React, { Component } from "react";

export class Team extends Component {
  render() {
    return (
      <section className="team-area bg-image ptb-120">
        <div className="container">
          <div className="section-title">
            <span className="wow fadeInUp">Team Member</span>
            <h2 className="wow fadeInDown">We have quality full team</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-team-box">
                <div className="team-image">
                  <img
                    src={require("./../images/team-image/1.jpg")}
                    alt="team"
                  />
                </div>

                <div className="team-content">
                  <h3>Jennifer Aniston</h3>
                  <span>Photographer</span>

                  <ul className="social">
                    <li>
                      <a href="#">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-team-box">
                <div className="team-image">
                  <img
                    src={require("./../images/team-image/2.jpg")}
                    alt="team"
                  />
                </div>

                <div className="team-content">
                  <h3>Monica Bellucci</h3>
                  <span>Web Developer</span>

                  <ul className="social">
                    <li>
                      <a href="#">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
              <div className="single-team-box">
                <div className="team-image">
                  <img
                    src={require("./../images/team-image/3.jpg")}
                    alt="team"
                  />
                </div>

                <div className="team-content">
                  <h3>Kate Winslet</h3>
                  <span>Web Designer</span>

                  <ul className="social">
                    <li>
                      <a href="#">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-top rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
        <div className="shape2">
          <img src={require("./../images/shapes/2.png")} alt="shape" />
        </div>
        <div className="shape10 rotateme">
          <img src={require("./../images/shapes/10.png")} alt="shape" />
        </div>
        <div className="circle-bottom rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
        <div className="shape6">
          <img src={require("./../images/shapes/6.png")} alt="shape" />
        </div>
      </section>
    );
  }
}

export default Team;
--------------------------------------------------
import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <section className="cta-about">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="cta-about-image">
                <img
                  src={require("./../images/cta-about.jpg")}
                  alt="cta-image"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="cta-about-content ptb-120">
                <div className="section-title">
                  <span className="wow fadeInUp">About Us</span>
                  <h2 className="wow fadeInDown">
                    We are Creative Agency <br /> from the USA
                  </h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>

                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>

                <a href="#" className="btn btn-primary wow fadeInUp">
                  Let's Talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
--------------------------------------------------
import React, { Component } from "react";

export class Features extends Component {
  render() {
    return (
      <section className="features-area ptb-120 bg-08071c">
        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6">
              <div className="features-content">
                <div className="section-title">
                  <span>Our Features</span>
                  <h2>Create the lifestyle you really desire it.</h2>
                </div>

                <div className="single-features-item">
                  <div className="icon">
                    <i className="icofont-globe-alt"></i>
                  </div>
                  <h3>Beautiful and easy to use</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consecte tuer adipiscing elit
                    enean consecte tuer adipiscing elit enean.
                  </p>
                </div>

                <div className="single-features-item">
                  <div className="icon">
                    <i className="icofont-brand-designfloat"></i>
                  </div>
                  <h3>Pixel perfect design</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consecte tuer adipiscing elit
                    enean consecte tuer adipiscing elit enean.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="features-image text-center">
                <img src={require("./../images/1.jpg")} alt="image" />
              </div>
            </div>
          </div>
        </div>

        <div className="shape7">
          <img src={require("./../images/shapes/7.png")} alt="shape" />
        </div>
        <div className="shape14 rotateme">
          <img src={require("./../images/shapes/14.png")} alt="shape" />
        </div>
        <div className="shape15 rotateme">
          <img src={require("./../images/shapes/15.png")} alt="shape" />
        </div>
      </section>
    );
  }
}

export default Features;
--------------------------------------------------
import React, { Component } from "react";
import VisibilitySensor from "react-visibility-sensor";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: false,
  dots: true,
  smartSpeed: 2000,
  animateOut: "slideOutDown",
  autoplayHoverPause: true,
  animateIn: "fadeInUp",
  items: 1,
  autoplay: true,
  navText: [
    "<i class='icofont-arrow-left'></i>",
    "<i class='icofont-arrow-right'></i>",
  ],
};

export class Banner extends Component {
  state = {
    display: false,
  };

  componentDidMount() {
    this.setState({ display: true });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.display ? (
          <OwlCarousel
            className="home-slides startup-agency-home owl-carousel owl-theme"
            {...options}
          >
            <div className="main-banner item-bg1">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="row h-100 align-items-center">
                      <div className="col-lg-7 col-md-12">
                        <div className="hero-image">
                          <img
                            src={require("./../images/startup-agency-slider/1.jpg")}
                            alt="image"
                          />
                        </div>
                      </div>

                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <div className="col-lg-5 col-md-12">
                            <div className="hero-content">
                              <h1
                                className={
                                  isVisible ? "animated fadeInDown" : ""
                                }
                              >
                                We are creative digital agency
                              </h1>
                              <a
                                href="#"
                                className={`
                                                            btn btn-primary ${
                                                              isVisible
                                                                ? "animated fadeInDown"
                                                                : ""
                                                            }
                                                        `}
                              >
                                Get Started
                              </a>
                            </div>
                          </div>
                        )}
                      </VisibilitySensor>
                    </div>
                  </div>
                </div>
              </div>

              <div className="shape1">
                <img src={require("./../images/shapes/1.png")} alt="shape" />
              </div>
              <div className="shape2">
                <img src={require("./../images/shapes/2.png")} alt="shape" />
              </div>
              <div className="shape3">
                <img src={require("./../images/shapes/3.png")} alt="shape" />
              </div>
              <div className="shape4">
                <img src={require("./../images/shapes/4.png")} alt="shape" />
              </div>
              <div className="shape5">
                <img src={require("./../images/shapes/5.png")} alt="shape" />
              </div>
              <div className="shape6">
                <img src={require("./../images/shapes/6.png")} alt="shape" />
              </div>
              <div className="shape7">
                <img src={require("./../images/shapes/7.png")} alt="shape" />
              </div>
              <div className="shape8">
                <img src={require("./../images/shapes/8.png")} alt="shape" />
              </div>
              <div className="shape9 rotateme">
                <img src={require("./../images/shapes/9.png")} alt="shape" />
              </div>
              <div className="shape10 rotateme">
                <img src={require("./../images/shapes/10.png")} alt="shape" />
              </div>
            </div>

            <div className="main-banner item-bg2">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="row h-100 align-items-center">
                      <div className="col-lg-7 col-md-12">
                        <div className="hero-image">
                          <img
                            src={require("./../images/startup-agency-slider/2.jpg")}
                            alt="image"
                          />
                        </div>
                      </div>

                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <div className="col-lg-5 col-md-12">
                            <div className="hero-content">
                              <h1
                                className={
                                  isVisible ? "animated fadeInDown" : ""
                                }
                              >
                                We are creative digital agency
                              </h1>
                              <a
                                href="#"
                                className={`
                                                            btn btn-primary ${
                                                              isVisible
                                                                ? "animated fadeInDown"
                                                                : ""
                                                            }
                                                        `}
                              >
                                Get Started
                              </a>
                            </div>
                          </div>
                        )}
                      </VisibilitySensor>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shape1">
                <img src={require("./../images/shapes/1.png")} alt="shape" />
              </div>
              <div className="shape2">
                <img src={require("./../images/shapes/2.png")} alt="shape" />
              </div>
              <div className="shape3">
                <img src={require("./../images/shapes/3.png")} alt="shape" />
              </div>
              <div className="shape4">
                <img src={require("./../images/shapes/4.png")} alt="shape" />
              </div>
              <div className="shape5">
                <img src={require("./../images/shapes/5.png")} alt="shape" />
              </div>
              <div className="shape6">
                <img src={require("./../images/shapes/6.png")} alt="shape" />
              </div>
              <div className="shape7">
                <img src={require("./../images/shapes/7.png")} alt="shape" />
              </div>
              <div className="shape8">
                <img src={require("./../images/shapes/8.png")} alt="shape" />
              </div>
              <div className="shape9 rotateme">
                <img src={require("./../images/shapes/9.png")} alt="shape" />
              </div>
              <div className="shape10 rotateme">
                <img src={require("./../images/shapes/10.png")} alt="shape" />
              </div>
            </div>

            <div className="main-banner item-bg3">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="row h-100 align-items-center">
                      <div className="col-lg-7 col-md-12">
                        <div className="hero-image">
                          <img
                            src={require("./../images/startup-agency-slider/3.jpg")}
                            alt="image"
                          />
                        </div>
                      </div>

                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <div className="col-lg-5 col-md-12">
                            <div className="hero-content">
                              <h1
                                className={
                                  isVisible ? "animated fadeInDown" : ""
                                }
                              >
                                We are creative digital agency
                              </h1>
                              <a
                                href="#"
                                className={`
                                                            btn btn-primary ${
                                                              isVisible
                                                                ? "animated fadeInDown"
                                                                : ""
                                                            }
                                                        `}
                              >
                                Get Started
                              </a>
                            </div>
                          </div>
                        )}
                      </VisibilitySensor>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shape1">
                <img src={require("./../images/shapes/1.png")} alt="shape" />
              </div>
              <div className="shape2">
                <img src={require("./../images/shapes/2.png")} alt="shape" />
              </div>
              <div className="shape3">
                <img src={require("./../images/shapes/3.png")} alt="shape" />
              </div>
              <div className="shape4">
                <img src={require("./../images/shapes/4.png")} alt="shape" />
              </div>
              <div className="shape5">
                <img src={require("./../images/shapes/5.png")} alt="shape" />
              </div>
              <div className="shape6">
                <img src={require("./../images/shapes/6.png")} alt="shape" />
              </div>
              <div className="shape7">
                <img src={require("./../images/shapes/7.png")} alt="shape" />
              </div>
              <div className="shape8">
                <img src={require("./../images/shapes/8.png")} alt="shape" />
              </div>
              <div className="shape9 rotateme">
                <img src={require("./../images/shapes/9.png")} alt="shape" />
              </div>
              <div className="shape10 rotateme">
                <img src={require("./../images/shapes/10.png")} alt="shape" />
              </div>
            </div>
          </OwlCarousel>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

export default Banner;
--------------------------------------------------
import React, { Component } from "react";

export class WhyChooseUs extends Component {
  render() {
    return (
      <section className="why-choose-us-area ptb-120">
        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-img">
                <img
                  src={require("./../images/1.jpg")}
                  className="front-img"
                  alt="img"
                />
                <img
                  src={require("./../images/2.jpg")}
                  className="back-img"
                  alt="img"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-content">
                <div className="section-title">
                  <span className="wow fadeInUp">WHy Choose Us</span>
                  <h2 className="wow fadeInDown">
                    We are creative, designers & developers
                  </h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut.
                </p>
                <a href="#" className="btn btn-primary">
                  About Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-top rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
        <div className="circle-bottom rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
        <div className="circle-dot">
          <img src={require("./../images/shapes/dot-shape1.png")} alt="shape" />
        </div>
      </section>
    );
  }
}

export default WhyChooseUs;
--------------------------------------------------
import React, { Component } from "react";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import Link from "../../utils/ActiveLink";
import { BLOG_URL } from "../../utils/constants";
import SearchForm from "../layout/SearchForm";
import SideDrawer from "../layout/SideDrawer";

interface IState {
  drawer: boolean;
  searchForm: boolean;
  collapsed: boolean;
}

export class Navbar extends Component<any, IState> {
  _isMounted = false;

  state = {
    drawer: false,
    searchForm: false,
    collapsed: true,
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleSearchForm = () => {
    this.setState((prevState) => {
      return {
        searchForm: !prevState.searchForm,
      };
    });
  };

  handleDrawer = () => {
    this.setState((prevState) => {
      return {
        drawer: !prevState.drawer,
      };
    });
  };

  componentDidMount() {
    this._isMounted = true;
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    let { pathname } = this.props.router;
    let { products } = this.props;
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";
    let layOutCls = "";
    if (pathname == "/creative-blog") {
      layOutCls = "p-relative";
    }

    return (
      <header id="header">
        <div id="navbar" className={`artflex-nav ${layOutCls}`}>
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/">
                <a className="navbar-brand">
                  <img src={require("./../images/logo_full.png")} alt="logo" />
                </a>
              </Link>

              <button
                onClick={this.toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <Link href="/">
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Home
                      </a>
                    </li>
                  </Link>

                  <li className="nav-item">
                    <Link activeClassName="active" href="/about-me">
                      <a href="#" className="nav-link">
                        About Me
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link activeClassName="active" href={BLOG_URL}>
                      {/* <Link activeClassName="active" href="/blog"> */}
                      <a href={BLOG_URL} className="nav-link">
                        Blog{" "}
                      </a>
                      {/* <ul className="dropdown_menu">
                                            <li className="nav-item"> */}
                      {/* <a className="nav-link">Blog</a> */}
                    </Link>
                    {/* </li>
                                            
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/blog-details">
                                                    <a className="nav-link">Blog Details</a>
                                                </Link>
                                            </li>
                                        </ul> */}
                  </li>

                  {/* <li className="nav-item">
										<a href="#" className="nav-link">
											Portfolio <i className="icofont-simple-down"></i>
										</a>
										<ul className="dropdown_menu">
											<li className="nav-item">
												<Link activeClassName="active" href="/portfolio">
													<a className="nav-link">Projects</a>
												</Link>
											</li>

											<li className="nav-item">
												<Link
													activeClassName="active"
													href="/portfolio-details"
												>
													<a className="nav-link">Photography</a>
												</Link>
											</li>
										</ul>
									</li> */}

                  <li className="nav-item">
                    <Link activeClassName="active" href="/coming-soon">
                      {/* <Link activeClassName="active" href="/contact"> */}
                      <a className="nav-link">Contact</a>
                    </Link>
                  </li>
                </ul>

                {/* <div className="others-option"> 
                                {/* FIXME: Maybe in the future add searching capabilities 
                                    <ul>
                                        <li>
                                            <span 
                                                className="search-popup-icon"
                                                onClick={this.handleSearchForm}
                                            >
                                                <i className="icofont-ui-search"></i>
                                            </span>
                                        </li>

                                        <li>
                                            <Link href="/cart">
                                                <a className="cart-icon">
                                                    <i className="icofont-bag"></i>
                                                    <span>{products.length}</span>
                                                </a>
                                            </Link>
                                        </li>

                                        <li onClick={this.handleDrawer}>
                                            <div className="side-menu">
                                                <span className="bar-1"></span>
                                                <span className="bar-2"></span>
                                                <span className="bar-3"></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div> */}
              </div>
            </nav>
          </div>
          {/* <SearchForm onClick={this.handleSearchForm} active={this.state.searchForm ? 'active' : ''} />
                    <SideDrawer onClick={this.handleDrawer} show={this.state.drawer ? 'show' : ''} /> */}
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // products: state.cartReducer.addedItems,
  };
};

export default withRouter(connect(mapStateToProps)(Navbar));
--------------------------------------------------
import React, { Component } from "react";
import VisibilitySensor from "react-visibility-sensor";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: false,
  dots: true,
  smartSpeed: 2000,
  animateOut: "slideOutDown",
  autoplayHoverPause: true,
  animateIn: "fadeInUp",
  items: 1,
  autoplay: true,
  navText: [
    "<i class='icofont-arrow-left'></i>",
    "<i class='icofont-arrow-right'></i>",
  ],
};

export class Banner extends Component {
  state = {
    display: false,
  };

  componentDidMount() {
    this.setState({ display: true });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.display ? (
          <OwlCarousel
            className="home-slides startup-agency-home owl-carousel owl-theme"
            {...options}
          >
            <div className="main-banner item-bg1">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="row h-100 align-items-center">
                      <div className="col-lg-7 col-md-12">
                        <div className="hero-image">
                          <img
                            src={require("./../images/startup-agency-slider/1.jpg")}
                            alt="image"
                          />
                        </div>
                      </div>

                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <div className="col-lg-5 col-md-12">
                            <div className="hero-content">
                              <h1
                                className={
                                  isVisible ? "animated fadeInDown" : ""
                                }
                              >
                                We are creative digital agency
                              </h1>
                              <a
                                href="#"
                                className={`
                                                            btn btn-primary ${
                                                              isVisible
                                                                ? "animated fadeInDown"
                                                                : ""
                                                            }
                                                        `}
                              >
                                Get Started
                              </a>
                            </div>
                          </div>
                        )}
                      </VisibilitySensor>
                    </div>
                  </div>
                </div>
              </div>

              <div className="shape1">
                <img src={require("./../images/shapes/1.png")} alt="shape" />
              </div>
              <div className="shape2">
                <img src={require("./../images/shapes/2.png")} alt="shape" />
              </div>
              <div className="shape3">
                <img src={require("./../images/shapes/3.png")} alt="shape" />
              </div>
              <div className="shape4">
                <img src={require("./../images/shapes/4.png")} alt="shape" />
              </div>
              <div className="shape5">
                <img src={require("./../images/shapes/5.png")} alt="shape" />
              </div>
              <div className="shape6">
                <img src={require("./../images/shapes/6.png")} alt="shape" />
              </div>
              <div className="shape7">
                <img src={require("./../images/shapes/7.png")} alt="shape" />
              </div>
              <div className="shape8">
                <img src={require("./../images/shapes/8.png")} alt="shape" />
              </div>
              <div className="shape9 rotateme">
                <img src={require("./../images/shapes/9.png")} alt="shape" />
              </div>
              <div className="shape10 rotateme">
                <img src={require("./../images/shapes/10.png")} alt="shape" />
              </div>
            </div>

            <div className="main-banner item-bg2">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="row h-100 align-items-center">
                      <div className="col-lg-7 col-md-12">
                        <div className="hero-image">
                          <img
                            src={require("./../images/startup-agency-slider/2.jpg")}
                            alt="image"
                          />
                        </div>
                      </div>

                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <div className="col-lg-5 col-md-12">
                            <div className="hero-content">
                              <h1
                                className={
                                  isVisible ? "animated fadeInDown" : ""
                                }
                              >
                                We are creative digital agency
                              </h1>
                              <a
                                href="#"
                                className={`
                                                            btn btn-primary ${
                                                              isVisible
                                                                ? "animated fadeInDown"
                                                                : ""
                                                            }
                                                        `}
                              >
                                Get Started
                              </a>
                            </div>
                          </div>
                        )}
                      </VisibilitySensor>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shape1">
                <img src={require("./../images/shapes/1.png")} alt="shape" />
              </div>
              <div className="shape2">
                <img src={require("./../images/shapes/2.png")} alt="shape" />
              </div>
              <div className="shape3">
                <img src={require("./../images/shapes/3.png")} alt="shape" />
              </div>
              <div className="shape4">
                <img src={require("./../images/shapes/4.png")} alt="shape" />
              </div>
              <div className="shape5">
                <img src={require("./../images/shapes/5.png")} alt="shape" />
              </div>
              <div className="shape6">
                <img src={require("./../images/shapes/6.png")} alt="shape" />
              </div>
              <div className="shape7">
                <img src={require("./../images/shapes/7.png")} alt="shape" />
              </div>
              <div className="shape8">
                <img src={require("./../images/shapes/8.png")} alt="shape" />
              </div>
              <div className="shape9 rotateme">
                <img src={require("./../images/shapes/9.png")} alt="shape" />
              </div>
              <div className="shape10 rotateme">
                <img src={require("./../images/shapes/10.png")} alt="shape" />
              </div>
            </div>

            <div className="main-banner item-bg3">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="row h-100 align-items-center">
                      <div className="col-lg-7 col-md-12">
                        <div className="hero-image">
                          <img
                            src={require("./../images/startup-agency-slider/3.jpg")}
                            alt="image"
                          />
                        </div>
                      </div>

                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <div className="col-lg-5 col-md-12">
                            <div className="hero-content">
                              <h1
                                className={
                                  isVisible ? "animated fadeInDown" : ""
                                }
                              >
                                We are creative digital agency
                              </h1>
                              <a
                                href="#"
                                className={`
                                                            btn btn-primary ${
                                                              isVisible
                                                                ? "animated fadeInDown"
                                                                : ""
                                                            }
                                                        `}
                              >
                                Get Started
                              </a>
                            </div>
                          </div>
                        )}
                      </VisibilitySensor>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shape1">
                <img src={require("./../images/shapes/1.png")} alt="shape" />
              </div>
              <div className="shape2">
                <img src={require("./../images/shapes/2.png")} alt="shape" />
              </div>
              <div className="shape3">
                <img src={require("./../images/shapes/3.png")} alt="shape" />
              </div>
              <div className="shape4">
                <img src={require("./../images/shapes/4.png")} alt="shape" />
              </div>
              <div className="shape5">
                <img src={require("./../images/shapes/5.png")} alt="shape" />
              </div>
              <div className="shape6">
                <img src={require("./../images/shapes/6.png")} alt="shape" />
              </div>
              <div className="shape7">
                <img src={require("./../images/shapes/7.png")} alt="shape" />
              </div>
              <div className="shape8">
                <img src={require("./../images/shapes/8.png")} alt="shape" />
              </div>
              <div className="shape9 rotateme">
                <img src={require("./../images/shapes/9.png")} alt="shape" />
              </div>
              <div className="shape10 rotateme">
                <img src={require("./../images/shapes/10.png")} alt="shape" />
              </div>
            </div>
          </OwlCarousel>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

export default Banner;
--------------------------------------------------
import React, { Component } from "react";

export class WhyChooseUs extends Component {
  render() {
    return (
      <section className="why-choose-us-area ptb-120">
        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-img">
                <img
                  src={require("./../images/1.jpg")}
                  className="front-img"
                  alt="img"
                />
                <img
                  src={require("./../images/2.jpg")}
                  className="back-img"
                  alt="img"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-content">
                <div className="section-title">
                  <span className="wow fadeInUp">WHy Choose Us</span>
                  <h2 className="wow fadeInDown">
                    We are creative, designers & developers
                  </h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut.
                </p>
                <a href="#" className="btn btn-primary">
                  About Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-top rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
        <div className="circle-bottom rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
        <div className="circle-dot">
          <img src={require("./../images/shapes/dot-shape1.png")} alt="shape" />
        </div>
      </section>
    );
  }
}

export default WhyChooseUs;
--------------------------------------------------
import React, { Component } from "react";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import Link from "../../utils/ActiveLink";
import { BLOG_URL } from "../../utils/constants";
import SearchForm from "../layout/SearchForm";
import SideDrawer from "../layout/SideDrawer";

interface IState {
  drawer: boolean;
  searchForm: boolean;
  collapsed: boolean;
}

export class Navbar extends Component<any, IState> {
  _isMounted = false;

  state = {
    drawer: false,
    searchForm: false,
    collapsed: true,
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleSearchForm = () => {
    this.setState((prevState) => {
      return {
        searchForm: !prevState.searchForm,
      };
    });
  };

  handleDrawer = () => {
    this.setState((prevState) => {
      return {
        drawer: !prevState.drawer,
      };
    });
  };

  componentDidMount() {
    this._isMounted = true;
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    let { pathname } = this.props.router;
    let { products } = this.props;
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";
    let layOutCls = "";
    if (pathname == "/creative-blog") {
      layOutCls = "p-relative";
    }

    return (
      <header id="header">
        <div id="navbar" className={`artflex-nav ${layOutCls}`}>
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/">
                <a className="navbar-brand">
                  <img src={require("./../images/logo_full.png")} alt="logo" />
                </a>
              </Link>

              <button
                onClick={this.toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <Link href="/">
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Home
                      </a>
                    </li>
                  </Link>

                  <li className="nav-item">
                    <Link activeClassName="active" href="/about-me">
                      <a href="#" className="nav-link">
                        About Me
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link activeClassName="active" href={BLOG_URL}>
                      {/* <Link activeClassName="active" href="/blog"> */}
                      <a href={BLOG_URL} className="nav-link">
                        Blog{" "}
                      </a>
                      {/* <ul className="dropdown_menu">
                                            <li className="nav-item"> */}
                      {/* <a className="nav-link">Blog</a> */}
                    </Link>
                    {/* </li>
                                            
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/blog-details">
                                                    <a className="nav-link">Blog Details</a>
                                                </Link>
                                            </li>
                                        </ul> */}
                  </li>

                  {/* <li className="nav-item">
										<a href="#" className="nav-link">
											Portfolio <i className="icofont-simple-down"></i>
										</a>
										<ul className="dropdown_menu">
											<li className="nav-item">
												<Link activeClassName="active" href="/portfolio">
													<a className="nav-link">Projects</a>
												</Link>
											</li>

											<li className="nav-item">
												<Link
													activeClassName="active"
													href="/portfolio-details"
												>
													<a className="nav-link">Photography</a>
												</Link>
											</li>
										</ul>
									</li> */}

                  <li className="nav-item">
                    <Link activeClassName="active" href="/coming-soon">
                      {/* <Link activeClassName="active" href="/contact"> */}
                      <a className="nav-link">Contact</a>
                    </Link>
                  </li>
                </ul>

                {/* <div className="others-option"> 
                                {/* FIXME: Maybe in the future add searching capabilities 
                                    <ul>
                                        <li>
                                            <span 
                                                className="search-popup-icon"
                                                onClick={this.handleSearchForm}
                                            >
                                                <i className="icofont-ui-search"></i>
                                            </span>
                                        </li>

                                        <li>
                                            <Link href="/cart">
                                                <a className="cart-icon">
                                                    <i className="icofont-bag"></i>
                                                    <span>{products.length}</span>
                                                </a>
                                            </Link>
                                        </li>

                                        <li onClick={this.handleDrawer}>
                                            <div className="side-menu">
                                                <span className="bar-1"></span>
                                                <span className="bar-2"></span>
                                                <span className="bar-3"></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div> */}
              </div>
            </nav>
          </div>
          {/* <SearchForm onClick={this.handleSearchForm} active={this.state.searchForm ? 'active' : ''} />
                    <SideDrawer onClick={this.handleDrawer} show={this.state.drawer ? 'show' : ''} /> */}
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // products: state.cartReducer.addedItems,
  };
};

export default withRouter(connect(mapStateToProps)(Navbar));
--------------------------------------------------
import React, { Component } from "react";
import VisibilitySensor from "react-visibility-sensor";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: false,
  dots: true,
  smartSpeed: 2000,
  animateOut: "slideOutDown",
  autoplayHoverPause: true,
  animateIn: "fadeInUp",
  items: 1,
  autoplay: true,
  navText: [
    "<i class='icofont-arrow-left'></i>",
    "<i class='icofont-arrow-right'></i>",
  ],
};

export class Banner extends Component {
  state = {
    display: false,
  };

  componentDidMount() {
    this.setState({ display: true });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.display ? (
          <OwlCarousel
            className="home-slides startup-agency-home owl-carousel owl-theme"
            {...options}
          >
            <div className="main-banner item-bg1">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="row h-100 align-items-center">
                      <div className="col-lg-7 col-md-12">
                        <div className="hero-image">
                          <img
                            src={require("./../images/startup-agency-slider/1.jpg")}
                            alt="image"
                          />
                        </div>
                      </div>

                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <div className="col-lg-5 col-md-12">
                            <div className="hero-content">
                              <h1
                                className={
                                  isVisible ? "animated fadeInDown" : ""
                                }
                              >
                                We are creative digital agency
                              </h1>
                              <a
                                href="#"
                                className={`
                                                            btn btn-primary ${
                                                              isVisible
                                                                ? "animated fadeInDown"
                                                                : ""
                                                            }
                                                        `}
                              >
                                Get Started
                              </a>
                            </div>
                          </div>
                        )}
                      </VisibilitySensor>
                    </div>
                  </div>
                </div>
              </div>

              <div className="shape1">
                <img src={require("./../images/shapes/1.png")} alt="shape" />
              </div>
              <div className="shape2">
                <img src={require("./../images/shapes/2.png")} alt="shape" />
              </div>
              <div className="shape3">
                <img src={require("./../images/shapes/3.png")} alt="shape" />
              </div>
              <div className="shape4">
                <img src={require("./../images/shapes/4.png")} alt="shape" />
              </div>
              <div className="shape5">
                <img src={require("./../images/shapes/5.png")} alt="shape" />
              </div>
              <div className="shape6">
                <img src={require("./../images/shapes/6.png")} alt="shape" />
              </div>
              <div className="shape7">
                <img src={require("./../images/shapes/7.png")} alt="shape" />
              </div>
              <div className="shape8">
                <img src={require("./../images/shapes/8.png")} alt="shape" />
              </div>
              <div className="shape9 rotateme">
                <img src={require("./../images/shapes/9.png")} alt="shape" />
              </div>
              <div className="shape10 rotateme">
                <img src={require("./../images/shapes/10.png")} alt="shape" />
              </div>
            </div>

            <div className="main-banner item-bg2">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="row h-100 align-items-center">
                      <div className="col-lg-7 col-md-12">
                        <div className="hero-image">
                          <img
                            src={require("./../images/startup-agency-slider/2.jpg")}
                            alt="image"
                          />
                        </div>
                      </div>

                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <div className="col-lg-5 col-md-12">
                            <div className="hero-content">
                              <h1
                                className={
                                  isVisible ? "animated fadeInDown" : ""
                                }
                              >
                                We are creative digital agency
                              </h1>
                              <a
                                href="#"
                                className={`
                                                            btn btn-primary ${
                                                              isVisible
                                                                ? "animated fadeInDown"
                                                                : ""
                                                            }
                                                        `}
                              >
                                Get Started
                              </a>
                            </div>
                          </div>
                        )}
                      </VisibilitySensor>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shape1">
                <img src={require("./../images/shapes/1.png")} alt="shape" />
              </div>
              <div className="shape2">
                <img src={require("./../images/shapes/2.png")} alt="shape" />
              </div>
              <div className="shape3">
                <img src={require("./../images/shapes/3.png")} alt="shape" />
              </div>
              <div className="shape4">
                <img src={require("./../images/shapes/4.png")} alt="shape" />
              </div>
              <div className="shape5">
                <img src={require("./../images/shapes/5.png")} alt="shape" />
              </div>
              <div className="shape6">
                <img src={require("./../images/shapes/6.png")} alt="shape" />
              </div>
              <div className="shape7">
                <img src={require("./../images/shapes/7.png")} alt="shape" />
              </div>
              <div className="shape8">
                <img src={require("./../images/shapes/8.png")} alt="shape" />
              </div>
              <div className="shape9 rotateme">
                <img src={require("./../images/shapes/9.png")} alt="shape" />
              </div>
              <div className="shape10 rotateme">
                <img src={require("./../images/shapes/10.png")} alt="shape" />
              </div>
            </div>

            <div className="main-banner item-bg3">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="row h-100 align-items-center">
                      <div className="col-lg-7 col-md-12">
                        <div className="hero-image">
                          <img
                            src={require("./../images/startup-agency-slider/3.jpg")}
                            alt="image"
                          />
                        </div>
                      </div>

                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <div className="col-lg-5 col-md-12">
                            <div className="hero-content">
                              <h1
                                className={
                                  isVisible ? "animated fadeInDown" : ""
                                }
                              >
                                We are creative digital agency
                              </h1>
                              <a
                                href="#"
                                className={`
                                                            btn btn-primary ${
                                                              isVisible
                                                                ? "animated fadeInDown"
                                                                : ""
                                                            }
                                                        `}
                              >
                                Get Started
                              </a>
                            </div>
                          </div>
                        )}
                      </VisibilitySensor>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shape1">
                <img src={require("./../images/shapes/1.png")} alt="shape" />
              </div>
              <div className="shape2">
                <img src={require("./../images/shapes/2.png")} alt="shape" />
              </div>
              <div className="shape3">
                <img src={require("./../images/shapes/3.png")} alt="shape" />
              </div>
              <div className="shape4">
                <img src={require("./../images/shapes/4.png")} alt="shape" />
              </div>
              <div className="shape5">
                <img src={require("./../images/shapes/5.png")} alt="shape" />
              </div>
              <div className="shape6">
                <img src={require("./../images/shapes/6.png")} alt="shape" />
              </div>
              <div className="shape7">
                <img src={require("./../images/shapes/7.png")} alt="shape" />
              </div>
              <div className="shape8">
                <img src={require("./../images/shapes/8.png")} alt="shape" />
              </div>
              <div className="shape9 rotateme">
                <img src={require("./../images/shapes/9.png")} alt="shape" />
              </div>
              <div className="shape10 rotateme">
                <img src={require("./../images/shapes/10.png")} alt="shape" />
              </div>
            </div>
          </OwlCarousel>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

export default Banner;
--------------------------------------------------
import React, { Component } from "react";

export class WhyChooseUs extends Component {
  render() {
    return (
      <section className="why-choose-us-area ptb-120">
        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-img">
                <img
                  src={require("./../images/1.jpg")}
                  className="front-img"
                  alt="img"
                />
                <img
                  src={require("./../images/2.jpg")}
                  className="back-img"
                  alt="img"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-content">
                <div className="section-title">
                  <span className="wow fadeInUp">WHy Choose Us</span>
                  <h2 className="wow fadeInDown">
                    We are creative, designers & developers
                  </h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut.
                </p>
                <a href="#" className="btn btn-primary">
                  About Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-top rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
        <div className="circle-bottom rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
        <div className="circle-dot">
          <img src={require("./../images/shapes/dot-shape1.png")} alt="shape" />
        </div>
      </section>
    );
  }
}

export default WhyChooseUs;
--------------------------------------------------
import React, { Component } from "react";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import Link from "../../utils/ActiveLink";
import { BLOG_URL } from "../../utils/constants";
import SearchForm from "../layout/SearchForm";
import SideDrawer from "../layout/SideDrawer";

interface IState {
  drawer: boolean;
  searchForm: boolean;
  collapsed: boolean;
}

export class Navbar extends Component<any, IState> {
  _isMounted = false;

  state = {
    drawer: false,
    searchForm: false,
    collapsed: true,
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleSearchForm = () => {
    this.setState((prevState) => {
      return {
        searchForm: !prevState.searchForm,
      };
    });
  };

  handleDrawer = () => {
    this.setState((prevState) => {
      return {
        drawer: !prevState.drawer,
      };
    });
  };

  componentDidMount() {
    this._isMounted = true;
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    let { pathname } = this.props.router;
    let { products } = this.props;
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";
    let layOutCls = "";
    if (pathname == "/creative-blog") {
      layOutCls = "p-relative";
    }

    return (
      <header id="header">
        <div id="navbar" className={`artflex-nav ${layOutCls}`}>
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/">
                <a className="navbar-brand">
                  <img src={require("./../images/logo_full.png")} alt="logo" />
                </a>
              </Link>

              <button
                onClick={this.toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <Link href="/">
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Home
                      </a>
                    </li>
                  </Link>

                  <li className="nav-item">
                    <Link activeClassName="active" href="/about-me">
                      <a href="#" className="nav-link">
                        About Me
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link activeClassName="active" href={BLOG_URL}>
                      {/* <Link activeClassName="active" href="/blog"> */}
                      <a href={BLOG_URL} className="nav-link">
                        Blog{" "}
                      </a>
                      {/* <ul className="dropdown_menu">
                                            <li className="nav-item"> */}
                      {/* <a className="nav-link">Blog</a> */}
                    </Link>
                    {/* </li>
                                            
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/blog-details">
                                                    <a className="nav-link">Blog Details</a>
                                                </Link>
                                            </li>
                                        </ul> */}
                  </li>

                  {/* <li className="nav-item">
										<a href="#" className="nav-link">
											Portfolio <i className="icofont-simple-down"></i>
										</a>
										<ul className="dropdown_menu">
											<li className="nav-item">
												<Link activeClassName="active" href="/portfolio">
													<a className="nav-link">Projects</a>
												</Link>
											</li>

											<li className="nav-item">
												<Link
													activeClassName="active"
													href="/portfolio-details"
												>
													<a className="nav-link">Photography</a>
												</Link>
											</li>
										</ul>
									</li> */}

                  <li className="nav-item">
                    <Link activeClassName="active" href="/coming-soon">
                      {/* <Link activeClassName="active" href="/contact"> */}
                      <a className="nav-link">Contact</a>
                    </Link>
                  </li>
                </ul>

                {/* <div className="others-option"> 
                                {/* FIXME: Maybe in the future add searching capabilities 
                                    <ul>
                                        <li>
                                            <span 
                                                className="search-popup-icon"
                                                onClick={this.handleSearchForm}
                                            >
                                                <i className="icofont-ui-search"></i>
                                            </span>
                                        </li>

                                        <li>
                                            <Link href="/cart">
                                                <a className="cart-icon">
                                                    <i className="icofont-bag"></i>
                                                    <span>{products.length}</span>
                                                </a>
                                            </Link>
                                        </li>

                                        <li onClick={this.handleDrawer}>
                                            <div className="side-menu">
                                                <span className="bar-1"></span>
                                                <span className="bar-2"></span>
                                                <span className="bar-3"></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div> */}
              </div>
            </nav>
          </div>
          {/* <SearchForm onClick={this.handleSearchForm} active={this.state.searchForm ? 'active' : ''} />
                    <SideDrawer onClick={this.handleDrawer} show={this.state.drawer ? 'show' : ''} /> */}
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // products: state.cartReducer.addedItems,
  };
};

export default withRouter(connect(mapStateToProps)(Navbar));
--------------------------------------------------
import React, { Component } from "react";
import VisibilitySensor from "react-visibility-sensor";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: false,
  dots: true,
  smartSpeed: 2000,
  animateOut: "slideOutDown",
  autoplayHoverPause: true,
  animateIn: "fadeInUp",
  items: 1,
  autoplay: true,
  navText: [
    "<i class='icofont-arrow-left'></i>",
    "<i class='icofont-arrow-right'></i>",
  ],
};

export class Banner extends Component {
  state = {
    display: false,
  };

  componentDidMount() {
    this.setState({ display: true });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.display ? (
          <OwlCarousel
            className="home-slides startup-agency-home owl-carousel owl-theme"
            {...options}
          >
            <div className="main-banner item-bg1">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="row h-100 align-items-center">
                      <div className="col-lg-7 col-md-12">
                        <div className="hero-image">
                          <img
                            src={require("./../images/startup-agency-slider/1.jpg")}
                            alt="image"
                          />
                        </div>
                      </div>

                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <div className="col-lg-5 col-md-12">
                            <div className="hero-content">
                              <h1
                                className={
                                  isVisible ? "animated fadeInDown" : ""
                                }
                              >
                                We are creative digital agency
                              </h1>
                              <a
                                href="#"
                                className={`
                                                            btn btn-primary ${
                                                              isVisible
                                                                ? "animated fadeInDown"
                                                                : ""
                                                            }
                                                        `}
                              >
                                Get Started
                              </a>
                            </div>
                          </div>
                        )}
                      </VisibilitySensor>
                    </div>
                  </div>
                </div>
              </div>

              <div className="shape1">
                <img src={require("./../images/shapes/1.png")} alt="shape" />
              </div>
              <div className="shape2">
                <img src={require("./../images/shapes/2.png")} alt="shape" />
              </div>
              <div className="shape3">
                <img src={require("./../images/shapes/3.png")} alt="shape" />
              </div>
              <div className="shape4">
                <img src={require("./../images/shapes/4.png")} alt="shape" />
              </div>
              <div className="shape5">
                <img src={require("./../images/shapes/5.png")} alt="shape" />
              </div>
              <div className="shape6">
                <img src={require("./../images/shapes/6.png")} alt="shape" />
              </div>
              <div className="shape7">
                <img src={require("./../images/shapes/7.png")} alt="shape" />
              </div>
              <div className="shape8">
                <img src={require("./../images/shapes/8.png")} alt="shape" />
              </div>
              <div className="shape9 rotateme">
                <img src={require("./../images/shapes/9.png")} alt="shape" />
              </div>
              <div className="shape10 rotateme">
                <img src={require("./../images/shapes/10.png")} alt="shape" />
              </div>
            </div>

            <div className="main-banner item-bg2">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="row h-100 align-items-center">
                      <div className="col-lg-7 col-md-12">
                        <div className="hero-image">
                          <img
                            src={require("./../images/startup-agency-slider/2.jpg")}
                            alt="image"
                          />
                        </div>
                      </div>

                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <div className="col-lg-5 col-md-12">
                            <div className="hero-content">
                              <h1
                                className={
                                  isVisible ? "animated fadeInDown" : ""
                                }
                              >
                                We are creative digital agency
                              </h1>
                              <a
                                href="#"
                                className={`
                                                            btn btn-primary ${
                                                              isVisible
                                                                ? "animated fadeInDown"
                                                                : ""
                                                            }
                                                        `}
                              >
                                Get Started
                              </a>
                            </div>
                          </div>
                        )}
                      </VisibilitySensor>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shape1">
                <img src={require("./../images/shapes/1.png")} alt="shape" />
              </div>
              <div className="shape2">
                <img src={require("./../images/shapes/2.png")} alt="shape" />
              </div>
              <div className="shape3">
                <img src={require("./../images/shapes/3.png")} alt="shape" />
              </div>
              <div className="shape4">
                <img src={require("./../images/shapes/4.png")} alt="shape" />
              </div>
              <div className="shape5">
                <img src={require("./../images/shapes/5.png")} alt="shape" />
              </div>
              <div className="shape6">
                <img src={require("./../images/shapes/6.png")} alt="shape" />
              </div>
              <div className="shape7">
                <img src={require("./../images/shapes/7.png")} alt="shape" />
              </div>
              <div className="shape8">
                <img src={require("./../images/shapes/8.png")} alt="shape" />
              </div>
              <div className="shape9 rotateme">
                <img src={require("./../images/shapes/9.png")} alt="shape" />
              </div>
              <div className="shape10 rotateme">
                <img src={require("./../images/shapes/10.png")} alt="shape" />
              </div>
            </div>

            <div className="main-banner item-bg3">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="row h-100 align-items-center">
                      <div className="col-lg-7 col-md-12">
                        <div className="hero-image">
                          <img
                            src={require("./../images/startup-agency-slider/3.jpg")}
                            alt="image"
                          />
                        </div>
                      </div>

                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <div className="col-lg-5 col-md-12">
                            <div className="hero-content">
                              <h1
                                className={
                                  isVisible ? "animated fadeInDown" : ""
                                }
                              >
                                We are creative digital agency
                              </h1>
                              <a
                                href="#"
                                className={`
                                                            btn btn-primary ${
                                                              isVisible
                                                                ? "animated fadeInDown"
                                                                : ""
                                                            }
                                                        `}
                              >
                                Get Started
                              </a>
                            </div>
                          </div>
                        )}
                      </VisibilitySensor>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shape1">
                <img src={require("./../images/shapes/1.png")} alt="shape" />
              </div>
              <div className="shape2">
                <img src={require("./../images/shapes/2.png")} alt="shape" />
              </div>
              <div className="shape3">
                <img src={require("./../images/shapes/3.png")} alt="shape" />
              </div>
              <div className="shape4">
                <img src={require("./../images/shapes/4.png")} alt="shape" />
              </div>
              <div className="shape5">
                <img src={require("./../images/shapes/5.png")} alt="shape" />
              </div>
              <div className="shape6">
                <img src={require("./../images/shapes/6.png")} alt="shape" />
              </div>
              <div className="shape7">
                <img src={require("./../images/shapes/7.png")} alt="shape" />
              </div>
              <div className="shape8">
                <img src={require("./../images/shapes/8.png")} alt="shape" />
              </div>
              <div className="shape9 rotateme">
                <img src={require("./../images/shapes/9.png")} alt="shape" />
              </div>
              <div className="shape10 rotateme">
                <img src={require("./../images/shapes/10.png")} alt="shape" />
              </div>
            </div>
          </OwlCarousel>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

export default Banner;
--------------------------------------------------
import React, { Component } from "react";

export class WhyChooseUs extends Component {
  render() {
    return (
      <section className="why-choose-us-area ptb-120">
        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-img">
                <img
                  src={require("./../images/1.jpg")}
                  className="front-img"
                  alt="img"
                />
                <img
                  src={require("./../images/2.jpg")}
                  className="back-img"
                  alt="img"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-content">
                <div className="section-title">
                  <span className="wow fadeInUp">WHy Choose Us</span>
                  <h2 className="wow fadeInDown">
                    We are creative, designers & developers
                  </h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut.
                </p>
                <a href="#" className="btn btn-primary">
                  About Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-top rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
        <div className="circle-bottom rotateme">
          <img src={require("./../images/circle-shape.png")} alt="circle" />
        </div>
        <div className="circle-dot">
          <img src={require("./../images/shapes/dot-shape1.png")} alt="shape" />
        </div>
      </section>
    );
  }
}

export default WhyChooseUs;
--------------------------------------------------
import React, { Component } from "react";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import Link from "../../utils/ActiveLink";
import { BLOG_URL } from "../../utils/constants";
import SearchForm from "../layout/SearchForm";
import SideDrawer from "../layout/SideDrawer";

interface IState {
  drawer: boolean;
  searchForm: boolean;
  collapsed: boolean;
}

export class Navbar extends Component<any, IState> {
  _isMounted = false;

  state = {
    drawer: false,
    searchForm: false,
    collapsed: true,
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleSearchForm = () => {
    this.setState((prevState) => {
      return {
        searchForm: !prevState.searchForm,
      };
    });
  };

  handleDrawer = () => {
    this.setState((prevState) => {
      return {
        drawer: !prevState.drawer,
      };
    });
  };

  componentDidMount() {
    this._isMounted = true;
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    let { pathname } = this.props.router;
    let { products } = this.props;
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";
    let layOutCls = "";
    if (pathname == "/creative-blog") {
      layOutCls = "p-relative";
    }

    return (
      <header id="header">
        <div id="navbar" className={`artflex-nav ${layOutCls}`}>
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/">
                <a className="navbar-brand">
                  <img src={require("./../images/logo_full.png")} alt="logo" />
                </a>
              </Link>

              <button
                onClick={this.toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <Link href="/">
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Home
                      </a>
                    </li>
                  </Link>

                  <li className="nav-item">
                    <Link activeClassName="active" href="/about-me">
                      <a href="#" className="nav-link">
                        About Me
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link activeClassName="active" href={BLOG_URL}>
                      {/* <Link activeClassName="active" href="/blog"> */}
                      <a href={BLOG_URL} className="nav-link">
                        Blog{" "}
                      </a>
                      {/* <ul className="dropdown_menu">
                                            <li className="nav-item"> */}
                      {/* <a className="nav-link">Blog</a> */}
                    </Link>
                    {/* </li>
                                            
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/blog-details">
                                                    <a className="nav-link">Blog Details</a>
                                                </Link>
                                            </li>
                                        </ul> */}
                  </li>

                  {/* <li className="nav-item">
										<a href="#" className="nav-link">
											Portfolio <i className="icofont-simple-down"></i>
										</a>
										<ul className="dropdown_menu">
											<li className="nav-item">
												<Link activeClassName="active" href="/portfolio">
													<a className="nav-link">Projects</a>
												</Link>
											</li>

											<li className="nav-item">
												<Link
													activeClassName="active"
													href="/portfolio-details"
												>
													<a className="nav-link">Photography</a>
												</Link>
											</li>
										</ul>
									</li> */}

                  <li className="nav-item">
                    <Link activeClassName="active" href="/coming-soon">
                      {/* <Link activeClassName="active" href="/contact"> */}
                      <a className="nav-link">Contact</a>
                    </Link>
                  </li>
                </ul>

                {/* <div className="others-option"> 
                                {/* FIXME: Maybe in the future add searching capabilities 
                                    <ul>
                                        <li>
                                            <span 
                                                className="search-popup-icon"
                                                onClick={this.handleSearchForm}
                                            >
                                                <i className="icofont-ui-search"></i>
                                            </span>
                                        </li>

                                        <li>
                                            <Link href="/cart">
                                                <a className="cart-icon">
                                                    <i className="icofont-bag"></i>
                                                    <span>{products.length}</span>
                                                </a>
                                            </Link>
                                        </li>

                                        <li onClick={this.handleDrawer}>
                                            <div className="side-menu">
                                                <span className="bar-1"></span>
                                                <span className="bar-2"></span>
                                                <span className="bar-3"></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div> */}
              </div>
            </nav>
          </div>
          {/* <SearchForm onClick={this.handleSearchForm} active={this.state.searchForm ? 'active' : ''} />
                    <SideDrawer onClick={this.handleDrawer} show={this.state.drawer ? 'show' : ''} /> */}
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // products: state.cartReducer.addedItems,
  };
};

export default withRouter(connect(mapStateToProps)(Navbar));
--------------------------------------------------
