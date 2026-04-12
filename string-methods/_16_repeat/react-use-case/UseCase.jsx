import React from 'react';

/**
 * Real-world React use case for .repeat()
 * Scenario: Creating a simple star rating display.
 */

const RepeatUseCase = ({ rating = 3 }) => {
  const fullStar = '★';
  const emptyStar = '☆';
  const maxStars = 5;

  // Repeat stars to build the rating display
  const ratingDisplay = fullStar.repeat(rating) + emptyStar.repeat(maxStars - rating);

  return (
    <div style={{ padding: '20px' }}>
      <h3>Method: .repeat()</h3>
      <div style={{ fontSize: '24px', color: '#ffc107' }}>
        Rating: {ratingDisplay} ({rating}/{maxStars})
      </div>
    </div>
  );
};

export default RepeatUseCase;
