const axios = require('axios');

exports.generateUIComponent = async (req, res) => {
  const { prompt, type, title, imageUrl, description } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;

  let finalPrompt = prompt;

  if (type === 'HTML') {
    const finalTitle = title?.trim() || 'Sample Title';
    const finalImage = imageUrl?.trim() || 'https://via.placeholder.com/300x200';
    const finalDesc = description?.trim() || 'This is a sample description.';

    finalPrompt = `
You are an expert frontend developer.

Generate a complete, valid HTML5 document for a card layout.

Requirements:
- Use this image: ${finalImage}
- Use this title: ${finalTitle}
- Use this description: ${finalDesc}
- Use semantic HTML elements and inline CSS
- No placeholders, no instructions, no markdown — just raw working HTML
- Wrap everything in a full <html><head>...<body>...</body></html> structure
    `.trim();
  }

  if (type === 'React') {
    finalPrompt = `
You are a React developer.

Write a functional React component using JSX.

Requirements:
- ${prompt}
- Use inline styles or classNames
- Do not include markdown or explanations
- Return ONLY valid JSX code
    `.trim();
  }

  if (type === 'JavaScript') {
    finalPrompt = `
Write plain JavaScript code to: ${prompt}

- Include meaningful comments
- Do not return markdown or any explanations
- Return raw JavaScript only
    `.trim();
  }

  if (type === 'Vue') {
    finalPrompt = `
You are a Vue 3 developer.

Write a complete Single File Component (SFC) that:
- ${prompt}
- Includes <template>, <script>, and <style> sections
- Does not include markdown or any explanation
- Return only valid .vue file content
    `.trim();
  }

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        contents: [{ parts: [{ text: finalPrompt }] }],
      }
    );

    const code = response.data.candidates[0]?.content?.parts[0]?.text;
    res.json({ code });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: 'Error generating component' });
  }
};
