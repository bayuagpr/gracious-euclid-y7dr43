// useScorm.ts
import { useContext } from "react";
import { ScormContext } from "./ScormContext"; // adjust the import path accordingly

const useScorm = () => {
  const context = useContext(ScormContext);
  if (!context) {
    throw new Error("useScorm must be used within a ScormProvider");
  }
  return context;
};

export default useScorm;
