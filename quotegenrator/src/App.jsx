import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import QuoteGenerator from './quoteGenerator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <QuoteGenerator/>
    </div>
  )
}

export default App
