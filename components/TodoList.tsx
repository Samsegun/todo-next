import Todo from './Todo'

type Todos = {
  id: string
  createdAt: Date
  content: string
  completed: boolean
}[]

const TodoList = ({ todos }: { todos: Todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
