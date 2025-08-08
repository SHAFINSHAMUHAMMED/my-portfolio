import React, { Suspense, useEffect } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, ContactShadows } from "@react-three/drei";
import AOS from "aos";
import "aos/dist/aos.css";

// Model Component
function Model(props) {
  const { scene } = useGLTF("/models/scene.gltf");
  return <primitive object={scene} {...props} />;
}

useGLTF.preload("/models/scene.gltf");

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS when the component is mounted
  }, []);

  return (
    <div id="works" className="mx-auto mt-16">
      <div className="bg-yellow-400 rounded-3xl shadow-xl flex flex-col gap-2 justify-center items-center p-10 sm:p-7">
        {/* 3D Model with Scroll Animation */}
        <div
          data-aos="fade-up" // Use AOS to trigger fade-up animation when it enters the viewport
          data-aos-offset="200" // Delay trigger a bit after scrolling 200px
          className="w-[350px] h-[180px]"
        >
          <div className="relative w-full h-full">
            <Canvas
              camera={{ position: [0, 1.1, 5], fov: 30 }} // Camera settings
              dpr={[1, 2]}
            >
              <ambientLight intensity={0.6} />
              <directionalLight position={[3, 5, 2]} intensity={1} />
              <Suspense fallback={null}>
                <group position={[0, -0.7, 0]}>
                  <Model scale={0.23} /> {/* Model scale adjustment */}
                </group>
                <Environment preset="city" />
                <ContactShadows
                  position={[0, -0.7, 0]}
                  opacity={0.35}
                  scale={8} // Shadow scale
                  blur={2.5}
                  far={3.5}
                />
              </Suspense>

              <OrbitControls
                enableZoom={false}
                enablePan={true}
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
                minAzimuthAngle={-Infinity}
                maxAzimuthAngle={Infinity}
              />
            </Canvas>
          </div>
        </div>

        {/* "Let's Talk" Section */}
        <div className="flex flex-col items-center sm:items-start">
          <h2
            data-aos="zoom-out"
            className="font-bold text-5xl sm:text-3xl text-center m-auto text-black"
          >
            Let&apos;s Talk
          </h2>

          {/* Socials */}
          <div className="flex items-center justify-center sm:justify-start gap-8 sm:gap-5 mt-5">
            <a
              data-aos="fade-up"
              data-aos-duration="1000"
              href="https://t.me/shafinDev"
              target="_blank"
              rel="noopener noreferrer"
              className="box font-medium text-black flex items-center justify-center flex-col hover:opacity-90 transition"
            >
              <FaTelegramPlane className="text-black text-3xl hover:scale-125 transition-transform cursor-pointer" />
              <p>Telegram</p>
            </a>

            <a
              data-aos="fade-up"
              data-aos-duration="1200"
              href="https://wa.me/917907165805"
              target="_blank"
              rel="noopener noreferrer"
              className="box font-medium text-black flex items-center justify-center flex-col hover:opacity-90 transition"
            >
              <IoLogoWhatsapp className="text-black text-3xl hover:scale-125 transition-transform cursor-pointer" />
              <p>WhatsApp</p>
            </a>

            <a
              data-aos="fade-up"
              data-aos-duration="1400"
              href="https://www.instagram.com/shafinsha_muhammed/"
              target="_blank"
              rel="noopener noreferrer"
              className="box font-medium text-black flex items-center justify-center flex-col hover:opacity-90 transition"
            >
              <RiInstagramFill className="text-black text-3xl hover:scale-125 transition-transform cursor-pointer" />
              <p>Instagram</p>
            </a>
          </div>

          <div className="sm:text-[12px] text-black/80 mt-4">
            | Designed &amp; Developed by <span className="font-semibold">Shafin K</span> &copy; 2025 |
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
