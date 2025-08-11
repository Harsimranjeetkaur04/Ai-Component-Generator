import React from 'react';

export default function ExportControls({ code, type }) {
  const handleCopy = () => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard!');
  };

  const handleDownload = () => {
    if (!code) return;
    const blob = new Blob([code], { type: 'text/plain' });

    const extensionMap = {
      React: 'jsx',
      JavaScript: 'js',
      HTML: 'html',
      Vue: 'vue',
    };

    const fileExtension = extensionMap[type] || 'txt';

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `generated_component.${fileExtension}`;
    link.click();
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
      <button onClick={handleCopy} style={{ marginRight: '0.5rem', padding: '0.3rem 0.7rem' }}>
        Copy
      </button>
      <button onClick={handleDownload} style={{ padding: '0.3rem 0.7rem' }}>
        Download
      </button>
    </div>
  );
}
