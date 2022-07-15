import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import './styles.css'

interface props {
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
  completedTodos: Todo[],
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
};

const TodoList: React.FC<props> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos }) => {
  return (
    <div className='container'>
      <Droppable droppableId='TodosList'>
        {(provided) => (
          <div className='todos'
            ref={provided.innerRef}
            {...provided.droppableProps}>
            <span className='todos__heading'>Active Tasks</span>
            {todos.map((todo, index) => (
              <SingleTodo
                index={index}
                todo={todo}
                key={todo.id}
                todos={todos}
                setTodos={setTodos} />
            ))};
          </div>
        )}
        {provided.placeholder}
      </Droppable>
      <Droppable droppableId='TodosRemove'>
        {(provided) => (
          <div className='todos remove'
            ref={provided.innerRef}
            {...provided.droppableProps}>
            <span className='todos__heading'>Completed Tasks</span>
            {completedTodos.map((todo, index) => (
              <SingleTodo
                index={index}
                todo={todo}
                key={todo.id}
                todos={completedTodos}
                setTodos={setCompletedTodos} />
            ))}
          </div>
        )}
        {provided.placeholder}
      </Droppable>
    </div>
  );
};

export default TodoList