"use server"

import client from "@/db/db"
import { redirect } from "next/navigation";


export async function createTodo(formData: FormData) {
    try {
        const result = Object.fromEntries(formData.entries());
        const { title, description } = result;
        await client.todo.create({
            data: {
                title: title as string,
                description: description as string,
                completed: false
            }
        });
        console.log("Created user")
    }
    catch (err) {
        console.log("Error creating todo", err);
    }
    redirect("/todos");

}


export async function getTodos() {
    const todos = await client.todo.findMany({
        select: {
            title: true,
            description: true,
            completed: false,
            id: true
        }
    });
    return todos
}
export async function deleteTodo(id : number) {
    console.log(id)
    await client.todo.delete({
        where: {
            id
        }
    });
    redirect("/todos")
}
