import React, { Component } from 'react';
import Typed from 'typed.js';


export default class TypedReact extends Component {
    componentDidMount() {
        // If you want to pass more options as props, simply add
      // your desired props to this destructuring assignment.
      const { strings } = this.props;
      // You can pass other options here, such as typing speed, back speed, etc.
      const options = {
          strings: strings,
        typeSpeed: 100,
        backSpeed: 70,
        loop: true,
        smartBackspace: true,
        shuffle: true,
        backDelay: 100,
        showCursor : true

      };
      // this.el refers to the <span> in the render() method
      this.typed = new Typed(this.el, options);
    }
  
    componentWillUnmount() {
        // Make sure to destroy Typed instance on unmounting
      // to prevent memory leaks
      this.typed.destroy();
    }
  
    render() {
      return (
        <div className="">
          <div className=" wow fadeInDown">
            <h3>
            <span style={{  }}
              ref={(el) => { this.el = el; }}
            />
            </h3>
              
          </div>

        </div>
      );
    }
  }
  