import React, { useState } from 'react';




const TodoC = (props) => {

  const [state, setState] = useState({newTodo:'', todos: []});

 

  //function setState does not shallow merge

  //method this.setState DOES shallow merge

  const inputChangeHandler = (event) => {

    setState({...state, newTodo: event.target.value});

  };



  const addTodoHandler = () => {

   setState({newTodo:'', todos:state.todos.concat(state.newTodo)})

  };



  return (

    <>

      <input

        placeholder="new todo"

        onChange={inputChangeHandler}

        value={state.newTodo}

      />

      <button onClick={addTodoHandler}>Add</button>

      <hr />

      <ul>

        {state.todos.map((todo) => (

          <li>{todo}</li>

        ))}

      </ul>

    </>

  );

};

export default TodoC;