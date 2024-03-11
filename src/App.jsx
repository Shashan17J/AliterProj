import "./App.css";
import { Route, Routes } from "react-router-dom";

import Create from "./Pages/create";
import Delete from "./Pages/delete";
import Read from "./Pages/read";
import Update from "./Pages/update";

function App() {
  return (
    <div className=" flex min-h-screen w-screen flex-col bg-richblack-900 font-inter">
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/read" element={<Read />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
