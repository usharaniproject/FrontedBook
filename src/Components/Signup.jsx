import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';
function Signup() {
   const location=useLocation();
   const navigate=useNavigate();
   const from=location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo={
      fullname:data.fullname,
      email:data.email,
      password:data.password
    }
   await axios.post("https://bookstorebackend-2jkh.onrender.com/user/signup",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data)
        {
          toast.success("SignedUp Successfully")
          navigate(from,{replace:true});
          // <Navigate to="/"/>();
          // history.push("/");
          // <Navigate to="/home"/>
          // <Navigate to="/"/>
          // Navigate(from,{replace:true})
        }
        localStorage.setItem("Users",JSON.stringify(res.data.user));
    }).catch((err)=>{
      // alert("Signed up:"+err);
      // console.log(err.message)
      if(err.response){
        console.log(err);
        toast.error("User Already exists");
      }
    })
  }
  return (
    <>
    <div className='flex h-screen items-center justify-center'>
    <div  className="w-[600px]">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold text-xl">SigUp</h3>
    {/* Name */}
    <div className='mt-4 space-y-2 '>
        <span>Name:</span>
        <br/>
        <input type='text'
        placeholder='Enter your Fullname'
        className='w-80 px-3 py-2 border rounded-md outline-none'
        {...register("fullname", { required: true })}
        />
        <br/>
         {errors.fullname
         && (<span className='text-sm text-red-500'>This field is required</span>)}
    </div>
    {/* Email */}
    <div className='mt-4 space-y-2 '>
        <span>Email:</span>
        <br/>
        <input type='email'
        placeholder='Enter your email'
        className='w-80 px-3 py-2 border rounded-md outline-none'
        {...register("email", { required: true })}
        />
         <br/>
        {errors.email
         && (<span className='text-sm text-red-500'>This field is required</span>)}
    </div>
     {/* Password */}
    <div className='mt-4 space-y-2 '>
        <span>Password:</span>
        <br/>
        <input type='password'
        placeholder='Enter a valid Password'
        className='w-80 px-3 py-2 border rounded-md outline-none'
        {...register("password", { required: true })}
        />
         <br/>
        {errors.password && (<span className='text-sm text-red-500'>This field is required</span>)}
    </div>
    {/* Login Button */}
    <div className='flex justify-around mt-5'>
        <button className='bg-pink-500 text-white  rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>SignUp</button>
  <p className='text-md'>Have Account?{" "}
  <button  className='underline text-blue-500 cursor-pointer' onClick={()=>
    document.getElementById('my_modal_3').showModal()
  }>
    Login
    </button>{" "}
    <Login/>
  </p>
   </div>
   </form>
  </div>
</div>
</div>
    </>
  )
}

export default Signup