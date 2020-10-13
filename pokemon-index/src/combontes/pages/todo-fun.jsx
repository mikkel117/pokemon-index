import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function TodoFun() {
  const { register, handleSubmit, errors } = useForm();
  const [todo, setTodo] = useState([]);

  const onSubmit = (data) => {
    const item = { text: data.todo, id: new Date().getTime() };
    setTodo(todo.concat(item));
  };

  const Delete = (id) => {
    const filtered = todo.filter((item) => {
      if (item.id !== id) {
        console.log(item);
        return item;
      }
    });
    setTodo(filtered);
  };

  return (
    <section className="todo-section">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">
          <h1>Add todo: </h1>
        </label>
        <br />
        <input
          type="text"
          placeholder="todo"
          maxLength="30"
          name="todo"
          ref={register({
            required: 'der skal være en todo',
          })}
        />
        <input type="submit" value="add" />
        <br />
        {errors.todo && <mark> {errors.todo.message} </mark>}
      </form>
      <ul>
        {todo &&
          todo.map((todo) => {
            return (
              <li key={todo.id}>
                <p>{todo.text}</p>
                <button
                  onClick={() => {
                    Delete(todo.id);
                  }}
                >
                  X
                </button>
              </li>
            );
          })}
      </ul>
    </section>
  );
}
