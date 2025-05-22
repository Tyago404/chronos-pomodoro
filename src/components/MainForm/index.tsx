import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";

export const MainForm = () => {

 
 
  //Para criar um Ref, é necessário tipar o elemento que será adquirido a referencia
  const taskNameInput = useRef<HTMLInputElement>(null)


  const handleCreateNewTask = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()

      console.log('Form enviado!')
      // console.log(taskNameInput.current.value)

  }

 
  return (
    
    <form onSubmit={handleCreateNewTask} className='form'>
     
      <div className='formRow'>
        <DefaultInput
          type='text'
          id='input'
          labelText='task'
          placeholder='Digite algo'
          ref={taskNameInput}

         
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
