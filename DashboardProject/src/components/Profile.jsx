import React from "react";
import { useUserContext } from "../Context/UserContext";

function Profile() {
  const { password } = useUserContext();
  return (
    <div>
      <h1 className="w-full text-5xl text-center px-3 py-2">Shubham Alhat</h1>
      <h2 className="w-full text-3xl text-center px-3 py-2">
        Full stack web developer
      </h2>
      <h2 className="w-full text-3xl text-center px-3 py-2">
        Password : {password}
      </h2>
    </div>
  );
}

export default Profile;
