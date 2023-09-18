import React from 'react'
import { Task } from '@/types/tasks';
import { type } from 'os';

type deleteTaskType = {
  (id:number):void;
};

interface TodoProps {
  todoItem: Task;
  deleteTask: deleteTaskType;
}

const Todo = ({ todoItem, deleteTask }:TodoProps) => {
  
  return (
      <>
        <li 
            key={todoItem.id}
            className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow" draggable={true}>
            <span className="text-gray-700">{todoItem.text}</span>
            <div>
                <button className="text-green-500 hover:text-green-700">Edit</button>|
                <button className="text-red-500 hover:text-red-700" onClick={()=>deleteTask(todoItem.id)}>Remove</button>
            </div>
        </li>
      </>
    );
  }

export default Todo;
