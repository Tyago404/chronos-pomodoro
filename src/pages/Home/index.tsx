import { Container } from '../../components/Container/Index';
import { CountDown } from '../../components/CountDown/Index';
import { MainForm } from '../../components/MainForm';
import { MainTemplate } from '../../templates/MainTemplate';

export const Home = () => {
  return (
    <MainTemplate>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>

    </MainTemplate>
  );
};
