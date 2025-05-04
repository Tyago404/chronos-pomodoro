//Componentes sempre com CamelCase!

//Importanto arquivos css, não precisar ter um nome, importe diretamente o arquivo
import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container/Index';
import { Heading } from './components/Heading/Index';

//Importando Componente

export const App = () => {
  return (
    <>
      <Container>
        <Heading>LOGO</Heading>
      </Container>

      <Container>
        <Heading>MENU</Heading>
      </Container>
    </>
  );
};
