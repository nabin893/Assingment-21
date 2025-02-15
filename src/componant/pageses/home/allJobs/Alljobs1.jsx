import React, { useEffect, useState } from 'react';
import Alljobs2 from './Alljobs2';

const Alljobs1 = () => {
    const [alljob,setalljob]=useState([])
   console.log(alljob);

    useEffect(()=>{
        fetch("https://next-level-two-ashen.vercel.app/jobs")
        .then(rsc=>rsc.json())
        .then(data=>setalljob(data))
    },[])
    return (
        <div>
            <div>
            <div className='flex justify-center my-5'>
                <div className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... rounded-lg w-96 '>
                    <h1 className='text-center text-3xl font-black'>ALL JOBS </h1>
                </div>
            </div>
            </div>

            <div className='grid md:grid-cols-3 gap-10'>
                {
                    alljob.map(ajobs=> <Alljobs2 key={ajobs._id} ajobs={ajobs}></Alljobs2>)
                }

            </div>
            
        </div>
    );
};

export default Alljobs1;