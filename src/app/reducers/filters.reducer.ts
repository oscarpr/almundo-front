import { ISelectedFilters } from './../hotel/components/hotel-filter/hotel-filter.component';
import { Action } from '@ngrx/store';

export class FilterAction implements Action {
    type: string;
    filter: ISelectedFilters;
}

export const FILTER_CHANGE: string = 'filter-change';

const defaultSelectedFilters: ISelectedFilters = {
    name: null,
    stars: {
        all: true,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false
    }
};


export function hotelFilterReducer(state: ISelectedFilters = defaultSelectedFilters, action: FilterAction) {
    if (action.type === FILTER_CHANGE) {
        const filter: ISelectedFilters = onFilterChange(state, action.filter);

        return Object.assign({}, filter);
    }
    return state;
}



function onFilterChange(currentFilters: ISelectedFilters, updatedFilter: ISelectedFilters): ISelectedFilters {
    let response: ISelectedFilters = currentFilters;

    if (updatedFilter.stars) {
        response.stars = onStarFilterChange(response.stars, updatedFilter.stars);
    }

    if (updatedFilter.name !== undefined && updatedFilter.name !== null) {
        response.name = updatedFilter.name;
    }
    return response;
}


function onStarFilterChange(currentStarsFilter: any, updatedStarsFilter: any): object {
    let response: any = currentStarsFilter;

    if (updatedStarsFilter.all) {
        for (let starNumber in response) {
            response[starNumber] = false;
        }

        response.all = !currentStarsFilter.all;
        return response;
    }

    response.all = false;

    for (let starNumber in updatedStarsFilter) {
        response[starNumber] = !currentStarsFilter[starNumber];
    }

    return Object.assign({}, response);
}
