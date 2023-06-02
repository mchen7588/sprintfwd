import React from 'react'
import { v4 as uuidv4 } from "uuid"
import LayoutProvider from '../../components/LayoutProvider'
import ToDoRow from './components/ToDoRow'
import { useToDoContext, toDoListItem } from '../../components/ToDoContextProvider/ToDoContextProvider'

import './ToDo.css'

function useToDo() {
  const [newToDo, setNewToDo] = React.useState('')
  const toDoContext = useToDoContext()
  
  function handleNewToDoChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewToDo(event.target.value)
  }

  function handleNewToDoSubmit(event: React.FormEvent) {
    event.preventDefault()
    setNewToDo('')
    toDoContext.setToDoList([...toDoContext.toDoList, {title: newToDo, id: uuidv4()}])
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
      <div className="to-do-page-container">
        <form className="todo-form" onSubmit={toDoController.handleNewToDoSubmit}>
          <input
            className="todo-input"
            type="text"
            value={toDoController.newToDo}
            onChange={toDoController.handleNewToDoChange}
            placeholder="Enter a new todo..."
          />
          <button
            className="todo-submit-button"
            disabled={!toDoController.newToDo}
            type="submit"
          >
            Add
          </button>
        </form>
        <div className="to-do-list-container">
          {
            toDoController.toDoList.map((toDoItem: toDoListItem, index: number) => <ToDoRow key={toDoItem.id} toDoItem={toDoItem} index={index} />)
          }
        </div>
      </div>
    </LayoutProvider>
  )
}

export default ToDo
