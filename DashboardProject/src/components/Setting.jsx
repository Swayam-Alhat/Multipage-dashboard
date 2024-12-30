import React, { useEffect } from "react";
import { useUserContext } from "../Context/UserContext";

function Setting() {
  const { theme, setTheme } = useUserContext();
  function handleTheme() {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  function Toggle() {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(theme);
  }

  useEffect(() => {
    Toggle();
  }, [theme]);

  return (
    <>
      <div className="w-full text-3xl text-center px-3 py-2">Settings</div>;
      <div className="w-full flex justify-center">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            onChange={handleTheme}
            type="checkbox"
            value=""
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium uppercase">
            {theme} Theme
          </span>
        </label>
      </div>
    </>
  );
}

export default Setting;
