import { ShowFormattedTime } from "./ShowFormattedTime";

type LapRecordProps = {
  lap: number;
  time: number;
};

export const LapRecord = ({ time }: LapRecordProps) => {
  return (
    <div>
      <ShowFormattedTime time={time} />
    </div>
  );
};
