import React ,{useState,useEffect}from 'react'
// import list from "../data/list.json"
import Carddata from './Carddata'
import axios from "axios"
import { Link } from 'react-router-dom'
function Course() {
  const [book,setBook]= useState([]);
  useEffect(()=>{
    const getBook = async() =>{
      try {
       const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook(); 
  },[])
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
    <div className='pt-28   item-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'>We're happy to have you as part of <span className='text-pink-500'>Our community!!</span></h1>
        <p className='mt-12'>We're happy to have you as part of our community! Our community is a vibrant and diverse group of individuals who share a passion for learning and growth. You'll gain access to exclusive resources, events, and opportunities that will help you achieve your goals and pursue your interests. Whether you're looking to learn new skills, expand your knowledge, or simply connect with others who share your passions, our community is the perfect place to be!</p>
       <Link to='/'>
       <button className="mt-6 bg-green-600 text-white  px-5 py-2 rounded-md" >Back</button>
       </Link>
    </div>
    <div className='mt-14 grid grid-cols-1 md:grid-cols-4'>
        {
            book.map((item)=>(
                <Carddata item={item} key={item.id}/>
            ))  
        }
    </div>
    </div>
    </>
  )
}

export default Course