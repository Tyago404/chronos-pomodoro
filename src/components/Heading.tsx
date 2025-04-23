//Import do css
import styles from'./Heading.module.css'

type HeadingProps = {
  children:string;
  attbr1:string
}

//Toda props precisa ser tipada, utilizamos type para tipa-la
//Geralmente <nome-do-componente>+Props para dar o apelido
export const Heading = (props:HeadingProps)=>{
  return <h1 className={styles.heading}>{props.children} {props.attbr1}</h1>
} 