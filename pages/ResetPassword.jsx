import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://localhost:3002";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (email === "") {
      toast.warning("Please enter your email");
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/user?newUserEmail=${email}`);
      const data = await res.json();
      if (data.length > 0) {
        toast.success("A reset link has been sent to your email");
        navigate("/login");
      } else {
        toast.error("Email not found");
      }
    } catch (err) {
      toast.error("Reset failed due to: " + err.message);
    }
  }

  return (
    <div className="mb-8 flex justify-center items-center gap-4">
      <div className="w-full lg:w-3/5 mt-24">
        <div className="text-center">
          <h2 className="block antialiased tracking-normal font-sans text-4xl leading-[1.3] text-inherit font-bold mb-4">
            Reset Password
          </h2>
          <p className="block antialiased font-sans text-blue-gray-900 text-lg font-normal">
            Enter your email to reset your password.
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
            </div>
          </div>

          <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full mt-6">
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
