# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

<!--REDUCER COM OBJETO -->

<!-- 01 - AGORA O SEGUNDO PARAMETRO DE REDUCER QUE É O VALOR INICIAL DA SUA CONST SERÁ UM OBJETO!

>passamos uma propriedade com o valor 0 para o objeto inicial

    return state
  },{
     secondsRemaining: 0
  })


02 - AGORA VAMOS TORNAR NOSSA ACTION UM OBJETO
>Crie um type para sua action passando o tipo da ação

type ActionType = {
  type:string,
}
  const [number, dispatch] = useReducer((state, action)=>{
    switch(action){


03 - Precisamos passar em type um 'Payload'
>Em TypeScript, payload é o dado principal enviado em uma ação ou requisição, geralmente representado como um objeto com informações úteis.

>Neste caso o payload é opcional pois tem ações aonde não precisam de um dado principal para ser executada

type ActionType = {
  type:string,
  payload?:number;
}


04 - Em seguida tipe a sua action 
const [number, dispatch] = useReducer((state, action: ActionType)=>{


05 - Agora em switch você irá verificar a propriedade do objeto action
switch(action.type){

OBS AGORA MUDAMOS O NOME DA CONST REDUCER PARA 'myState' pois agora é um objeto.

06 - Para exibir o objeto podemos stringficar ele com JSON.stringfy(myState)

   <h1>O numero do reducer state é: {JSON.stringify(myState)}</h1>



07 - Agora em nossa função anonima no button chamada 'dispatch' precisamos passar as propriedades do objeto action
        <button onClick={()=>dispatch({type:'INCREMENT', payload: 10})}>Increment +10</button><br /> 

>Aqui neste caso estamos passando que SE o tipo for incrementar então vamos enviar o valor 10 para o payload que é o dado principal


08 - AGORA EM SWITCH ESTAMOS MONITORANDO O TIPO DA ACTION 
switch(action.type){

>caso ela seja INCREMENT (exemplo a cima) vamos retornar a propriedade do state + o nosso payload 

OBS: PRECISAMOS RETORNAR O VALOR ATUAL E EM SEGUIDA ALTERAR O VALOR 
 return{
          ...state,
          secondsRemaining: state.secondsRemaining + action.payload, 
        }


09 - Em TYPESCRIPT o payload será opcional, ou seja.. Ele pode ser null, então fazemos uma verificação se ele existe antes de retornar nosso state
 
 if(!action.payload) return state
         return{
          ...state,
          secondsRemaining: state.secondsRemaining + action.payload, 
        }
 E TA PRONTO SEU SORVETINHO!


 podemos zerar a nossa propriedade do objeto também,
   case 'RESET':{
      return{
        secondsRemaining: 0
      }
      
 -->