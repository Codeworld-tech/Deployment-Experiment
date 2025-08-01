import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Body from './components/Body'
import Login from './components/Login'
import Profile from './components/Profile'


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


  } catch (error) {
    console.log("ERROR " + error)
  }
}


async function getAllUsers(){
try {
    const result = await axios.get('http://localhost:3000/user/getAllUsers', {
      withCredentials: true,
    })
    console.log(result.data)

} catch (error) {
  console.log('Error' + error);
}

}

async function handleLogout(){
try {
  const result = await axios.post('http://localhost:3000/auth/logout', {}, {
    withCredentials: true
  })

  console.log(result);
  
} catch (error) {
  console.log('ERROR'+ error );
  
}
}



function App() {
  

  return (
    // <div>
    //   <h1>Welcome to the App</h1>
      
    //   <button onClick={handleLogin}>Login </button>

    //   <button style={{backgroundColor: 'blue', marginLeft: '10px'}} onClick={getAllUsers}>Get All Users</button>

     
    //   <button style={{backgroundColor: 'red', marginLeft: '10px'}} onClick={handleLogout}>
    //     Logout
    //   </button>
    // </div>


     <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    



  )
}

export default App