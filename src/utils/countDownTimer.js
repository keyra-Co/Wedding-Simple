// Utils to calculate remaining time
export const calculateTimeLeft = (targetDate) => {
  // Variable to store current time data
  const now = new Date().getTime();

  // Variable to get the time difference between now and the event time
  const difference = targetDate - now;

  // Function to format the time into two digit
  const formatTime = (time) => {
    return String(time).padStart(2, '0');
  };

  // Variable to store time in dd/hh/mm/ss format
  let timeLeft = [];

  if (difference > 0) {
    // Variables that will be used when the event time has finished
    timeLeft = [
      { time: formatTime(Math.floor(difference / (1000 * 60 * 60 * 24))), name: 'Days' },
      { time: formatTime(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))), name: 'Hours' },
      { time: formatTime(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))), name: 'Mins' },
      { time: formatTime(Math.floor((difference % (1000 * 60)) / 1000)), name: 'Secs' },
    ];
  }

  return timeLeft;
};
