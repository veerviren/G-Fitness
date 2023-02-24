export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d2b17dfc33msh99c38c3e86eddeap1e0b29jsne2d2f4b7281a",
    "X-RapidAPI-Host": "f81d5c7777msh2d926f7bd8e2c22p1af665jsn76a239cf9aaa",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
