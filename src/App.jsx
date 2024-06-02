import React from 'react'
import Home from './home/Home'
import Signup from './Components/Signup';
import Contact from './Components/Contact';
import {Toaster} from "react-hot-toast";
import {Navigate, Route,Routes } from 'react-router-dom';
import Courses from './Course/Courses';
import { useAuth } from './content/AuthProvider.jsx';
import About from './Components/About.jsx';
function App() {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (
    <>
   
   <div>
   <Routes>
    <Route path="/" element={<Home/>}/>
    {/* <Route path="/course" element={<Courses/>} /> */}
     <Route path="/course" element={authUser?<Courses/>:<Navigate to="/Signup"/>}/> 
    <Route path="/signup" element={<Signup/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/about' element={<About/>}/>
   </Routes>
   <Toaster/>
   </div>
    </>
  );
}
export default App

