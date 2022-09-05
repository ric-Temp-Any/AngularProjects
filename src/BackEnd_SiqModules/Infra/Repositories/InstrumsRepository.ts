import { Instrum } from "./../../Domain";

import { IDAO } from "./../Persistence/DAOs/_IDAO";

import { ARepository } from "./_ARepository";

export class InstrumsRepository extends ARepository<Instrum> {
    constructor(dao: IDAO<Instrum>) {
        super(dao);
    }
}