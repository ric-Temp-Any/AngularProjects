import { InjectionToken } from "@angular/core";

import { ISiqAmbienceService } from "./ISiqAmbienceService";

export type InjectionTokensList = {[key: string]: InjectionToken<any>};
export type InjectionTokens = {[key: string]: InjectionTokensList};

export const INJECTION_TOKENS_LIST: InjectionTokensList = {
  "ISiqAmbienceService": new InjectionToken<ISiqAmbienceService>("")
}