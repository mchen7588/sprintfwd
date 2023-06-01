import React from 'react'
import LayoutProvider from '../../components/LayoutProvider'
import ToDoRow from './components/ToDoRow'
import { useToDoContext } from '../../components/ToDoContextProvider/ToDoContextProvider'

function useToDo() {
  const [newToDo, setNewToDo] = React.useState('')
  const toDoContext = useToDoContext()
  
  function handleNewToDoChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewToDo(event.target.value)
  }

  function handleNewToDoSubmit(event: React.FormEvent) {
    event.preventDefault()
    setNewToDo('')
    toDoContext.setToDoList([...toDoContext.toDoList, newToDo])
  }

  return {
    toDoList: toDoContext.toDoList,
    newToDo,
    handleNewToDoSubmit,
    handleNewToDoChange,
  }
}

function ToDo() {
  const toDoController = useToDo()

  return (
    <LayoutProvider>
      <div>
        <form onSubmit={toDoController.handleNewToDoSubmit}>
          <input
            type="text"
            value={toDoController.newToDo}
            onChange={toDoController.handleNewToDoChange}
          />
          <button disabled={!toDoController.newToDo} type="submit">
            add
          </button>
        </form>
        <div>
          {
            toDoController.toDoList.map((toDoItem: string, index: number) => <ToDoRow key={index} toDoItem={toDoItem} index={index} />)
          }
        </div>
      </div>
    </LayoutProvider>
  )
}

export default ToDo
