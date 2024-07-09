// Home.tsx
import { Button } from "./components/Button";
import { NavBar } from "./components/NavBar";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-700 w-full min-h-screen">
      <div className="pt-8">
        <NavBar />
      </div>
      <div className="flex justify-center items-center min-h-screen">

        <div className="text-center">
          <div className="text-zinc-100 text-7xl font-medium font-['Poppins']">Organize your work</div>
          <div className="text-zinc-100 text-7xl font-medium font-['Poppins'] mt-6">and life, finally.</div>
          <div className="mt-8 text-stone-300 text-xl font-normal font-['Poppins']">
            Simplify life for both you and your team. The best task manager and to-do list app
          </div>
          <div className="flex justify-center mt-8">
            <Button />
          </div>
        </div>
      </div>

    </div>

  );
}
