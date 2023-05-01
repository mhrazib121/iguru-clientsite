import React from 'react';
import bgDot from "../../assets/bg-dot.png";
import Image from 'next/image';

const Discover = () => {
    return (
        <div className=' lg:w-3/5 p-4 mx-auto'
            data-aos="fade-down"
            data-aos-delay='300'
        >
            <div className=' relative p-8 bg-black rounded-lg'>
                <Image className='absolute top-0 left-0' src={bgDot} alt='background' />
                <div className='md:flex justify-between'>
                    <h2
                        data-aos='fade-right' data-aos-offset='400'
                        className='text-white text-3xl font-bold mb-4 md:mb-0'>We’ve Best Mentors in Every Courses</h2>
                    <button
                        data-aos='fade-left' data-aos-offset='400'
                        className='uppercase bg-yellow-500 text-lg px-4 py-2 rounded-lg hover:scale-105 duration-300'>Discover more </button>
                </div>
            </div>
        </div>
    );
};

export default Discover;