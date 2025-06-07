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
import { toastfyWrapper } from "../../adapters/toastfyWrapper";


export const MainForm = () => {

  const taskNameInput = useRef<HTMLInputElement>(null)
  const { state, dispatch } = useTaskContext()

  const nextCycle = getNextCycle(state.currentCycle)
  const nextCytleType = getNextCycleType(nextCycle)

  const lastTaskName = state.tasks[state.tasks.length - 1]?.name || '' //para pegar o último valor 



  const handleCreateNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toastfyWrapper.dismiss()

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim()

    if (!taskName) {
        toastfyWrapper.warning('Digite o nome da tarefa!')
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

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask })
    toastfyWrapper.success('Tarefa iniciada!')
  }


  const handleInterruptTask = () => {
    toastfyWrapper.dismiss()
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK })
    toastfyWrapper.error('Tarefa interrompida')
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
          defaultValue={lastTaskName}

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
        )}

        {!!state.activeTask && (
          <DefaultButton
            type="button"
            aria-label="Interromper tarefa atual"
            title="Interromper tarefa atual"
            color="red"
            onClick={handleInterruptTask}
            icon={<StopCircleIcon />} />
        )
        }



      </div>
    </form>
  );
};