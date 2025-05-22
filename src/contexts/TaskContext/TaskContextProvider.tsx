import { useEffect, useState } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";

type TaskContextProviderProps = { 
  children: React.ReactNode;
}

export const TaskContextProvider = ({children}:TaskContextProviderProps)=>{
  const [state,setState] = useState(initialTaskState)
  
  //Toda vez que o estado mudar temos como monitorar através do useEffect desta forma
  useEffect(()=>{
    console.log(state)
  },[state])
  return <TaskContext.Provider value={{state,setState}}>{children}</TaskContext.Provider>
}
