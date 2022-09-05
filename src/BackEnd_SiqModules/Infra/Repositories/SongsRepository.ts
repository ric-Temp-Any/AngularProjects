import { Song } from "./../../Domain";

import { IDAO } from "./../Persistence/DAOs/_IDAO";

import { ARepository } from "./_ARepository";

export class SongsRepository extends ARepository<Song> {
    constructor(dao: IDAO<Song>) {
        super(dao);
    }
}