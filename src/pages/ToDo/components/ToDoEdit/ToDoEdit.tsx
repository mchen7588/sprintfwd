import React from 'react'
import { useToDoContext } from '../../../../components/ToDoContextProvider/ToDoContextProvider'

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
    toDoContext.setToDoList([...toDoContext.toDoList.slice(0, props.index), toDoEdit, ...toDoContext.toDoList.slice(props.index + 1)])
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
    <form onSubmit={toDoEditController.handleToDoEditSubmit}>
      <input
        type="text"
        value={toDoEditController.toDoEdit}
        onChange={toDoEditController.handleToDoEditChange}
      />
      <button disabled={!toDoEditController.toDoEdit} type="submit">
        save
      </button>
      <button onClick={toDoEditController.handleToDoEditCancel}>
        cancel
      </button>
    </form>
  )
}

export default ToDoEdit
