export const formatTime = (time: number): string => {
  const miliseconds = Math.floor((time % 1000) / 10).toFixed();
  const seconds = Math.floor((time / 1000) % 60).toFixed();
  const minutes = Math.floor((time / (1000 * 60)) % 60).toFixed();

  const formattedMiliseconds = miliseconds.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  return `${formattedMinutes}:${formattedSeconds}:${formattedMiliseconds}`;
};
