import React, { useState } from "react";
import { crew } from "/data.json";

function Crew() {
  const [members] = useState(crew);
  const [value, setValue] = useState(0);

  const { name, images, bio, role } = members[value];

  return (
    <main className="crew-bg px-5 md:px-12 pb-60 md:pb-0 lg:pb-0 pt-24 md:pt-40 lg:px-40 lg:pt-60 lg:relative">
      <h1 className="section-heading text-center md:text-start mb-10 md:mb-14 lg:mb-0">
        <span className="me-5 section-number">02</span>
        MEET YOUR CREW
      </h1>
      <section className="text-white flex flex-wrap justify-center md:flex-col md:items-center lg:justify-between md:gap-16 lg:flex lg:flex-row lg:pt-0">
        <div className="md:order-last lg:basis-1/2 lg:absolute right-60 bottom-0">
          <picture>
            <source srcet={images.webp} type="image/webp" />
            <img
              className="h-72 md:h-full lg:h-[750px] mx-auto "
              src={images.png}
              alt={name}
            />
          </picture>
        </div>
        <article className="text-center lg:text-start  md:flex md:flex-col lg:mt-16 lg:basis-1/3">
          <hr className="opacity-30 md:hidden pb-9" />
          <div className="flex justify-center lg:justify-start gap-6 pb-9 md:pt-14 md:pb-0 md:order-last lg:fixed bottom-20">
            {members.map((item, index) => (
              <button
                className={`circle-btn ${value === index ? "active" : ""}`}
                key={index}
                onClick={() => setValue(index)}
              ></button>
            ))}
          </div>
          <div className="grid gap-3">
            <h3 className=" text-white crew-subtitle">{role}</h3>
            <h2 className="crew-title">{name}</h2>
            <p className="pt-3 md:mx-auto lg:mx-0 lg:text-start md:w-[590px] lg:w-[444px]">
              {bio}
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Crew;
