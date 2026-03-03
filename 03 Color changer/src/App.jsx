import { useState } from 'react'


function App() {
  const[color,setColor] = useState('olive');
  return (
    <div>
      <div className='w-full h-screen flex justify-center duration-200' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap bottom-16'>
          <div className='flex flex-wrap bg-white px-4 py-3 rounded-4xl shadow-2xl'>
            <button className='rounded-full px-3 py-2 text-white mx-2 cursor-pointer' onClick= {() => {setColor("red")}} style={{backgroundColor: 'Red'}}> Red </button>
            <button className='rounded-full px-3 py-2 text-white mx-2 cursor-pointer' onClick= {() => {setColor("green")}} style={{backgroundColor: 'green'}}> Green </button>
            <button className='rounded-full px-3 py-2 text-white mx-2 cursor-pointer' onClick= {() => {setColor("olive")}} style={{backgroundColor: 'olive'}}> Olive </button>
            <button className='rounded-full px-3 py-2 text-white mx-2 cursor-pointer' onClick= {() => {setColor("pink")}} style={{backgroundColor: 'pink'}}> pink </button>
            <button className='rounded-full px-3 py-2 text-white mx-2 cursor-pointer' onClick= {() => {setColor("black")}} style={{backgroundColor: 'black'}}> black </button>
            <button className='rounded-full px-3 py-2 text-white mx-2 cursor-pointer' onClick= {() => {setColor("lavender")}} style={{backgroundColor: 'lavender'}}> lavender </button>
            <button className='rounded-full px-3 py-2 text-white mx-2 cursor-pointer' onClick= {() => {setColor("blue")}} style={{backgroundColor: 'blue'}}> blue </button>
            <button className='rounded-full px-3 py-2 text-white mx-2 cursor-pointer' onClick= {() => {setColor("cyan")}} style={{backgroundColor: 'cyan'}}> cyan </button>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default App
