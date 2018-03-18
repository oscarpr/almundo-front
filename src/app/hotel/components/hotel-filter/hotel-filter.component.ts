import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
	selector: 'app-hotel-filter',
	templateUrl: './hotel-filter.component.html',
	styleUrls: ['./hotel-filter.component.scss'],
	animations: [
		trigger('filterState', [
			state('shown', style({
				height: 'auto'
			})),
			state('hidden', style({
				height: '2em',
				overflowY: 'hidden'
			})),
			transition('hidden => shown', animate('100ms ease-in')),
			transition('shown => hidden', animate('100ms ease-out'))
		])
	]
})
export class HotelFilterComponent implements OnInit {

	filtersState: object = {
		nameFilter: 'shown',
		starsFilter: 'shown'
	};

	constructor() { }

	ngOnInit() { }


	toggleFilterState(filter: string): void {
		this.filtersState[filter] = this.filtersState[filter] === 'shown' ? 'hidden' : 'shown';
	}

}
