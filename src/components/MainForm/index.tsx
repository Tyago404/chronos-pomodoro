import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";
import { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";

export const MainForm = () => {

  const taskNameInput = useRef<HTMLInputElement>(null)
  const {state,setState} = useTaskContext()

//Ciclos

const nextCycle = getNextCycle(state.currentCycle)
console.log(nextCycle)

  const handleCreateNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() 

    if (taskNameInput.current === null) return;
    const taskName = taskNameInput.current.value.trim()
    console.log(taskName)

    if (!taskName) {
      alert('Digite o nome da tarefa')
      return
    }

    const newTask: TaskModel = {
      id:Date.now().toString(), 
      name:taskName, 
      startDate: Date.now(),
      completeDate:null, //estado
      interruptDate:null,//estado
      duration:1,//estado, minuto 
      type:'workTime',//estado
    }

const secondsRemaining = newTask.duration * 60; 

    setState(prevState =>{
      return{
        ...prevState,
        config:{...prevState.config}, 
        activeTask: newTask, 
        currentCycle: nextCycle, 
        secondsRemaining:secondsRemaining, 
        formattedSecondsRemaining: '00:00', //conferir
        tasks: [...prevState.tasks,newTask] 
      }

    })

  }


  return (

    <form onSubmit={handleCreateNewTask} className='form'>

      <div className='formRow'>
        <DefaultInput
          type='text'
          id='input'
          labelText='task'
          placeholder='Digite algo'
          ref={taskNameInput}


        />
      </div>

      <div className='formRow'>
        <p>O próximo interval é de 0 mins</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
};
