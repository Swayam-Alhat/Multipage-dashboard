# Multipage Dashboard Project.

## 📌My Learnings.

**While dealing with login page and want the feature that user should fill both input fields, Use `required` attribute in both input field. see the code below**

```javascript
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
```

<hr>
1. First we create various components.

### Files in components folder.

- [Login.jsx](#introduction)
- [Home.jsx](#features)
- [Navbar.jsx](#installation)
- [Profile.jsx](#usage)
- [Setting.jsx](#license)

2. we also did Tailwind css stuff. like adding `darkMode:"class"` in **tailwind.config.js** . Also, see below what changes we made using tailwind css.

The below code is in **index.html**
To get UI effect for dark and light mode.

```html
<html lang="en" class="dark">
  <body class="dark:bg-black dark:text-white bg-white text-black"></body>
</html>
```

## Error while rotuing in main.jsx

![My Image](/DashboardProject/src/assets/image.png "Example Image")

**Absolute path** means the independent path. when you say `path:"/home"` it means it is independent. whenever we add '/' to any path, it will be absolute path and **Relative path** means paths in children. in children prop, we should not put '/' beacuse being relative it will read automatically with '/'.

**See the wrong code below**

```javascript
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/home",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/profile", // we add '/' before profile
        element: <Profile />,
      },
      {
        path: "/settings", // we add '/' before setting
        element: <Setting />,
      },
    ],
  },
]);
```

**See the right code below**
<br>
Make the child route's path relative by removing the leading '/ '.

```javascript
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/home",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "settings",
        element: <Setting />,
      },
    ],
  },
]);
```

This error happens when you use an absolute route path (starting with /) inside a nested route. React Router expects child routes to have paths relative to their parent.

What the error says:
Issue: You have a child route with an absolute path (e.g., "/profile") nested inside a parent route like "/home".
Rule: A nested child route's path should be relative to its parent route (e.g., "profile", not "/profile").

### Key Points:

**Parent Path: /home**

**Child Path: "profile" (no / at the beginning)**

**Final URL: /home/profile**

<hr>

## Learn about 'end' prop in NavLink

The issue is that React Router considers the "/home" route to be active when navigating to "/home/profile" or "/home/settings" because they are sub-paths of "/home". This is expected behavior, but you can fix it by adding the end prop to the NavLink for the "/home" route.

The end prop ensures that the link is considered active only when the exact path is matched.

![My Image](/DashboardProject/src/assets/routing.png "Example Image")

**Have a look on code below.**

```javascript
<NavLink
              to="/home"
              end           // <--    this end prop prevents the active state when the address bar have subpaths of home
              className={({ isActive }) => {
                return `mx-7 text-2xl ${isActive ? "text-blue-700" : ""}`;
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/home/profile"
              className={({ isActive }) => {
                return `mx-7 text-2xl ${isActive ? "text-blue-700" : ""}`;
              }}
            >
              Profile
            </NavLink>
            <NavLink
              to="/home/settings"
              className={({ isActive }) => {
                return `mx-7 text-2xl ${isActive ? "text-blue-700" : ""}`;
              }}
            >
              Settings
            </NavLink>
```

<hr>

## Context API Concepts and Learnings.

### This all after we complete the routing stuff. so do the routing stuff first.

An important theory you should know.👀

1. we know about creating context. In this project we did not create initial values that we create while creating context.
2. After creating provider, we have to use it for wrapping the components. but here, see the code below

```javascript
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </StrictMode>
);
```

Remember when we pass values in _value_ prop, those values are now accessible to every components which was wrap and in this project, we pass the value in UserContext file.

```javascript
export default function UserContextProvider({ children }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [theme, setTheme] = useState("dark");
  const value = {
    username,
    password,
    theme,
    setUsername,
    setPassword,
    setTheme,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
```

IMP NOTE 📝 :

In this project, we had not use any of the two ways of dealing with context api that hitesh taught us. but we combined the both. **So see the code below**

**./src/Context/UserContext.jsx**

```javascript
import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext(); // create a context

// creating a provider with value using useState and returning the obj containing those values.
export default function UserContextProvider({ children }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [theme, setTheme] = useState("dark");
  const value = {
    username,
    password,
    theme,
    setUsername,
    setPassword,
    setTheme,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

// custom hook for consuming the data from context.
export function useUserContext() {
  return useContext(UserContext);
}
```

After this, we only have to wrap the whole app with provider just like below.

```javascript
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </StrictMode>
);
```

Now we are ready to use the data from context in any components.

For Example :

```javascript
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
```

The Next example is setting page

```javascript
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
```

### It was very frustrating but I did understand the whole concept of REACT ROUTING and CONTEXT API Which actually use in industry level. ✅
