
import React from 'react'
import Navbar from '../Components/Navbar'

import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Courses() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data)
   return(
    <>
    <Navbar/>
    <div className='max-w-screen-2xl container mx-auto md:px-20'>
     <div className='mt-28 items-conter justift-center text-center '>
          <form onSubmit={handleSubmit(onSubmit)} >
          <h3 className="text-2xl font-semibold md:text-3xl">Contact Us</h3>
          {/* Name */}
          <div className='mt-4 space-y-2 '>
        <span>Name:</span>
        <br/>
        <input type='text'
        placeholder='Enter your FullName'
        className='w-80 px-3 py-2 border rounded-md outline-none'
        {...register("text", { required: true })}
        />
        <br/>
        {errors.text
         && (<span className='text-sm text-red-500'>This field is required</span>)}

    </div>
    {/* Email*/}
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
    <div className='mt-4 space-y-2 '>
        <span>Type your Queye here:</span>
        <br/>
        <textarea  cols='10' rows='5'
        placeholder='Type your Query'
        className='w-80 px-3 py-2 border rounded-md outline-none'
        {...register("email", { required: true })}
        />
        <br/>
        {errors.email
         && (<span className='text-sm text-red-500'>This field is required</span>)}

    </div>
    <div className='mt-4 space-y-2 '>
  <button type='submit'className='bg-pink-500 text-white  rounded-md px-3 py-1 hover:bg-pink-700 duration-200 ' >Submit </button>
   {/* <Link to='/' className='bg-pink-500 text-white  rounded-md px-3 py-1 hover:bg-pink-700 duration-200 '>Submit</Link> */}
   {/* </button> */}
    </div>
          </form>
        </div>
      
    </div>
    </>
   )
}

export default Courses