import { getTodos } from "../actions/todos";
import { Todo } from "./Todo";

export async function Todos() {
    const todos = await getTodos();
    return <div>
        {todos.map((todo) => (
            <Todo key={todo.id} title={todo.title} completed={false} id={todo.id} />
            
        ))}
    </div>
}