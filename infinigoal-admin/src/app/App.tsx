import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../shared/layout/AdminLayout";
import { productRoutes } from "../features/products/routes";

export default function App() {
  return (
    <Routes>
      {/* Default redirect */}
      <Route path="/" element={<Navigate to="/products" replace />} />

      {/* Admin layout */}
      <Route path="/" element={<AdminLayout />}>
        {productRoutes.map((r) => (
          <Route key={r.path} path={r.path} element={r.element} />
        ))}
      </Route>
    </Routes>
  );
}
