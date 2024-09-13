import { IoMdCheckmark } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import ImageComponent from "../reusable-components/ImageComponent";
import { useState } from "react";
import { toast } from "react-toastify";

const BASE_URL = "http://localhost:3002";

function SignUp() {
  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserPass, setNewUserPass] = useState("");
  const [isChecked, setIsChecked] = useState(false); // New state for checkbox
  const navigate = useNavigate();

  const isValidate = () => {
    let isProceed = true;

    if (newUserName === "" || newUserName === null) {
      isProceed = false;
      toast.warning("Please Enter Username");
    }
    if (newUserEmail === "" || newUserEmail === null) {
      isProceed = false;
      toast.warning("Please Enter Email");
    }
    if (newUserPass === "" || newUserPass === null) {
      isProceed = false;
      toast.warning("Please Enter Password");
    }
    if (!isChecked) {
      isProceed = false;
      toast.warning("Please Accept the terms and conditions");
    }

    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(newUserEmail)) {
      isProceed = false;
      toast.warning("Please Enter The Valid Email");
    }

    return isProceed;
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (isValidate()) {
      let regObj = { newUserName, newUserEmail, newUserPass, isChecked };
      fetch(`${BASE_URL}/user`, {
        method: "post",
        body: JSON.stringify(regObj),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => {
          toast.success("Registered Successfully");
          navigate("/login");
        })
        .catch((err) => {
          toast.error("Faild : " + err.message);
        });
    }
  }
  return (
    <div className="flex gap-4 m-8">
      <div className="hidden w-2/5 h-full lg:block">
        <ImageComponent
          src="/login.jpg"
          alt="loginPage"
          className="object-cover w-full h-full rounded-3xl"
        />
      </div>
      <div className="w-full mt-24 lg:w-3/5">
        <div className="text-center">
          <h2 className="block antialiased tracking-normal font-sans text-4xl leading-[1.3] text-inherit font-bold mb-4">
            Join Us | SkinCare
          </h2>
          <p className="block font-sans text-lg antialiased font-normal text-blue-gray-900">
            Enter your name and email and password to register.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="max-w-screen-lg mx-auto mt-8 mb-2 w-80 lg:w-1/2"
        >
          <div className="flex flex-col gap-6 mb-1">
            <p className="block -mb-3 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
              Your Name
            </p>
            <div className="relative w-full min-w-[200px] h-11">
              <input
                value={newUserName}
                type="text"
                placeholder="Username"
                className="peer w-full h-full bg-transparent text-register font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900  !border-t-blue-gray-200 focus:!border-t-gray-900"
                onChange={(e) => setNewUserName(e.target.value)}
              />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900 before:content-none after:content-none"></label>
            </div>
            <p className="block -mb-3 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
              Your Email
            </p>
            <div className="relative w-full min-w-[200px] h-11">
              <input
                value={newUserEmail}
                type="email"
                placeholder="Email"
                className="peer w-full h-full bg-transparent text-register font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900  !border-t-blue-gray-200 focus:!border-t-gray-900"
                onChange={(e) => setNewUserEmail(e.target.value)}
              />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900 before:content-none after:content-none"></label>
            </div>
            <p className="block -mb-3 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
              Password
            </p>
            <div className="relative w-full min-w-[200px] h-11">
              <input
                value={newUserPass}
                type="password"
                placeholder="********"
                className="peer w-full h-full bg-transparent text-register font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900  !border-t-blue-gray-200 focus:!border-t-gray-900"
                onChange={(e) => setNewUserPass(e.target.value)}
              />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900 before:content-none after:content-none"></label>
            </div>
          </div>
          <div className="inline-flex items-center">
            <label
              className="relative flex items-center cursor-pointer p-3 rounded-full -ml-2.5"
              htmlFor=":r0:"
            >
              <input
                type="checkbox"
                className="peer relative appearance-none w-5 h-5 border rounded-md border-blue-gray-200 cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-gray-900 checked:border-gray-900 checked:before:bg-gray-900"
                id=":r0:"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <IoMdCheckmark className="h-3.5 w-3.5 my-2" />
              </span>
            </label>
            <label className="mt-px font-light text-gray-700 cursor-pointer select-none">
              <p className="flex items-center justify-start font-sans text-sm antialiased font-medium leading-normal text-gray-700">
                I agree the
                <Link className="ml-2 font-normal text-black underline transition-colors hover:text-gray-900">
                  Terms and Conditions
                </Link>
              </p>
            </label>
          </div>
          <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full mt-6">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
