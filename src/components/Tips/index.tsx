import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import { getNextCycle } from "../../utils/getNextCycle"
import { getNextCycleType } from "../../utils/getNextCycleType"


export const Tips = ()=>{
  const {state} = useTaskContext()

  const nextCycle = getNextCycle(state.currentCycle)
  const nextCytleType = getNextCycleType(nextCycle)
  
    const tipsForWhenActiveTask = {
    workTime: <span>Foque por {state.config.workTime}min</span>,
    shortBreakTime: <span>Descance por {state.config.shortBreakTime}min</span>,
    longBreakTime: <span>Descanso longo</span>,
  }
    const tipsForNoActiveTask = {
    workTime: <span>Próximo descanso é de {state.config.workTime}min</span>,
    shortBreakTime: <span>Próximo descanso é de {state.config.shortBreakTime}min</span>,
    longBreakTime: <span>Próximo descanso longo</span>,
  }
  return(
    <>
     {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCytleType]}
    </>
  )
}