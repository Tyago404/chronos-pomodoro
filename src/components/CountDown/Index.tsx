import { useContext } from 'react'
import styles from'./Styles.module.css'
import { TaskContext } from '../../contexts/TaskContext'

export const CountDown = ()=>{ 
  const taskContext = useContext(TaskContext);
  console.log(taskContext)

  return(
    <div className={styles.container}>00:00</div>
  )
} 