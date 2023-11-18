import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RtlDirective } from './directives/rtl.directive';
import { TranslateCompiler, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import {CustomLoader} from "./services/customTranslate";
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
@NgModule({
     imports: [
    CommonModule
	, FormsModule
	,HttpModule
	,HttpClientModule
	,TranslateModule.forRoot({
loader: {provide: TranslateLoader, useClass: CustomLoader, deps: [HttpClient]}
})
	
  ],
    declarations: [
	RtlDirective
    ],
	 exports: [RtlDirective],
    providers: [
	HttpClientModule
	,HttpClient
    ]
})

export class CoreModule {
   
    public static forRoot(): ModuleWithProviders {
	 return {
            ngModule: CoreModule,
			
			providers: [
			
			HttpClientModule
			,HttpClient
			,HttpModule
			]
			
			};
	}
	
	
}