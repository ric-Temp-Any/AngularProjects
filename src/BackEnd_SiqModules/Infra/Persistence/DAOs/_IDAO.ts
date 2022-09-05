import { AEntity } from "./../../../Domain";

export interface IDAO<TEntityType extends AEntity> {
    getAll(): Array<TEntityType>;
}