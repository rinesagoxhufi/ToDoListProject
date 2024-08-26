export const  ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';


//Krijimi i funksioneve qe krijojne-kryjn veprime 
export const addTodo = (task) => ({
    type: ADD_TODO,
    payload: task,
});

export const editTodo = (id, updatedTask) => ({
    type: EDIT_TODO,
    payload: {id, updatedTask},
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id,
});