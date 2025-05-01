import React from 'react'
import TodoCard from './TodoCard';

export default function Todolist() {
  let Todos = [
    'learn for atleast 1 hour',
    'go and pay for the keyboard',
    'make your life better'
  ];
  return (
    <ul className='main'>
      {Todos.map((todo,todoIndex) =>{
        return(
          <TodoCard key={todoIndex}>

          </TodoCard>  
        )
      })}
    </ul>
  )
}
