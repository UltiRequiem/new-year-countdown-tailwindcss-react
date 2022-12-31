import { useInterval } from "usehooks-ts";
import { useState } from "react";

import { timeLeft, nextYear } from "./utils";

function App() {
  const [time, setTimer] = useState(timeLeft());

  useInterval(() => {
    setTimer(timeLeft());
  }, 1000);

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-yellow-400 text-center object-fill flex-1">
        <h1 className="text-7xl p-5">🎉⁉</h1>

        <section className="grid grid-rows-2 grid-flow-col gap-3 p-6">
          <TimeBox unitName="Days" unit={time.days} />
          <TimeBox unitName="Hours" unit={time.hours} />
          <TimeBox unitName="Minutes" unit={time.minutes} />
          <TimeBox unitName="Seconds" unit={time.seconds} />
        </section>

        <p id="left" className="text-3xl">
          Left for <span className="">{nextYear}</span>
        </p>
      </div>

      <p className="text-2xl p-4 bg-yellow-200">Eliaz Bobadilla</p>
    </div>
  );
}

const TimeBox = (props: { unitName: string; unit: number }) => {
  return (
    <div className="bg-yellow-300 rounded p-3 md:p-10">
      <h2 className="text-5xl">{props.unit}</h2>
      <p>{props.unitName}</p>
    </div>
  );
};

export default App;
