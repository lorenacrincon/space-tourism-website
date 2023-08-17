import React, { useState } from "react";
import { destinations } from "/data.json";

function Destination() {
  const [planets] = useState(destinations);
  const [value, setValue] = useState(0);

  const { name, images, description, distance, travel } = planets[value];

  return (
    <main className="destination-bg px-5 md:px-12 pb-10 lg:pb-0 xl:pb-20 pt-24 md:pt-40 lg:px-40 lg:pt-60">
      <h1 className="section-heading text-center md:text-start mb-10 md:mb-14">
        <span className="me-5 section-number">01</span>
        PICK YOUR DESTINATION
      </h1>
      <section className="md:pt-14 text-white flex flex-wrap lg:flex lg:flex-nowrap md:grid justify-center md:justify-items-center lg:justify-center gap-8 lg:gap-40 ">
        <picture>
          <source srcSet={images.webp} type="image/webp" />
          <img
            className="w-4/5 md:w-5/6 lg:w-full mx-auto"
            src={images.png}
            alt={name}
          />
        </picture>
        <article className="text-center lg:text-start md:w-9/12 lg:w-[444px]">
          <div className="flex gap-12 justify-center lg:justify-start">
            {planets.map((item, index) => (
              <button
                className={`submenu-text submenu-btn uppercase ${
                  value === index ? "active" : ""
                }`}
                key={index}
                onClick={() => setValue(index)}
              >
                {item.name}
              </button>
            ))}
          </div>
          <h2 className="section-title uppercase pt-6">{name}</h2>
          <p className="md:mx-auto lg:mx-0 lg:text-start">{description}</p>
          <hr className="my-8 opacity-30" />
          <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-6 md:gap-24">
            <div>
              <h3 className="submenu-text">AVG. DISTANCE</h3>
              <p className="text-white pt-4 font-bellefair text-[28px] uppercase">
                {distance}
              </p>
            </div>
            <div>
              <h3 className="submenu-text">EST. TRAVEL TIME</h3>
              <p className="uppercase text-white pt-4 font-bellefair text-[28px]">
                {travel}
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Destination;
