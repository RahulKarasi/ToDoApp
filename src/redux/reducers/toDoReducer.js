import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "../actions/toDoActions";

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
        return {
            ...state, ...payload
        };
      case DELETE_TASK:
        // console.log(payload);
        return {
            ...state, ...payload,
        };
      case EDIT_TASK:
        // console.log(payload);
        return {
            ...state, ...payload,
        };
      default:
        return state;
    }
  };
  
  export default toDoReducer;