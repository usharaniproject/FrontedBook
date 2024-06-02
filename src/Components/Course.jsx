import React, { useEffect, useState } from 'react'
//import list from '../../public/list.json'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from "axios"
function Course() {
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
      try{
   const res=  await   axios.get("https://bookstorebackend-2jkh.onrender.com/book");
   console.log(res.data);
   setBook(res.data);
      }
      catch(error){
      console.log(error);
      }
    }
    getBook();
  },[])
  return (
    <>
   <div className='max-w-screen-2xl container mx-auto md:px-20'>
    <div className='mt-28 items-conter justift-center text-center'>
      <h4 className='text-2xl font-semibold md:text-4xl'>
        We are Delighted to have you <span className='text-pink-500'>here!)
        </span>
        </h4>
        <p className='mt-12'>
          lorem ipsum dolor sit,amet consectutur adipiscing elit. Porro, assumenda? Repellendus,iste corrupti? Tempore Laudantium repellendus accusamus accusantinum sed
          architecto adio, nisi expedita quas quidem nesciunt debitis dolore nan aspetnatut praesentium assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
          animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam consequatur!
        </p>
       <Link to='/'>
       <button className='bg-pink-500 text-white px-4 mt-6 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
       </Link>
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
    {
      book.map((item)=>(
        <Cards item={item} key={item.id}/>
      ))
    }
    </div>
   </div>
    </>
  )
}

export default Course
