import { BASE_URL } from './../../../environments/environment';
import { HotelService } from './../services/hotel/hotel.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-hotel-list',
	templateUrl: './hotel-list.component.html',
	styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {
	readonly BASE_URL: string = BASE_URL;
	hotels: any[];

	constructor(private hotelService: HotelService) { }

	ngOnInit() {
		this.getAllHotels();
	}


	private getAllHotels(): void {
		this.hotelService.getHotels().subscribe(
			(response: any) => {
				if (response.success) {
					this.hotels = response.hotels;
				}
			}
		);
	}

}
