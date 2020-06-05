import {ON_SKILL_CHANGE, FETCH_SKILLS, SKILL_PICKED_ID} from './action-types/skill-action_type'



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
        id
    }
}

export const getSkillId = () => dispatch => {

  dispatch({
    type: SKILL_PICKED_ID,
    // payload: id // I dont think there's any payload
  })
}

export const fetchSkills = () => dispatch =>{
  //TODO: this should be calling from API, but for now bear with me

let skills = [{
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

  dispatch({
    type: FETCH_SKILLS,
    payload: skills
  })

}