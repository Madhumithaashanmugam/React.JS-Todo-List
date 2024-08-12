import React from 'react';

const DateTimeDisplay = () => {
  const currentDate = new Date().toDateString();
//   const currentTime = new Date().toLocaleTimeString();

  return (
    <div>
      <p className='date'>{currentDate}</p>
      {/* <p>Current Time: {currentTime}</p> */}
    </div>
  );
};

export default DateTimeDisplay;