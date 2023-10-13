export default function colourConverter(timeDifference) {
  // Calculate the time thresholds in milliseconds
  const oneMonthInMillis = 30 * 24 * 60 * 60 * 1000; // 30 days

  if (timeDifference < 0) {
    // If the provided date is in the past
    return '#ff8787'; // Expired (in red)
  }
  if (timeDifference <= oneMonthInMillis) {
    return '#ffd43b'; // Less than 1 month away (in yellow)
  }
  return '#69db7c'; // More than 6 months away (in green)
}
