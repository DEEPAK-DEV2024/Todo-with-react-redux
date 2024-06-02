import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <div className='mx-auto w-3/6 flex justify-center items-center'>
            <form onSubmit={addTodoHandler} className='mx-20 my-10 flex gap-5 items-center'>
                <input
                    type="text"
                    className='p-1 w-80 bg-slate-500 outline-0 border-2 border-gray-300 rounded-md placeholder:text-white'
                    value={input}
                    placeholder='Add Todo Here'
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type='submit' className='bg-blue-500 py-1 px-3 text-lg'>Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo