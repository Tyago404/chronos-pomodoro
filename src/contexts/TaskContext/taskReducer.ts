import { TaskStateModel } from "../../models/TaskStateModel";
import { TaskActionModel, TaskActionTypes } from "./taskActions";

//Pegando o estado e uma função para alterar este estado
export const taskReducer = (state:TaskStateModel, action:TaskActionModel):TaskStateModel=>{
  switch(action.type){
    case TaskActionTypes.START_TASK:{
      return state
    }

    case TaskActionTypes.INTERRUPT_TASK:{
      return state
    }

    case TaskActionTypes.RESET_STATE:{
      return state
    }
  }


  return state
  //SEMPRE RETORNAR O ESTADO
}