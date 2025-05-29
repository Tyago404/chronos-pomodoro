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
        formattedSecondsRemaining: 'l00:00',
       
      /*
      Aqui pegamos as tasks já existentes e mapeamos ela para 'task'
      após isso fazemos uma validação para o typescript e em seguida comparamos o id da task existente com o id da task atual que estamos interrompendo
      logo, se existir uma task e o id dela for igual ao id da task mapeada, retornamos a mesma task porém agora com o interruptDate com a data atual 
      assim obtemos a data aonde foi interrompida a task
      */
        tasks: prevState.tasks.map(task=>{
          if(prevState.activeTask && prevState.activeTask.id === task.id){
            return{...task, interruptDate:Date.now()}
          }
          
          return task
        })
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
          disabled={!!state.activeTask} //Isso faz com que o state.active se torne falso com o operador double negation !!

        />
      </div>

      <div className='formRow'>
        <p>O próximo interval é de 0 mins</p>
      </div>

{/* Se houver ciclos ativos, exibimos os icones de ciclos */}
   {
    state.currentCycle > 0 && (
      <div className='formRow'>
        <Cycles />
      </div>

    )
   }

   {/* Se não estiver nenhuma task ativa o botão verde é exbido para iniciar todo o form */}
   {/* Quando há uma task em andamento o botão muda para vermelho para executar a função de interromper */}
      <div className='formRow'>
        {!state.activeTask && ( //Se tem task ativa exiba este button
          <DefaultButton
          type="submit"
          aria-label="Iniciar nova tarefa"
          title="Iniciar nova tarefa"
          icon={<PlayCircleIcon />} />
        ) } 
        
        {/* Resolvendo o bug do react utilizando duas renderizações condicionais, podemos utilizar keys também! */}
        {!!state.activeTask &&( //Se não tem task ativa exiba este button
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