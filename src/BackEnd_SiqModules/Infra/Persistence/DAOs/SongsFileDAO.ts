import { Song } from "./../../../Domain";

import { IDAO } from "./_IDAO";

//import songsRecords from './../DataSets1/Songs.dataset';

export class SongsFileDAO implements IDAO<Song> {
    public getAll(): Array<Song> {
        //return songsRecords;
        return require('./../DataSets1/Songs.dataset'); //Autre syntaxe possible
    }
}   