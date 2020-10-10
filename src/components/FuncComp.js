import React, { useEffect, useState } from 'react';

export default function FuncComp(props) {
  const [number, setNumber] = useState(props.initNumber);
  const [date, setDate] = useState((new Date()).toString());
  // side effect
  useEffect(() => {
    console.log('%cfunc => useEffect (componentDidMount)', 'color:blue');
    return () => {
      console.log('%cfunc => useEffect return (componentWillUnMount)', 'color:blue');
    }
  }, []);
  useEffect(() => {
    console.log('%cfunc => useEffect number (componentDidMount & componentDidUpdate)', 'color:blue');
    document.title = number;
    return () => {
      console.log('%cfunc => useEffect number return (componentDidMount & componentDidUpdate)', 'color:blue');
    }
  }, [number]);
  useEffect(() => {
    console.log('%cfunc => useEffect date (componentDidMount & componentDidUpdate)', 'color:blue');
    document.title = date;
    return () => {
      console.log('%cfunc => useEffect date return (componentDidMount & componentDidUpdate)', 'color:blue');
    }
  }, [date]);
  console.log('%cfunc => render', 'color:blue');
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {number}</p>
      <p>Date : {date}</p>
      <input type="button" value="random" onClick={
        function () {
          setNumber(Math.random());
        }
      } />
      <input type="button" value="date" onClick={
        function () {
          setDate((new Date()).toString());
        }
      } />
    </div>
  )
};