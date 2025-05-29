import { useEffect, useReducer, useState } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";

type TaskContextProviderProps = { 
  children: React.ReactNode;
}

export const TaskContextProvider = ({children}:TaskContextProviderProps)=>{
  const [state,setState] = useState(initialTaskState)

type ActionType = {
  type:string,
  payload?:number;
}

  const [myState, dispatch] = useReducer((state, action: ActionType)=>{

    //TODA EXPLICAÇÃO EM READ.me
    switch(action.type){
      case 'INCREMENT':{
        if(!action.payload) return state
         return{
          ...state,
          secondsRemaining: state.secondsRemaining + action.payload, 
        }
      }
      case 'DECREMENT':{
        if(!action.payload) return state
          return{
            ...state,
            secondsRemaining: state.secondsRemaining - action.payload
          }
      }
    case 'RESET':{
      return{
        secondsRemaining: 0
      }
    }
    }    
      return state
  },{
     secondsRemaining: 0
  })


  return(
      <TaskContext.Provider value={{state,setState}}>
        <h1>O numero do reducer state é: {JSON.stringify(myState)}</h1>
        <button onClick={()=>dispatch({type:'INCREMENT', payload: 10})}>Increment +10</button><br /> 
        <button onClick={()=>dispatch({type:'INCREMENT', payload:50 })}>Increment +50</button><br />
        <button onClick={()=>dispatch({type:'DECREMENT', payload: 10})}>DECREMENT 10</button> <br />
        <button onClick={()=>dispatch({type:'RESET'})}>RESET VALUE</button>

      
      </TaskContext.Provider>
  )
}
