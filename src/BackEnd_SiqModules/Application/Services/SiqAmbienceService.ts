import { Instrum, IRepository, SiqStyle, Song } from "./../../Domain";

import { ISiqAmbienceService } from "./Interfaces";


export class SiqAmbienceService implements ISiqAmbienceService {

    constructor(
        // private songsRepository: IRepository<Song>,
        // private siqStylesRepository: IRepository<SiqStyle>,
        // private instrumsRepository: IRepository<Instrum>,
    ) {
        
    }

    public getSiqAmbienceDescription(): string {
        return "BACKEND response: Description de l'Ambiance.";
    }

}