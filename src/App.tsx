//Componentes sempre com CamelCase!
import { Fragment } from "react/jsx-runtime" //Utilizando o fragment

//Importanto arquivos css, não precisar ter um nome, importe diretamente o arquivo
import './styles/theme.css'
import './styles/global.css'

//Importando Componentes
import {Heading} from './components/Heading'

export const App = ()=>{
  return(
    <Fragment> {/*Você só pode retornar apenas UM elemento ou utilize Fragments <> */}
      <Heading attbr1="Atributo1">
        <h1>Olá mundo!</h1>
      </Heading>
    </Fragment>
  )
}