import { useState, useEffect } from "react";
import { Button, Input } from "@/components/ui/button";

export default function StopwatchTimer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("stopwatch");
  const [customTime, setCustomTime] = useState(1);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => (mode === "stopwatch" ? prevTime + 10 : prevTime - 10));
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isRunning, mode]);

  const startPauseHandler = () => setIsRunning(!isRunning);
  const resetHandler = () => {
    setIsRunning(false);
    setTime(mode === "stopwatch" ? 0 : customTime * 60000);
  };
  const switchMode = () => {
    setIsRunning(false);
    setMode((prev) => (prev === "stopwatch" ? "timer" : "stopwatch"));
    setTime(mode === "stopwatch" ? customTime * 60000 : 0);
  };
  const handleCustomTimeChange = (e) => {
    setCustomTime(Number(e.target.value));
  };

  const formatTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const millisecondsDisplay = (milliseconds % 1000) / 10;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(millisecondsDisplay).padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-6 border rounded-xl bg-gray-900 text-white shadow-lg w-80">
      <h2 className="text-2xl font-semibold">{mode === "stopwatch" ? "Stopwatch" : "Countdown Timer"}</h2>
      <p className="text-5xl font-mono">{formatTime(time)}</p>
      {mode === "timer" && (
        <div className="flex items-center space-x-2">
          <Input type="number" min="1" value={customTime} onChange={handleCustomTimeChange} className="w-16 text-center" />
          <span>Minutes</span>
        </div>
      )}
      <div className="flex space-x-2">
        <Button onClick={startPauseHandler}>{isRunning ? "Pause" : "Start"}</Button>
        <Button onClick={resetHandler} variant="secondary">Reset</Button>
      </div>
      <Button onClick={switchMode} variant="outline">Switch to {mode === "stopwatch" ? "Timer" : "Stopwatch"}</Button>
    </div>
  );
}
