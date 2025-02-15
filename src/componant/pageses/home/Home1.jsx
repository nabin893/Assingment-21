import React from 'react';
import Home2 from './Home2';
import Jobs1 from '../jobs/Jobs1';
import Jcards from './Jcards';
import Alljobs1 from './allJobs/Alljobs1';

const Home1 = () => {

    return (
        <div>
           <div className='mt-5 '>
            <Home2></Home2>
           </div>
           <div>
            <Jobs1></Jobs1>
           </div>
           <div>
            <Jcards></Jcards>
           </div>
           <div>
            <Alljobs1></Alljobs1>

           </div>
            
        </div>
    );
};

export default Home1;