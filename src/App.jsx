import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/homepage/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
