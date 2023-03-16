import React from 'react'
import { Html, useProgress } from "@react-three/drei";


const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span
          style={{
            fontSize: 14,
            color: "#f1f1f1",
            fontWeight: 800,
            marginTop: 40
          }}
          className="canvas-loader"></span>
      <p>{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader