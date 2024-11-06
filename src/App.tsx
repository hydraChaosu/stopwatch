import { useRef, useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { TotalTimeTimer } from "./components/TotalTimeTimer";
import { LapTimeTimer } from "./components/LapTimeTimer";
import { Summary } from "./components/Summary";
import { LapTable } from "./components/LapTable";

function App() {
  const [totalTime, setTotalTime] = useState<number>(0);
  const [lapTime, setLapTime] = useState<number>(0);
  const [viewResult, setViewResult] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);

  const intervalRef = useRef<number | null>(null);

  const handleStart = () => {
    if (viewResult) {
      setViewResult(false);
      console.log(laps);
      const tlaps = laps.slice(0, laps.length - 1);
      console.log(tlaps);
      setLaps(tlaps);
    }
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

  const handleLapTime = () => {
    if (viewResult) return;
    setLaps((prev) => [...prev, lapTime]);
    setLapTime(0);
  };

  const handleReset = () => {
    setTotalTime(0);
    setLapTime(0);
    setLaps([]);
  };

  return (
    <>
      {viewResult ? (
        <Summary laps={laps} time={totalTime} />
      ) : (
        <>
          <TotalTimeTimer time={totalTime} />
          <LapTimeTimer time={lapTime} />
          <LapTable laps={laps} />
        </>
      )}
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
