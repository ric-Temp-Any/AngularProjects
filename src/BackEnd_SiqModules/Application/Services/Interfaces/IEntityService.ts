import { AEntity } from "./../../../Domain";

export interface IEntityService<TEntityType extends AEntity> {
    getAll(): Array<TEntityType>;
}