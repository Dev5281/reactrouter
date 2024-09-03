import { useState } from "react"
function App() {
  const[color,setColor]= useState("black")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
        <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-4 rounded-3xl bg-white">
            <button onClick={()=>setColor("blue")} className="outline-none px-4 py-3 rounded-full" style={{backgroundColor:"blue"}} 
            >blue</button>
             <button onClick={()=>setColor("purple")} className="outline-none px-4 py-3 rounded-full" style={{backgroundColor:"purple"}} 
            >purple</button>
             <button onClick={()=>setColor("yellow")} className="outline-none px-4 py-3 rounded-full" style={{backgroundColor:"yellow"}} 
            >yellow</button>
             <button onClick={()=>setColor("red")} className="outline-none px-4 py-3 rounded-full" style={{backgroundColor:"red"}} 
            >Red</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
