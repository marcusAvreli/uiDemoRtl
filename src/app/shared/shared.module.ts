import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders } from '@angular/core';
import {UiModule} from "./ui-elements/ui.module";
@NgModule({
    imports: [
       
        UiModule
		]
		,   exports: [
      
        UiModule
		]
		 ,schemas: [CUSTOM_ELEMENTS_SCHEMA]
		})
		
		export class SharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule
        };
    }

}