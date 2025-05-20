import styles from './Styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext';

export const CountDown = () => {
  //Resgatando o OBJETO state do Provider
  const {state} = useTaskContext();

  return <div className={styles.container}>{state.formattedSecondsRemaining}</div>;
};
