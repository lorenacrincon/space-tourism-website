import React from "react";
import moon from "../destination/image-moon.webp";

function DestinationA() {
  return (
    <main className="main-container destination-main">
      <section className="flex flex-wrap justify-center text-white">
        <div className="">
          <h2>
            <span className="me-5">01</span>
            PICK YOUR DESTINATION
          </h2>
        </div>
        <div className="destination-img w-[170px]">
          <img src={moon} alt="Moon" />
        </div>
        <div>
          <div className="section-submenu flex gap-6">
            <a href="">MOON</a>
            <a href="">MARS</a>
            <a href="">EUROPA</a>
            <a href="">TITAN</a>
          </div>
          <div>
            <h1>MOON</h1>
            <p>
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
          </div>
          <hr />
          <div>
            <p>AVG. DISTANCE</p>
            <p>384,400 KM</p>
            <p>EST. TRAVEL TIME</p>
            <p>3 DAYS</p>
          </div>
        </div>
        <div></div>
      </section>
    </main>
  );
}

export default DestinationA;
