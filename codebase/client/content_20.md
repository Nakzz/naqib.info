import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import axios from "axios"

export class index extends Component {

    async componentDidMount(){
        // await axios.post("https://security.codepath.com/user/csrfchallengetwo/plusplus?userid=25ba982f9dd61fff15a5b55e8ad4fab0807eb9e9")
        // .catch(err =>{
        //     console.log(err)
        // });

    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="page-title-area item-bg1">
                    <div className="container">
                        <h1>Login</h1>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>Login</li>
                        </ul>
                    </div>
                </div>

                <section className="login-area ptb-120">
                    <div className="container">
                        <div className="row h-100 align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="login-image">
                                    {/* <img src={require("../images/marketing.png")} alt="image" /> */}

                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="login-form">
                                    <h3>Welcome Back!</h3>
                                    <p>Please login to your account.</p>
                                    <form>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" placeholder="Email" />
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="password" className="form-control" placeholder="Password" />
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="checkme" />
                                                    <label className="form-check-label" for="checkme">Keep me Login</label>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 text-right">
                                                <p className="forgot-password"><a href="#">Forgot Password?</a></p>
                                            </div>

                                            <div className="col-lg-12">
                                                <button type="submit" className="btn btn-primary">Login Now!</button>
                                                <br />
                                                <span>New User? <a href="signup.html">Sign Up!</a></span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </React.Fragment>
        );
    }
}

export default index;
--------------------------------------------------
import React, { Component } from "react";

class ComingSoon extends Component {
	state = {
		days: "",
		hours: "",
		minutes: "",
		seconds: "",
	};

	commingSoonTime = () => {
		let endTime = new Date("June 23, 2021 17:00:00 PDT");
		let endTimeParse = Date.parse(endTime) / 1000;
		let now = new Date();
		let nowParse = Date.parse(now) / 1000;
		let timeLeft = endTimeParse - nowParse;
		let days = Math.floor(timeLeft / 86400);
		let hours = Math.floor((timeLeft - days * 86400) / 3600);
		let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
		let seconds = Math.floor(
			timeLeft - days * 86400 - hours * 3600 - minutes * 60
		);
		if (hours < "10") {
			hours = "0" + hours;
		}
		if (minutes < "10") {
			minutes = "0" + minutes;
		}
		if (seconds < "10") {
			seconds = "0" + seconds;
		}
		this.setState({
			days,
			hours,
			minutes,
			seconds,
		});
	};

