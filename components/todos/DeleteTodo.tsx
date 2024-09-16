import { todoProps } from '@/types'
import React from 'react'
import Form from '../form/form';
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { MdDelete } from "react-icons/md";
import * as actions from '@/actions'

const DeleteTodo = ({ todo }: { todo: todoProps }) => {
    return (
        <Form action={actions.deleteTodo}>
            <Input type='hidden' name='inputId' value={todo.id} />

            <Button type='submit' variant='destructive'>
                <MdDelete />
            </Button>

        </Form>
    )
}

export default DeleteTodo