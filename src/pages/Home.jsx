import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
    const [employess,setemployees]=useState([])
    useEffect(() => {
      getemps()
    }, [])
    const getemps= async()=>{
        const employess= await axios.get('http://empserver-3kco.onrender.com/employes')
         console.log( employess);
        setemployees(employess.data)
    }
    const deleteemp= async(id)=>{
      const res = await axios.delete(`http://empserver-3kco.onrender.com/employes/${id}`)
      console.log(res);
      getemps()
    }


    
  return (
    <>
    <div className='d-flex align-items-center justify-content-between m-3'>

        <h1>employee</h1>
        <Link to={'/add'} className='btn btn-primary rounded-pill'>add</Link>
 </div>
 <div>
    <table className='table  m-4 p-2'>
<thead>
    <tr>
        <th>id</th>
        <th>name</th>
        <th>salary</th>
        <th>destination</th>
        <th>actions</th>

    </tr>
</thead>
<tbody>
   {
    employess?.length>0?
    employess.map((emp,index)=>(
         <tr>
        <td>{index+1}</td>
        <td>{emp?.name}</td>
        <td>{emp?.salary}</td>
        <td>{emp?.destination}</td>
        <td >
          <Link to={`/employee/edit/${emp.id}`} className='btn btn-primary rounded'> edit</Link>
        <button className='btn btn-danger ms-3 rounded' onClick={()=>deleteemp(emp.id)}>delete</button>

        </td>
    </tr>
    ))
    :
    <tr>no emp</tr>
   }
</tbody>
    </table>
 </div>
   
</>
  )
}

export default Home