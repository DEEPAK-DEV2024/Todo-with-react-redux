import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <>
      <h1 className='text-3xl text-center py-2'>Learn About Redux</h1>

      <AddTodo />
      <Todos />
    </>
  )
}

export default App