import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useTaskContext } from "../../contexts/TaskContext";

export const MainForm = () => {

  const {setState} = useTaskContext()

const handleClick = ()=>{
  setState(prevState =>{
    return{
      ...prevState,
      formattedSecondsRemaining: '21:00'
    }
  })
}
  
  return (
    <form className='form'>

          <button type="button" onClick={handleClick}>CLICK ME!</button>

      <div className='formRow'>
        <DefaultInput
          type='text'
          id='input'
          labelText='task'
          placeholder='Digite algo'

          // disabled
          // defaultValue='abc' Testando estilo desabled
          // title='TITLE' Testando ...rest
        />
      </div>

      <div className='formRow'>
        <p>O próximo interval é de 0 mins</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
};
