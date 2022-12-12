import Card from "./components/Card/index";
import Surah from "./components/Surah";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter className="app">
      <Routes>
        <Route path="/">
          <Route index element={<Card />} />
          <Route path="/:id" element={<Surah />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
