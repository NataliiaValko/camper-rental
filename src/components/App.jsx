import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navigation from "./Navigation";

const CatalogPage = lazy(() => import("../pages/CatalogPage"));
const FavoritesPage = lazy(() => import("../pages/FavoritesPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const Features = lazy(() => import("./Features"));
const Reviews = lazy(() => import("./Reviews"));

export default function App() {
  return (
    <>
      <Navigation />
      <ToastContainer />

      <Suspense fallback={<b>Loading page...</b>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="catalog/:id" element={<CatalogPage />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
          <Route path="/favorites" element={<FavoritesPage />} />

          <Route path="*" element={<Navigate to="/" replace />}  />
        </Routes>
      </Suspense>
    </>
  );
}
