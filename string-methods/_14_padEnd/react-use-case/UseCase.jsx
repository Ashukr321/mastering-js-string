import React from 'react';

/**
 * Real-world React use case for .padEnd()
 * Scenario: Creating a fixed-length receipt or table output where labels need consistent padding.
 */

const PadEndUseCase = () => {
  const lineItems = [
    { label: 'Subtotal', value: '$25.00' },
    { label: 'Tax', value: '$2.00' },
    { label: 'Total', value: '$27.00' },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h3>Method: .padEnd()</h3>
      <div style={{ backgroundColor: '#f0f0f0', padding: '15px', borderRadius: '4px' }}>
        {lineItems.map((item, idx) => (
          <div key={idx}>
            {item.label.padEnd(20, '.')}{item.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PadEndUseCase;
