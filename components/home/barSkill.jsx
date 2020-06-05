import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchSkills} from '../../store/actions/skillAction'

class BarSkill extends Component {

  componentDidMount(){
      this.props.fetchSkills();
    }
    
      
    render() {

        let { skillPicked, skills } = this.props;
        let displayData = []
        
        if(skills )
          displayData = skills.filter(elem => elem.id == skillPicked)

        console.log(displayData, skillPicked)

        const data = displayData.map(elem=>(
            <div className="skill-item">
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
  
  
  export default connect( mapStateToProps , {fetchSkills} )(BarSkill); 
