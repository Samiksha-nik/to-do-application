import React from "react";
import TodoContextProvider from "./context/TodoContextProvider";
import Todoinput from "./components/Todoinput";
import Todolist from "./components/Todolist";
import './app.css';



function App(){
  return(
<TodoContextProvider>
  <Todoinput/>
  <Todolist/>
</TodoContextProvider>

  )
}
export default App