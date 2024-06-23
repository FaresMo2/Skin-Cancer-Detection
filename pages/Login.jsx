import { Link, useNavigate } from "react-router-dom";
import ImageComponent from "../reusable-components/ImageComponent";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const BASE_URL = "http://localhost:3002";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
  }, []);

  const isValid = () => {
    let result = true;

    if (email === "" || email === null) {
      result = false;
      toast.warning("Please Enter Email");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please Enter Password");
    }

    return result;
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (isValid()) {
        const res = await fetch(`${BASE_URL}/user?newUserEmail=${email}`);
        const data = await res.json();
        if (data[0].newUserPass === password) {
          toast.success("Login Successful");
          localStorage.setItem("email", email);
          localStorage.setItem("username", data[0].newUserName);
          navigate("/main");
        }
      }
    } catch (err) {
      toast.error("Login Failed Due to: " + err.message);
    }
  }

  return (
    <div className="m-8 flex gap-4">
      <div className="w-full lg:w-3/5 mt-24">
        <div className="text-center">
          <h2 className="block antialiased tracking-normal font-sans text-4xl leading-[1.3] text-inherit font-bold mb-4">
            Login
          </h2>
          <p className="block antialiased font-sans text-blue-gray-900 text-lg font-normal">
            Enter your email and password to Sign In.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2"
        >
          <div className="mb-1 flex flex-col gap-6">
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 -mb-3 font-medium">
              Your Email
            </p>
            <div className="relative w-full min-w-[200px] h-11">
              <input
                value={email}
                type="email"
                placeholder="name@mail.com"
                onChange={(e) => setEmail(e.target.value)}
                className="peer w-full h-full bg-transparent text-register font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900  !border-t-blue-gray-200 focus:!border-t-gray-900"
              />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900 before:content-none after:content-none"></label>
            </div>
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 -mb-3 font-medium">
              Password
            </p>
            <div className="relative w-full min-w-[200px] h-11">
              <input
                value={password}
                type="password"
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
                className="peer w-full h-full bg-transparent text-register font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900  !border-t-blue-gray-200 focus:!border-t-gray-900"
              />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900 before:content-none after:content-none"></label>
            </div>
          </div>

          <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full mt-6">
            Sign In
          </button>

          <div className=" gap-2 mt-6">
            <p className="block antialiased font-sans text-sm leading-normal font-medium text-gray-900">
              <Link to="/reset-password">Forgot Password</Link>
            </p>
          </div>

          <p className="block antialiased font-sans text-base leading-relaxed text-center text-register font-medium mt-4">
            Not registered?
            <Link to="/signup" className="text-gray-900 ml-1">
              Create accounts
            </Link>
          </p>
        </form>
      </div>
      <div className=" w-2/5 h-full hidden lg:block">
        <ImageComponent
          src="/login.jpg"
          alt="loginPage"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
    </div>
  );
}

export default Login;
