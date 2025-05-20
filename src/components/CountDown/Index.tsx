import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import styles from './Styles.module.css';

export const CountDown = () => {

  const {state} = useTaskContext();
  // console.log(state.formattedSecondsRemaining)

  return <div className={styles.container}>{state.formattedSecondsRemaining}</div>;
};
