import { useRef, useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { TotalTimeTimer } from "./components/TotalTimeTimer";
import { LapTimeTimer } from "./components/LapTimeTimer";

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
      // setLaps((prev) => [...prev, lapTime]);
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
      <TotalTimeTimer time={totalTime} />
      <LapTimeTimer time={lapTime} />
      <div>
        <Button type="start" onClick={handleStart} text="Start" />
        <Button type="stop" onClick={handleStop} text="Stop" />
        <Button type="reset" onClick={handleReset} text="Reset" />
        <Button type="lap" onClick={handleLapTime} text="Lap" />
      </div>
    </>
  );
}

export default App;
