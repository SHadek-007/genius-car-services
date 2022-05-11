import React from 'react';
import Expart from '../Expart/Expart';

import expart1 from '../../../images/experts/expert-1.jpg'
import expart2 from '../../../images/experts/expert-2.jpg'
import expart3 from '../../../images/experts/expert-3.jpg'
import expart4 from '../../../images/experts/expert-4.jpg'
import expart5 from '../../../images/experts/expert-5.jpg'
import expart6 from '../../../images/experts/expert-6.png'

const exparts = [
    {id:1, name:'Tom Crusie',img: expart1},
    {id:2, name:'Tom Hanks',img: expart2},
    {id:3, name:'Tom Hildston',img: expart3},
    {id:4, name:'Tom Holand',img: expart4},
    {id:5, name:'Will Smith',img: expart5},
    {id:6, name:'Kate Perry',img: expart6},
];

const Exparts = () => {
    return (
        <div id='exparts' className='container'>
            <h2 className='text-primary text-center my-5'>Our Exparts</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {
                    exparts.map(expart=> <Expart key={expart.id} expart={expart}></Expart>)
                }
            </div>
        </div>
    );
};

export default Exparts;