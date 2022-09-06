import { InjectionToken } from "@angular/core";

import { 
  ISiqAmbienceService,
  INJECTION_TOKENS_LIST
} from "./Components/siq-ambience/ServicesInterfaces";


import { IClass } from "@Helpers_Module/";
import { SiqAmbienceComponent } from "./Components";

type TComponentOrService = IClass<any>;

export type InjectionTokensList = {[key: string]: InjectionToken<any>};
// export type InjectionTokens = {[key: string]: InjectionTokensList};
type InjectionTokensMap = Map<TComponentOrService, InjectionTokensList>;


export const maMap: InjectionTokensMap = new Map<TComponentOrService, InjectionTokensList>([
  [SiqAmbienceComponent, {
    "ISiqAmbienceService": new InjectionToken<ISiqAmbienceService>("")
  }]
]);

const list: InjectionTokensList | undefined = maMap.get(SiqAmbienceComponent);
const v: InjectionToken<ISiqAmbienceService> | undefined = list?.["ISiqAmbienceService"];