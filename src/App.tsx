
import {TaskContextProvider } from './contexts/TaskContext';
import { Home } from './pages/Home';

import './styles/global.css';
import './styles/theme.css'

export const App = () => {
  
  return(
  <TaskContextProvider>
    <Home />
  </TaskContextProvider>  )
};
