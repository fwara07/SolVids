export const getDuration = (durationString = "") => {
  const duration = { hours: 0, minutes: 0, seconds: 0 };
  const durationParts = durationString
    .replace("PT", "")
    .replace("H", ":")
    .replace("M", ":")
    .replace("S", "")
    .split(":");

  if (durationParts.length === 3) {
    duration["hours"] = durationParts[0];
    duration["minutes"] = durationParts[1];
    duration["seconds"] = durationParts[2];
  }

  if (durationParts.length === 2) {
    duration["minutes"] = durationParts[0];
    duration["seconds"] = durationParts[1];
  }

  if (durationParts.length === 1) {
    duration["seconds"] = durationParts[0];
  }

  return {
    ...duration,
    string: `${duration.hours.toString().padStart(2, "0")}:${duration.minutes
      .toString()
      .padStart(2, "0")}:${duration.seconds.toString().padStart(2, "0")}`,
  };
};
