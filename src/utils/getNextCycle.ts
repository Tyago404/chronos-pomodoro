export const getNextCycle = (currentCycle:number)=>{
  return currentCycle === 0 || currentCycle === 8 ? 1  : currentCycle + 1
} 


/*
Esta função quando chamada, geralmente o currentCycle será 0 e logo retornará 1
se chamada novamente somaremos o valor anterior do currentCycle +1 e isso se repete até chegar ao valor 8
se chegar em 8 a função deverá voltar o valor para 1
*/