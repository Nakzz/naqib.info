import React, { Component } from 'react';



export default class BarSkill extends Component {
    componentDidMount() {
     //TODO: in the future the content should be gotten from 
    }
  
    componentWillUnmount() {

    }
  
    render() {
      return (
        <div className="">

<div className="skills">
                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h3 className="skill-title">Branding</h3>

                                            <div className="skill-percentage">
                                                <div className="count-box"><span className="count-text">92</span>%</div>
                                            </div>
                                        </div>

                                        <div className="skill-bar">
                                            <div className="progress">
                                                <div className="progress-bar" style={{width: "92%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h3 className="skill-title">Marketing</h3>

                                            <div className="skill-percentage"><div className="count-box"><span className="count-text">95</span>%</div></div>
                                        </div>

                                        <div className="skill-bar">
                                            <div className="progress">
                                                <div className="progress-bar" style={{width: "95%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h3 className="skill-title">Design</h3>

                                            <div className="skill-percentage"><div className="count-box"><span className="count-text">95</span>%</div></div>
                                        </div>

                                        <div className="skill-bar">
                                            <div className="progress">
                                                <div className="progress-bar" style={{width: "95%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h3 className="skill-title">Development</h3>

                                            <div className="skill-percentage"><div className="count-box"><span className="count-text">95</span>%</div></div>
                                        </div>

                                        <div className="skill-bar">
                                            <div className="progress">
                                                <div className="progress-bar" style={{width: "95%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

        </div>
      );
    }
  }
  