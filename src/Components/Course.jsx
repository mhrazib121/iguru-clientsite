import Image from 'next/image';
import React from 'react';
import styles from "../styles/course.module.css"
import Link from 'next/link';

const Course = ({ item }) => {
    const { id, name, logo, total } = item;
    const { cardHover, hoverParent } = styles;
    return (
        <div className={`bg-slate-300 flex flex-col items-center relative p-8 ${hoverParent} transition delay-150`}
            data-aos='zoom-out'
            data-aos-offset='300'
            data-aos-delay='delay'>
            <Image width="200" height="100" src={logo} alt="course">
            </Image>
            <div className={`${cardHover} w-[100%] bg-[#000000] bg-opacity-30 h-[100%] absolute -mt-8`}>
                <h2 className='text-xl font-bold text-white text-center absolute m-3'>{name}</h2>
                <Link href={`/course/${id}`} className='bg-orange-600 px-4 py-2 h-[40px] m-auto rounded-lg text-slate-50'>Start Now</Link>
            </div>
        </div>
    );
};

export default Course;