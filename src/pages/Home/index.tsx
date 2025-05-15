import { Container } from '../../components/Container/Index';
import { CountDown } from '../../components/CountDown/Index';
import { MainForm } from '../../components/MainForm';
import { TaskStateModel } from '../../models/TaskStateModel';
import { MainTemplate } from '../../templates/MainTemplate';

type HomeProps = {
  state:TaskStateModel;
  setState:React.Dispatch<React.SetStateAction<TaskStateModel>>;
}


export const Home = (props:HomeProps) => {

  const {state, setState} = props;

  const handleClick = ()=>{
  
    setState(prevState =>{
      return{
        ...prevState,
        currentCycle: 8 
      }
    })
  }
  
  console.log(state.currentCycle)

  return (
    <MainTemplate>
    
      <Container>
        <button onClick={handleClick}>CLICK ME!</button>
        
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>

    </MainTemplate>
  );
};
