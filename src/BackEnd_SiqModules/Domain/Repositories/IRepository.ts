import { AEntity } from "./../Entities";

export interface IRepository<TEntityType extends AEntity> {
    getAll(): Array<TEntityType>;
}