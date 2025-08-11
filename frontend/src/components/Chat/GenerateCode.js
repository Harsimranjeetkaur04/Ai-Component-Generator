import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ExportControls from '../Editor/ExportControls';
import LivePreview from '../Editor/LivePreview';

export default function GeneratedCode({ code, type }) {
  if (!code) return null;

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2 style={{ marginBottom: '0.5rem' }}>Generated Code:</h2>

      {/* Copy & Download buttons */}
      <ExportControls code={code} type={type} />

      {/* Syntax-highlighted code block */}
      <SyntaxHighlighter language="javascript" style={oneDark} wrapLongLines>
        {code}
      </SyntaxHighlighter>

      {/* Live Preview for HTML output */}
      {type === 'HTML' && <LivePreview code={code} />}
    </div>
  );
}
