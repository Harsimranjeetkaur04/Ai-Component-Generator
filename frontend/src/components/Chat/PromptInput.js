import React from 'react';

export default function PromptInput({ prompt, setPrompt, type, setType }) {
  return (
    <>
      <div style={{ marginBottom: '1rem' }}>
        <label>Prompt:</label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          required
          rows={4}
          style={{ width: '100%', padding: '0.5rem' }}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Component Type:</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={{ width: '100%', padding: '0.5rem' }}
        >
          <option value="React">React</option>
          <option value="HTML">HTML</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Vue">Vue</option>
        </select>
      </div>
    </>
  );
}
