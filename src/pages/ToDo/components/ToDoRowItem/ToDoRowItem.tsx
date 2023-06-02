import { useToDoContext } from '../../../../components/ToDoContextProvider/ToDoContextProvider'

import './ToDoRowItem.css'

function ToDoRowItem(props: {toDoItem: string, index: number, handleEditToggle: () => void}) {
  const toDoContext = useToDoContext()

  function handleDeleteClick() {
    toDoContext.setToDoList([...toDoContext.toDoList.slice(0, props.index), ...toDoContext.toDoList.slice(props.index + 1)])
  }
  
  return (
    <div className="todo-item">
      <span className="todo-text">{props.toDoItem}</span>
      <div className="todo-button-container">
        <button className="edit-button" onClick={props.handleEditToggle}>
          Edit
        </button>
        <button className="delete-button" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default ToDoRowItem
