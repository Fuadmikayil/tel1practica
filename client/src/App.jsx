import React from 'react'
import "./index.css"
const App = () => {
  return (
    <>
      <header className='flex justify-between px-10 py-4  shadow-lg shadow-slate-800 items-center'>
        <nav className=' flex  gap-5 list-none'>
          <li className='text-white cursor-pointer' >Home</li>
          <li className='text-white cursor-pointer' >Page</li>
        </nav>
          <button className='bg-blue-600 p-2 rounded-lg tracking-widest text-white'>Login</button>
      </header>
    </>
  )
}

export default App
