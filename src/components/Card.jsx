import React from 'react'
import { useState } from 'react';
import Data from './Data'



function Card(props) {
    

    const [quote,setQuote]=useState(Data[0]);

    const randomQuote=()=>{
       let randomNum=Math.floor(Math.random()*Data.length);
       setQuote(Data[randomNum])
    };




    return (
        <div className=' bg-red-400 h-screen justify-center items-center'>
         <h1  className='flex justify-center text-5xl text-bold pt-8 font-mono'>Tap to generate your lucky quotes </h1>
           <div className='mt-32'>
            
            <div class="flex justify-center items-center ">
                <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm bg-gray-100">
                    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Quote of the Day</h5>
                    <p class="text-black text-base mb-4">
                       {quote.text}
                    </p>
                    <span className='text-bold text-gray-700 font-mono'>Author:{quote.author}</span>
                    <div>
                    <button type="button" class="mt-4 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={randomQuote}>New Quote</button>
                    </div>
                   
                </div>
                </div>
               
            </div>
            </div>
       
    )
}

export default Card