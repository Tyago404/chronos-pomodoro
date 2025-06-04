import { useEffect, useReducer, useRef } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';
import { TimerWorkerManager } from '../../workers/timerWorkerManager';
import { TaskActionTypes } from './taskActions';
import { loadBeep } from '../../utils/loadBeep';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {

  const [state, dispatch] = useReducer(taskReducer, initialTaskState)
  let playBeepRef = useRef<ReturnType<typeof loadBeep>>(null); // resgatando o retorno da função loadbeep

  const worker = TimerWorkerManager.getInstance()
  worker.onmessage(e => {
    const countdownSeconds = e.data

    if (countdownSeconds <= 0) {
      if(playBeepRef.current){
        playBeepRef.current()
        playBeepRef.current = null;
      }
      dispatch({
        type: TaskActionTypes.COMPLETE_TASK,
      });
      worker.terminate()
    } else {
      dispatch({
        type: TaskActionTypes.COUNT_DOWN,
        payload: { secondsRemaining: countdownSeconds }
      })
    }
  })

  useEffect(() => {
    if (!state.activeTask) {
      worker.terminate()
    }

    worker.postMessage(state)
  }, [state, worker])

  useEffect(()=>{
    if(state.activeTask && playBeepRef.current === null){
      playBeepRef.current = loadBeep()
    }else{
         playBeepRef.current = null;
    }
  },[state.activeTask])
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}