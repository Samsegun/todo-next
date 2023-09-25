import NewTodoForm from '@/components/NewTodoForm'
import TodoList from '@/components/TodoList'
import db from '@/utils/db'

const getData = async () => {
  await new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000))
  const todos = await db.todo.findMany({})
  return todos
}

const TodosPage = async () => {
  const todos = await getData()

  return (
    <>
      <TodoList todos={todos} />
    </>
  )
}

export default TodosPage
