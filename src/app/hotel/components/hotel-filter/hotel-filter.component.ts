import { FilterAction, FILTER_CHANGE } from './../../../reducers/filters.reducer';
import { Observable } from 'rxjs/Observable';
import { AppState } from './../../../app-state';
import { Component, EventEmitter, OnInit, trigger, state, style, transition, animate, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';

export interface ISelectedFilters {
	name?: string;
	stars?: { all?: boolean, 1?: boolean, 2?: boolean, 3?: boolean, 4?: boolean, 5?: boolean }
};


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
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelFilterComponent implements OnInit {

	filtersState: object = {
		nameFilter: 'shown',
		starsFilter: 'shown'
	};

	selectedFilters$: Observable<ISelectedFilters>;

	constructor(private store: Store<AppState>) {
		this.selectedFilters$ = store.pipe(select('hotelFilter'));
	}

	ngOnInit() { }


	toggleFilterState(filter: string): void {
		this.filtersState[filter] = this.filtersState[filter] === 'shown' ? 'hidden' : 'shown';
	}


	hotelNameFilterChange(name: string): void {
		const filter: ISelectedFilters = {
			name: name
		};
		this.dispatchFilterChange(filter);

	}


	setStarFilter(selected: number | string) {
		let filter: ISelectedFilters = { stars: {} };

		if (typeof selected === 'string') {
			filter.stars = { all: true };
		} else {
			filter.stars[selected] = true;
		}

		this.dispatchFilterChange(filter);
	}


	private dispatchFilterChange(filter: ISelectedFilters): void {
		const filterChangeAction: FilterAction = {
			type: FILTER_CHANGE,
			filter: filter
		}
		
		this.store.dispatch(filterChangeAction);
	}

}
