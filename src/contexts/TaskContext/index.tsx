import { createContext, useContext } from "react";
import { TaskStateModel } from "../../models/TaskStateModel";

const initialState:TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config:{
    workTime:25,
    shortBreakTime: 5,
    longBreakTime: 15,
  } 
}


//Precisamos criar o tipo do contexto para receber as props ou melhor dizendo, o state e setState

type TaskContextProps = {
  state:TaskStateModel;
  setState:React.Dispatch<React.SetStateAction<TaskStateModel>>;
}

const initialContextValue = {
  state:initialState,
  setState: ()=>{}
}
//Tipando o contexto e adicionando um valor inicial
//Nosso valor inicial será o estado vazio sem dados.. 
//a função setter inicialmente pode ser vazia
export const TaskContext = createContext<TaskContextProps>(initialContextValue)


//Type do componente já com o provider
type TaskContextProviderProps = { 
  children: React.ReactNode;
}
//Ao invés de no nosso APP toda vez criar um TaskContext.Provider.. Criamos um componente que já terá o Provider padrão
export const TaskContextProvider = ({children}:TaskContextProviderProps)=>{
  return <TaskContext.Provider value={initialContextValue}>{children}</TaskContext.Provider>
}



//CRIANDO SEU PRÓPRIO HOOK

export const useTaskContext = ()=>{
return useContext(TaskContext);
}