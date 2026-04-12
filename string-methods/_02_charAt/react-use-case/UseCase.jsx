import React from 'react';

/**
 * Real-world React use case for .charAt()
 * Scenario: Building a simple avatar with the user's first initial.
 */

const CharAtUseCase = ({ username = "Guest" }) => {
  // Use charAt(0) to get the first initial safely
  const initial = username.charAt(0).toUpperCase();

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: '#007bff',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        fontWeight: 'bold'
      }}>
        {initial}
      </div>
      <span>Welcome, {username}!</span>
    </div>
  );
};

export default CharAtUseCase;
