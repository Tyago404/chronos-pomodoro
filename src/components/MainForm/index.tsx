import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycles } from "../../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";
import { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";
import { Tips } from "../Tips";

export const MainForm = () => {

  const taskNameInput = useRef<HTMLInputElement>(null)
  const { state, dispatch } = useTaskContext()
  
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

    dispatch({type:TaskActionTypes.START_TASK, payload:newTask})

    //Criando um novo worker em vite - SCRIPT PRINCIPAL
    const worker = new Worker(new URL('../../workers/timeWorker.js', import.meta.url))
    
    //worker.postMessage = ENVIAR UMA MENSAGEM 
    //Aqui estamos enviando uma mensagem para /timeWorker em self.onmessage
    worker.postMessage('Olá Mundo!')

    //Enviando mensagem de volta utilizando a const worker
    worker.onmessage = (e)=>{ 
      console.log('PRINCIPAL recebeu:', e.data)
    }
    
  }


  const handleInterruptTask = ()=>{
   dispatch({type:TaskActionTypes.INTERRUPT_TASK})
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
          <Tips />
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