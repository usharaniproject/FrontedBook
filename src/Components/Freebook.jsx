import React,{useState,useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//import list from '../../public/list.json';
import Cards from './Cards';
import axios from "axios"
function Freebook() {
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
      try{
   const res=await axios.get("https://bookstorebackend-2jkh.onrender.com/book");
  //  console.log(res.data);
   setBook(res.data.filter((data)=>data.category==='Free'));
   console.log(data);
      }
      catch(error){
      console.log(error);
      }
    }
    getBook();
  },[])
    //const filterData= list.filter((data)=>data.category==='Free');
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }
        ]
    }
    
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
       <div>
       <h3 className='font-bold text-xl pb-2'>Free Offered Courses</h3>
        <p>
            Loremipsum dolor sit amet, consectetur adipisicing alit. Accusantium veritatis alias pariatur ad dolor repudiandae eligendi carpatis nulla non suscipit, iure neque earum?
        </p>
       </div>
   
    <div>
    <Slider {...settings}>
        {book.map((item)=>(
            <Cards item={item} key={item.id}/>
        ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook
