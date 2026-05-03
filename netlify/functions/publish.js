exports.handler = async (event) => {
  const data = JSON.parse(event.body);

  const slug = data.judul
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-");

  const html = `
  <html>
    <head>
      <title>${data.judul}</title>
      <meta name="description" content="${data.tentang}">
    </head>
    <body>
      <h1>${data.judul}</h1>
      <p>${data.tentang}</p>
    </body>
  </html>
  `;

  // Simpan ke repo via GitHub API (langkah 3)
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "ok", slug })
  };
};
