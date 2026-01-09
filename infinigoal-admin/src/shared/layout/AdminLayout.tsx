import { Outlet, NavLink } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "system-ui" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: 260,
          padding: 16,
          borderRight: "1px solid #e5e7eb",
          background: "#fafafa",
        }}
      >
        <h2 style={{ marginBottom: 16 }}>InfiniGoal Admin</h2>

        <nav>
          <NavLink to="/products">Products</NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: 24 }}>
        <Outlet />
      </main>
    </div>
  );
}
