import { Outlet } from "react-router-dom";
import AuthCheck from "../pages/AuthCheck";

function MainLayout() {
  return (
    <div>
      <AuthCheck /> 
      <header>
       
      </header>
      <main>
        <Outlet /> 
      </main>
    </div>
  );
}

export default MainLayout;
