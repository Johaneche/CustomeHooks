import { CounterApp } from "./components/CounterApp"
import { FormsApp } from "./components/FormsApp"
import { FetchApp } from './components/FetchApp'

export const HooksApp = () => {
    return (
      <>
          <h1>Aplicacion de Hooks</h1>
          <hr />
          <FetchApp />
          <hr />  
          <CounterApp />
          <hr />  
          <FormsApp />
          <hr />  
      </>
    )
  }
  