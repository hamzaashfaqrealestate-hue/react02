import React from 'react'
import { useState, useEffect } from 'react'
let data = {
    name: 'Ahmad',
    institute: 'IT Zone UK',
    course : 'Web Development',
}


// useEffect is a hook in React that allows you to perform side effects in functional components. It is used to handle tasks such as data fetching, subscriptions, or manually changing the DOM in React components. The useEffect hook takes two arguments: a function that contains the side effect logic and an optional dependency array that specifies when the effect should run.
const UseEffectFirstHook = () => {
    const [dataState, setDataState] = useState({});
    
    useEffect(() => {
        setTimeout(() => {
        setDataState(data);
        }, 3000);
    }, []);

  return (
    <div>
        <h1>State Data</h1>
        <h2>Name: {dataState.name}</h2>
        <h2>Institute: {dataState.institute}</h2>
        <h2>Course: {dataState.course}</h2>
    </div>
  )
}

export default UseEffectFirstHook