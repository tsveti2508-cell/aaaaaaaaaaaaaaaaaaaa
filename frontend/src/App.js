import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "@/pages/Portfolio";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="App bg-[#050505] text-[#F3F4F6] min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}

export default App;
