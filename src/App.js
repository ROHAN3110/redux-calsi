import React from "react";
import { AddCounter } from "./redux/action";
import { store } from "./redux/store";
import { useDispatch,useSelector } from "react-redux";
import Counter from "./components/Counter";


 function App(){
    return(
      <div>
       <Counter></Counter>
       
       </div>
    )
}

export default App;