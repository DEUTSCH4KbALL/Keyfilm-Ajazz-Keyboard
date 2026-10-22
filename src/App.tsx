import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Lineup from "./pages/Lineup";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="ajazz-ak820-pro" element={<Product />} />
        <Route path="lineup" element={<Lineup />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
