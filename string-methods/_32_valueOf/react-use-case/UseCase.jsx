import React from 'react';

/**
 * Real-world React use case for .valueOf()
 * Scenario: Deep equality check when working with String objects or complex data structures where you need the raw string value.
 */

const ValueOfUseCase = () => {
  const [val1, setVal1] = React.useState(new String('test'));
  const [val2, setVal2] = React.useState('test');

  // Strict comparison vs primitive value comparison
  const isStrictlyEqual = val1 === val2; // false
  const isValueEqual = val1.valueOf() === val2; // true

  return (
    <div style={{ padding: '20px' }}>
      <h3>Method: .valueOf()</h3>
      <p>val1 (String object): <code>{JSON.stringify(val1)}</code> (Type: {typeof val1})</p>
      <p>val2 (Primitive string): <code>"{val2}"</code> (Type: {typeof val2})</p>
      <div style={{ marginTop: '10px' }}>
        <p>Strictly Equal (===)? <strong>{isStrictlyEqual ? ' Yes' : ' No'}</strong></p>
        <p>Value Equal (valueOf() ===)? <strong>{isValueEqual ? ' Yes' : ' No'}</strong></p>
      </div>
    </div>
  );
};

export default ValueOfUseCase;
