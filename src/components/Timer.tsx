import { ShowFormattedTime } from "./ShowFormattedTime";

type TimerProps = {
  time: number;
  children: React.ReactNode;
};

export const Timer = ({ time, children }: TimerProps) => {
  return (
    <div>
      <h1>{children}</h1>
      <ShowFormattedTime time={time} />
    </div>
  );
};
