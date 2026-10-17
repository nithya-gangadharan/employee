import axios from 'axios'
import React, { useState } from 'react'

function Add() {
const[empdata,setempdata]=useState({name:"",salary:"",destination:""})
console.log(empdata);
const addemp=async()=>{
  const res =await axios.post('http://localhost:3000/employes',empdata)
  console.log(res);
  
}
  return (
    <>
    <div className='d-flex flex-column align-items-center justify-content-center gap-4 p-2 border'>
          
      <input value={empdata.name} type="text" onChange={(e)=>setempdata({...empdata,name:e.target.value})} placeholder='enter name' />
      <input value={empdata.salary}type="text" placeholder='enter salary'onChange={(e)=>setempdata({...empdata,salary:e.target.value})} />
      <input value={empdata.destination} type="text" placeholder='enter destination'onChange={(e)=>setempdata({...empdata,destination:e.target.value})} />
       <button className='btn btn-primary ' onClick={addemp}>add</button>

    </div>
    
    
    </>
  )
}

export default Add