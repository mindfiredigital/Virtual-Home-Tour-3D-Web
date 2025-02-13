import React from "react";
import { Html, useProgress } from "@react-three/drei";

const LoadingScreen = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="progress-bar-container" style={{ textAlign: "center" }}>
        <label htmlFor="progress-bar">Loading... {progress.toFixed(2)}%</label>
        <progress id="progress-bar" value={progress} max="100" />
      </div>
    </Html>
  );
};

export default LoadingScreen;
