import { ShowFormattedTime } from "./ShowFormattedTime";

type TimerProps = {
  time: number;
  text: string;
};

export const Timer = ({ time, text }: TimerProps) => {
  return (
    <div>
      <h1>{text}</h1>
      <ShowFormattedTime time={time} />
    </div>
  );
};
