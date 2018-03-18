import { PipesModule } from './pipes/pipes.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import localeFr from '@angular/common/locales/es-AR';

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeFr, 'ar');

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
