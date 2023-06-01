import React from 'react'
import ToDoEdit from '../ToDoEdit'
import ToDoRowItem from '../ToDoRowItem'

function ToDoRow(props: {toDoItem: string, index: number}) {
  const [editMode, setEditMode] = React.useState(false)

  function handleEditToggle() {
    setEditMode(!editMode)
  }

  return(
    <div>
      {
        editMode ? <ToDoEdit
          toDoItem={props.toDoItem}
          index={props.index}
          handleEditToggle={handleEditToggle}
        /> : <ToDoRowItem 
          toDoItem={props.toDoItem}
          index={props.index}
          handleEditToggle={handleEditToggle}
        />
      }
    </div>
  )
}

export default ToDoRow
