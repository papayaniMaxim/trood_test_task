import { IFilters } from "../components/TokenTable/interfaces"

export const SORT_CHANGE = 'SORT_CHANGE'
export const FILTERS_CHANGE = 'FILTERS_CHANGE'

export const onSortAction = (sort: string) => {
    return {
        type: SORT_CHANGE,
        sort
    }
}

export const onFilterAction = (filters: IFilters) => {
    return {
        type: FILTERS_CHANGE,
        filters
    }
}

