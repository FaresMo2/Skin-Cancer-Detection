import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const BASE_URL = "http://localhost:3002";

function ChangePassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { userId } = useParams(); // Assuming userId is passed as a parameter
  console.log(userId);
  console.log(newPassword);
  console.log(confirmPassword);
  const navigate = useNavigate();

  const isValid = () => {
    let result = true;

    if (newPassword === "" || newPassword === null) {
      result = false;
      toast.warning("Please Enter New Password");
    }
    if (confirmPassword === "" || confirmPassword === null) {
      result = false;
      toast.warning("Please Confirm Your Password");
    }
    if (newPassword !== confirmPassword) {
      result = false;
      toast.warning("Passwords Do Not Match");
    }

    return result;
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (isValid()) {
      try {
        const res = await fetch(`${BASE_URL}/user/${userId}`, {
          method: "PATCH",
          body: JSON.stringify({ newUserPass: newPassword }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.ok) {
          toast.success("Password Changed Successfully");
          navigate("/login");
        } else {
          toast.error("Failed to change password");
        }
      } catch (err) {
        toast.error("Change failed due to: " + err.message);
      }
    }
  }

  return (
    <div className="m-8 flex justify-center items-center gap-4">
      <div className="w-full lg:w-3/5 mt-24">
        <div className="text-center">
          <h2 className="block antialiased tracking-normal font-sans text-4xl leading-[1.3] text-inherit font-bold mb-4">
            Change Password
          </h2>
          <p className="block antialiased font-sans text-blue-gray-900 text-lg font-normal">
            Enter your new password to change it.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2"
        >
          <div className="mb-1 flex flex-col gap-6">
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 -mb-3 font-medium">
              New Password
            </p>
            <div className="relative w-full min-w-[200px] h-11">
              <input
                value={newPassword}
                type="password"
                placeholder="********"
                onChange={(e) => setNewPassword(e.target.value)}
                className="peer w-full h-full bg-transparent text-register font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900  !border-t-blue-gray-200 focus:!border-t-gray-900"
              />
            </div>
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 -mb-3 font-medium">
              Confirm Password
            </p>
            <div className="relative w-full min-w-[200px] h-11">
              <input
                value={confirmPassword}
                type="password"
                placeholder="********"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="peer w-full h-full bg-transparent text-register font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900  !border-t-blue-gray-200 focus:!border-t-gray-900"
              />
            </div>
          </div>

          <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full mt-6">
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
