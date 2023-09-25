type Todo = {
  id: string
  createdAt: Date
  content: string
  completed: boolean
}

const Todo = ({ todo }: { todo: Todo }) => {
  return <div>{todo.content}</div>
}

export default Todo
