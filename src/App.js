import React from 'react';
import './style.css';

const ExampleProps = ({ hero, isNobelWinner, rating, title }) => {
  return (
    <div>
      {title}
      <p>Name: {hero.name}</p>
      <p>Rating: {rating}</p>
      <p>Superpowers: {hero.superPowers.join('/')}</p>
      {isNobelWinner && <p>Has won the nobel price</p>}
    </div>
  );
};

export default function App() {
  return (
    //Solo puede tener un padre. Una solucion a intentar mostrar estos dos parrafor seria usar:
    // div
    //React.Fragment
    // <> ... </>

    // <div>
    //   <p>Algo</p>
    //   <p>Algo mas</p>
    // </div>
    // <React.Fragment>
    //   <p>Algo</p>
    //   <p>Algo mas</p>
    // </React.Fragment>
    <>
      <p>Algo</p>
      <p>Algo mas</p>
    </>
  );
}
