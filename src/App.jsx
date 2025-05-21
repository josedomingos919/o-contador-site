import "./styles/index.css";

import { HomePage, Info } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route index path="/info/:type" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
