import React, { useState } from "react";
import { crew } from "/data.json";

function Crew() {
  const [members] = useState(crew);
  const [value, setValue] = useState(0);

  const { name, images, bio, role } = members[value];

  return (
    <main className="crew-bg px-5 md:px-10 pb-28 lg:pb-0 pt-24 md:pt-40 lg:px-40 lg:pt-60">
      <h1 className="section-heading text-center md:text-start mb-10 md:mb-14">
        <span className="me-5 section-number">02</span>
        MEET YOUR CREW
      </h1>
      <section className="text-white flex flex-wrap lg:flex lg:flex-nowrap md:grid justify-center md:justify-items-center lg:justify-center gap-8 lg:gap-40">
        <picture>
          <source srcet={images.webp} type="image/webp" />
          <img className="h-80 mx-auto" src={images.png} alt={name} />
          <hr className="opacity-30" />
        </picture>
        <article className="text-center lg:text-start md:w-9/12 lg:w-[444px]">
          <div className="flex justify-center lg:justify-start gap-6 pb-6">
            {members.map((item, index) => (
              <button
                className={`circle-btn ${value === index ? "active" : ""}`}
                key={index}
                onClick={() => setValue(index)}
              ></button>
            ))}
          </div>
          <div className="grid gap-4">
            <h3 className=" text-white crew-subtitle">{role}</h3>
            <h2 className="crew-title">{name}</h2>
            <p className="md:mx-auto lg:mx-0 lg:text-start">{bio}</p>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Crew;
