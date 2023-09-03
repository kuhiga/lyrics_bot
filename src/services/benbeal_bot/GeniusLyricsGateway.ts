const ACCESS_TOKEN = process.env.GENIUS_ACCESS_TOKEN;
export type SongInfo = {
    id: number;
    title: string;
    path: string;
}
export const getSongsFromArtist = async (artistId: string): Promise<SongInfo[]> => {
    const songsList: SongInfo[] = [];
    let nextPage = -1;
    let pageNumber = 1;
    while(nextPage !== null){
        await fetch(`https://api.genius.com/artists/${artistId}/songs?per_page=${limit}&page=${pageNumber}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
        }).then((res:any) => {
            nextPage = res.next_page; 
            const moreSongs = res.map((song: any) => ({ id: song.id, title: song.full_title, path: song.path  } as SongInfo));
            songsList.concat(moreSongs);
        }
        ).catch(
            (e)=>{
                console.log(e);
                return songsList;
            }
        );
    }
    return songsList;

}

