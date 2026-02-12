import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import Homepage from "./pages/Homepage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";

const App = () => {
  return (
    <div data-theme="forest" >

    <Toaster position="top-center" /> {/* <-- Add this here */}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;



