import { useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { collection, getDocs } from "firebase/firestore";

function Home() {
  const [users, setUsers] = useState([]);
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


  useEffect(() => {
    const fetchUsers = async () => {
      const usersSnapshot = await getDocs(collection(db, "users"));
      const usersList = usersSnapshot.docs.map(doc => doc.data());
      setUsers(usersList);
    };

    fetchUsers();
  }, []);

  console.log(users);
  

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
        <span className="font-black text-lg mb-3">{`hello: ${userData?.displayName}`}</span>
        <div className="">
          <div className="w-40 h-60  rounded-md mt-1.5 text-center">
            <p className="btn btn-soft mb-2 btn-success">sunnatullo: online</p>
            <p className="btn btn-soft mb-2 btn-success">sunnatullo: online</p>
            <p className="btn btn-soft mb-2 btn-success">sunnatullo: online</p>
            <p className="btn btn-soft mb-2 btn-success">sunnatullo: online</p>
            <p className="btn btn-soft mb-2 btn-success">sunnatullo: online</p>
            <p className="btn btn-soft mb-2 btn-success">sunnatullo: online</p>
          </div>
        </div>
      </div>
      <div className="ml-48">
        <Navbar />
        <main className="content flex-grow">
          <h1 className="font-bold text-2xl ml-10 mt-6">Create New Recepies</h1>
          <div className="w-180 opacity-50  h-100  border-1 rounded-2xl ml-40 mt-5">
            <div className="mt-5 ml-5">
              <p className="font-black">Title</p>
              <input
                type="text"
                placeholder="Type here"
                className="input w-168 mt-2"
              />
              <p className="font-black mt-2">Cooking Time</p>
              <input
                type="text"
                placeholder="Type here"
                className="input w-168 mt-2"
              />
              <p className="font-black mt-2">Ingrediets</p>
              <input
                type="text"
                placeholder="Type here"
                className="input w-168 mt-2"
              />
              <p className="font-black mt-2">Title</p>
              <input
                type="text"
                placeholder="Type here"
                className="input w-168 mt-2"
              />
              <button className="btn btn-outline btn-accent rounded-1xl mt-2">Add</button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
