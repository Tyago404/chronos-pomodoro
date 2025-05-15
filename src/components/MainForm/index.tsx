import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { HomeProps } from "../../pages/Home";

export const MainForm = ({state,setState}:HomeProps) => {

  const handleCLick = ()=>{
    setState(prevState=>{
      return{
        ...prevState,
        config:{
          ...prevState.config,
          workTime: 34,
        },
        formattedSecondsRemaining:'11:11'
      }
    })
  }

  return (
    <form className='form'>

        <div>

          <button type="button" onClick={handleCLick}> Clickme!</button>
        </div>



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
        <p>O próximo interval é de {state.config.workTime}mins</p>
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
