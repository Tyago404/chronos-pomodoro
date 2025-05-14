
import { Container } from '../../components/Container/Index';
import { Logo } from '../../components/Logo/Index';
import { Footer } from '../../components/Footer';
import { Menu } from '../../components/Menu/Index';


//Importando arquivos css


type MainTemplateProps = {
  children:React.ReactNode;
}

export const MainTemplate = ({children}:MainTemplateProps) => {
  return (

    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

        {children}
    
      <Container>
        <Footer />
      </Container>

    </>
  );
};
