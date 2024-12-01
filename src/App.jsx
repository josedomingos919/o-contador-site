import "./styles/index.css";

import { HomePage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
