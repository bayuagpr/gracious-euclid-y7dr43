// ScormPlayer.tsx
import React, { useEffect } from "react";
import useScorm from "./useScorm"; // adjust the import path accordingly

const ScormPlayer = () => {
  const { initializeScorm, terminateScorm } = useScorm();

  useEffect(() => {
    initializeScorm();

    // Cleanup function to be called when component unmounts
    return () => {
      terminateScorm();
    };
  }, [initializeScorm, terminateScorm]); // dependencies of the useEffect hook

  return (
    <div>
      {/* Your SCORM player content here */}
      <iframe
        src="your-scorm-content-url-here"
        title="SCORM Content"
        width="100%"
        height="600px"
      />
    </div>
  );
};

export default ScormPlayer;
