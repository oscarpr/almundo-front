import { BASE_URL } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HotelService {
	private readonly HOTELS_URI: string = 'api/hotels';

	constructor(private http: HttpClient) { }

	getHotels(queryParams?: any): Observable<any> {
		return this.http.get(`${BASE_URL}${this.HOTELS_URI}`, { params: queryParams });
	}

}
