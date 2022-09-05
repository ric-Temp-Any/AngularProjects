import { AEntity, IRepository } from "./../../Domain";

import { IDAO } from "../Persistence/DAOs/_IDAO";

export abstract class ARepository<TEntityType extends AEntity> implements IRepository<TEntityType> {
    protected constructor(private dao: IDAO<TEntityType>) {
    }

    public getAll(): Array<TEntityType> {
        return this.dao.getAll();
    }
}