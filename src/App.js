import Card from "./components/Card/index";
import Surah from "./components/Surah/index";
import Nav from "./components/Nav/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter className="app">
      <Nav />
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
