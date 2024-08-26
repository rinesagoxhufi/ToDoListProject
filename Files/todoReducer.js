import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./actions";

// krijimi i nje konstante per gjendjen fillestare 
const initialState = {
    todos: [], 
};


//Per krijimin e gjendjes bazuar ne veprimin 
const todoReducer = (state = initialState, action) => { //state-gjendja aktuale e app, action pershkruan ate qe ndodhi 
    switch (action.type) {
        case ADD_TODO: 
           return {
            ...state, // mban gjendjen aktuale te paandryshuar 
            todos: [...state.todos, { id: Date.now(), task: action.payload}], // kopijon detyrat egzistuese, shton nje objekt te ri te detyres me id unike dhe permbajtjen e detyren nga action payload
           };
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => //perditson todos, .map krijon nje grup te ri me detyrat e perditesuara 
                 todo.id === action.payload.id  // shikon neser perputhet , perditeson detyren me updatedTask nga action.payload
                ? { ...todo, task: action.payload.updatedTask} //perditeson detyren me updatedTask nga action.payload
                : todo // nese sperputhet e mban detyren te pa ndryshuar 
                ),
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload), //perditeson todos , krijon nje grup te ri me todos qe nuk kane id barabarte me action.payload
            };
        default: 
         return state; // nese sperputhet me asnje veprim kthen gjendjen aktuale 
    }
};



export default todoReducer;