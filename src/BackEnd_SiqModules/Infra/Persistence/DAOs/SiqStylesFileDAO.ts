import { SiqStyle } from "./../../../Domain";

import { IDAO } from "./_IDAO";

//import siqStylesRecords from './../DataSets1/SiqStyles.dataset';

export class SiqStylesFileDAO implements IDAO<SiqStyle> {
    public getAll(): Array<SiqStyle> {
        //return siqStylesRecords;
        return require('./../DataSets1/SiqStyles.dataset'); //Autre syntaxe possible
    }
}   