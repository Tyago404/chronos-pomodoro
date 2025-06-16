import { useEffect } from 'react';
import { Container } from '../../components/Container/Index';
import { CountDown } from '../../components/CountDown/Index';
import { MainForm } from '../../components/MainForm';
import { MainTemplate } from '../../templates/MainTemplate';



export const Home = () => {
   useEffect(()=>{
      document.title = 'Chronos Pomodoro'
    },[])
  return (
    <MainTemplate>
      <Container>
        <CountDown />  {/*Ao invés de passar state={state} setState={...} Você pode passar o objeto inteiro utilizando {...props} */}
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
};
