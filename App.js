import { Provider } from "react-redux";
import ToDoList from "./components/ToDoList";
import store from "./Files/store";


export default function App() { 
    return (
              <Provider store={store} >
            <ToDoList  />
        </Provider>
    
      
    );
}

