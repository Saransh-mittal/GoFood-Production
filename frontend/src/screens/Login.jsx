import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
const Login = () => {
  const [data, setData] = useState({email:"",password:""});
  const navigate = useNavigate();
  const inputHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const register = async (e) => {
    e.preventDefault();

    try {
      //console.log(data);
      const response = await fetch("/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password
        }),
      });

      const json = await response.json();
      //console.log(json);
      if (!json.success) alert("enter valid credentials");
      else {
        localStorage.setItem("authToken",json.authToken);
        localStorage.setItem("userEmail",data.email);
        //console.log(localStorage.getItem("authToken"));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <Navbar/>
    <div className="mt-5 w-50 mx-auto text-white">
      <form method="POST">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name="email"
            value={data.email}
            onChange={inputHandler}
            type="email"
            className="form-control bg-dark  text-white"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            value={data.password}
            onChange={inputHandler}
            type="password"
            className="form-control bg-dark text-white"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" onClick={register} className="btn btn-success">
          Submit
        </button>
        <button type="submit" onClick={() => navigate("/register")} className="btn btn-danger ms-4">
          I am a New User
        </button>
      </form>
    </div>
    </>
  );
};

export default Login;
