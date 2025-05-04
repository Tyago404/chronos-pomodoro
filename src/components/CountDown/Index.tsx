//Import do css

import styles from'./Styles.module.css'

//Styles sempre com camelCase e sem '-'
export const CountDown = ()=>{ 
  return(
    <div className={styles.container}> 00:00</div>
  )
} 