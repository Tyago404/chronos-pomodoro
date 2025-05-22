import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";
import { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

export const MainForm = () => {

  const taskNameInput = useRef<HTMLInputElement>(null)
  const {setState} = useTaskContext()

  const handleCreateNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() //PARA NÃO ENVIAR O FORM

    //Etapa de segurança, se não tiver nenhum input a função retorna neste ponto e não executa o código  
    if (taskNameInput.current === null) return;

    /////A Partir daqui só executa se existir um input

    //Para resgatar o valor digitado pelo user, trim()para eliminar os espaços desnecessários ' valor '
    const taskName = taskNameInput.current.value.trim()
    console.log(taskName)

    //Se o user não der o nome da task, um alert será disparado na tela e a função no procede
    if (!taskName) {
      alert('Digite o nome da tarefa')
      return
    }

//Quando o user clicar no botão irá criar essa nova Task, com o modelo que já criamos em /model
//Agora estamos adicionando o nome da task e todos os dados necessários para preencher o TaskModel
    const newTask: TaskModel = {
      id:Date.now().toString(), //toString para transformar em string//Date.now para pegar a data atual
      name:taskName, //Adicionando o nome da task através do input que captamos o current.value no hook useRef
      startDate: Date.now(),
      completeDate:null, //estado
      interruptDate:null,//estado
      duration:1,//estado, minuto 
      type:'workTime',//estado
    }

//aqui estamos formatando o duration da nova task criada em segundos 
const secondsRemaining = newTask.duration * 60; 


//agora temos que configurar o setState 
    setState(prevState =>{
      return{
        ...prevState,
        config:{...prevState.config}, //apenas para garantir que estamos preenchendo todo o type
        activeTask: newTask, //Adicionamos a task criada logo a cima em activeTask
        currentCycle: 1, //conferir
        secondsRemaining:secondsRemaining, //Aqui como o nome da const secondsRemaining é igual a o elemento do objeto, não precisamos declarar o novo valor.. Aqui deixei o valor declarado para facilitar o entendimento
        formattedSecondsRemaining: '00:00', //conferir
      //Arrays são iguais a objetos do state, não podemos muta-lo diretamente, é necessário buscar o valor anterior do array e fazer as alterações com esse valor anterior.. Mesmo que ele seja vazio
        tasks: [...prevState.tasks,newTask] // aqui estamos colocando a nova task criada no array de tasks
      }

    })

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
