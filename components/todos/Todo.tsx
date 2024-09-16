import { todoProps } from "@/types"
import ChangeTodo from "./ChangeTodo"
import { EditTodo } from "./EditTodo"
import DeleteTodo from "./DeleteTodo"

export const Todo = ({todo}: {todo: todoProps}) => {

    const todoStyle = {
        textDecoration: todo.is_completed === true ? 'line-through' : 'none',
        opacity: todo.is_completed == true ? 0.5 : 1
    }
    return (
        <div style={todoStyle} className="w-10/12 mx-auto flex items-center justify-between bg-slate-900 py-4 px-20 rounded-2xl">
            {/* changee todo */}
            <ChangeTodo todo={todo} />
            <span className="text-center font-bold uppercase grow text-white">{ todo.title }</span>

            <div className="flex items-center mx-2">
                <EditTodo todo={todo} />
            </div>

            {/* Delete todo */}
            <div className="flex items-center mx-2">
                <DeleteTodo todo={todo} />
            </div>
        </div>
    )
}

