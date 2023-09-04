const { helloSong } = require("./generateLyrics");
exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(`Hello ${helloSong()}`),
  };
};