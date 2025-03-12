import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { setdata } from '../../../../localstros/Lostor';

const Alljobs2 = ({ ajobs }) => {
//    const {alljobe,setalljobe}=useState([])

   

   const clickhandel =(id)=>{
    //    setalljobe(id)
    
     setdata(id)
   }

    const { _id,image,jobSummary,category_name,job_title
    } = ajobs
    return (
        <div className='border-2 rounded-2xl bg-sky-200'>
            <div className='flex'> 
               <img className='w-[200px] h-[200px]' src={image} alt="" />
               <div>
                <h1 className='text-xl font-bold'>{job_title}</h1>
               <h1 className='font-semibold'>{category_name}</h1>
               <h1>{jobSummary.slice(0,100)}....</h1>
               </div>
            </div>
            <div className='flex justify-end m-5 '>
                <button onClick={()=>clickhandel(_id)} className=' bg-blue-800 p-5 text-md text-white rounded-xl'><Link to={`/about/${_id}`}>see me</Link></button>
               </div>
        </div>
    );
};

export default Alljobs2;