import { IRepository, Instrum } from "./../../Domain";

import { AEntityService } from "./_AEntityService";

export class InstrumsService extends AEntityService<Instrum> {
    public constructor(repository: IRepository<Instrum>) {
        super(repository);
    }
}