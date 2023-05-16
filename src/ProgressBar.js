import { useState, useEffect } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const percentage = Math.floor((progress / document.body.clientWidth) * 100);
  useEffect(() => {
    const maxWidth = document.body.clientWidth;

    console.log(maxWidth);
    const timer = () => {
      setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= maxWidth) {
            clearInterval(timer);
            return maxWidth;
          } else {
            return prevProgress + 1;
          }
        });
      }, 10);
    };
    timer();
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        height: "25px",
        width: `${progress}px`,
        backgroundColor: "blue",
        textAlign: "center",
        color: "white",
        transition: "ease",
      }}
    >
      {percentage}%
    </div>
  );
};

export default ProgressBar;
