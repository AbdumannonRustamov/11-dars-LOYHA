import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import FormInput from "../components/FormInput";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    displayName: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    console.log("Foydalanuvchi royxatdan otdi:", formData);
    navigate("/"); 
  };

  return (
    <section>
      <div className="h-screen grid grid-cols-1 md:grid-cols-2">
        <div className="login-register-left-section hidden md:flex"></div>
        <div className="grid place-items-center login-register-left-section md:bg-none">
          <form onSubmit={handleSubmit} className="w-96">
            <h2 className="text-3xl text-center mb-5 font-bold">Register</h2>
            <FormInput label="Email:" name="email" type="email" onChange={handleChange} />
            <FormInput label="Display Name:" name="displayName" type="text" onChange={handleChange} />
            <FormInput label="Password:" name="password" type="password" onChange={handleChange} />
            <div className="flex items-center gap-5 mt-8 mb-8">
              <button type="submit" className="btn btn-primary grow">Register</button>
              <button type="button" className="btn btn-secondary grow">Google</button>
            </div>
            <p className="text-center opacity-75">
              If you have an account
              <Link className="link link-primary" to="/login"> Login</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
