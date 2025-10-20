import React, { useState, useEffect } from "react";


function SpeakerCounter() {   
    const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const futureDate = new Date("December 30, 2025, 12:00:00").getTime();

    function countDown() {
       const currentDate = new Date().getTime();
      const diffDate = futureDate - currentDate;

      if (diffDate <= 0) {
        // Stop countdown when target is reached
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diffDate / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diffDate % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffDate % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }

    // Run immediately and every second
    countDown();
    const timer = setInterval(countDown, 1000);

    return () => clearInterval(timer); // cleanup on unmount
  }, []);
   return (
    <div className="container-counter-speaker">
      <div className="two-counter">
        <h2 className="days">{timeLeft.days}</h2>
        <h3>Days</h3>
      </div>

      <div className="two-counter">
        <h2 className="hours">{timeLeft.hours}</h2>
        <h3>Hours</h3>
      </div>

      <div className="two-counter">
        <h2 className="minutes">{timeLeft.minutes}</h2>
        <h3>Minutes</h3>
      </div>

      <div className="two-counter">
        <h2 className="seconds">{timeLeft.seconds}</h2>
        <h3>Seconds</h3>
      </div>
    </div>
  );
}

export default SpeakerCounter
