import React from "react";
import { useUserContext } from "../Context/UserContext";

function Home() {
  const { username, password } = useUserContext();
  return (
    <>
      <div id="container" className="w-full h-full ">
        <div
          id="dummydata"
          className="flex flex-wrap w-full justify-center items-center bg-transparent *:mx-3 *:my-3"
        >
          <div
            className="flex flex-col rounded-xl  p-4"
            style={{
              border: "0.88px solid",

              backdropFilter: "saturate(180%) blur(14px)",
              background: " #ffffff0d",
            }}
          >
            <div>
              <img
                src="https://i.pinimg.com/736x/6c/41/6e/6c416ea37debf48b4eb89d71dc269802.jpg"
                alt="nft-gif"
                width="400"
                height="400"
                className="rounded-xl"
              />
            </div>
            <div className="flex flex-col  rounded-b-xl py-4 ">
              <div className=" justify-center">
                <h1 className=" text-2xl font-extrabold">{username}</h1>
              </div>
            </div>
          </div>
          {/* last */}
        </div>
        {/* not */}
      </div>
    </>
  );
}

export default Home;
