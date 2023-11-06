// ScormContext.tsx
import React, { createContext, useEffect, useState } from "react";
import ScormApiWrapper from "./ScormApiWrapper"; // adjust the import path accordingly

interface ScormContextProps {
  scormConnected: boolean;
  initializeScorm: () => void;
  terminateScorm: () => void;
}

export const ScormContext = createContext<ScormContextProps | undefined>(
  undefined
);

const ScormProvider = ({ children }: { children: React.ReactNode }) => {
  const [scormApi, setScormApi] = useState<ScormApiWrapper | null>(null);
  const [scormConnected, setScormConnected] = useState(false);

  const initializeScorm = () => {
    const scorm = new ScormApiWrapper(true);
    const success = scorm.initialize();
    setScormConnected(success);
    if (success) setScormApi(scorm);
  };

  const terminateScorm = () => {
    scormApi?.terminate();
    setScormConnected(false);
    setScormApi(null);
  };

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      terminateScorm();
    };
  }, []);

  return (
    <ScormContext.Provider
      value={{ scormConnected, initializeScorm, terminateScorm }}
    >
      {children}
    </ScormContext.Provider>
  );
};

export default ScormProvider;
