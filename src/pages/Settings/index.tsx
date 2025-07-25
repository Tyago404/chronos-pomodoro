import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container/Index';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading/Index';
import { MainTemplate } from '../../templates/MainTemplate';
import { useEffect, useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { toastfyWrapper } from '../../adapters/toastfyWrapper';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';



export const Settings = () => {
   useEffect(()=>{
      document.title = 'Configurações - Chronos Pomodoro'
    },[])

  const {state, dispatch} = useTaskContext();

  const workTimeInputRef = useRef<HTMLInputElement>(null)
  const shortBreakTimeTimeInputRef = useRef<HTMLInputElement>(null)
  const longBreakTimeInputRef = useRef<HTMLInputElement>(null)

  const handleSaveSettings = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    toastfyWrapper.dismiss();

    //forma de mandar mensagens de erros
    const formErrors:string[] = []

    const workTime = Number(workTimeInputRef.current?.value)
    const shortBreakTime = Number(shortBreakTimeTimeInputRef.current?.value)
    const longBreakTime = Number(longBreakTimeInputRef.current?.value)

    if(isNaN(workTime) ||isNaN(shortBreakTime)||isNaN(longBreakTime) ){
      formErrors.push('Use apenas números para TODOS os campos');
    }

    if(workTime < 1 || workTime > 99){
       formErrors.push('Digite valores entre 1 e 99 para foco');
    }
    if(shortBreakTime < 1 || shortBreakTime > 30){
       formErrors.push('Digite valores entre 1 e 30 para descanso curto');
    }
    if(longBreakTime < 1 || longBreakTime > 60){
       formErrors.push('Digite valores entre 1 e 60 para descanso longo');
    }

    if(formErrors.length > 0 ){
      formErrors.forEach(error =>{  
        toastfyWrapper.error(error)
      })
      return
    }

    dispatch({type:TaskActionTypes.CHANGE_SETTINGS, payload:{
      workTime,
      shortBreakTime,
      longBreakTime,
    }});
    toastfyWrapper.success('Configurações salvas!')
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>

      <Container>
        <p>Modifique as configurações para tempo de foco, descanso curto e descanso longo.</p>
      </Container>

      <Container>
        <form onSubmit={handleSaveSettings} className="form">
          <div className="formRow">
            <DefaultInput id='worktime' labelText='Foco' ref={workTimeInputRef} defaultValue={state.config.workTime} type='number' />
          </div>
          <div className="formRow">
            <DefaultInput id='shortBreakTimeTime' labelText='Descanso curto' ref={shortBreakTimeTimeInputRef} defaultValue={state.config.shortBreakTime}  type='number'/>
          </div>
          <div className="formRow">
            <DefaultInput id='longBreakTime' labelText='Descanso longo' ref={longBreakTimeInputRef} defaultValue={state.config.longBreakTime}  type='number'/>
          </div>
          <div className="formRow">
           <DefaultButton 
            icon={<SaveIcon />} 
            aria-label='Salvar configurações'
            title='Salvar configurações'
            />
            
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
};
