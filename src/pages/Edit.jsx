import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Edit() {
   const {id}=useParams()
   console.log(id);
   const[empdata,setempdata]=useState({name:"",salary:"",destination:""})
   useEffect(()=>{
getempss()
   },[])
   
   const getempss=async()=>{
    const res=  await axios.get(`http://empserver-3kco.onrender.com/employes/${id}`)
    setempdata(res.data)
   }
   const updateemp=async()=>{
    const res = await axios.put(`http://empserver-3kco.onrender.com/employes${id}`,empdata)
    console.log(res);
    
   }
  return (
    <>
    <div className='d-flex flex-column align-items-center justify-content-center gap-4 p-2 border'>
          
      <input value={empdata.name} type="text" placeholder='enter name' onChange={(e)=>setempdata({...empdata,name:e.target.value})} />
      <input value={empdata.salary} type="text" placeholder='enter salary'onChange={(e)=>setempdata({...empdata,salary:e.target.value})} />
      <input value={empdata.destination} type="text" placeholder='enter destination'onChange={(e)=>setempdata({...empdata,destination:e.target.value})} />
             <button className='btn btn-primary ' onClick={updateemp}>update</button>

    </div>
    </>
  )
}

export default Edit