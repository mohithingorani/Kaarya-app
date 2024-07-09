"use client"
import Image from "next/image";
import { createTodo } from "../actions/todos";
import { useState } from "react";




export function AddTodo() {
    const [addNewTodo, setAddNewTodo] = useState(false);

    return (<>

        {!addNewTodo ? <div onClick={() => setAddNewTodo(true)}>
            <div className=" max-w-xl w-full pr-2 flex justify-start gap-3">
                <div className="flex items-center"><Image src="/plus.svg" width="22" height="22" alt="plus"></Image></div>
                <button className="font-mono text-2xl">Add Todo </button>
            </div>
        </div> : null}

        {addNewTodo ? <div className="w-full max-w-xl bg-white border border-gray-800 rounded-lg shadow p-2 ">
            <form action={createTodo} className="space-y-1">
                <div>
                    <input type="name" name="title" id="title" className="text-gray-900 text-sm font-medium rounded-lg block w-full px-3 py-3 border-1  " placeholder="Task name" required />
                </div>
                <div>
                    <input type="name" name="description" id="description" className="text-gray-900 text-sm rounded-lg  block w-full px-3 py-3 " placeholder="Description" required />
                </div>
                <div className="flex justify-end gap-4">
                    <button onClick={()=>setAddNewTodo(false)} className="text-gray-900 bg-gray-400 opacity-8 max-w-sm w-max  focus:ring-4 focus:outline-none  font-normal rounded-lg text-sm px-5 py-2.5 text-center ">Cancel</button>
                    <button type="submit" className="text-gray-900 bg-orange-400 max-w-sm w-max  focus:ring-4 focus:outline-none  font-normal rounded-lg text-sm px-5 py-2.5 text-center ">Add Task</button>
                </div>
            </form>
        </div>
            : null}
    </>
    )
}