export function Button() {
    return (
      <div className="relative inline-block">
        <div className="w-48 h-14 bg-teal-600 rounded-xl absolute top-2 left-0 -z-10" />
        <button className="w-48 h-12 bg-teal-500 rounded-xl relative z-10">
          <div className="text-center text-gray-800 text-2xl font-medium font-['Poppins']">Start for free</div>
        </button>
      </div>
    );
  }
  