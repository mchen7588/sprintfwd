import React from 'react'

const ToDoContext = React.createContext<any | undefined>(undefined)

export type toDoListItem = {
  title: string;
  id: string;
} 

export function useToDoContext() {
  return React.useContext(ToDoContext)
}

function useToDoContextProvider() {
  const [toDoList, setToDoList] = React.useState<toDoListItem[]>([])

  return {
    toDoList,
    setToDoList,
  }
}

const ToDoContextProvider = ({ children }: { children: React.ReactNode }) => {
  const controller = useToDoContextProvider()

  return <ToDoContext.Provider value={controller}>{children}</ToDoContext.Provider>
};

export default ToDoContextProvider
