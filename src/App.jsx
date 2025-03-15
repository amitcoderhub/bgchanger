import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color , setcolor] = useState("olive")

  return (
    <>
     <div className='h-screen w-full duration-200 'style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-4 shadow-2xl bg-white px-3 py-3 rounded-xl'>
          <button onClick={()=> setcolor("red")} className='bg-red-600 px-4 py-1 text-white rounded-2xl'>Red</button>
          <button onClick={()=> setcolor("green")} className='bg-green-600 px-4 py-1 text-white rounded-2xl'>Green</button>
          <button onClick={()=> setcolor("blue")} className='bg-blue-600 px-4 py-1 text-white rounded-2xl'>Blue</button>
          <button onClick={()=> setcolor("yellow")} className='bg-yellow-600 px-4 py-1 text-white rounded-2xl'>Yellow</button>
          <button onClick={()=> setcolor("red")} className='bg-pink-600 px-4 py-1 text-white rounded-2xl'>Pink</button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
