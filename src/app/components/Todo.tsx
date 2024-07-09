"use client"
import Image from "next/image"
import { useState, useTransition } from "react"
import { deleteTodo } from "../actions/todos"


export interface TodoProps {
    title: string;
    completed: boolean;
    description?: string;
    id: number;
}
export const Todo = ({ title, completed, id }: TodoProps) => {
    console.log(id);
    const [isPending, startTransition] = useTransition();
    async function handleDelete() {
        startTransition(async () => {
            await deleteTodo(id);
        })
    }

    return <div className="border max-w-xl w-full flex justify justify-start gap-3  border-gray-800 rounded-lg shadow px-2 py-2 bg-white mb-2">
        <div className="flex flex-col justify-center">
            <div onClick={handleDelete}>
                    <div className="">
                        <div className="flex flex-col justify-center">
                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-2 dark:bg-gray-700 " />
                        </div>
                    </div>
            </div>
        </div>
        <div>
            {title}
        </div>
    </div>
}
