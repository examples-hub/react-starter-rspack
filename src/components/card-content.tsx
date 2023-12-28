import * as React from 'react';

export const CardContent = ({ text = '', children }) => {
  return (
    <div>
      <h4>content title</h4>
      <p>{text}</p>
      {children}
    </div>
  );
};
