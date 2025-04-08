import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <main className="p-4">
      {/* Navbar yoki sidebar bo‘lsa shu yerga qo‘shing */}
      <Outlet />
    </main>
  );
}

export default MainLayout;
