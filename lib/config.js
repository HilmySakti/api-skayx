const axios = require("axios");

module.exports = async function () {
  let { data } = await axios.get("https://api.skayx.my.id/config.json");
  return data;
}.bind();
