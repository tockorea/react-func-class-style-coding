import React, { useState } from 'react';
import '../App.css';
import FuncComp from './FuncComp';
import ClassComp from './ClassComp';

function App() {
  const [funcShow, setFuncShow] = useState(true);
  const [classShow, setClassShow] = useState(true);
  return (
    <div className="container">
      <h1>Hello World</h1>
      <input type="button" value="remove func" onClick={function () {
        setFuncShow(false);
      }} />
      <input type="button" value="remove class" onClick={function () {
        setClassShow(false);
      }} />
      {funcShow ? <FuncComp initNumber={2}></FuncComp> : null}
      {classShow ? <ClassComp initNumber={2}></ClassComp> : null}
    </div>
  );
}

export default App;
