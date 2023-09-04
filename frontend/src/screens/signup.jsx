import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
const signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    password: "",
  });

  const inputHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const register = async (e) => {
    e.preventDefault();

    try {
      //console.log(data);
      const response = await fetch("/api/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          password: data.password,
          location: data.location,
        }),
      });

      const json = await response.json();
      console.log(json);
      if (!json.success) alert("enter valid credentials");
      else {
        navigate("/login");
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
            Username
          </label>
          <input
            name="name"
            value={data.name}
            onChange={inputHandler}
            type="text"
            className="form-control bg-dark text-white"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
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
          <label htmlFor="exampleInputEmail1" className="form-label">
            Phone no.
          </label>
          <input
            name="phone"
            value={data.phone}
            onChange={inputHandler}
            type="number"
            className="form-control bg-dark text-white"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Location
          </label>
          <input
            name="location"
            value={data.location}
            onChange={inputHandler}
            type="text"
            className="form-control bg-dark text-white"
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
        <div className="container">
          <button
            type="submit"
            onClick={register}
            className="btn btn-success"
          >
            Submit
          </button>
          <button
            type="submit"
            onClick={() => navigate("/login")}
            className="btn btn-danger ms-4"
          >
            Already a user
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default signup;
