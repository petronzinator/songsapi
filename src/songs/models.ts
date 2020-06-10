export interface SongListItem {
    id: string;
    title: string;
    artist: string;
    album: string;
}

export class CreateSongRequest {
    title: string;
    artist: string;
    album: string;
}