import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import about_img from "../assets/images/about_img.png";
import Clock from "./Clock";
const Events = () => {

  const [timerDays, setTimerDays] = useState();
  const [timerHour, setTimerHour] = useState();
  const [timerMin, setTimerMin] = useState();
  const [timerSec, setTimerSec] = useState();

  let interval;

  const startTimer = () =>{
    const countDownDate = new Date("Feb 9, 2023").getTime();

    interval = setInterval(() =>{
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hour = Math.floor(distance % (24 * 60 * 60 * 1000) / (1000*60*60));
      const minutes = Math.floor(distance % (60 * 60 * 1000) / (1000 * 60));
      const seconds = Math.floor(distance % (60 * 1000) / (1000));

      if(distance < 0){
        clearInterval(interval.current)
      }
      else{
        setTimerDays(days);
        setTimerHour(hour);
        setTimerMin(minutes);
        setTimerSec(seconds);
      }
    })

  }

  useEffect(() =>{
    startTimer();
  })

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section id="events" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold " data-aos="fade-right">
          About <span className="text-cyan-600">Events</span>
        </h3>

        <div className="flex md:flex-row flex-col-reverse item-center mt-10 md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="flex-1 flex justify-center items-center">
            <div
              className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm flex items-center"
              data-aos="fade-down"
            >
              <img
                src={about_img}
                alt="about_image"
                className="w-full"
              />
            </div>
          </div>

          <div>
            <div className="text-gray-300 my-3 flex flex-col">
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
              <p className="font-bold text-3xl mt-6">Doors open from 11am - 9pm | Live at IHE College, DU</p>
              <div>
                  <Clock timerDays={timerDays} timerHour={timerHour} timerMin={timerMin} timerSec={timerSec} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
