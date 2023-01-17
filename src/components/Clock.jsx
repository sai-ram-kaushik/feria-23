import React, { Fragment } from "react";
import '../index.css'
const Clock = ({ timerDays, timerHours, timerMin, timerSec }) => {
  return (
    <Fragment>
      <section className="timer-container">
        <section className="timer">
          <div className="clock rounded-3xl ring-offset-8 ring-4 ring-offset-white">
            <section>
              <p>{timerDays}</p>
              <small>Days</small>
            </section>
            <span>:</span>

            <section>
              <p>{timerHours}</p>
              <small>Hours</small>
            </section>
            <span>:</span>

            <section>
              <p>{timerMin}</p>
              <small>Minutes</small>
            </section>
            <span>:</span>

            <section>
              <p>{timerSec}</p>
              <small>Seconds</small>
            </section>
          </div>
        </section>
      </section>
    </Fragment>
  );
};

Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMin: 10,
  timerSec: 10,
};

export default Clock;
