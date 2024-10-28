import React, { useEffect, useState } from 'react'
import Cards from './Cards';

import axios from "axios";

import {Link} from "react-router-dom";

function Course() {
    const [book,setBook]=useState([]);
    useEffect(()=>{
    const getBook=async()=>{
        try {
          const res = await axios.get("http://localhost:4001/book");
          console.log(res.data);
          setBook(res.data);
          
        } catch (error) {
            console.log(error);
            
        }
    };
    getBook();
    },[]);
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white '>
                <div className='mt-28 item-center justify-center text-center '>
                    <h1 className='text=2xl md:text-4xl'>
                        We`re delighted to have you <span className='text-pink-500'>Here! :</span>
                    </h1>
                    <p className='mt-12'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aliquid nemo voluptatibus eveniet cupiditate fuga eius nam asperiores blanditiis corporis, a quidem explicabo? Repellat, eius expedita. Quasi, architecto, at assumenda officia praesentium natus quae ut qui sed obcaecati magni fugit quam soluta, excepturi dignissimos deleniti nesciunt quaerat. Consequatur reiciendis harum .
                    </p>
                    <Link to="/" >
                    <button className=' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-200'>Back</button>
                    </Link>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                    {
                        book.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))
                    }
                </div>

            </div>
        </>
    );

}

export default Course