//Import do css
import { TimerIcon } from 'lucide-react'
import styles from'./Styles.module.css'
import { RouterLink } from '../../RouterLink'

//Styles sempre com camelCase e sem '-'
export const Logo = ()=>{ 
  return(
    <div className={styles.logo}>
      <RouterLink href="/" className={styles.logoLink}>
        <TimerIcon /> 
        <span>Chronos</span>
      </RouterLink>
    </div>
  )
} 