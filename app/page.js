import AddTodo from "@/components/todos/AddTodo";
import { prisma } from "./utils/prisma";
import { Todo } from "@/components/todos/Todo";

async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      is_completed: true,
      createdAt : true
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export default async function Home() {
  const data = await getData();

  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <span className="text-4xl font-extrabold uppercase">Todo App</span>
      <h1 className="text-5xl font-extrabold uppercase mb-5 text-center">
        <span className="lowercase">w/</span>Server Actions
      </h1>

      <div className="flex justify-center flex-col items-center">
        {/* input todo  */}
        <AddTodo />
        {/* map todo */}

        <div className="flex flex-col gap-5 items-center justify-center mt-20 w-screen">
          {data.map((todo, id) => (
            <div className="w-full" key={id}>
              {/* {todo.title} */}
              <Todo todo={todo} />
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}
