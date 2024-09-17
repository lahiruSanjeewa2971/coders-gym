import React from "react";
import { FaPlay } from "react-icons/fa";
import HeroImg from "../../assets/dumbell.png";
import {
  SlideLeft,
  SlideUp,
  SlideRight,
  Rotate,
} from "../../utility/animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
          {/* Brand info */}
          {/* md: grid 1 */}
          <div className="flex flex-col justify-center py-14 md:py-0 font-playfair">
            <div className="text-center md:text-left space-y-6">
              <motion.h1
                variants={SlideRight(0.6)}
                initial="hidden"
                animate="visible"
                className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal"
              >
                Gym gives you the perfect{" "}
                <span className="text-primary">Health</span>
              </motion.h1>

              <motion.p
                variants={SlideRight(1.2)}
                initial="hidden"
                animate="visible"
                className="text-gray-600 xl:max-w-[500px]"
              >
                It is a long established fact that a reader will be by readable
                content of a page when are the best product.
              </motion.p>
            </div>

            {/* button section */}
            <motion.div
              variants={SlideRight(1.5)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start items-center gap-8 mt-4"
            >
              <button className="primary-btn flex items-center gap-2">
                Order Now
              </button>
              <button className="flex justify-center items-center gap-2">
                {" "}
                <FaPlay /> Watch Now
              </button>
            </motion.div>
          </div>

          {/* Hero image */}
          {/* md: grid 2 */}
          <div className="flex justify-center items-center">
            <motion.img
              variants={Rotate(0.5)}
              initial="hidden"
              animate="visible"
              src={HeroImg}
              alt="hero image"
              className="w-[350px] md:w-[550px] xl:w-[700px] drop-shadow"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
