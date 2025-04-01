import React from "react";
import useAppStore from "@/store/store";

const HomePage = () => {
  const { user, updateStore } = useAppStore();
  const handleLogin = () => {
    updateStore("user", { name: Math.random() });
  };
  return (
    <div>
      {user?.name}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default HomePage;
