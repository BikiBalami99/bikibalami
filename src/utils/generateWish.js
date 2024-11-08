export function generateWish(timeRightNow) {
  if (timeRightNow >= 5 && timeRightNow < 12) {
    return "Good Morning";
  } else if (timeRightNow >= 12 && timeRightNow < 16) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}
