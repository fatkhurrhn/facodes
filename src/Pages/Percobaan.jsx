import { useState, useEffect } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const startPauseHandler = () => setIsRunning(!isRunning);
  const resetHandler = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const millisecondsDisplay = (milliseconds % 1000) / 10;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).
    padStart(2, "0")}:${String(millisecondsDisplay).padStart(2, "0")}`;
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen 
    bg-gray-900 text-white">
      <div className="flex flex-col items-center space-y-6 p-8 border 
      rounded-xl shadow-lg bg-gray-800 w-3/5 max-w-2xl">
        <h2 className="text-3xl font-semibold">Stopwatch</h2>
        <p className="text-6xl font-mono">{formatTime(time)}</p>
        <div className="flex space-x-3">
          <button className="px-6 py-3 bg-blue-500 text-white rounded 
          text-lg" onClick={startPauseHandler}>
            {isRunning ? "Pause" : "Start"}
          </button>
          <button className="px-6 py-3 bg-gray-500 text-white rounded 
          text-lg" onClick={resetHandler}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
