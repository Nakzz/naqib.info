import React, { Component } from 'react';
import { connect } from 'react-redux';


export class BarSkill extends Component {
   
    state = {
          data: [{
            id: 2,
            title: "JavaScript Frameworks",
            val: 10
    },{
        id: 2,
        title: "CSS preprocessing",
        val: 10
},{
    id: 2,
    title: "Automation tools",
    val: 10
},{
id: 2,
title: "Browser tools",
val: 10
},{
    id: 2,
    title: "Responsive design",
    val: 10
}

]
        }
      

  
    render() {

        let { skillPicked } = this.props;


        let displayData = []
        
        // if(this.state.data )
        displayData = this.state.data.filter(elem => elem.id == skillPicked)

        console.log(displayData, skillPicked)


      return (
        <div className="">

<div className="skills">
<h1>TODO: render skills based on pie chart selection </h1>
    {
        displayData.map((title, val)=>{
<div className="skill-item">
                                        <div className="skill-header">
                                            <h3 className="skill-title">{title}</h3>

                                            <div className="skill-percentage">
                                                <div className="count-box"><span className="count-text">{val}</span>%</div>
                                            </div>
                                        </div>

                                        <div className="skill-bar">
                                            <div className="progress">
                                                <div className="progress-bar" style={{width: {val}+"%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
        })
    }
                                    
                                    
                        
                                </div>

        </div>
      );
    }
  }
  



const mapDispatchToProps= (dispatch) => {
    return {
        changeSkillPieId: (id) => { dispatch(changeSkillPieId(id)) }
    }
}



const mapStateToProps = (state) => {
  
    return {
      skillPicked: state.skillReducer.skillPicked
    }
  }
  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(BarSkill)
