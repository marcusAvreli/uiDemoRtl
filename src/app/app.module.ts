import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CoreModule} from './core/core.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
	, CoreModule.forRoot()
	,TranslateModule
	,SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
