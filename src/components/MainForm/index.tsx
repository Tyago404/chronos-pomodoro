import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

export const MainForm = () => {


  return (
    <form className='form'>

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
