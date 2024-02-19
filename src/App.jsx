import React from "react";

export default function App(){
  const [result, setResult] = React.useState("")

  function clear(){
    setResult("")
  }

  function deleteEl(){
    setResult(result.slice(0, -1))
  }

  function handleClick(event) {
    const clickedButtonId = event.target.id
    if (clickedButtonId === "%"){
      setResult(result.concat("/100"))
    }else{
      setResult(result.concat(event.target.id))
    }
    
  }
  
  function calculate() {
    try {
      setResult(eval(result).toString())
    } catch (error) {
      setResult("Error");
    }
  }
  
  return(
    <section className="flex justify-center items-center bg-main h-screen">
      <div className="bg-primary w-96 h-auto rounded-lg overflow-hidden mt-10 pb-10 pt-2">
        <div className="rounded-md p-5">
          {/*screen*/}
              <input 
              type="text" 
              value={result}
              readOnly
              className="rounded-md w-full text-right text-4xl font-semibold pr-5 h-full shadow-md outline-none"
              />
        </div>

        {/*Keypad*/}
        <div className="grid grid-cols-4 gap-4 mx-3 ">
          <button 
          onClick={clear}
          className="bg-red-600 rounded-lg font-bold w-20 text-3xl flex justify-center items-center shadow-md hover:bg-red-700 transition duration-300 ease-in-out">AC</button>
          
          <button 
          onClick={deleteEl}
          className="bg-red-600 rounded-lg font-bold w-20 text-3xl flex justify-center items-center shadow-md hover:bg-red-700 transition duration-300 ease-in-out">DE</button>
          
          <button
          id="%" 
          onClick={handleClick}
          className="bg-btncolor rounded-lg font-bold w-20 text-3xl flex justify-center items-center shadow-md hover:bg-gray-200 transition duration-300 ease-in-out">%</button>
          
          <button
          id="/" 
          onClick={handleClick}
          className="bg-btncolor rounded-lg font-bold w-20 text-3xl flex justify-center items-center shadow-md hover:bg-gray-200 transition duration-300 ease-in-out">/</button>
          
          <button
          id="7" 
          onClick={handleClick}
          className="bg-btncolor rounded-lg font-bold w-20 text-3xl flex justify-center items-center shadow-md hover:bg-gray-200 transition duration-300 ease-in-out">7</button>
          
          <button
          id="8" 
          onClick={handleClick}
          className="bg-btncolor rounded-lg font-bold w-20 text-3xl flex justify-center items-center shadow-md hover:bg-gray-200 transition duration-300 ease-in-out">8</button>
          
          <button
          id="9" 
          onClick={handleClick}
          className="bg-btncolor rounded-lg font-bold w-20 text-3xl flex justify-center items-center shadow-md hover:bg-gray-200 transition duration-300 ease-in-out">9</button>
          
          <button
          id="*" 
          onClick={handleClick}
          className="bg-btncolor rounded-lg font-bold w-20 text-3xl flex justify-center items-center shadow-md hover:bg-gray-200 transition duration-300 ease-in-out">*</button>
          
          <button
          id="4" 
          onClick={handleClick}
          className="bg-btncolor rounded-lg font-bold w-20 text-3xl flex justify-center items-center shadow-md hover:bg-gray-200 transition duration-300 ease-in-out">4</button>
          
          <button
          id="5" 
          onClick={handleClick}
          className="bg-btncolor rounded-lg font-bold w-20 text-3xl flex justify-center items-center shadow-md hover:bg-gray-200 transition duration-300 ease-in-out">5</button>
          
          <button
          id="6" 
          onClick={handleClick}
          className="bg-btncolor rounded-lg font-bold w-20 text-3xl flex justify-center items-center shadow-md hover:bg-gray-200 transition duration-300 ease-in-out">6</button>
          
          <button
          id="-" 
          onClick={handleClick}
          className="bg-btncolor rounded-lg font-bold w-20 text-3xl flex justify-center items-center shadow-md hover:bg-gray-200 transition duration-300 ease-in-out">-</button>
          
          <button
          id="1" 
          onClick={handleClick}
          className="bg-btncolor rounded-lg font-bold w-20 text-3xl flex justify-center items-center shadow-md hover:bg-gray-200 transition duration-300 ease-in-out">1</button>
          
          <button
          id="2" 
          onClick={handleClick}
          className="bg-btncolor rounded-lg font-bold w-20 text-3xl flex justify-center items-center shadow-md hover:bg-gray-200 transition duration-300 ease-in-out">2</button>
          
          <button
          id="3" 
          onClick={handleClick}
          className="bg-btncolor rounded-lg font-bold w-20 text-3xl flex justify-center items-center shadow-md hover:bg-gray-200 transition duration-300 ease-in-out">3</button>
          
          <button
          id="+" 
          onClick={handleClick}
          className="bg-btncolor rounded-lg font-bold w-20 text-3xl flex justify-center items-center shadow-md hover:bg-gray-200 transition duration-300 ease-in-out">+</button>
          
          <button
          id="00" 
          onClick={handleClick}
          className="bg-btncolor rounded-lg font-bold w-20 text-3xl flex justify-center items-center shadow-md hover:bg-gray-200 transition duration-300 ease-in-out">00</button>
          
          <button
          id="0" 
          onClick={handleClick}
          className="bg-btncolor rounded-lg font-bold w-20 text-3xl flex justify-center items-center shadow-md hover:bg-gray-200 transition duration-300 ease-in-out">0</button>
          
          <button
          id="=" 
          onClick={calculate}
          className="bg-btncolor rounded-lg font-bold w-20 text-3xl flex justify-center items-center shadow-md hover:bg-gray-200 transition duration-300 ease-in-out">=</button>
          
          <button
          id="." 
          onClick={handleClick}
          className="bg-btncolor rounded-lg font-bold w-20 text-3xl flex justify-center items-center shadow-md hover:bg-gray-200 transition duration-300 ease-in-out">.</button>
        
        </div>
      </div>
    </section>
  )
}