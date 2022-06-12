import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen w-full p-4 lg:py-8 lg:px-12 bg-slate-700 flex justify-center items-center">
      <div className="h-full w-full border border-gray-200 rounded-lg"></div>
    </div>
  );
}

export default App;
