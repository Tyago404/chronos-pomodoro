import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useState } from "react";

export const MainForm = () => {

  const [taskName, setTaskName] = useState('')
  const handleCreateNewTask = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log('Deu certo!')
  }

 
  return (
    //Criar uma função anonima com 'E' como parametro, você passando o mouse em cima consegue descobrir o tipo do evento
    //exemplo: onSubmit={e=>handleCreateNewTask}... Assim você adquire o React.FormEvent<HTMLFormElement>
    <form onSubmit={handleCreateNewTask} className='form'>
        <h1>{taskName}</h1>
      <div className='formRow'>
        <DefaultInput
          type='text'
          id='input'
          labelText='task'
          placeholder='Digite algo'
          value={taskName}
          onChange={(e)=>{setTaskName(e.target.value)}}


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
