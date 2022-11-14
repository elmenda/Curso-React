import React from 'react';
import './style.css';

function Hello(props){
  return (
    <h2 className="saludo">Hello {props.name}</h2>
  )
}

export default function App() {
  return (
    <>
      <Hello name="Pepe" />
    </>
  );
}
