import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <main className="home-bg">
      <section className="px-6 pt-40 flex-col justify-around md:mx-40 pb-12 md:pb-0 flex md:justify-center md:gap-12 lg:flex-row lg:justify-between lg:items-end lg:pb-32 h-full">
        <div className="flex flex-col justify-center align-middle lg:w-2/5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h2 className="lg:text-start main-subheading text-[20px] lg:text-[28px]">
              So, you want to travel to
            </h2>
            <h1 className="main-title text-center lg:text-start text-[80px] md:text-[150px] md:leading-[150px]">
              space
            </h1>
            <p className="text-center lg:text-start">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </motion.div>
        </div>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 1 }}
        >
          <Link
            to="/destination"
            className="main-btn font-bellefair"
            onClick="./Destination.jsx"
          ></Link>
        </motion.div>
      </section>
    </main>
  );
}

export default Home;
