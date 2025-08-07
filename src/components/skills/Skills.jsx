import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { FaNode } from "react-icons/fa6";
import { SiJavascript, SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import { FaReact, FaWordpress } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { Tilt } from "react-tilt";  // Import Tilt

const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1.1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      
      <div className="container m-auto mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className="text-3xl font-black text-gray-600 sm:text-2xl">My Skills</h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-400 block"></span>
        </div>
        {/* content*/}
        <div className="flex md:flex-col">
          <div className="left flex-1 w-full">
            <p data-aos="fade-up" className="text-gray-800 font-medium w-[100%]">
              Here are my skills.
            </p>
            {/* left box */}
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-end md:justify-center"
            >
              <div className="flex flex-col gap-6 w-3/4 my-5 md:w-[90%]">
                <ProgressBar logo={<FaReact />} name={"React Js"} value={95} />
                <ProgressBar logo={<IoLogoHtml5 />} name={"HTML"} value={95} />
                <ProgressBar logo={<IoLogoCss3 />} name={"CSS"} value={98} />
                <ProgressBar logo={<SiJavascript />} name={"Javascript"} value={95} />
                <ProgressBar logo={<SiTailwindcss />} name={"Tailwind CSS"} value={90} />
              </div>
            </div>
          </div>
          {/* right box */}
          <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10">
              <Tilt options={defaultOptions} style={{ width: "auto" }}>
                <SkillBox
                  logo={<IoLogoNodejs />}
                  black={"white"}
                  white={"black"}
                  skill={"Node Js"}
                />
              </Tilt>
              <Tilt options={defaultOptions} style={{ width: "auto" }}>
                <SkillBox
                  logo={<SiMongodb />}
                  black={"white"}
                  white={"black"}
                  skill={"MongoDB"}
                />
              </Tilt>
            </div>
            <div className="last2 flex flex-col gap-10">
              <Tilt options={defaultOptions} style={{ width: "auto" }}>
                <SkillBox
                  logo={<SiExpress />}
                  black={"black"}
                  white={"white"}
                  skill={"Express Js"}
                />
              </Tilt>
              <Tilt options={defaultOptions} style={{ width: "auto" }}>
                <SkillBox
                  logo={<FaWordpress />}
                  black={"black"}
                  white={"white"}
                  skill={"Wordpress"}
                />
              </Tilt>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
