import React from "react";

const Tickets = () => {
  const day1 = [
    {
      heading: "SINGLE ENTRY",
      sub: "Entry allowed for a",
      amount: "199/- INR",
      sub2: "single persons",
    },
    {
      heading: "COUPLE ENTRY",
      sub: "Entry allowed for a",
      sub2: "boy and a girl",
      amount: "299/- INR",
    },
  ];

  const day2 = [
    {
      heading: "SINGLE ENTRY",
      sub: "Entry allowed for a",
      amount: "399/- INR",
      sub2: "single persons",
    },
    {
      heading: "COUPLE ENTRY",
      sub: "Entry allowed for a",
      sub2: "boy and a girl",
      amount: "599/- INR",
    },
  ];

  return (
    <section id="tickets" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold ">
          About <span className="text-cyan-600">Tickets</span>
        </h3>
        <h3 className="text-4xl mt-8 font-semibold ">
          Day - <span className="text-cyan-600">1</span>
        </h3>
      </div>
      <div
        className="flex items-center justify-center mt-12 gap-36 flex-wrap"
        data-aos="fade-right"
      >
        {day1?.map((day1, i) => (
          <div
            key={i}
            className="border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] h-[350px]  p-10 rounded-xl"
          >
            <div className="flex items-center justify-center">
              <div className="text-3xl text-center group-hover:text-cyan-600">
                <h3 className="font-bold ">{day1.heading}</h3>
              </div>
            </div>
            <p className="text-xl text-center mt-4 text-gray-600">{day1.sub}</p>
            <p className="text-xl text-center text-gray-600">{day1.sub2}</p>
            <p className="text-2xl mt-2 flex justify-center text-cyan-600 font-bold">
              {day1.amount}
            </p>
            <p className="flex justify-center mt-4 text-2xl border-2 border-[#de0650] rounded-xl hover:bg-[#de0650] hover:text-white cursor-pointer">
              Book Now
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-36">
        <h3 className="text-4xl font-semibold " data-aos="fade-right">
          Day -  <span className="text-cyan-600">2</span>
        </h3>
      </div>
      <div
        className="flex items-center justify-center mt-12 gap-36 flex-wrap"
        data-aos="fade-right"
      >
        {day2?.map((day2, i) => (
          <div
            key={i}
            className="border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] h-[350px]  p-10 rounded-xl"
          >
            <div className="flex items-center justify-center">
              <div className="text-3xl text-center group-hover:text-cyan-600">
                <h3 className="font-bold">{day2.heading}</h3>
              </div>
            </div>
            <p className="text-xl text-center mt-4 text-gray-600">{day2.sub}</p>
            <p className="text-xl text-center text-gray-600">{day2.sub2}</p>
            <p className="text-2xl mt-2 flex justify-center text-cyan-600 font-bold">
              {day2.amount}
            </p>
            <p className="flex justify-center mt-6 text-2xl border-2 border-[#de0650] rounded-xl hover:bg-[#de0650] hover:text-white cursor-pointer">
              Book Now
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tickets;
