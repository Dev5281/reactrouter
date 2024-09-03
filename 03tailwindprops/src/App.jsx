import './App.css'
import Card from './components/card'

function App() {
  

  return (
    <>
     <h1 className='bg-green-400 text-black rounded-xl mb-4'>this is tailwindcss</h1>
     <Card username={"DEV"} btnText={"poke me"}/> 
     <Card username={"RANIA"}/>

   
    </>
  )
}

export default App
