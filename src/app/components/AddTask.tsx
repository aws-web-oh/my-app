// 'use client';

// import React from 'react'
// import { ChangeEvent, FormEvent, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Task } from '@/types/tasks';

// const AddTask = () => {
//     const router = useRouter();
//     const [newTaskValue, setNewTaskValue] = useState<string>("");

//     var tasksList:Task[] = [];
//     const [ todos , setTodos] = useState(tasksList);

//     // Add taskボタン
//     const handleSubmit = async (e: FormEvent) => {
//       e.preventDefault();

//       var tasksList:Task[] = [];
//       var valueObject:any = null;

//       const storage : string | null = localStorage.getItem("key");
//       if(storage)
//         valueObject = JSON.parse(storage);
//       else
//         valueObject = null;
  
//       if(valueObject)
//         tasksList = valueObject;
        
//       todos.push({id:Math.floor(Math.random()*1e5), text:newTaskValue});
//       setTodos(todos);

//       var jsonValue = JSON.stringify(todos);
//       localStorage.setItem("key", jsonValue);

//       setNewTaskValue("");
//       router.refresh();
//     };

//   return (
//     <form className="mb-4 space-y-3" onSubmit={handleSubmit}>
//         <input
//             value={newTaskValue}
//             onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                 setNewTaskValue(e.target.value)
//         }
//         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
//         type="text"
//         placeholder="New task..."
//         />
//         <button className="w-full px-4 py-2 text-white bg-blue-500 rounded transform transition-transform duration-200 hover:bg-blue-400 hover:scale-95">
//         Add task
//         </button>
//   </form>
//   )
// }

// export default AddTask