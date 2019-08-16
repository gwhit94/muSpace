import { Song } from './song.interface';

export interface Playlist {
    id: number;
    name: string;
    songs: [
        Song
    ]
}