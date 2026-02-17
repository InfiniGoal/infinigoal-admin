// import { Outlet, NavLink } from "react-router-dom";

// export default function AdminLayout() {
//   return (
//     <div style={{ display: "flex", minHeight: "100vh", fontFamily: "system-ui" }}>
//       {/* Sidebar */}
//       <aside
//         style={{
//           width: 260,
//           padding: 16,
//           borderRight: "1px solid #e5e7eb",
//           background: "#fafafa",
//         }}
//       >
//         <h2 style={{ marginBottom: 16 }}>InfiniGoal Admin</h2>

//         <nav>
//           <NavLink to="/products">Products</NavLink>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main style={{ flex: 1, padding: 24 }}>
//         <Outlet />
//       </main>
//     </div>
//   );
// }



//////// ***** above code wokred before the motherboard reset


import { Outlet, NavLink } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "system-ui",
        background: "#f7f8fa",
      }}
    >
      <aside
        style={{
          width: 260,
          padding: 16,
          borderRight: "1px solid #e5e7eb",
          background: "#fafafa",
        }}
      >
        <h2 style={{ marginBottom: 20 }}>InfiniGoal Admin</h2>

        <nav style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <NavLink to="/products" style={navStyle}>
            Products
          </NavLink>

          <NavLink to="/categories-v2" style={navStyle}>
            Categories
          </NavLink>

          <NavLink to="/brands" style={navStyle}>
            Brands
          </NavLink>

          <NavLink to="/tags" style={navStyle}>
            Tags
          </NavLink>
        </nav>
      </aside>

      <main style={{ flex: 1, padding: 24 }}>
        <Outlet />
      </main>
    </div>
  );
}

const navStyle = ({ isActive }: { isActive: boolean }) => ({
  padding: "10px 14px",
  borderRadius: 10,
  textDecoration: "none",
  fontWeight: 700,
  color: isActive ? "#bf9602" : "#1f2937",
  background: isActive ? "#FFF7D6" : "transparent",
  transition: "all 0.15s ease",
});
