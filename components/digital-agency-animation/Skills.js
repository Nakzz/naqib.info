import React, { Component } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import FullOption from '../pie-chart/FullOption.tsx';
import BarSkill from '../home/barSkill';


const dataMock = [
    { title: 'Architecture', value: 10, color: '#E38627' },
            { title: 'Backend Development', value: 15, color: '#C13C37' },
            { title: 'Frontend Development', value: 20, color: '#6A2135' },
            {title: 'Three', value: 20, color: '#6A2135'}
  ];


export class Skills extends Component {

    componentDidMount(){
        //TODO: get these from API

   
          
    }

    
    render() {
        return (
            <section className="skill-area m-t-50">
                <div className="skill-image">
                            
            <img src={require("../../images/shapes/16.png")} className="back-image smaller" alt="shape" />
                                
                            
                            </div>
                <div className="container">
                    <div className="row h-100 align-items-end">
                        <div className="col-lg-6 col-md-12">
                            <div className="our-skill">
                                <div className="section-title">
                                    
                                    <span className="wow fadeInUp">My Skills</span>
                                    <h2 className="wow fadeInDown">I am a creative problem solver</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                

                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="m-t-20">
                            
                                <FullOption data={dataMock} />
                            
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                        <BarSkill/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;
