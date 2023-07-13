import React,{useState} from 'react'
import "./App.css"
import FuncCompo from './HandsonOne/FunctionCompo';
import ClassCompo from './HandsonOne/ClassCompo'
function App(){
  const [fState,setFState]=useState(false)
  const [cState,setCState]=useState(false)

  return(
   <div >
   <div className='main-container'>
   <h1 className='head'>Styling using Functional and Class Component</h1>
   </div>
   <div className='buttons'>
   <button className='b' onClick={()=> setFState(!fState)}>To see styling in Functional Component</button>
   <button className='b' onClick={()=> setCState(!cState)}>To see styling in Class Component</button>
   </div>
   {fState? <FuncCompo/> :" "}
   {cState? <ClassCompo/> :" "}
   {/* {fState && <FuncCompo/> } */}
  
   </div>
  )
  
}

export default App;