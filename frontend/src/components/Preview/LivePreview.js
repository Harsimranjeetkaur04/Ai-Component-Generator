import React from 'react';

export default function LivePreview({ code }) {
  if (!code) return null;

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>Live Preview:</h3>
      <iframe
        srcDoc={code}
        title="Live Preview"
        style={{
          width: '100%',
          height: '300px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          marginTop: '1rem',
        }}
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
}
