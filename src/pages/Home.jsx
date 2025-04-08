import { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
  const [userData, setUserData] = useState(() => {
    const saved = localStorage.getItem("userData");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      const userInfo = {
        displayName: currentUser.displayName || "No name",
      };

      setUserData(userInfo);
      localStorage.setItem("userData", JSON.stringify(userInfo)); 
    }
  }, []);

  return (
    <div className="page-container flex relative">
      <div className="side-bar absolute top-0 left-0 w-48 h-full bg-amber-100 p-4 space-y-4">
        <div>
          <p className="font-bold text-lg">{userData?.displayName}</p>
        </div>

        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
            <img
              src="https://st.depositphotos.com/40001914/60364/i/450/depositphotos_603643952-stock-illustration-illustration-businessman-cartoon-avatar.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="ml-48">
        <Navbar />
        <main className="content flex-grow">
          <h1>HOME</h1>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
