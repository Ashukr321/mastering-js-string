import React from 'react';

/**
 * Real-world React use case for .concat()
 * Scenario: Dynamically building complex CSS class names or strings from multiple pieces of state.
 */

const ConcatUseCase = ({ isError, isSuccess, className = "" }) => {
  // Using .concat() to build a dynamic string
  const baseClass = "btn";
  let finalClass = baseClass.concat(" ", className);

  if (isError) finalClass = finalClass.concat(" btn--error");
  if (isSuccess) finalClass = finalClass.concat(" btn--success");

  return (
    <div style={{ padding: '20px' }}>
      <h3>Method: .concat()</h3>
      <div className={finalClass} style={{ 
        padding: '10px', 
        border: '1px solid',
        borderColor: isError ? 'red' : isSuccess ? 'green' : '#ccc',
        backgroundColor: isError ? '#ffe6e6' : isSuccess ? '#e6ffed' : '#f9f9f9'
      }}>
        Computed Class Name: <code>{finalClass}</code>
      </div>
    </div>
  );
};

export default ConcatUseCase;
