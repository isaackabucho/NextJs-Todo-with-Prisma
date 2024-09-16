import { todoProps } from "@/types"
import Form from "../form/form"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import * as actions from "@/actions"
import { FaCheck } from "react-icons/fa";

const ChangeTodo = ({ todo }: {todo: todoProps}) => {
    return (
        <Form action={actions.changeStatus}>
            <Input name="inputId" value={todo.id} type="hidden" />
            <Button className={todo.is_completed ? 'bg-green-500 hover:bg-blue-400' : 'bg-blue-600 hover:bg-green-400'}
                type="submit">
                <FaCheck />
            </Button>

        </Form>
    )
}

export default ChangeTodo