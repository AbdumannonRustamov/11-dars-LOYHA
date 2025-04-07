import { Link, useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

function Register() {
  const navigate = useNavigate();

  // Email orqali ro‘yxatdan o‘tish
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const displayName = formData.get("displayName");
    const password = formData.get("password");

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Display name ni sozlash
      await updateProfile(userCredential.user, {
        displayName: displayName,
      });

      console.log("Foydalanuvchi yaratildi:", userCredential.user);
      navigate("/");
    } catch (error) {
      console.error("Xatolik:", error.message);
      alert("Ro‘yxatdan o‘tishda xatolik yuz berdi: " + error.message);
    }
  };

  // Google orqali ro‘yxatdan o‘tish
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Agar displayName bo'lmasa, random ism beriladi
      if (!user.displayName) {
        const defaultName = "User" + Math.floor(Math.random() * 10000);
        await updateProfile(user, { displayName: defaultName });
      }

      console.log("Google login bilan foydalanuvchi:", user);
      navigate("/");
    } catch (error) {
      console.error("Google loginda xatolik:", error.message);
      alert("Google bilan ro‘yxatdan o‘tishda xatolik yuz berdi: " + error.message);
    }
  };

  return (
    <section>
      <div className="h-screen grid grid-cols-1 md:grid-cols-2">
        <div className="login-register-left-section hidden md:flex"></div>
        <div className="grid place-items-center login-register-left-section md:bg-none">
          <form onSubmit={handleSubmit} className="w-96">
            <h2 className="text-3xl text-center mb-5 font-bold">Register</h2>

            <FormInput label="Email:" name="email" type="email" />
            <FormInput label="Display Name:" name="displayName" type="text" />
            <FormInput label="Password:" name="password" type="password" />

            <div className="flex items-center gap-5 mt-8 mb-8">
              <button type="submit" className="btn btn-primary grow">
                Register
              </button>
              <button
                type="button"
                className="btn btn-secondary grow"
                onClick={handleGoogleLogin}
              >
                Google
              </button>
            </div>

            <p className="text-center opacity-75">
              If you have an account
              <Link className="link link-primary" to="/login">
                {" "}
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
