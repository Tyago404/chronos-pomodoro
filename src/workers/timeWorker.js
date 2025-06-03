//self.onmessage  = RECEBER MENSAGEM via .data
//Quando ele recebe uma mensagem ele executa a função 
self.onmessage = (e)=>{
  console.log('WORKER recebeu:', e.data)

  switch(e.data){
    case 'FAVOR':{
      self.postMessage('Sim, posso fazer um favor')
      break;
    }

    case 'FALA_OI':{
      self.postMessage('Ok: OI')
      break;
    }

    case 'FECHAR':{
      self.postMessage('Ok: FECHANDO');
      //É necessário fechar o worker para não poluir 
      self.close();
      break;
    }
    default:
      self.postMessage('Nenhum caso foi atendido')
  }
  
}