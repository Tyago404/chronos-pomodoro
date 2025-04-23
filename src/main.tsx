import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import Anything from './App'; //Quando você exporta default voce pode importar com qualquer nome

import { App } from './App';
createRoot(document.getElementById('root')!).render(
  <StrictMode>

    {/*Só funciona no modo desenvolvimento, serve para identificar problemas no código (é uma boa pratica) */}
    <App />

  </StrictMode>,
);
