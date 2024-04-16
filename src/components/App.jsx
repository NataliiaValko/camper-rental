import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navigation from "./Navigation";

const CatalogPage = lazy(() => import("../pages/CatalogPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const FavoritesPage = lazy(() => import("../pages/FavoritesPage"));
const HomePage = lazy(() => import("../pages/HomePage"));

export default function App() {
  return (
    <>
      <Navigation />
      <ToastContainer />

      <Suspense fallback={<b>Loading page...</b>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
