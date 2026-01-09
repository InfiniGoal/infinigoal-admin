import ProductsList from "./pages/ProductsList";
import ProductCreate from "./pages/ProductCreate";

export const productRoutes = [
  { path: "products", element: <ProductsList /> },
  { path: "products/new", element: <ProductCreate /> },
];
