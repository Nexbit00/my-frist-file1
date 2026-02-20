import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
  const[data,setData]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:8001/')
    .then(res=>setData(res.data))
    .catch(err=>console.log(err));
  },[])

      const deleteHandler=(id)=>{
        axios.delete('http://localhost:8001/delete/'+id)
        .then(res=>{
          location.reload();

        })
        .catch(err=>console.log(err));
      }

  return (
    <div className='flex h-[100vh] bg-amber-600 justify-center items-center'>
      <div className='w-[700px] bg-amber-50 rounded-2xl p-4'>
        <h1>STUDENTS LIST</h1>
        <div className='flex justify-end'>
          <Link to='/create' className='btn btn-info m-2' >CREATE+</Link>
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student,index) =>{
              return <tr key={index}>
                      <td>{student.id}</td>
                       <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>
                      <Link to={`/read/${student.id}`} className="btn btn-neutral m-2">READ</Link >
                      <Link to={`/edit/${student.id}`} className="btn btn-primary m-2">EDIT</Link>
                      <button onClick={()=>deleteHandler(student.id)} className="btn btn-secondary m-2">DELETE</button>

                        </td>

              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home