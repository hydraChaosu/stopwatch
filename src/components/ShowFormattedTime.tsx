import { formatTime } from "../helpers/formatTime";

type ShowFormattedTimeProps = {
  time: number;
};
export const ShowFormattedTime = ({ time }: ShowFormattedTimeProps) => {
  return <>{formatTime(time)}</>;
};
