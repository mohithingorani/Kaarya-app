import client from "@/db/db"



export async  function TaskNums(){
    const num = await client.todo.count();

    return <div className="py-1 text-gray-600">
        {num} Tasks
    </div>
}