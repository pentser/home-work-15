import React, { useRef, useState } from 'react'
import "./pages.css"
import { useNavigate } from 'react-router-dom';




function Exercise2() {



  const navigate=useNavigate();
  const [name,setName] = useState("");
  const itemRef= useRef(null);
  const errorRef=useRef(null);

  const clickHendler = ()=>{

    if(itemRef.current.value==="") {
      errorRef.current.classList.remove("invisible");
    }
    else {
      errorRef.current.classList.add("invisible");
      //setName(itemRef.current.value);
      navigate("/exercise2/exercise2_1",{name:itemRef.current.value});
     
      

    
    }

  }

  return (
    <div className='flex flex-col items-center justify-center w-350 p-20'>
      <h1 className="text-2xl text-blue-400 p-10">Ready for War</h1>
      <input ref={itemRef} placeholder='Enter your name'  type="text" className='block min-w-0 grow py-1.5 pr-3 pl-1 border' />
      <span ref={errorRef} className="text-red-600 invisible">* Error- put valid name</span>
      <button onClick={clickHendler}  className='rounded-md  px-5.5 py-1.5 bg-blue-400 text-white m-10'>start</button> 
  
    </div>
  )
}

export default Exercise2
