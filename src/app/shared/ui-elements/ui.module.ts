/**
 * @module UiModule
 * @preferred
 */ /** */
import { CommonModule } from '@angular/common';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { SelectComponent } from './select/select.component';
import { IconArrowDownComponent } from './icons/icon-arrow-down/icon-arrow-down.component';
@NgModule({
  imports: [
    CommonModule
  ]
  ,  declarations: [SelectComponent
  ,IconArrowDownComponent]
  ,exports: [SelectComponent,IconArrowDownComponent]
   ,schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  export class UiModule { }