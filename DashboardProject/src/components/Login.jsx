import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../Context/UserContext";

function Login() {
  const navigate = useNavigate();

  // access the data from context
  const { setPassword, setUsername } = useUserContext();

  // handle username in input field
  function handleUsername(e) {
    setUsername(e.target.value);
  }

  // handle password in input feild
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <>
      <section className="w-full min-h-screen flex justify-center dark:bg-black items-center">
        <div className="text-center mx-4 p-3 max-w-[600px] space-y-3">
          <h1 className="text-3xl font-semibold text-black dark:text-white">
            Welcome
          </h1>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/home");
            }}
            className="space-y-3 max-w-[600px]"
          >
            <input
              type="text"
              onChange={handleUsername}
              required
              placeholder="Enter Username"
              className="text-lg pl-4 py-3 w-full pr-4 border-[0.5px] border-solid border-gray-700 rounded-md outline-none dark:bg-gray-700 dark:text-white"
            />
            <input
              type="password"
              onChange={handlePassword}
              required
              placeholder="Enter Password"
              className="text-lg pl-4 py-3 w-full pr-4 border-[0.5px] border-solid border-gray-700 rounded-md outline-none dark:bg-gray-700 dark:text-white"
            />
            <button
              type={"submit"}
              className="w-full py-3 rounded-md text-xl text-white bg-[#1194fe] hover:bg-blue-500 active:scale-95 duration-200"
            >
              Log In
            </button>
          </form>

          <p className="text-black dark:text-white">
            Don't have an account?{" "}
            <a href="#" className="text-[#187bcd]">
              Sign Up
            </a>
          </p>

          <div className="flex justify-center items-center">
            <hr className="flex-grow h-[0.5px] bg-black dark:bg-white border-0" />
            <p className="m-2 text-black dark:text-white">OR</p>
            <hr className="flex-grow h-[0.5px] bg-black dark:bg-white border-0" />
          </div>

          <button className="w-full border-[0.5px] border-solid border-gray-500 py-4 text-lg flex pr-4 rounded-md">
            <span className="ml-4">
              <img
                src="https://auth.openai.com/assets/google-logo-NePEveMl.svg"
                alt="Google"
              />
            </span>
            <span className="ml-4  text-black dark:text-gray-300">
              Continue with Google
            </span>
          </button>

          <button className="w-full border-[0.5px] border-solid border-gray-500 py-4 text-lg flex pr-4 rounded-md">
            <span className="ml-4">
              <img
                className="h-[20px] w-[20px]"
                src="https://auth.openai.com/assets/microsoft-logo-BUXxQnXH.svg"
                alt="Google"
              />
            </span>
            <span className="ml-4 text-black dark:text-gray-300">
              Continue with Microsoft Account
            </span>
          </button>
        </div>
      </section>
    </>
  );
}

export default Login;
