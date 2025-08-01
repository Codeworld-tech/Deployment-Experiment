import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
  function Login (){

    const navigate = useNavigate()

    async function handleLogin(){
 try {
    const result = await axios.post('http://localhost:3000/auth/login', 
     {
       email: 'ammar5@gmail.com',
      password: 'Ammar@4321'
     },
     {
      withCredentials: true 
     }
    )

     console.log(result)
     navigate('/profile')
    //  dispatch(addUser(result.data))



  } catch (error) {
    console.log("ERROR " + error)
  }
    }
 

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
    <h1 className='text-center text-6xl'>Login </h1>
       <button className='bg-gray-900 text-white mt-10 px-12 py-5 rounded-full cursor-pointer' onClick={handleLogin}>Login </button>
    </div >
  )
}

export default Login