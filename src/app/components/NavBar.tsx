import Image from "next/image";
import Link from "next/link";

// NavBar.tsx
export function NavBar() {
    return (
        <div className=" px-8 py-4 mx-4 rounded-xl bg-white/10 shadow-lg ring-1 ring-black/5 flex justify-between items-center ">
            <Image src="/logo.svg" alt="logo" width="120" height="150" />
            <div className="flex justify-end gap-8">
                <Login />
                <Button2 />
            </div>
        </div>
    )
}

export function Button2() {
    return (
        <Link href="/todos" >
            <button className="w-sm py-2 bg-teal-500 rounded-xl  text-center text-gray-800 text-lg font-medium font-['Poppins'] px-4 hover:bg-teal-700 hover:text-slate-300">
                Start for free
            </button>
        </Link>
    )
}

export function Login() {
    return (
        <div className="flex flex-col justify-center">
            <Link href="/login">
                <div className=" text-center text-white text-2xl font-medium font-['Poppins'] hover:text-slate-300">
                    Log in
                </div>
            </Link>
        </div>
    )
}
