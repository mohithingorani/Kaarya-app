import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";
import { TaskNums } from "../components/TaskNums";
import { getTodos } from "../actions/todos";
import { Todos } from "../components/Todos";


export default  function TodoPage() {


    return <div>
        <div className="w-full grid grid-cols-6">
            <div className="col-span-2">
            </div>
            <div className="col-span-4">
                <div className="my-12">
                    <div className="font-bold text-4xl">Today</div>
                    <TaskNums />
                    <Todos/>
                    <AddTodo />
                </div>
            </div>
        </div>
    </div>
}