import React, { useEffect, useState } from "react";
import {getRemainingTimeUntilMsTimestamp} from '../countDown/CountDownTimerUtils'

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const CountDownTimer = ({countDownTimestampMs}) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervaild = setInterval(() => {
        updateRemainingTime(countDownTimestampMs);
    }, 1000);
    return () => clearInterval(intervaild);
  }, [countDownTimestampMs]);

  function updateRemainingTime(countdown){
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  return (
    <div className="w-full h-[50vh] m-0 p-0 flex items-center justify-center">
      <div className="w-[600px] h-[100px] border-2 border-black text-3xl flex justify-center items-center flex-wrap gap-2">
        <span>{remainingTime.days}</span>
        <span>days</span>
        <span>{remainingTime.hours}</span>
        <span>hours</span>
        <span>{remainingTime.minutes}</span>
        <span>minutes</span>
        <span>{remainingTime.seconds}</span>
        <span>seconds</span>
      </div>
    </div>
  );
};

export default CountDownTimer;
