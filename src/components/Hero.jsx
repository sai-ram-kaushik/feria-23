import React, {useEffect} from "react";
import hero from "../assets/images/hero.png";
import Aos from "aos";
import 'aos/dist/aos.css';
const Hero = () => {

  useEffect(() =>{
    Aos.init({duration: 1000});
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center" data-aos="fade-right"
    >
      <div className="flex-1 p-14">
        <div className="md:text-left text-center mt-5 flex flex-col">
          <h1 className="md:text-8xl text-2xl md:leading-normal leading-10 text-white font-bold font-playfair">
            FERIA-<span className="text-[#de0650] font-sans">2023</span>
          </h1>
          <p className="text-white text-xl">
            <b>Feria</b> is IHE's annual cultural festival organized by the Students'
            Union of the Institute of Home Economics. It's the most awaited fest
            among students all across Delhi NCR. It's organized every year in
            February and sees the participation of students from various
            Institutions and Universities. Feria is the amalgamation of culture,
            art, and talent under one roof, sprouting joy and creativity among
            people. The last few years have been monumental for the Students'
            Union of the Institute and students from other colleges.
          </p>
          <p className="text-white mt-8 font-bold text-5xl font-anton">9<sup className="text-[#de0650]">th</sup> - 10<sup className="text-[#de0650]">th</sup> Feb<span className="text-[#de0650]">,</span> 2023</p>
        </div>
      </div>

      <div className="flex-1 flex item-center justify-center h-full">
        <img
          src={hero}
          alt="hero_img"
          className="md:w-8/12 h-full object-cover mt-24"
        />
      </div>
    </section>
  );
};

export default Hero;
