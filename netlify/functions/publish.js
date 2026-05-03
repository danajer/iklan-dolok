exports.handler = async (event) => {
  const data = JSON.parse(event.body);

  const judul = encodeURIComponent(data.judul);
  const tentang = encodeURIComponent(data.tentang);

  const url = `https://iklan-dolok.netlify.app/view.html?judul=${judul}&tentang=${tentang}`;

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Berhasil",
      link: url
    })
  };
};
