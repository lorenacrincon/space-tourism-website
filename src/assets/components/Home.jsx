import React from "react";

function Home() {
  return (
    <main className="main-container home-main">
      <section className="mx-6 flex-col h-full justify-end md:mx-40 pb-12 md:pb-0 flex md:justify-center md:gap-12 lg:flex-row lg:justify-between lg:items-end lg:pb-32">
        <div className="flex flex-col justify-center align-middle lg:w-2/5">
          <div className=" flex flex-col md:gap-4 lg:gap-6">
            <h2 className="lg:text-start main-subheading text-[20px] lg:text-[28px]">
              So, you want to travel to
            </h2>
            <h1 className="text-center lg:text-start text-[80px] md:text-[150px] md:leading-[150px]">
              space
            </h1>
            <p className="text-center lg:text-start text-[16px] lg:text-[18px]">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="main-btn font-bellefair">EXPLORE</button>
        </div>
      </section>
    </main>
  );
}

export default Home;
