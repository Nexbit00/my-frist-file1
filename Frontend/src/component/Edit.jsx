import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    const {id}=useParams();
    const navigate=useNavigate();
    
    useEffect(()=>{
            axios.get('http://localhost:8001/read/'+id)
            .then(res=>{
                console.log(res);
                setValues({...values,name:res.data[0].name,email:res.data[0].email})
        })
            .catch(err=>console.log(err));
    
        },[])
     const [values,setValues]=useState({
            name:'',
            email:''
        })
        const updateHandler=(event)=>{
            event.preventDefault();
            axios.put('http://localhost:8001/update/'+id,values)
            .then(res=>{
                console.log(res);
                navigate('/')
            }).catch(err=>console.log(err));
        }
  return (
    <div className='flex h-[100vh] bg-amber-600 justify-center items-center'>

      <div className='w-[700px] bg-amber-50 rounded-2xl p-4'>

        <form onSubmit={updateHandler}>
            <h1>Update Students</h1>
            <div className='mb-2'>
                <level>Name</level>
               <input type="text" placeholder="Success" className="input input-success w-full" value={values.name} 
               onChange={e=>setValues({...values,name: e.target.value})}
               />

            </div>
             <div className='mb-2'>
                <level>Email</level>
                <input type="email" placeholder="Warning" className="input input-warning w-full" value={values.email}
                onChange={e=>setValues({...values,email: e.target.value})}
                />
            </div>
            <button className='btn btn-secondary m-2'>UPDATE</button>
        </form>
      </div>
    </div>
  )
}

export default Edit