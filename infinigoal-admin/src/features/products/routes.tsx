// import ProductsList from "./pages/ProductsList";
// import ProductCreate from "./pages/ProductCreate";

// export const productRoutes = [
//   { path: "products", element: <ProductsList /> },
//   { path: "products/new", element: <ProductCreate /> },
// ];




//////////


import ProductsList from "./pages/ProductsList";
import ProductCreate from "./pages/ProductCreate";
import ProductEdit from "./pages/ProductEdit";

export const productRoutes = [
  { path: "products", element: <ProductsList /> },
  { path: "products/new", element: <ProductCreate /> },
  { path: "products/:id/edit", element: <ProductEdit /> }, // ✅ ADD THIS
];
