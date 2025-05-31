import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycles } from "../../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";
import { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formatedSecondsToMinutes } from "../../utils/formatSecondsToMinutes";

export const MainForm = () => {

  const taskNameInput = useRef<HTMLInputElement>(null)
  const { state, setState } = useTaskContext()
  
  const nextCycle = getNextCycle(state.currentCycle)
  const nextCytleType = getNextCycleType(nextCycle)
  
  const handleCreateNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim()

    if (!taskName) {
      alert('Digite o nome da tarefa')
      return
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null, //estado
      interruptDate: null,//estado
      duration: state.config[nextCytleType],
      type: nextCytleType,
    }

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining: secondsRemaining,
        formattedSecondsRemaining: formatedSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask]
      }
    })
  }


  const handleInterruptTask = ()=>{
    setState(prevState => {
      return {
        ...prevState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: prevState.tasks.map(task => {
          if (prevState.activeTask && prevState.activeTask.id === task.id) {
            return { ...task, interruptDate: Date.now() };
          }
          return task;
        }),
      };
    });
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
          disabled={!!state.activeTask}

        />
      </div>

      <div className='formRow'>
        <p>O próximo interval é de 0 mins</p>
      </div>

   {
    state.currentCycle > 0 && (
      <div className='formRow'>
        <Cycles />
      </div>

    )
   }


      <div className='formRow'>
        {!state.activeTask && ( 
          <DefaultButton
          type="submit"
          aria-label="Iniciar nova tarefa"
          title="Iniciar nova tarefa"
          icon={<PlayCircleIcon />} />
        ) } 
        
        {!!state.activeTask &&( 
          <DefaultButton
          type="button"
          aria-label="Interromper tarefa atual"
          title="Interromper tarefa atual"
          color="red"
          onClick={handleInterruptTask}
          icon={<StopCircleIcon/>} />
        )
        }
        

        
      </div>
    </form>
  );
};