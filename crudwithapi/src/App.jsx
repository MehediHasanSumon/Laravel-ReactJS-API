import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import EditStudent from "./components/pages/EditStudent";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="edit/:id" element={<EditStudent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
