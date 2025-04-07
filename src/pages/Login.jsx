import { Link, useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/config";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Tizimga kirdingiz:", userCredential.user);
      navigate("/");
    } catch (error) {
      console.error("Xatolik:", error.message);
      alert("Email yoki parol xato");
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google bilan tizimga kirdingiz:", user);
      navigate("/");
    } catch (error) {
      console.error("Google loginda xatolik:", error.message);
      alert("Google bilan tizimga kiritishda xatolik yuz berdi: " + error.message);
    }
  };

  return (
    <section>
      <div className="h-screen grid grid-cols-1 md:grid-cols-2">
        <div className="login-register-left-section hidden md:flex"></div>
        <div className="grid place-items-center login-register-left-section md:bg-none">
          <div className="absolute left-0 top-0 bottom-0 w-full bg-black opacity-50 z-10 md:hidden"></div>
          <form onSubmit={handleSubmit} className="w-96 relative z-20">
            <h2 className="text-3xl text-center mb-5 font-bold text-white md:text-black">
              Login
            </h2>

            <FormInput label="Email:" name="email" type="email" />
            <FormInput label="Password:" name="password" type="password" />

            <div className="flex items-center gap-5 mt-8 mb-8">
              <button type="submit" className="btn btn-primary grow">Login</button>
              <button
                type="button"
                className="btn btn-secondary grow"
                onClick={handleGoogleLogin} 
              >
                Google
              </button>
            </div>

            <p className="text-center opacity-75">
              {"If you don't have an account"}
              <Link className="link link-primary" to="/register"> Register</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
