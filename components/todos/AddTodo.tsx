import * as actions from "@/actions"
import Form from "../form/form"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

const AddTodo = () => {
  return (
    <div>
      <Form action={actions.createTodo}>
      <div className="flex gap-2">
        <Input name="input" placeholder="Add todos here"/>
        <Button type="submit">Add</Button>
      </div>
      </Form>
    </div>
  )
}

export default AddTodo