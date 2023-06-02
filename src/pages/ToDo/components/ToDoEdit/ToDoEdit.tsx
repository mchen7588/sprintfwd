import React from 'react'
import { useToDoContext } from '../../../../components/ToDoContextProvider/ToDoContextProvider'

import './ToDoEdit.css'

type ToDoEditProps = {
  toDoItem: string;
  index: number;
  handleEditToggle: () => void;
}

function useToDoEdit(props: ToDoEditProps) {
  const [toDoEdit, setToDoEdit] = React.useState(props.toDoItem)
  const toDoContext = useToDoContext()

  function handleToDoEditChange(event: React.ChangeEvent<HTMLInputElement>) {
    setToDoEdit(event.target.value)
  }

  function handleToDoEditSubmit(event: React.FormEvent) {
    event.preventDefault()
    toDoContext.setToDoList([...toDoContext.toDoList.slice(0, props.index), {...toDoContext[props.index], title: toDoEdit}, ...toDoContext.toDoList.slice(props.index + 1)])
    props.handleEditToggle()
  }

  function handleToDoEditCancel() {
    props.handleEditToggle()
  }

  return {
    handleToDoEditSubmit,
    toDoEdit,
    handleToDoEditChange,
    handleToDoEditCancel,
  }
}

function ToDoEdit(props: ToDoEditProps) {
  const toDoEditController = useToDoEdit(props)

  return (
    <form className="todo-edit-view" onSubmit={toDoEditController.handleToDoEditSubmit}>
      <input
        className="todo-edit-input"
        type="text"
        value={toDoEditController.toDoEdit}
        onChange={toDoEditController.handleToDoEditChange}
      />
      <div className="todo-edit-button-container">
        <button
          className="save-button"
          disabled={!toDoEditController.toDoEdit}
          type="submit"
        >
          Save
        </button>
        <button
          className="cancel-button"
          onClick={toDoEditController.handleToDoEditCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

export default ToDoEdit
