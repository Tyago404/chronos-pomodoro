//Import do css
import { TimerIcon } from 'lucide-react'
import styles from'./Styles.module.css'

//Styles sempre com camelCase e sem '-'
export const Logo = ()=>{ 
  return(
    <div className={styles.logo}>
     <a href="#" className={styles.logoLink}>
      <TimerIcon /> 
      <span>Chronos</span>
     </a>
    </div>
  )
} 