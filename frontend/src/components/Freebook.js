import React,{useState,useEffect} from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import list from "../data/list.json";
import Carddata from './Carddata';
import axios from "axios";
function Freebook() {
  const [book,setBook]= useState([]);
  useEffect(()=>{
    const getBook = async() =>{
      try {
       const res = await axios.get("http://localhost:4001/book");
       setBook(res.data.filter((data)=>data.category ==="Free"));
       console.log(res.data.filter((data)=>data.category==="Free"));
      } catch (error) {
        console.log(error);
      }
    };
  
    getBook(); 
  },[])
    // const filterData=list.filter((data)=>data.category ==="Free");
    
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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    // console.log(filterData);
  return (
    <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 ml-4'>
    <div>

    <h1 className='font-semibold text-xl pb-2'>Free offered Courses</h1>
    <p>
        All kinds of books story,comedy,sports ,Food and Music related books ,Also NCERT's  are available here at free of cost . . . . . . . .
    </p>
   </div>
   <div >
   <Slider {...settings}>
       {book.map((item) =>(
        <Carddata item={item} key={item.id}/>
       ))} 
      </Slider>
   </div>
   </div>

    </>
    
  )
}

export default Freebook;