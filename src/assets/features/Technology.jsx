import React, { useState } from "react";
import { technology } from "/data.json";
import { motion } from "framer-motion";

function Technology() {
  const [terminologies] = useState(technology);
  const [value, setValue] = useState(0);

  const { name, images, description } = terminologies[value];

  return (
    <main className="tech-bg pb-40 min-[410px]:pb-60 md:pb-40 lg:pb-0 pt-24 md:pt-40 lg:ps-12 xl:ps-40 lg:pt-52  2xl:h-screen">
      <h1 className="section-heading mb-10 text-center md:text-start md:px-12 md:mb-14 lg:mb-0 lg:p-0">
        <span className="me-5 section-number">03</span>
        SPACE LAUNCH 101
      </h1>
      <section className="lg:flex lg:flex-col-2 lg:h-[527px]">
        <motion.picture
          key={value}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <img className="w-full lg:hidden" src={images.landscape} alt={name} />
          <picture>
            <img
              className="hidden lg:flex absolute xl:h-[480px] 2xl:h-[500px] 3xl:h-[600px] right-0 inset-y-68"
              src={images.portrait}
              alt={name}
            />
          </picture>
        </motion.picture>
        <article className="text-center px-5 py-10 md:py-14 lg:p-0 lg:flex lg:justify-start 3xl:pt-28">
          <div className="flex justify-center gap-6 pb-10 md:pb-14 lg:flex-col lg:p-0 lg:pe-5 xl:pe-12 2xl:pe-20">
            {terminologies.map((item, index) => (
              <button
                className={`tech-btn ${value === index ? "active" : ""}`}
                key={index}
                onClick={() => setValue(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <motion.div
            className="flex flex-col gap-3  lg:justify-center 3xl:gap-6"
            key={value}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -230 }}
            transition={{ duration: 1 }}
          >
            <p className="tech-subtitle lg:text-start">THE TERMINOLOGY...</p>
            <h2 className="text-white uppercase tech-title text-center lg:text-start">
              {name}
            </h2>
            <p className="self-center lg:self-start px-5 md:p-0 lg:text-start md:w-[460px] lg:w-[390px] xl:w-[400px] min-[1440px]:w-[440px] 3xl:w-[650px]">
              {description}
            </p>
          </motion.div>
        </article>
      </section>
    </main>
  );
}

export default Technology;
