import { useRef, useState } from "react";
import "./App.css";
import { Timer } from "./components/Timer";

function App() {
  const [totalTime, setTotalTime] = useState<number>(0);
  const [lapTime, setLapTime] = useState<number>(0);
  const [viewResult, setViewResult] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);

  const intervalRef = useRef<number | null>(null);

  //ok
  const handleStart = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setTotalTime((prev) => prev + 10);
      setLapTime((prev) => prev + 10);
    }, 10);
  };

  const handleStop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setLaps((prev) => [...prev, lapTime]);
      setViewResult(true);
    }
  };
  //ok
  const handleLapTime = () => {
    setLaps((prev) => [...prev, lapTime]);
    setLapTime(0);
  };
  //ok
  const handleReset = () => {
    setTotalTime(0);
    setLapTime(0);
    setLaps([]);
  };

  return (
    <>
      <Timer time={totalTime}>Total Time</Timer>
      <Timer time={lapTime}>Lap Time</Timer>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleLapTime}>Lap</button>
      </div>
    </>
  );
}

export default App;
