//self.onmessage  = RECEBER MENSAGEM via .data
//Quando ele recebe uma mensagem ele executa a função 
self.onmessage = (e)=>{
  console.log('WORKER recebeu:', e.data)

  //podemos enviar uma mensagem após recer uma 
  self.postMessage("OLÁ PARA VOCÊ TAMBÉM")


  
}