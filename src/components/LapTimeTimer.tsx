import { Timer } from "./Timer";

interface LapTimeTimerProps {
  time: number;
}

export const LapTimeTimer = ({ time }: LapTimeTimerProps) => {
  return <Timer time={time} text="Lap Time" />;
};
