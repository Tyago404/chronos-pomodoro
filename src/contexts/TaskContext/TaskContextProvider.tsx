import { useEffect, useReducer, useState } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";

type TaskContextProviderProps = { 
  children: React.ReactNode;
}

export const TaskContextProvider = ({children}:TaskContextProviderProps)=>{
  const [state,setState] = useState(initialTaskState)

  const [number, dispatch] = useReducer((state, action)=>{
    switch(action){
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      case'ZERAR':
        return state = 0;
    }

      return state
  },0)


  return(
      <TaskContext.Provider value={{state,setState}}>
        <h1>O numero do reducer state é: {number}</h1>
        <button onClick={()=>dispatch('INCREMENT')}>Increment</button><br />
        <button onClick={()=>dispatch('DECREMENT')}>Decrement</button><br />
        <button onClick={()=>dispatch('ZERAR')}>Zerar</button>
      </TaskContext.Provider>
  )
}
