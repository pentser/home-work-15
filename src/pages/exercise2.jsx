import React, { useRef, useState } from 'react'
import "./pages.css"




function Exercise2() {



  const [name,setName] = useState("");
  const itemRef= useRef(null);

  const clickHendler = ()=>{

    if(itemRef.current.value==="") {
      alert("Empty name");
    }
    else {
      alert(itemRef.current.value)
    }

  }

  return (
    <div className='flex flex-col align-middle justify-center w-75'>
      <h1 className="text-2xl text-blue-400">Ready for War</h1>
      <input ref={itemRef} placeholder='Enter your name'  type="text" className='block min-w-0 grow py-1.5 pr-3 pl-1 border' />
      <span class="text-red-600">* Error- put valid name</span>
      <button onClick={clickHendler}  className='rounded-md  px-2.5 py-1.5 bg-blue-400 text-white'>start</button> 
  
    </div>
  )
}

export default Exercise2
