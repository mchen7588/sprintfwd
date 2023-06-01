import { useToDoContext } from '../../../../components/ToDoContextProvider/ToDoContextProvider'

function ToDoRowItem(props: {toDoItem: string, index: number, handleEditToggle: () => void}) {
  const toDoContext = useToDoContext()

  function handleDeleteClick() {
    toDoContext.setToDoList([...toDoContext.toDoList.slice(0, props.index), ...toDoContext.toDoList.slice(props.index + 1)])
  }
  
  return (
    <>
      <span>{props.toDoItem}</span>
      <button onClick={props.handleEditToggle}>
        edit
      </button>
      <button onClick={handleDeleteClick}>
        delete
      </button>
    </>
  )
}

export default ToDoRowItem
