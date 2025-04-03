import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import FormInput from "../components/FormInput";

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

    if (storedUser.email === loginData.email && storedUser.password === loginData.password) {
      console.log("Tizimga muvaffaqiyatli kirdingiz!");
      navigate("/"); // Home sahifasiga yo‘naltirish
    } else {
      alert("Email yoki parol xato!");
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
            <FormInput label="Email:" name="email" type="email" onChange={handleChange} />
            <FormInput label="Password:" name="password" type="password" onChange={handleChange} />
            <div className="flex items-center gap-5 mt-8 mb-8">
              <button type="submit" className="btn btn-primary grow">Login</button>
              <button type="button" className="btn btn-secondary grow">Google</button>
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
