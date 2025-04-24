//Componentes sempre com CamelCase!
import { Fragment } from "react/jsx-runtime" //Utilizando o fragment

//Importanto arquivos css, não precisar ter um nome, importe diretamente o arquivo
import './styles/theme.css'
import './styles/global.css'

//Importando Componentes
import {Heading} from './components/Heading'
import { TimerIcon } from "lucide-react"


export const App = ()=>{
  return(
    <Fragment>
      <Heading>  {/*Esse elemento agora tem várias tags html com vários tipos.. Para não precisar tipar todas as props, utilize React.node no /Heading.tsx */}
        <h1>Olá mundo!</h1>
        <button><TimerIcon /></button>
      </Heading>



    </Fragment>
  )
}