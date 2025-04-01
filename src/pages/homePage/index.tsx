import React from "react";
import useAppStore from "@/store/store";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  const { user, updateStore } = useAppStore();
  const handleLogin = () => {
    updateStore("user", { name: Math.random() });
  };
  return (
    <div>
      <Button
        variant="outline"
        onClick={handleLogin}
        className="cursor-pointer"
      >
        {" "}
        Click me
      </Button>
      {user?.name}
    </div>
  );
};

export default HomePage;
