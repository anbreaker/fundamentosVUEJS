const url = 'https://api.coincap.io/v2';

const getAssets = async () => {
  const response = await fetch(`${url}/assets?limit=20`);
  const data = await response.json();
  return data.data;
};

export default {
  getAssets,
};
