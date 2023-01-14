import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Events = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section id="events" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold " data-aos="fade-right">
          About <span className="text-cyan-600">Events</span>
        </h3>
        <div className="flex md:flex-row flex-col-reverse item-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div>
            <div className="text-gray-300 my-3 flex flex-col" data-aos="fade-left">
              <p
                className="text-justify leading-8 font-sans"
                data-aos="fade-right"
              >
                <b>Feria</b> is IHE's annual cultural festival organized by the
                Students' Union of the Institute of Home Economics. It's the
                most awaited fest among students all across Delhi NCR. It's
                organized every year in February and sees the participation of
                students from various Institutions and Universities. Feria is
                the amalgamation of culture, art, and talent under one roof,
                sprouting joy and creativity among people. The last few years
                have been monumental for the Students' Union of the Institute
                and students from other colleges.
              </p>
              <p className="text-[#de0650] text-3xl mt-8 font-bold">2-3 Feb, 2023</p>
              <p className="text-white text-3xl mt-8 font-bold">Doors Open from 11am - 9pm | Live at IHE College, DU</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
