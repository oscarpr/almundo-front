import { PipesModule } from './../pipes/pipes.module';
import { HotelService } from './services/hotel/hotel.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelFilterComponent } from './components/hotel-filter/hotel-filter.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { hotelFilterReducer } from '../reducers/filters.reducer';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
	{ path: '', component: HotelListComponent }
]

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		HttpClientModule,
		PipesModule,
		FormsModule,
		StoreModule.forRoot({ hotelFilter: hotelFilterReducer })
	],
	declarations: [HotelListComponent, HotelFilterComponent],
	providers: [HotelService]
})
export class HotelModule { }
