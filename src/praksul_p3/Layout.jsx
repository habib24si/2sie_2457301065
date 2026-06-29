import { Link, Outlet, useLocation } from "react-router-dom";

const menuItems = [
  { path: "/", label: "Home" },
  { path: "/userform", label: "Tambah User" },
  { path: "/hitung-gaji", label: "Hitung Gaji" },
];

export default function Layout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen">
      <aside className="w-56 bg-gray-800 text-white p-4">
        <h2 className="text-lg font-bold mb-4">Menu</h2>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`block px-3 py-2 rounded ${
                  location.pathname === item.path
                    ? "bg-blue-600"
                    : "hover:bg-gray-700"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
