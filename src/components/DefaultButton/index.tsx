import styles from './styles.module.css'


type DefaultButtonProps = {
  icon: React.ReactNode; //Qualquer coisa que o REACT consiga renderizar na tela, podemos receber nesta propriedade icon
  color?: 'green' | 'red';
} & React.ComponentProps<'button'>

export const DefaultButton = ({icon,color='green',...props}:DefaultButtonProps)=>{
  return(
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  )
}