import React from 'react';

export default function PropertyPanel({
  prompt,
  setPrompt,
  type,
  setType,
  title,
  setTitle,
  imageUrl,
  setImageUrl,
  description,
  setDescription,
}) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <div>
        <label>Prompt:</label>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          required
          style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
        />
      </div>

      <div>
        <label>Component Type:</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
        >
          <option value="React">React</option>
          <option value="HTML">HTML</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Vue">Vue</option>
        </select>
      </div>

      {type === 'HTML' && (
        <>
          <div>
            <label>Title (optional):</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Happy Birthday"
              style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
            />
          </div>

          <div>
            <label>Image URL (optional):</label>
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="e.g. https://placekitten.com/300/200"
              style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
            />
          </div>

          <div>
            <label>Description (optional):</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g. A cute birthday card with a kitten!"
              rows={2}
              style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
            />
          </div>
        </>
      )}
    </div>
  );
}
