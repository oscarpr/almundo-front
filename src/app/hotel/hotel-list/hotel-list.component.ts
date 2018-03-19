import { Store, select } from '@ngrx/store';
import { ISelectedFilters } from './../components/hotel-filter/hotel-filter.component';
import { BASE_URL } from './../../../environments/environment';
import { HotelService } from './../services/hotel/hotel.service';
import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app-state';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-hotel-list',
	templateUrl: './hotel-list.component.html',
	styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {
	readonly BASE_URL: string = BASE_URL;
	hotels: any[];

	selectedFilters: Observable<ISelectedFilters>;

	constructor(private hotelService: HotelService, private store: Store<AppState>) {
		this.selectedFilters = store.pipe(select('hotelFilter'));
	}


	ngOnInit() {
		this.selectedFilters.subscribe(
			(filters: ISelectedFilters) => {
				this.onFiltersChange(filters)
			}
		);
	}


	private getHotels(queryParams?: any): void {
		this.hotelService.getHotels(queryParams).subscribe(
			(response: any) => {
				if (response.success) {
					this.hotels = response.hotels;
				}
			}
		);
	}


	private onFiltersChange(filters: ISelectedFilters) {
		let params: any = {
			filter: {}
		};

		if (filters.name) {
			params.filter.name = filters.name;
		}

		for (let starNumber in filters.stars) {
			if (filters.stars[starNumber]) {
				params.filter.stars = params.filter.stars || [];
				params.filter.stars.push(starNumber);
			}
		}


		if (filters.stars.all) {
			delete params.filter['stars'];
		}

		params.filter = JSON.stringify(params.filter);
		this.getHotels(params);
	}

}
