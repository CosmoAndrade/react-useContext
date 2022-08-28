
import './App.css'
import { CountProvider } from './Context/'

import Counter from './Counter'


function App() {


  return (

    <CountProvider>

      <div className="App">

       <Counter/>

      </div>

    </CountProvider>





  )
}

export default App
