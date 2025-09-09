import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Load from "./Load";

// Lazy load the Home component
const Home = lazy(() => import("./pages/home/Home"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Load />}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
