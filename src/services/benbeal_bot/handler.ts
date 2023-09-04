import { helloSong } from './generateLyrics';

export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(`Hello ${helloSong()}`),
  };
};