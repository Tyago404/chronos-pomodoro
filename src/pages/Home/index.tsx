import { Container } from '../../components/Container/Index';
import { CountDown } from '../../components/CountDown/Index';
import { MainForm } from '../../components/MainForm';
import { TaskStateModel } from '../../models/TaskStateModel';
import { MainTemplate } from '../../templates/MainTemplate';

export type HomeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export const Home = (props: HomeProps) => {

  return (
    <MainTemplate>
      <Container>
        <CountDown {...props} />  {/*Ao invés de passar state={state} setState={...} Você pode passar o objeto inteiro utilizando {...props} */}
      </Container>

      <Container>
        <MainForm {...props} />
      </Container>
    </MainTemplate>
  );
};
