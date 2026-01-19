import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import card from './components/card.jsx'  

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-3xl font-bold bg-blue-500 p-4 rounded-xl">Ankit Vite + React</h1>
    <div className="flex flex-col items-center gap-6 p-7 md:flex-row rounded-2xl">
  <div>
    <img className="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/35542452/pexels-photo-35542452.jpeg" />
  </div>
  <div className="flex items-center md:items-start">
    <span className="text-2xl font-medium">Class Warfare</span>
    <span className="font-medium text-sky-500">The Anti-Patterns</span>
    <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
    <card />  
    <card />  
  </div>
</div>

    </>
  )
}

export default App
