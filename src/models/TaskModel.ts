import { TaskStateModel } from "./TaskStateModel";

export type TaskModel ={
  id:string;
  name:string;
  duration:number;
  startDate:number;
  completeDate:number | null; // Qaundo o timer chega ao final
  interruptDate:number | null; //Quando a task for interrompida
  type: keyof TaskStateModel['config'];

}