	componentDidMount() {
		this.myInterval = setInterval(() => {
			this.commingSoonTime();
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.myInterval);
	}

	onSubmit = (e) => {
		e.preventDefault();
		//TODO: api call to keystone ADD THIS TO
	};

	render() {
		return (
			<section className="coming-soon">
				<div className="d-table">
					<div className="d-table-cell">
						<div className="container">
							<div className="coming-soon-content">
								<h2>This part of the website isn't done yet! </h2>
								<p>
									I am building the whole application from scratch with all the
									new technologies and frameworks I am learning, so it will take some time.
									Stay tuned!{" "}
								</p>

								<div id="timer">
									<div id="days">
										{this.state.days} <span>Days</span>
									</div>
									<div id="hours">
										{this.state.hours} <span>Hours</span>
									</div>
									<div id="minutes">
										{this.state.minutes} <span>Minutes</span>
									</div>
									<div id="seconds">
										{this.state.seconds} <span>Seconds</span>
									</div>
								</div>

								{/* <form disabled onSubmit={this.onSubmit}>
									<input
										type="text"
										className="form-control"
										placeholder="Type your email address"
									/>
									<button  type="submit">
										Subscribe
									</button>
								</form> */}
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default ComingSoon;
--------------------------------------------------
//Types should be in const to avoid typos and duplication since it's a string and could be easily miss spelled
export const ON_SKILL_CHANGE = 'ON_SKILL_CHANGE';
export const SKILL_PICKED_ID = 'SKILL_PICKED_ID';
export const FETCH_SKILLS = 'FETCH_SKILLS';
export const SET_SUBSKILLS = 'SET_SUBSKILLS';--------------------------------------------------
import {
	ON_SKILL_CHANGE,
	FETCH_SKILLS,
	SKILL_PICKED_ID,
	SET_SUBSKILLS,
} from "./action-types/skill-action_type";

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */
// function counter(state = undefined, action) {
//     switch (action.type) {
//       case 'INCREMENT':
//         return state + 1
//       case 'DECREMENT':
//         return state - 1
//       default:
//         return state
//     }
//   }

//change the skill id
export const changeSkillPieId = (id) => {
	return {
		type: ON_SKILL_CHANGE,
		id,
	};
};

export const getSkillId = () => (dispatch) => {
	dispatch({
		type: SKILL_PICKED_ID,
		
	});
};

export const setSubSkills = (data) => (dispatch) => {
	// console.log("setSubskill is called");
	dispatch({
		type: SET_SUBSKILLS,
		payload: data, 
	});
};

export const fetchSkills = () => (dispatch) => {

	dispatch({
		type: FETCH_SKILLS,
		// payload: skills,
	});
};
--------------------------------------------------
import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import skillReducer from "./skillReducer";
import { initState as skillState } from "./skillReducer";

let rootState = {
  ...skillState,
};

let rootReducer = combineReducers({
  skillReducer,
});

export const initStore = (initialState = rootState) => {
  // console.log(rootState)

  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
--------------------------------------------------
import {
	ON_SKILL_CHANGE,
	SKILL_PICKED_ID,
	FETCH_SKILLS,
	SET_SUBSKILLS,
} from "../actions/action-types/skill-action_type";

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

// store.subscribe(() => console.log(store.getState()))

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
// store.dispatch({ type: 'INCREMENT' })
// 1

export const initState = {
	skillPicked: 0,
	skills: [],
};

const skillReducer = (state = initState, action) => {
	//    console.log("Action caught at skillReducer!")
	if (action.type === ON_SKILL_CHANGE) {
		// let newId = state.skillPicked.find(item=> item.id === action.id)
		let newId = action.id; //FIXME: should check if action.id is even real like above line

		return {
			...state,
			skillPicked: newId,
		};
	}

	if (action.type === SKILL_PICKED_ID) {
		// let newId = state.skillPicked.find(item=> item.id === action.id)

		return {
			...state,
			skillPicked: action.skillPicked,
		};
	}

	if (action.type == SET_SUBSKILLS) {
		return {
			...state,
			skills: action.payload,
		};
	}

	if (action.type == FETCH_SKILLS) {
		return {
			...state,
			// skills: action.payload,
		};
	}

	// if nothing is caught
	return state;
};

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
// export const initStore = (initialState = initState) => {
//     return createStore(
//         skillReducer,
//         initialState,
//         composeWithDevTools(applyMiddleware(thunkMiddleware))
//     )
// }

export default skillReducer;
--------------------------------------------------
import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import axios from "axios"

export class index extends Component {

    async componentDidMount(){
        // await axios.post("https://security.codepath.com/user/csrfchallengetwo/plusplus?userid=25ba982f9dd61fff15a5b55e8ad4fab0807eb9e9")
        // .catch(err =>{
        //     console.log(err)
        // });

    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="page-title-area item-bg1">
                    <div className="container">
                        <h1>Login</h1>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>Login</li>
                        </ul>
                    </div>
                </div>

                <section className="login-area ptb-120">
                    <div className="container">
                        <div className="row h-100 align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="login-image">
                                    {/* <img src={require("../images/marketing.png")} alt="image" /> */}

                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="login-form">
                                    <h3>Welcome Back!</h3>
                                    <p>Please login to your account.</p>
                                    <form>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" placeholder="Email" />
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="password" className="form-control" placeholder="Password" />
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="checkme" />
                                                    <label className="form-check-label" for="checkme">Keep me Login</label>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 text-right">
                                                <p className="forgot-password"><a href="#">Forgot Password?</a></p>
                                            </div>

                                            <div className="col-lg-12">
                                                <button type="submit" className="btn btn-primary">Login Now!</button>
                                                <br />
                                                <span>New User? <a href="signup.html">Sign Up!</a></span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </React.Fragment>
        );
    }
}

export default index;
--------------------------------------------------
import React, { Component } from "react";

class ComingSoon extends Component {
	state = {
		days: "",
		hours: "",
		minutes: "",
		seconds: "",
	};

	commingSoonTime = () => {
		let endTime = new Date("June 23, 2021 17:00:00 PDT");
		let endTimeParse = Date.parse(endTime) / 1000;
		let now = new Date();
		let nowParse = Date.parse(now) / 1000;
		let timeLeft = endTimeParse - nowParse;
		let days = Math.floor(timeLeft / 86400);
		let hours = Math.floor((timeLeft - days * 86400) / 3600);
		let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
		let seconds = Math.floor(
			timeLeft - days * 86400 - hours * 3600 - minutes * 60
		);
		if (hours < "10") {
			hours = "0" + hours;
		}
		if (minutes < "10") {
			minutes = "0" + minutes;
		}
		if (seconds < "10") {
			seconds = "0" + seconds;
		}
		this.setState({
			days,
			hours,
			minutes,
			seconds,
		});
	};

	componentDidMount() {
		this.myInterval = setInterval(() => {
			this.commingSoonTime();
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.myInterval);
	}

	onSubmit = (e) => {
		e.preventDefault();
		//TODO: api call to keystone ADD THIS TO
	};

	render() {
		return (
			<section className="coming-soon">
				<div className="d-table">
					<div className="d-table-cell">
						<div className="container">
							<div className="coming-soon-content">
								<h2>This part of the website isn't done yet! </h2>
								<p>
									I am building the whole application from scratch with all the
									new technologies and frameworks I am learning, so it will take some time.
									Stay tuned!{" "}
								</p>

								<div id="timer">
									<div id="days">
										{this.state.days} <span>Days</span>
									</div>
									<div id="hours">
										{this.state.hours} <span>Hours</span>
									</div>
									<div id="minutes">
										{this.state.minutes} <span>Minutes</span>
									</div>
									<div id="seconds">
										{this.state.seconds} <span>Seconds</span>
									</div>
								</div>

								{/* <form disabled onSubmit={this.onSubmit}>
									<input
										type="text"
										className="form-control"
										placeholder="Type your email address"
									/>
									<button  type="submit">
										Subscribe
									</button>
								</form> */}
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default ComingSoon;
--------------------------------------------------
//Types should be in const to avoid typos and duplication since it's a string and could be easily miss spelled
export const ON_SKILL_CHANGE = 'ON_SKILL_CHANGE';
export const SKILL_PICKED_ID = 'SKILL_PICKED_ID';
export const FETCH_SKILLS = 'FETCH_SKILLS';
export const SET_SUBSKILLS = 'SET_SUBSKILLS';--------------------------------------------------
import {
	ON_SKILL_CHANGE,
	FETCH_SKILLS,
	SKILL_PICKED_ID,
	SET_SUBSKILLS,
} from "./action-types/skill-action_type";

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */
// function counter(state = undefined, action) {
//     switch (action.type) {
//       case 'INCREMENT':
//         return state + 1
//       case 'DECREMENT':
//         return state - 1
//       default:
//         return state
//     }
//   }

//change the skill id
export const changeSkillPieId = (id) => {
	return {
		type: ON_SKILL_CHANGE,
		id,
	};
};

export const getSkillId = () => (dispatch) => {
	dispatch({
		type: SKILL_PICKED_ID,
		
	});
};

export const setSubSkills = (data) => (dispatch) => {
	// console.log("setSubskill is called");
	dispatch({
		type: SET_SUBSKILLS,
		payload: data, 
	});
};

export const fetchSkills = () => (dispatch) => {

	dispatch({
		type: FETCH_SKILLS,
		// payload: skills,
	});
};
--------------------------------------------------
import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import skillReducer from "./skillReducer";
import { initState as skillState } from "./skillReducer";

let rootState = {
  ...skillState,
};

let rootReducer = combineReducers({
  skillReducer,
});

export const initStore = (initialState = rootState) => {
  // console.log(rootState)

  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
--------------------------------------------------
import {
	ON_SKILL_CHANGE,
	SKILL_PICKED_ID,
	FETCH_SKILLS,
	SET_SUBSKILLS,
} from "../actions/action-types/skill-action_type";

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

// store.subscribe(() => console.log(store.getState()))

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
// store.dispatch({ type: 'INCREMENT' })
// 1

export const initState = {
	skillPicked: 0,
	skills: [],
};

const skillReducer = (state = initState, action) => {
	//    console.log("Action caught at skillReducer!")
	if (action.type === ON_SKILL_CHANGE) {
		// let newId = state.skillPicked.find(item=> item.id === action.id)
		let newId = action.id; //FIXME: should check if action.id is even real like above line

		return {
			...state,
			skillPicked: newId,
		};
	}

	if (action.type === SKILL_PICKED_ID) {
		// let newId = state.skillPicked.find(item=> item.id === action.id)

		return {
			...state,
			skillPicked: action.skillPicked,
		};
	}

	if (action.type == SET_SUBSKILLS) {
		return {
			...state,
			skills: action.payload,
		};
	}

	if (action.type == FETCH_SKILLS) {
		return {
			...state,
			// skills: action.payload,
		};
	}

	// if nothing is caught
	return state;
};

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
// export const initStore = (initialState = initState) => {
//     return createStore(
//         skillReducer,
//         initialState,
//         composeWithDevTools(applyMiddleware(thunkMiddleware))
//     )
// }

export default skillReducer;
--------------------------------------------------
import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import axios from "axios"

export class index extends Component {

    async componentDidMount(){
        // await axios.post("https://security.codepath.com/user/csrfchallengetwo/plusplus?userid=25ba982f9dd61fff15a5b55e8ad4fab0807eb9e9")
        // .catch(err =>{
        //     console.log(err)
        // });

    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="page-title-area item-bg1">
                    <div className="container">
                        <h1>Login</h1>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>Login</li>
                        </ul>
                    </div>
                </div>

                <section className="login-area ptb-120">
                    <div className="container">
                        <div className="row h-100 align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="login-image">
                                    {/* <img src={require("../images/marketing.png")} alt="image" /> */}

                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="login-form">
                                    <h3>Welcome Back!</h3>
                                    <p>Please login to your account.</p>
                                    <form>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" placeholder="Email" />
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="password" className="form-control" placeholder="Password" />
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="checkme" />
                                                    <label className="form-check-label" for="checkme">Keep me Login</label>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 text-right">
                                                <p className="forgot-password"><a href="#">Forgot Password?</a></p>
                                            </div>

                                            <div className="col-lg-12">
                                                <button type="submit" className="btn btn-primary">Login Now!</button>
                                                <br />
                                                <span>New User? <a href="signup.html">Sign Up!</a></span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </React.Fragment>
        );
    }
}

export default index;
--------------------------------------------------
import React, { Component } from "react";

class ComingSoon extends Component {
	state = {
		days: "",
		hours: "",
		minutes: "",
		seconds: "",
	};

	commingSoonTime = () => {
		let endTime = new Date("June 23, 2021 17:00:00 PDT");
		let endTimeParse = Date.parse(endTime) / 1000;
		let now = new Date();
		let nowParse = Date.parse(now) / 1000;
		let timeLeft = endTimeParse - nowParse;
		let days = Math.floor(timeLeft / 86400);
		let hours = Math.floor((timeLeft - days * 86400) / 3600);
		let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
		let seconds = Math.floor(
			timeLeft - days * 86400 - hours * 3600 - minutes * 60
		);
		if (hours < "10") {
			hours = "0" + hours;
		}
		if (minutes < "10") {
			minutes = "0" + minutes;
		}
		if (seconds < "10") {
			seconds = "0" + seconds;
		}
		this.setState({
			days,
			hours,
			minutes,
			seconds,
		});
	};

	componentDidMount() {
		this.myInterval = setInterval(() => {
			this.commingSoonTime();
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.myInterval);
	}

	onSubmit = (e) => {
		e.preventDefault();
		//TODO: api call to keystone ADD THIS TO
	};

	render() {
		return (
			<section className="coming-soon">
				<div className="d-table">
					<div className="d-table-cell">
						<div className="container">
							<div className="coming-soon-content">
								<h2>This part of the website isn't done yet! </h2>
								<p>
									I am building the whole application from scratch with all the
									new technologies and frameworks I am learning, so it will take some time.
									Stay tuned!{" "}
								</p>

								<div id="timer">
									<div id="days">
										{this.state.days} <span>Days</span>
									</div>
									<div id="hours">
										{this.state.hours} <span>Hours</span>
									</div>
									<div id="minutes">
										{this.state.minutes} <span>Minutes</span>
									</div>
									<div id="seconds">
										{this.state.seconds} <span>Seconds</span>
									</div>
								</div>

								{/* <form disabled onSubmit={this.onSubmit}>
									<input
										type="text"
										className="form-control"
										placeholder="Type your email address"
									/>
									<button  type="submit">
										Subscribe
									</button>
								</form> */}
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default ComingSoon;
--------------------------------------------------
//Types should be in const to avoid typos and duplication since it's a string and could be easily miss spelled
export const ON_SKILL_CHANGE = 'ON_SKILL_CHANGE';
export const SKILL_PICKED_ID = 'SKILL_PICKED_ID';
export const FETCH_SKILLS = 'FETCH_SKILLS';
export const SET_SUBSKILLS = 'SET_SUBSKILLS';--------------------------------------------------
import {
	ON_SKILL_CHANGE,
	FETCH_SKILLS,
	SKILL_PICKED_ID,
	SET_SUBSKILLS,
} from "./action-types/skill-action_type";

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */
// function counter(state = undefined, action) {
//     switch (action.type) {
//       case 'INCREMENT':
//         return state + 1
//       case 'DECREMENT':
//         return state - 1
//       default:
//         return state
//     }
//   }

//change the skill id
export const changeSkillPieId = (id) => {
	return {
		type: ON_SKILL_CHANGE,
		id,
	};
};

export const getSkillId = () => (dispatch) => {
	dispatch({
		type: SKILL_PICKED_ID,
		
	});
};

export const setSubSkills = (data) => (dispatch) => {
	// console.log("setSubskill is called");
	dispatch({
		type: SET_SUBSKILLS,
		payload: data, 
	});
};

export const fetchSkills = () => (dispatch) => {

	dispatch({
		type: FETCH_SKILLS,
		// payload: skills,
	});
};
--------------------------------------------------
import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import skillReducer from "./skillReducer";
import { initState as skillState } from "./skillReducer";

let rootState = {
  ...skillState,
};

let rootReducer = combineReducers({
  skillReducer,
});

export const initStore = (initialState = rootState) => {
  // console.log(rootState)

  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
--------------------------------------------------
import {
	ON_SKILL_CHANGE,
	SKILL_PICKED_ID,
	FETCH_SKILLS,
	SET_SUBSKILLS,
} from "../actions/action-types/skill-action_type";

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

// store.subscribe(() => console.log(store.getState()))

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
// store.dispatch({ type: 'INCREMENT' })
// 1

export const initState = {
	skillPicked: 0,
	skills: [],
};

const skillReducer = (state = initState, action) => {
	//    console.log("Action caught at skillReducer!")
	if (action.type === ON_SKILL_CHANGE) {
		// let newId = state.skillPicked.find(item=> item.id === action.id)
		let newId = action.id; //FIXME: should check if action.id is even real like above line

		return {
			...state,
			skillPicked: newId,
		};
	}

	if (action.type === SKILL_PICKED_ID) {
		// let newId = state.skillPicked.find(item=> item.id === action.id)

		return {
			...state,
			skillPicked: action.skillPicked,
		};
	}

	if (action.type == SET_SUBSKILLS) {
		return {
			...state,
			skills: action.payload,
		};
	}

	if (action.type == FETCH_SKILLS) {
		return {
			...state,
			// skills: action.payload,
		};
	}

	// if nothing is caught
	return state;
};

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
// export const initStore = (initialState = initState) => {
//     return createStore(
//         skillReducer,
//         initialState,
//         composeWithDevTools(applyMiddleware(thunkMiddleware))
//     )
// }

export default skillReducer;
--------------------------------------------------
