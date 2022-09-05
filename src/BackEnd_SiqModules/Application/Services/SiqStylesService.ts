import { IRepository, SiqStyle } from "./../../Domain";

import { AEntityService } from "./_AEntityService";

export class SiqStylesService extends AEntityService<SiqStyle> {
    public constructor(repository: IRepository<SiqStyle>) {
        super(repository);
    }
}