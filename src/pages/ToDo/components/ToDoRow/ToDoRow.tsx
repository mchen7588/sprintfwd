import React from 'react'
import ToDoEdit from '../ToDoEdit'
import ToDoRowItem from '../ToDoRowItem'
import { toDoListItem } from '../../../../components/ToDoContextProvider/ToDoContextProvider'

function ToDoRow(props: {toDoItem: toDoListItem, index: number}) {
  const [editMode, setEditMode] = React.useState(false)

  function handleEditToggle() {
    setEditMode(!editMode)
  }

  return(
    <div>
      {
        editMode ? <ToDoEdit
          toDoItem={props.toDoItem.title}
          index={props.index}
          handleEditToggle={handleEditToggle}
        /> : <ToDoRowItem 
          toDoItem={props.toDoItem.title}
          index={props.index}
          handleEditToggle={handleEditToggle}
        />
      }
    </div>
  )
}

export default ToDoRow
