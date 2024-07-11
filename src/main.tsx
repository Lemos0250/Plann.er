import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

/*
0 - Colocando o "Ctrl" + "Shift" + "P" e escrevendo "Restart TS server" tira a necessidade de resetar a aplicação.
1 - Ao Colocar export function "..." ao invés de export default no Final fica obrigatório o nome da Função.

*/