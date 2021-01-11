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
