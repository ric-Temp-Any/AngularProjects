import { AEntity, IRepository } from "./../../Domain";

import { IEntityService } from "./Interfaces/IEntityService";

export abstract class AEntityService<TEntityType extends AEntity> implements IEntityService<TEntityType> {
    protected constructor(private repository: IRepository<TEntityType>) {
        
    }
    public getAll(): Array<TEntityType> {
        return this.repository.getAll();
    }
}