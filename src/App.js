import React from 'react';
import './style.css';

function MyButton (props) {
  const styleObject={}
  if(props.isGrand){
    styleObject.background = 'green'
    styleObject.fontSize = '150%'
  }
  return <button style = {styleObject}>{props.legend}</button>
}

export default function App() {
  return (
    <>
      <MyButton isGrand legend="Buy" />
      <MyButton legend="Cancel" />
    </>
  );
}

