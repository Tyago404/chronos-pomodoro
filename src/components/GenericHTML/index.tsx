import styles from './styles.module.css'

type GenericHTMLProps ={
  children: React.ReactNode;
}

export const GenericHTML = ({children}:GenericHTMLProps)=>{
  return(
    <div className={styles.genericHtml}>
      {children}
    </div>
  )
}