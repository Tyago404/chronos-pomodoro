import styles from './styles.module.css'

//Utilizando 'Union types' para nossa aplicação ficar mais robusta e nosso input aceitar APENAS o que nós definimos
type DefaultInputProps = {
  id: string; //Aqui agora vamos FORÇAR para que nosso componente tenha este tipo &DEPOIS as props padrões da tag html
  labelText?: String; //Propriedade opcional pro conta do '?'
  // Interceção: Utilizamos '&' para unir dois 'types'. Neste caso vamos unir nossos tipos com os tipos padrões do input
} & React.ComponentProps<'input'>;
// entre tags '<>' você define o componente que deseja resgatar as props
export const DefaultInput = ({ type, id, labelText, ...rest }: DefaultInputProps) => {
  return (
    <>
      {/* Label condicional */}
      {labelText && <label htmlFor={id}>{labelText}</label> }
      <input className={styles.input} id={id} type={type} {...rest} /> {/*Utilizamos spreadRest para que se algum dia quisermos utilizar as demais propriedades da tag, automaticamente já irá cair em rest sem precisar declarar manualmente */}
    </>
  );
};
