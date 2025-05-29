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

<!-- CRIANDO UM REDUCER -->

<!-- 01 - crie a const que recebe useReducer()
> const [ ] = useReducer();

02 - adicione a função com os parametros state e action
> const [ ] = useReducer((state,action)=>{
 });
action para definir a ação que será realizada no state


03 - Sempre seu reducer retornará ou o state atual ou o state atualizado
faça um teste retornando seu state
const [ ] = useReducer((state,action)=>{
  return state
 });


04 - Adicione o segundo parametro do useReducer, adicione o numero 0 para testes, este será o valor inicial do seu state
 const [ ] = useReducer((state,action)=>{
  return state
 },0);


05 - Adicione a váriavel de estado que será equivalente ao parametro 'state' da função que terá o valor '0'
e em seguida adicione o disparador de açoes 'dispatch' em sua const 
OBS:Estamos utilizando aqui nomes padrões
const [number, dispatch] = useReducer((state,action)=>{
  return state
 },0);

06 - No JSX crie um h1 com a tag number para verificar o valor dela 
 <h1>The number of reduce is: {number}</h1>

07 - Crie uma function ou uma function anonima dentro de um onClick de um elemento HTML chamando 'dispatch' para 
chamar uma ação
>   <button onClick={()=>dispatch()}>Incrementar</button> 
>tudo o que você passar como parametro para dispatch, será enviado para o parametro do useRecuder 'action'


08 - Envie uma string como teste em dispatch e dê um console.log em action na função useReducer
 const [number, dispatch] = useReducer((state,action)=>{
  console.log(action)
  return state
 },0);

  <button onClick={()=>dispatch('INCREMENTAR')}>Incrementar</button>

09 - Agora precisamos fazer um switch/case passando nossa action como parametro 

  const [number, dispatch] = useReducer((state,action)=>{
    switch(action){
      case 'INCREMENT':
        return state + 1
      }
    return state
  },0);

>Caso nossa action seja 'INCREMENT' a função executa e finaliza o processo!
>Caso nossa action não seja nenhum case, temos o return state no final para nosso reducer retornar o state atual

 -->