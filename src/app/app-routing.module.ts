import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
	{ path: '', redirectTo: 'hotel-list', pathMatch: 'full' },
	{ path: 'hotel-list', loadChildren: './hotel/hotel.module#HotelModule' }
]



@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
