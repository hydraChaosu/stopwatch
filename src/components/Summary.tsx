import { formatTime } from "../helpers/formatTime";
type SummaryProps = {
  laps: number[];
  time: number;
};

export const Summary = ({ laps, time }: SummaryProps) => {
  const avgLapTime = laps.length > 0 ? time / laps.length : 0;
  const fastestLap = laps.length > 0 ? Math.min(...laps) : 0;
  const slowestLap = laps.length > 0 ? Math.max(...laps) : 0;
  const formattedAvgLapTime = formatTime(avgLapTime);
  const formattedFastestLap = formatTime(fastestLap);
  const formattedSlowestLap = formatTime(slowestLap);
  return (
    <>
      <h1>Summary</h1>
      <h2>Avg Lap Time: {formattedAvgLapTime}</h2>
      <h2>Fastest Lap: {formattedFastestLap}</h2>
      <h2>Slowest Lap: {formattedSlowestLap}</h2>
    </>
  );
};
