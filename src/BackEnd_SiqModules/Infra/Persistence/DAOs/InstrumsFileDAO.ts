import { Instrum } from "./../../../Domain";

import { IDAO } from "./_IDAO";

// import instrumsRecords from './../DataSets1/Instrums.dataset';

export class InstrumsFileDAO implements IDAO<Instrum> {
    public getAll(): Array<Instrum> {
        // return instrumsRecords;
        return require('./../DataSets1/Instrums.dataset'); //Autre syntaxe possible
    }
}   