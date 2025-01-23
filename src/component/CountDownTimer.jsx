import React from "react";
import Countdown from "react-countdown";

export default function CountDownTimer() {
  const renderer = ({ total, days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <>fdsfdsjkfh</>;
    } else {
      // Render a countdown
      return (
        <span>
          {days}:{hours}:{minutes}:{seconds}
        </span>
      );
    }
  };
  return (
    <div>
      <Countdown date={new Date("2025-03-23T11:00:00")} renderer={renderer} />
    </div>
  );
}
