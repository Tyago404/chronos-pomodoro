import styles from './styles.module.css'

type DefaultInputProps = {
  id: string; 
  labelText?: String; 

} & React.ComponentProps<'input'>;

export const DefaultInput = ({ type, id, labelText, ...rest }: DefaultInputProps) => {
  return (
    <>

      {labelText && <label htmlFor={id}>{labelText}</label> }
      <input className={styles.input} id={id} type={type} {...rest} /> 
    </>
  );
};
