import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container/Index';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading/Index';
import { MainTemplate } from '../../templates/MainTemplate';
import { useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';



export const Settings = () => {

  const {state} = useTaskContext();

  const workTimeInputRef = useRef<HTMLInputElement>(null)
  const shortBreakTimeInputRef = useRef<HTMLInputElement>(null)
  const longBreakTimeInputRef = useRef<HTMLInputElement>(null)

  const handleSaveSettings = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    const workTime = workTimeInputRef.current?.value
    const shortBreak = shortBreakTimeInputRef.current?.value
    const longTime = longBreakTimeInputRef.current?.value

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
            <DefaultInput id='worktime' labelText='Foco' ref={workTimeInputRef} defaultValue={state.config.workTime}/>
          </div>
          <div className="formRow">
            <DefaultInput id='shortBreakTime' labelText='Descanso curto' ref={shortBreakTimeInputRef} defaultValue={state.config.shortBreakTime} />
          </div>
          <div className="formRow">
            <DefaultInput id='longBreakTime' labelText='Descanso longo' ref={longBreakTimeInputRef} defaultValue={state.config.longBreakTime}/>
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
