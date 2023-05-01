// "use client";
import React, { useEffect, useState } from 'react';

const useSingleData = (params) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/quiz/${params}`)
            .then(res => res.json())
            .then(item => setData(item.data))
    }, [params]);

    return { data }
};

export default useSingleData;