import { LapRecord } from "./LapRecord";

type LapTableProps = {
  laps: number[];
};

export const LapTable = ({ laps }: LapTableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Lap</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {laps.map((lap, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              <LapRecord lap={index + 1} time={lap} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
