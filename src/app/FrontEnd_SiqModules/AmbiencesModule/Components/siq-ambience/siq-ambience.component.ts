import { Component, Inject } from '@angular/core';

import { ISiqAmbienceService } from './ServicesInterfaces';

import { INJECTION_TOKENS, InjectionTokensList } from "./../../InjectionTokens";


const injectionTokensList : InjectionTokensList = INJECTION_TOKENS.SiqAmbienceComponent;

const v: Array<Function> =[SiqAmbienceComponent];
@Component({
  selector: 'siq-ambience-component',
  templateUrl: './siq-ambience.component.html',
  styleUrls: ['./siq-ambience.component.scss']
})
export class SiqAmbienceComponent {

  protected message: string = "";

  constructor(
    @Inject(injectionTokensList["ISiqAmbienceService"])
      private siqAmbienceService: ISiqAmbienceService

  ) { 
    this.message = this.siqAmbienceService.getStr();
  }

}
