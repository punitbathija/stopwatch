import React, { useState } from "react";

function Stopwatch() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  return (
    <div className="text-center">
      <h1>{watch}</h1>
      <button className="btn btn-dark">START</button>
      <button className="btn btn-dark">STOP</button>
    </div>
  );
}
export default Stopwatch;
