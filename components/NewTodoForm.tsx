import { newTodo } from '@/utils/actions'

const NewTodoForm = () => {
  return (
    <div>
      <form action={newTodo}>
        <input
          name="content"
          type="text"
          className="block border-purple-700
           border-2 focus:border-yellow-500 focus-within:border-yellow-500"
        />

        <button type="submit" className="bg-teal-600 text-white p-4 rounded-xl">
          new todo
        </button>
      </form>
    </div>
  )
}

export default NewTodoForm
