import { Route, Routes } from "react-router-dom";
import ProductDetail from "./page/ProductDetail";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
