//Import do css
import styles from'./Styles.module.css'

type HeadingProps = {
  //React.ReactNode permite vários tipos que o react aceita nativamente
  children: React.ReactNode;
}

//Toda props precisa ser tipada, utilizamos type para tipa-la
//Geralmente <nome-do-componente>+Props para dar o apelido
export const Heading = ({children}:HeadingProps,)=>{ 
  return <h1 className={styles.heading}>{children}</h1>
} 