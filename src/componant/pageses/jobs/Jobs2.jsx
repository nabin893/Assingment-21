import React from 'react';
import { GrTechnology } from "react-icons/gr";


const Jobs2 = ({ job1 }) => {
    const { img, category_name } = job1
    return (
        <div className='shadow-2xl bg-sky-200   '>
            <div  className='flex justify-center '>
                <img className='w-60 h-60 ' src={img} alt="" />
            </div>
            <div className='my-5 flex justify-center gap-3'>
            <GrTechnology className='text-2xl mt-1' />
            <h1 className='text-2xl font-bold text-center'>{category_name}</h1>
            </div>
        </div>
    );
};

export default Jobs2;