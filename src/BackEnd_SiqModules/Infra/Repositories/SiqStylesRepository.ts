import { SiqStyle } from "./../../Domain";

import { IDAO } from "./../Persistence/DAOs/_IDAO";

import { ARepository } from "./_ARepository";

export class SiqStylesRepository extends ARepository<SiqStyle> {
    constructor(dao: IDAO<SiqStyle>) {
        super(dao);
    }
}