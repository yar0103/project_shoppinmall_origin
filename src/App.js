import "./App.css";
import { Routes, Route } from "react-router-dom";

//컴포넌트
import { ProductList } from "./routes/productList";
import { Main } from "./main";
import { UserEdit } from "./routes/userEdit";


function App() {
  return (
    <section className="sec">
      <Routes>
        <Route index path="" element={<Main></Main>}></Route>
        <Route path="productList" element={<ProductList />}></Route>
        <Route path="userEdit" element={<UserEdit />}></Route>
      </Routes>
    </section>
  );
}

export default App;
