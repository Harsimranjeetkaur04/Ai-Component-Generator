// app/layout.tsx
import React from 'react';

export const metadata = {
  title: 'AI Component Generator',
  description: 'Generate React UI components using AI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* <link rel="stylesheet" href="/styles.css" /> if you want global styles */}
      </head>
      <body>
        <header style={styles.header}>
          <h1>⚡ AI Component Generator</h1>
        </header>

        <main style={styles.main}>
          {children}
        </main>

        <footer style={styles.footer}>
          <p>© {new Date().getFullYear()} | AI UI Generator</p>
        </footer>
      </body>
    </html>
  );
}

const styles = {
  header: {
    backgroundColor: '#222',
    color: '#fff',
    padding: '1rem',
    textAlign: 'center' as const,
  },
  main: {
    padding: '2rem',
    minHeight: '80vh',
  },
  footer: {
    backgroundColor: '#eee',
    padding: '1rem',
    textAlign: 'center' as const,
    fontSize: '0.9rem',
    color: '#555',
  },
};
