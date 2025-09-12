import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Load from "./Load";

// Lazy load the Home component
const Home = lazy(() => import("./pages/home/Home"));
const Architecture = lazy(() => import("./pages/architecture/Architecture"));
const Product = lazy(() => import("./pages/poduct/Product"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Load />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
