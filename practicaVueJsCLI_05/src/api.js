const url = 'https://api.coincap.io/v2';

const getAssets = async () => {
  let response = await fetch(`${url}/assets?limit=20`);
  response = await response.json();
  return response.data;
};

const getAsset = async (coin) => {
  let response = await fetch(`${url}/assets/${coin}`);
  response = await response.json();
  return response.data;
};

const getAssetHistory = async (coin) => {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);

  const start = now.getTime();

  let response = await fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  );
  response = await response.json();

  return response.data;
};

const getMarkets = async (coin) => {
  try {
    let res = await fetch(`${url}/assets/${coin}/markets?limit=5`);
    res = await res.json();

    return res.data;
  } catch (error) {
    console.error('Error en el request');
  }
};

const getExchange = async (id) => {
  try {
    let res = await fetch(`${url}/exchanges/${id}`);
    res = await res.json();

    return res.data;
  } catch (error) {
    console.error('Error en el request');
  }
};

export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange,
};
