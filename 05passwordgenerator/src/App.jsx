import { useCallback, useState, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerate = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerate();
  }, [passwordGenerate]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 bg-gray-100 text-orange-500 text-center">
        <h1 className="text-2xl font-bold mb-4">Password Generator</h1>

        <input
          type="text"
          value={password}
          readOnly
          className="w-full border px-3 py-2 rounded"
          placeholder="Generated Password"
        />
        <button
        className="outline-none" bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600
        >copy</button>
      </div>
      <div className='flex text-sm gap-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            id="number"
            checked={numberAllowed}
            onChange={() => setNumberAllowed(!numberAllowed)}
          />
          <label htmlFor="number">Include Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            id="char"
            checked={charAllowed}
            onChange={() => setCharAllowed(!charAllowed)}
          />
          <label htmlFor="char">Include Characters</label>
          <input 
            type="range"
            min={6}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
      </div>
    </>
  );
}

export default App;
