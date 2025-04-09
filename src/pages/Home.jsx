import { useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Create from "../pages/Create";
import { collection, getDocs } from "firebase/firestore";

function Home() {
  const [ setUsers] = useState([]);
  const [userData, setUserData] = useState(() => {
    const saved = localStorage.getItem("userData");
    return saved ? JSON.parse(saved) : null;
  });
  const [showCreate, setShowCreate] = useState(false); // Create form ko'rsatish uchun state

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

  useEffect(() => {
    const fetchUsers = async () => {
      const usersSnapshot = await getDocs(collection(db, "users"));
      const usersList = usersSnapshot.docs.map((doc) => doc.data());
      setUsers(usersList);
    };

    fetchUsers();
  }, );

  return (
    <div className="page-container flex relative">
      <div className="side-bar absolute top-0 left-0 w-48 h-full border-1 rounded-md p-4 space-y-4">
        <div>
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
              <img
                src="https://st.depositphotos.com/40001914/60364/i/450/depositphotos_603643952-stock-illustration-illustration-businessman-cartoon-avatar.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <span className="font-black text-lg ">{`hello: ${userData?.displayName}`}</span>
        <button 
          className="btn btn-success mt-10"
          onClick={() => setShowCreate(!showCreate)} // Create formni ko'rsatish va yashirish
        >
          Create
        </button>
      </div>

      <div className="ml-48">
        <Navbar />
        <main className="content flex-grow">
          {showCreate && <Create />} {/* Create form faqat showCreate true bo'lsa ko'rsatiladi */}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
