// import * as twit from 'twit';
import { getRandomItemFromArray } from './utils';
import { SongInfo, getSongsFromArtist } from './GeniusLyricsGateway';
import { getRandomLyricFromPage } from './LyricScraper';

const keys = {
  CONSUMER_API_KEY: process.env.TWITTER_CONSUMER_API_KEY,
  CONSUMER_API_SECRET_KEY: process.env.TWITTER_CONSUMER_API_SECRET_KEY,
  ACCESS_TOKEN: process.env.TWITTER_ACCESS_TOKEN,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
};

const getRandomSongFromArtist = async (artistId: string): Promise<SongInfo> => {
const AllSongs: SongInfo[] = await getSongsFromArtist(artistId);
  const randomSong: SongInfo = getRandomItemFromArray(AllSongs);
  return randomSong;
};

const getTweetFrom = (lyrics: string): string => {
  const lines = lyrics.split('\n');
  for (let index = 0; index < lines.length; index++) {
    if (lines[index] === '' || lines[index].includes('[')) {
      lines[index] = 'XXX';
    }
  }
  const filteredLines = lines.filter((line) => line !== 'XXX');
  const min = 0;
  const max = filteredLines.length - 2;
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  const tweet = `${filteredLines[randomNum]}\n${filteredLines[randomNum + 1]}`;
  return tweet.replace('\\', '');
};

export const helloSong = async (): Promise<string> => {
    const hello = await getRandomSongFromArtist("68382");
    return hello.title
}

// export const postLyricTweet = async (event: any, context: any): Promise<string> => {
//   const randomSong: SongInfo = await getRandomSongFromArtist("68382");
//   const songPath = `https://genius.com${randomSong.path}`
//   const randomLyrics = getRandomLyricFromPage(songPath);
//   const auth = new twit({
//     consumer_key: keys.CONSUMER_API_KEY,
//     consumer_secret: keys.CONSUMER_API_SECRET_KEY,
//     access_token: keys.ACCESS_TOKEN,
//     access_token_secret: keys.ACCESS_TOKEN_SECRET,
//   });

//   const tweet = getTweetFrom(randomLyrics);

//   const tweetResponse = await auth.post('statuses/update', { status: tweet });

//   return tweetResponse.data.text;
// };
