// import { Routes, Route, Navigate } from "react-router-dom";
// import AdminLayout from "../shared/layout/AdminLayout";
// import { productRoutes } from "../features/products/routes";

// export default function App() {
//   return (
//     <Routes>
//       {/* Default redirect */}
//       <Route path="/" element={<Navigate to="/products" replace />} />

//       {/* Admin layout */}
//       <Route path="/" element={<AdminLayout />}>
//         {productRoutes.map((r) => (
//           <Route key={r.path} path={r.path} element={r.element} />
//         ))}
//       </Route>
//     </Routes>
//   );
// }





///////// ***** above worked before the motherbaord reset


import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../shared/layout/AdminLayout";

import { productRoutes } from "../features/products/routes";
import { categoriesRoutes } from "../features/categories/routes";
import { brandRoutes } from "../features/brands/routes";
import { tagRoutes } from "../features/tags/routes";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/products" replace />} />

      <Route path="/" element={<AdminLayout />}>
        {productRoutes.map((r) => (
          <Route key={r.path} path={r.path} element={r.element} />
        ))}

        {categoriesRoutes.map((r) => (
          <Route key={r.path} path={r.path} element={r.element} />
        ))}

        {brandRoutes.map((r) => (
          <Route key={r.path} path={r.path} element={r.element} />
        ))}

        {tagRoutes.map((r) => (
          <Route key={r.path} path={r.path} element={r.element} />
        ))}
      </Route>
    </Routes>
  );
}
