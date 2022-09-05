import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  SiqAmbienceComponent 
} from './Components';

import { IClass } from "@Helpers_Module/";

const exportedComponents: Array<IClass<any>> = [
  SiqAmbienceComponent
];


@NgModule({
  declarations: exportedComponents.concat([]),

  exports: exportedComponents,

  imports: [
    CommonModule
  ]

})
export class AmbiencesModule {
}
