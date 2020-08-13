import React from 'react';//importação do react

import { BrowserRouter, Route} from 'react-router-dom';//a dependencia responsave por as rotas 

//importação dos componentes
import Home from './pages/Home';//importação do componente da pagina inicial

export default function Routes(){
  return(
    <BrowserRouter>
     <Route path="/"  exact component={Home} />
    </BrowserRouter>
  );
}

//exact: responsavel para que o react n mostre todas as paginas que iniciem com a /