import React from 'react';

/**
 * Real-world React use case for .padStart()
 * Scenario: Formatting a digital clock or countdown timer with leading zeros.
 */

const PadStartUseCase = () => {
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  // Format MM:SS with leading zeros
  const formatTime = (s) => {
    const mins = Math.floor(s / 60).toString().padStart(2, '0');
    const secs = (s % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>Method: .padStart()</h3>
      <div style={{ fontSize: '32px', fontWeight: 'bold', fontFamily: 'monospace' }}>
        Timer: {formatTime(seconds)}
      </div>
    </div>
  );
};

export default PadStartUseCase;
