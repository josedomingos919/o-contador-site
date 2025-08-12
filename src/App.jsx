import "./styles/index.css";

import { HomePage, Info } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router";
import { SingInPage } from "./pages/singin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route index path="/info/:type" element={<Info />} />
        <Route index path="/singin" element={<SingInPage />} />
        <Route index path="/singup" element={"Teste"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
