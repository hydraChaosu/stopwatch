import { Timer } from "./Timer";

interface TotalTimeTimerProps {
  time: number;
}

export const TotalTimeTimer = ({ time }: TotalTimeTimerProps) => {
  return <Timer time={time} text="Total Time" />;
};
