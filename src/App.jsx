import "./App.css";
import "./Reset.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Characters } from "./pages/Characters";
import { Episodes } from "./pages/Episodes";
import { Location } from "./pages/Location";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Characters />} />
          <Route path="/episodios" element={<Episodes />} />
          <Route path="/localizacao" element={<Location />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
