import React from "react";
import "./style.css";

const ExampleProps = ({hero, isNobelWinner, rating, title}) => { 
  return (
    <div>{title}
    <p>Name: {hero.name}</p>
    <p>Rating: {rating}</p>
    <p>Superpowers: {hero.superPowers.join('/')}</p>
    {isNobelWinner && <p>Has won the nobel price</p>}
    </div>
  )
}

export default function App() {
  return (
    <div>
      <ExampleProps 
        hero={{
          name: 'Nelson Mandela',
          superPowers: ['Resilience', 'charm']
        }}
        isNobelWinner
        rating={10}
        title={<h1>A superhero facts</h1>}
      />
    </div>
  );
}
