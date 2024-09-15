import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchSkills} from '../store/actions/skillAction'

class BarSkill extends Component {

    render() {

        let { skillPicked, skills } = this.props;
        let displayData = []
        
        if(skills )
          displayData = skills.filter(elem => elem.id == skillPicked)

        // console.log(displayData, skillPicked)

        const data = displayData.map((elem, i)=>(
            <div key={i} className="skill-item">
              <div className="skill-header">
                  <h3 className="skill-title">{elem.title}</h3>

                  <div className="skill-percentage">
                      <div className="count-box"><span className="count-text">{elem.val}</span>%</div>
                  </div>
              </div>

              <div className="skill-bar">
                  <div className="progress">
                      <div className="progress-bar" style={{width: elem.val+"%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
              </div>
          </div>
        ))

      return (
        <div className="">
          <div className="skills">
            {data}
          </div>
        </div>
      );
    }
  }
  



const mapStateToProps = state => ({
      skillPicked: state.skillReducer.skillPicked,
      skills: state.skillReducer.skills
    });
  
  
  export default connect( mapStateToProps )(BarSkill); 
--------------------------------------------------
import React, { Component } from 'react';

export class SearchForm extends Component {

    state = {
        searchForm: false,
        term: ''
    };

    closeSearchForm = () => {
        this.props.onClick(this.state.searchForm);
    }

    handleSearch = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div className={`searchBoxTop ${this.props.active}`}>
                <div className="seachBoxContainer">
                    <div className="container">
                        <span className="searchClose" onClick={this.closeSearchForm}></span>

                        <form onSubmit={this.handleSearch}>
                            <input 
                                className="form-control"
                                type="search" 
                                placeholder="Type here........" 
                                value={this.state.term}
                                onChange={e => this.setState({term: e.target.value})}
                            />

                            <button type="submit"><i className="icofont-search-2"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchForm;
--------------------------------------------------
import React, { Component } from "react";
import Link from "next/link";

export class SideDrawer extends Component {
  state = {
    drawer: false,
  };

  closeDrawer = () => {
    this.props.onClick(this.state.drawer);
  };

  render() {
    return (
      <div className="sidebar-modal">
        <div
          className={`modal right fade ${this.props.show}`}
          style={
            this.props.show
              ? {
                  display: "block",
                  paddingRight: "16px",
                }
              : { display: "none" }
          }
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.closeDrawer}
                >
                  <span aria-hidden="true">
                    <i className="icofont-close"></i>
                  </span>
                </button>

                <h2
                  onClick={this.closeDrawer}
                  className="modal-title"
                  id="myModalLabel2"
                >
                  <a href="/">
                    <img src={require("../images/logo.png")} alt="logo" />
                  </a>
                </h2>
              </div>

              <div className="modal-body">
                <div className="sidebar-modal-widget">
                  <h3 className="title">Additional Links</h3>

                  <ul>
                    <li>
                      <Link href="/login">
                        <a>Login</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/signup">
                        <a>Register</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq">
                        <a>FAQ</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/logout">
                        <a>Logout</a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-modal-widget">
                  <h3 className="title">Contact Info</h3>

                  <ul className="contact-info">
                    <li>
                      <i className="icofont-google-map"></i>
                      Address
                      <span>
                        1660 Travis Street Miramar, FL 33025, California
                      </span>
                    </li>
                    <li>
                      <i className="icofont-email"></i>
                      Email
                      <span>
                        <a href="#">admin@artflex.com</a>
                      </span>
                    </li>
                    <li>
                      <i className="icofont-phone"></i>
                      Phone
                      <span>
                        <a href="#">+123 456 7890</a>
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-modal-widget">
                  <h3 className="title">Connect With Us</h3>

                  <ul className="social-list">
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
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-modal-widget">
                  <h3 className="title">Search</h3>

                  <form className="modal-search-form">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Serch here.."
                    />
                    <button type="submit">
                      <i className="icofont-search-2"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideDrawer;
--------------------------------------------------
import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { useDispatch, useSelector } from "react-redux";
import { changeSkillPieId } from "../../store/actions/skillAction";

type IProps = {
	color?: string;
	value?: number;
	key?: string | number;
	title?: string | number;
	[key: string]: any;
};

export default function FullOption(props: IProps) {
	const [selected, setSelected] = useState<number | undefined>(0);
	const [hovered, setHovered] = useState<number | undefined>(undefined);

	const count = useSelector((state: any) => state.skillReducer.skillPicked);
	const dispatch = useDispatch();
	// console.log(props)
	const data = props.data.map((entry, i) => {
		if (hovered === i) {
			return {
				...entry,
				color: "grey",
			};
		}
		return entry;
	});

	const lineWidth = 30;

	return (
		<PieChart
			style={{
				height: "100%",
				fontFamily:
					'"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
				fontSize: "8px",
			}}
			data={data}
			// radius={PieChart.defaultProps.radius - 6}
			lineWidth={lineWidth}
			segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
			segmentsShift={(index) => (index === selected ? 6 : 1)}
			// labelPosition={100 - lineWidth / 2}
			label={({ dataEntry }) => dataEntry.title}
			labelStyle={(index) => ({
				fill: data[index].color,
				fontSize: "3px",
				fontFamily: "sans-serif",
			})}
			radius={25}
			labelPosition={112}
			animate
			onClick={(_, index) => {
				setSelected(index === selected ? undefined : index);
				dispatch(changeSkillPieId(index));
				//REDUX STUFF
			}}
			onMouseOver={(_, index) => {
				setHovered(index);
			}}
			onMouseOut={() => {
				setHovered(undefined);
			}}
		/>
	);
}
--------------------------------------------------
import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  responsive: {
    0: {
      items: 2,
    },
    768: {
      items: 3,
    },
    1200: {
      items: 5,
    },
  },
};

export class Partner extends Component {
  state = {
    display: false,
  };

  componentDidMount() {
    this.setState({ display: true });
  }

  render() {
    return (
      <div className="partner-area ptb-120 bg-38d16a">
        <div className="container">
          <div className="row">
            {this.state.display ? (
              <OwlCarousel
                className="partner-slides owl-carousel owl-theme"
                {...options}
              >
                <div className="col-lg-12">
                  <div className="partner-item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("./../images/partner-image/1.png")}
                          alt="partner"
                        />
                        <img
                          src={require("./../images/partner-image/1.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="partner-item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("./../images/partner-image/2.png")}
                          alt="partner"
                        />
                        <img
                          src={require("./../images/partner-image/2.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="partner-item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("./../images/partner-image/3.png")}
                          alt="partner"
                        />
                        <img
                          src={require("./../images/partner-image/3.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="partner-item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("./../images/partner-image/4.png")}
                          alt="partner"
                        />
                        <img
                          src={require("./../images/partner-image/4.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="partner-item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("./../images/partner-image/5.png")}
                          alt="partner"
                        />
                        <img
                          src={require("./../images/partner-image/5.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </OwlCarousel>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Partner;
--------------------------------------------------
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchSkills} from '../store/actions/skillAction'

class BarSkill extends Component {

    render() {

        let { skillPicked, skills } = this.props;
        let displayData = []
        
        if(skills )
          displayData = skills.filter(elem => elem.id == skillPicked)

        // console.log(displayData, skillPicked)

        const data = displayData.map((elem, i)=>(
            <div key={i} className="skill-item">
              <div className="skill-header">
                  <h3 className="skill-title">{elem.title}</h3>

                  <div className="skill-percentage">
                      <div className="count-box"><span className="count-text">{elem.val}</span>%</div>
                  </div>
              </div>

              <div className="skill-bar">
                  <div className="progress">
                      <div className="progress-bar" style={{width: elem.val+"%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
              </div>
          </div>
        ))

      return (
        <div className="">
          <div className="skills">
            {data}
          </div>
        </div>
      );
    }
  }
  



const mapStateToProps = state => ({
      skillPicked: state.skillReducer.skillPicked,
      skills: state.skillReducer.skills
    });
  
  
  export default connect( mapStateToProps )(BarSkill); 
--------------------------------------------------
import React, { Component } from 'react';

export class SearchForm extends Component {

    state = {
        searchForm: false,
        term: ''
    };

    closeSearchForm = () => {
        this.props.onClick(this.state.searchForm);
    }

    handleSearch = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div className={`searchBoxTop ${this.props.active}`}>
                <div className="seachBoxContainer">
                    <div className="container">
                        <span className="searchClose" onClick={this.closeSearchForm}></span>

                        <form onSubmit={this.handleSearch}>
                            <input 
                                className="form-control"
                                type="search" 
                                placeholder="Type here........" 
                                value={this.state.term}
                                onChange={e => this.setState({term: e.target.value})}
                            />

                            <button type="submit"><i className="icofont-search-2"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchForm;
--------------------------------------------------
import React, { Component } from "react";
import Link from "next/link";

export class SideDrawer extends Component {
  state = {
    drawer: false,
  };

  closeDrawer = () => {
    this.props.onClick(this.state.drawer);
  };

  render() {
    return (
      <div className="sidebar-modal">
        <div
          className={`modal right fade ${this.props.show}`}
          style={
            this.props.show
              ? {
                  display: "block",
                  paddingRight: "16px",
                }
              : { display: "none" }
          }
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.closeDrawer}
                >
                  <span aria-hidden="true">
                    <i className="icofont-close"></i>
                  </span>
                </button>

                <h2
                  onClick={this.closeDrawer}
                  className="modal-title"
                  id="myModalLabel2"
                >
                  <a href="/">
                    <img src={require("../images/logo.png")} alt="logo" />
                  </a>
                </h2>
              </div>

              <div className="modal-body">
                <div className="sidebar-modal-widget">
                  <h3 className="title">Additional Links</h3>

                  <ul>
                    <li>
                      <Link href="/login">
                        <a>Login</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/signup">
                        <a>Register</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq">
                        <a>FAQ</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/logout">
                        <a>Logout</a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-modal-widget">
                  <h3 className="title">Contact Info</h3>

                  <ul className="contact-info">
                    <li>
                      <i className="icofont-google-map"></i>
                      Address
                      <span>
                        1660 Travis Street Miramar, FL 33025, California
                      </span>
                    </li>
                    <li>
                      <i className="icofont-email"></i>
                      Email
                      <span>
                        <a href="#">admin@artflex.com</a>
                      </span>
                    </li>
                    <li>
                      <i className="icofont-phone"></i>
                      Phone
                      <span>
                        <a href="#">+123 456 7890</a>
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-modal-widget">
                  <h3 className="title">Connect With Us</h3>

                  <ul className="social-list">
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
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-modal-widget">
                  <h3 className="title">Search</h3>

                  <form className="modal-search-form">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Serch here.."
                    />
                    <button type="submit">
                      <i className="icofont-search-2"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideDrawer;
--------------------------------------------------
import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { useDispatch, useSelector } from "react-redux";
import { changeSkillPieId } from "../../store/actions/skillAction";

type IProps = {
	color?: string;
	value?: number;
	key?: string | number;
	title?: string | number;
	[key: string]: any;
};

export default function FullOption(props: IProps) {
	const [selected, setSelected] = useState<number | undefined>(0);
	const [hovered, setHovered] = useState<number | undefined>(undefined);

	const count = useSelector((state: any) => state.skillReducer.skillPicked);
	const dispatch = useDispatch();
	// console.log(props)
	const data = props.data.map((entry, i) => {
		if (hovered === i) {
			return {
				...entry,
				color: "grey",
			};
		}
		return entry;
	});

	const lineWidth = 30;

	return (
		<PieChart
			style={{
				height: "100%",
				fontFamily:
					'"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
				fontSize: "8px",
			}}
			data={data}
			// radius={PieChart.defaultProps.radius - 6}
			lineWidth={lineWidth}
			segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
			segmentsShift={(index) => (index === selected ? 6 : 1)}
			// labelPosition={100 - lineWidth / 2}
			label={({ dataEntry }) => dataEntry.title}
			labelStyle={(index) => ({
				fill: data[index].color,
				fontSize: "3px",
				fontFamily: "sans-serif",
			})}
			radius={25}
			labelPosition={112}
			animate
			onClick={(_, index) => {
				setSelected(index === selected ? undefined : index);
				dispatch(changeSkillPieId(index));
				//REDUX STUFF
			}}
			onMouseOver={(_, index) => {
				setHovered(index);
			}}
			onMouseOut={() => {
				setHovered(undefined);
			}}
		/>
	);
}
--------------------------------------------------
import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  responsive: {
    0: {
      items: 2,
    },
    768: {
      items: 3,
    },
    1200: {
      items: 5,
    },
  },
};

export class Partner extends Component {
  state = {
    display: false,
  };

  componentDidMount() {
    this.setState({ display: true });
  }

  render() {
    return (
      <div className="partner-area ptb-120 bg-38d16a">
        <div className="container">
          <div className="row">
            {this.state.display ? (
              <OwlCarousel
                className="partner-slides owl-carousel owl-theme"
                {...options}
              >
                <div className="col-lg-12">
                  <div className="partner-item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("./../images/partner-image/1.png")}
                          alt="partner"
                        />
                        <img
                          src={require("./../images/partner-image/1.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="partner-item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("./../images/partner-image/2.png")}
                          alt="partner"
                        />
                        <img
                          src={require("./../images/partner-image/2.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="partner-item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("./../images/partner-image/3.png")}
                          alt="partner"
                        />
                        <img
                          src={require("./../images/partner-image/3.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="partner-item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("./../images/partner-image/4.png")}
                          alt="partner"
                        />
                        <img
                          src={require("./../images/partner-image/4.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="partner-item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("./../images/partner-image/5.png")}
                          alt="partner"
                        />
                        <img
                          src={require("./../images/partner-image/5.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </OwlCarousel>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Partner;
--------------------------------------------------
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchSkills} from '../store/actions/skillAction'

class BarSkill extends Component {

    render() {

        let { skillPicked, skills } = this.props;
        let displayData = []
        
        if(skills )
          displayData = skills.filter(elem => elem.id == skillPicked)

        // console.log(displayData, skillPicked)

        const data = displayData.map((elem, i)=>(
            <div key={i} className="skill-item">
              <div className="skill-header">
                  <h3 className="skill-title">{elem.title}</h3>

                  <div className="skill-percentage">
                      <div className="count-box"><span className="count-text">{elem.val}</span>%</div>
                  </div>
              </div>

              <div className="skill-bar">
                  <div className="progress">
                      <div className="progress-bar" style={{width: elem.val+"%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
              </div>
          </div>
        ))

      return (
        <div className="">
          <div className="skills">
            {data}
          </div>
        </div>
      );
    }
  }
  



const mapStateToProps = state => ({
      skillPicked: state.skillReducer.skillPicked,
      skills: state.skillReducer.skills
    });
  
  
  export default connect( mapStateToProps )(BarSkill); 
--------------------------------------------------
import React, { Component } from 'react';

export class SearchForm extends Component {

    state = {
        searchForm: false,
        term: ''
    };

    closeSearchForm = () => {
        this.props.onClick(this.state.searchForm);
    }

    handleSearch = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div className={`searchBoxTop ${this.props.active}`}>
                <div className="seachBoxContainer">
                    <div className="container">
                        <span className="searchClose" onClick={this.closeSearchForm}></span>

                        <form onSubmit={this.handleSearch}>
                            <input 
                                className="form-control"
                                type="search" 
                                placeholder="Type here........" 
                                value={this.state.term}
                                onChange={e => this.setState({term: e.target.value})}
                            />

                            <button type="submit"><i className="icofont-search-2"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchForm;
--------------------------------------------------
import React, { Component } from "react";
import Link from "next/link";

export class SideDrawer extends Component {
  state = {
    drawer: false,
  };

  closeDrawer = () => {
    this.props.onClick(this.state.drawer);
  };

  render() {
    return (
      <div className="sidebar-modal">
        <div
          className={`modal right fade ${this.props.show}`}
          style={
            this.props.show
              ? {
                  display: "block",
                  paddingRight: "16px",
                }
              : { display: "none" }
          }
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.closeDrawer}
                >
                  <span aria-hidden="true">
                    <i className="icofont-close"></i>
                  </span>
                </button>

                <h2
                  onClick={this.closeDrawer}
                  className="modal-title"
                  id="myModalLabel2"
                >
                  <a href="/">
                    <img src={require("../images/logo.png")} alt="logo" />
                  </a>
                </h2>
              </div>

              <div className="modal-body">
                <div className="sidebar-modal-widget">
                  <h3 className="title">Additional Links</h3>

                  <ul>
                    <li>
                      <Link href="/login">
                        <a>Login</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/signup">
                        <a>Register</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq">
                        <a>FAQ</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/logout">
                        <a>Logout</a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-modal-widget">
                  <h3 className="title">Contact Info</h3>

                  <ul className="contact-info">
                    <li>
                      <i className="icofont-google-map"></i>
                      Address
                      <span>
                        1660 Travis Street Miramar, FL 33025, California
                      </span>
                    </li>
                    <li>
                      <i className="icofont-email"></i>
                      Email
                      <span>
                        <a href="#">admin@artflex.com</a>
                      </span>
                    </li>
                    <li>
                      <i className="icofont-phone"></i>
                      Phone
                      <span>
                        <a href="#">+123 456 7890</a>
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-modal-widget">
                  <h3 className="title">Connect With Us</h3>

                  <ul className="social-list">
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
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-modal-widget">
                  <h3 className="title">Search</h3>

                  <form className="modal-search-form">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Serch here.."
                    />
                    <button type="submit">
                      <i className="icofont-search-2"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideDrawer;
--------------------------------------------------
import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { useDispatch, useSelector } from "react-redux";
import { changeSkillPieId } from "../../store/actions/skillAction";

type IProps = {
	color?: string;
	value?: number;
	key?: string | number;
	title?: string | number;
	[key: string]: any;
};

export default function FullOption(props: IProps) {
	const [selected, setSelected] = useState<number | undefined>(0);
	const [hovered, setHovered] = useState<number | undefined>(undefined);

	const count = useSelector((state: any) => state.skillReducer.skillPicked);
	const dispatch = useDispatch();
	// console.log(props)
	const data = props.data.map((entry, i) => {
		if (hovered === i) {
			return {
				...entry,
				color: "grey",
			};
		}
		return entry;
	});

	const lineWidth = 30;

	return (
		<PieChart
			style={{
				height: "100%",
				fontFamily:
					'"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
				fontSize: "8px",
			}}
			data={data}
			// radius={PieChart.defaultProps.radius - 6}
			lineWidth={lineWidth}
			segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
			segmentsShift={(index) => (index === selected ? 6 : 1)}
			// labelPosition={100 - lineWidth / 2}
			label={({ dataEntry }) => dataEntry.title}
			labelStyle={(index) => ({
				fill: data[index].color,
				fontSize: "3px",
				fontFamily: "sans-serif",
			})}
			radius={25}
			labelPosition={112}
			animate
			onClick={(_, index) => {
				setSelected(index === selected ? undefined : index);
				dispatch(changeSkillPieId(index));
				//REDUX STUFF
			}}
			onMouseOver={(_, index) => {
				setHovered(index);
			}}
			onMouseOut={() => {
				setHovered(undefined);
			}}
		/>
	);
}
--------------------------------------------------
import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  responsive: {
    0: {
      items: 2,
    },
    768: {
      items: 3,
    },
    1200: {
      items: 5,
    },
  },
};

export class Partner extends Component {
  state = {
    display: false,
  };

  componentDidMount() {
    this.setState({ display: true });
  }

  render() {
    return (
      <div className="partner-area ptb-120 bg-38d16a">
        <div className="container">
          <div className="row">
            {this.state.display ? (
              <OwlCarousel
                className="partner-slides owl-carousel owl-theme"
                {...options}
              >
                <div className="col-lg-12">
                  <div className="partner-item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("./../images/partner-image/1.png")}
                          alt="partner"
                        />
                        <img
                          src={require("./../images/partner-image/1.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="partner-item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("./../images/partner-image/2.png")}
                          alt="partner"
                        />
                        <img
                          src={require("./../images/partner-image/2.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="partner-item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("./../images/partner-image/3.png")}
                          alt="partner"
                        />
                        <img
                          src={require("./../images/partner-image/3.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="partner-item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("./../images/partner-image/4.png")}
                          alt="partner"
                        />
                        <img
                          src={require("./../images/partner-image/4.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="partner-item">
                    <Link href="#">
                      <a>
                        <img
                          src={require("./../images/partner-image/5.png")}
                          alt="partner"
                        />
                        <img
                          src={require("./../images/partner-image/5.png")}
                          alt="partner"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </OwlCarousel>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Partner;
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
