import React, { useState, useEffect } from "react";
import { Suspense } from "react";
import { BarLoader } from "react-spinners";
import Home from "./pages/Home";
import AnimatedCursor from "./components/AnimatedCursor";
import DotGrid from "./components/DotGrid"; // Import DotGrid
import { SmoothCursor } from "./components/SmoothCursor";
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* DotGrid as background */}
      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}>
        <DotGrid
          dotSize={10}
          gap={15}
          // baseColor="#e0ddf0"
          // activeColor="#e0ddf0"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Main content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Animated Cursor */}
        {/* <AnimatedCursor /> */}

        {/* Smooth Cursor */}
        <SmoothCursor />

        {/* Suspense and Home Component */}
        <Suspense
          fallback={
            <div className="h-screen w-full flex items-center justify-center bg-[#dfe7b8]">
              <BarLoader color="#f6c400" height={4} />
            </div>
          }
        >
          {loading ? (
            <div className="h-screen w-full flex items-center justify-center bg-[#dfe7b8]">
              <BarLoader color="#d6ac06" height={4} />
            </div>
          ) : (
            <Home />
          )}
        </Suspense>
      </div>
    </>
  );
};

export default App;
