export default function timeDiffConverter(comparedDateString) {
  const currentDate = new Date();
  const comparedDate = new Date(comparedDateString);

  // Calculate the time difference in milliseconds
  const timeDifference = comparedDate - currentDate;
  return timeDifference;
}
