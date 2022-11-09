import { ADD_TASK, DELETE_TASK, EDIT_TASK, IS_COMPLETED } from "../actions/toDoActions";

const INITIAL_STATE ={
    personal: [],
    work: [],
    grocery: [],
    
}

const toDoReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;
    
    switch (type) {
      case ADD_TASK:
        // console.log(payload);
        console.log('dgfdgdhgdbdbdbdb=>>>>>>',state);
        return {
            ...state, ...payload
        };
      case DELETE_TASK:
        // console.log(payload);
        return {
            ...state, ...payload,
        };
      case EDIT_TASK:

        return {
            ...state, ...payload,
        };
      case IS_COMPLETED:
        // console.log(payload);
        return {
            ...state, ...payload,
        };
      default:
        return state;
    }
  };
  
  export default toDoReducer;