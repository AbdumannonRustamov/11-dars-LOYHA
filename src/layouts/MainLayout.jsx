import { Outlet } from "react-router-dom";
import AuthCheck from "../pages/AuthCheck";

function MainLayout() {
  return (
    <div>
      <AuthCheck /> {/* Autentifikatsiya tekshiruvini amalga oshirish */}
      <header>
        {/* Navbar yoki boshqa umumiy komponentlar */}
      </header>
      <main>
        <Outlet /> {/* Bolalar komponentlari shu yerda render qilinadi */}
      </main>
    </div>
  );
}

export default MainLayout;
