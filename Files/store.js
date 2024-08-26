import todoReducer from "./todoReducer";
import { createStore } from 'redux';


const store = createStore(todoReducer);

export default store;
