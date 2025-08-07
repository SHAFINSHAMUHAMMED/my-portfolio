import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion"; // Import motion

const ProgressBar = ({ logo, name, value, duration = 2 }) => {
  return (
    <div className="flex flex-col gap-2 sm:gap-1 text-xl font-semibold ">
      <div className="flex justify-between">
        <p className="text-[1.15rem] flex items-center gap-3 sm:text-[1rem] exsm:text-sm exsm:gap-3">
          {logo} {name}
        </p>{" "}
      </div>
      <div className="h-[8px] w-[100%] relative rounded-3xl bg-gray-300">
        {/* Animate the progress bar with framer-motion */}
        <motion.div
          className="h-[8px] absolute rounded-3xl bg-yellow-500"
          initial={{ width: "30%" }} // Start width at 0%
          whileInView={{ width: `${value}%` }} // Animate width to the value
          transition={{ duration, ease: "linear" }} // Duration for the animation
          viewport={{ once: false }} // This ensures it triggers every time it comes into view
        />
      </div>
    </div>
  );
};

export default ProgressBar;
