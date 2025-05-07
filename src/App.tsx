//Importando arquivos css, não precisar ter um nome, importe diretamente o arquivo
import './styles/theme.css';
import './styles/global.css';

//Importando Componente
import { Container } from './components/Container/Index';
// import { Heading } from './components/Heading/Index';
import { Logo } from './components/Logo/Index';
import { Menu } from './components/Menu/Index';
import { CountDown } from './components/CountDown/Index';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';

export const App = () => {
  return (
    //Componentes sempre com CamelCase!
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form'>
          <div className='formRow'>
            <DefaultInput 
              type='text' 
              id='input'  
              labelText='task' 
              placeholder='Digite algo'
             
              // disabled
              // defaultValue='abc' Testando estilo desabled
              // title='TITLE' Testando ...rest
              />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon/>}/>
          </div>
        </form>
      </Container>
    </>
  );
};
