import React, { useEffect, useState } from 'react';
import Jobs2 from './Jobs2';

const Jobs1 = () => {
    const[jobs,setjobs]=useState([])
    // console.log(jobs);
    
  useEffect(()=>{
       fetch("https://next-level-two-ashen.vercel.app/category")
       .then(rsc=>rsc.json())
       .then(data=>setjobs(data))
  },[])
    return (
        <div>
            <div className='flex justify-center my-5'>
                <div className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... rounded-lg w-96 '>
                    <h1 className='text-center text-3xl font-black'>ALL CATEGORIES </h1>
                </div>
            </div>
            <div className='grid  md:grid-cols-3 gap-5 my-10'>
                {
                  jobs.length ?jobs.map(job1=> <Jobs2 key={job1.id} job1={job1}></Jobs2>):<h1><span className="loading loading-bars loading-xs"></span>
                  <span className="loading loading-bars loading-sm"></span>
                  <span className="loading loading-bars loading-md"></span>
                  <span className="loading loading-bars loading-lg"></span>
                  </h1>
                
                }
            </div>
        </div>
    );
};

export default Jobs1;