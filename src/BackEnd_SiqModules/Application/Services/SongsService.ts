import { IRepository, Song } from "./../../Domain";

import { AEntityService } from "./_AEntityService";

export class SongsService extends AEntityService<Song> {
    public constructor(repository: IRepository<Song>) {
        super(repository);
    }
}