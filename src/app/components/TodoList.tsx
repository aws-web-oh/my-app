import React from 'react'

const TodoList = () => {
  return (
    <ul className="space-y-3">
        <li className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
            <span className="text-gray-700">Task 1</span>
            <div>
                <button className="text-green-500 hover:text-green-700">Edit</button>|
                <button className="text-red-500 hover:text-red-700">Remove</button>
            </div>
        </li>
    </ul>
  )
}

export default TodoList