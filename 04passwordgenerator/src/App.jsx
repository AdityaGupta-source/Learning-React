import { useState , useCallback,useEffect , useRef} from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+[]{}~";
    for(let i = 0; i<length; i++){
      let num = Math.floor(Math.random()*str.length);
      pass += str[num];
    }
    setPassword(pass);
  },[length,numberAllowed,charAllowed,setPassword])

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
      <div className=" w-full max-w-lg rounded-lg shadow-md mx-auto px-4 py-5 my-8 text-white bg-gray-700">
        <span className='text-4xl'>Password Generator</span>
        <div className='overflow-hidden flex shadow rounded-lg mb-4'>
          <input
            type="text"
            value={password}
            readOnly
            placeholder='Password'
            className='outline-none py-2 px-3 my-3 w-full bg-white rounded-2xl text-gray-700'
            ref={passwordRef} 
          />
          <button onClick={copyToClipboard} className='outline-none bg-blue-700 text-white py-0.5 px-3 rounded-3xl shrink-0 cursor-pointer hover:bg-blue-400'>Copy</button>
        </div>
        <div className='flex text-sm justify-between'> 
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min = {6}
              max = {100}
              value = {length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label className='text-xl text-orange-500'> Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultValue={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => (!prev))
            }}
            />
            <label className='text-xl text-orange-500' htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultValue={charAllowed}
            id="charInput"
            onChange={() => {
              setCharAllowed((prev) => (!prev))
            }}
            />
            <label className='text-xl text-orange-500' htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
