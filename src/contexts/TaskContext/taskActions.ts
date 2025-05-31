import { TaskModel } from "../../models/TaskModel"

export enum TaskActionTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_STATE = 'RESET_STATE',
}


//Actions com seus respectivos payloads em um unico type
export type TaskActionModelWithPayload = {
  type: TaskActionTypes.START_TASK;
  payload:TaskModel;
} | {
  type:TaskActionTypes.INTERRUPT_TASK;
  payload:TaskModel;
}

export type TaskActionModelWithOUTPayload = {
  type:TaskActionTypes.RESET_STATE
}

//podemos juntar os types com e sem payload em um só type
export type TaskActionModel = TaskActionModelWithPayload | TaskActionModelWithOUTPayload

// } | {
//   type: TaskActionTypes.RESET_STATE
//   //sem payload
// }
