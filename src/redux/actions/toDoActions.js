export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const EDIT_TASK = 'EDIT_TASK'
export const IS_COMPLETED = 'IS_COMPLETED'



export const addTask = (data, type) => {
  return {
    type: ADD_TASK,
    payload: {[type]:data}
  };
};

export const deleteTask = (data, type) => {
// console.log(data,type);
  return {
    type: DELETE_TASK,
    payload: {[type]:data}
  };
};

export const editTask = (data, type) => {
// console.log(data,type);
  return {
    type: EDIT_TASK,
    payload: {[type]:data}
  };
};
export const isCompleted = (data, type) => {
// console.log(data,type);
  return {
    type: IS_COMPLETED,
    payload: {[type]:data}
  };
};
