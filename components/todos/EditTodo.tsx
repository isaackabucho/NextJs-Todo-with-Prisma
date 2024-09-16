"use client"

import { useState } from 'react'
import { Button } from '../ui/button'
import { MdModeEdit } from "react-icons/md";
import Form from '../form/form';
import { Input } from '../ui/input';
import { todoProps } from '@/types';
import * as actions from "@/actions"

export const EditTodo = ({ todo }: { todo: todoProps }) => {

    const [editTodoState, setEditTodoState] = useState(false)

    const handleEdit = () => {
        if(todo.is_completed){
            return;
        }
        setEditTodoState(!editTodoState);
    };

    const handleSubmit = () => {
        setEditTodoState(!editTodoState)
    }

    return (
        <div className='flex gap-5 items-center'>
            <Button onClick={handleEdit} variant='outline' className='bg-blue-500 hover:bg-blue-900'>
                <MdModeEdit />
            </Button>

                {editTodoState ? (
                    <Form action={actions.editTodo} onSubmit={handleSubmit}>
                        <Input name='inputId' value={todo.id} type='hidden' />
                        <div className='flex justify-center'>
                            <Input name='newTitle' type='text' placeholder='Edit todo' className='text-white' />

                            <Button type='submit'>Save</Button>
                        </div>

                    </Form>
                ) : null}

        </div>
    )
}
