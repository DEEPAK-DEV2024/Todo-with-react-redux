import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
import { MdDeleteForever } from "react-icons/md";
function Todos() {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
        <>
            <h1 className='text-white text-center text-2xl'>My Todos</h1>
            <ul className='w-3/6 m-auto'>
                {
                    todos.map((todo) => (
                        <li key={todo.id} className='flex justify-between items-center bg-gray-800 px-10 py-2 rounded-md mb-2 text-xl'>
                            <div>{todo.text}</div>
                            <button
                                className='bg-red-500 hover:bg-red-700 text-white font-bold text-2xl p-2 rounded'
                                onClick={() => { dispatch(removeTodo(todo.id)) }}
                            >
                                <MdDeleteForever />
                            </button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Todos