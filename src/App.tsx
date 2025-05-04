
//Importando arquivos css, não precisar ter um nome, importe diretamente o arquivo
import './styles/theme.css';
import './styles/global.css';


//Importando Componente
import { Container } from './components/Container/Index';
import { Heading } from './components/Heading/Index';
import { Logo } from './components/Logo/Index';



export const App = () => {


  return (
//Componentes sempre com CamelCase!
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Heading>MENU</Heading>
      </Container>
    </>
  );
};
