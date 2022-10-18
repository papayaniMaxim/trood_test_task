import { IState } from "../components/TokenTable/interfaces"
import { tableData } from "../data/tableData"
import { FILTERS_CHANGE, SORT_CHANGE } from "./actions"

const initialState = {
    tableData: tableData,
    sort: '',
    filters: {
        type: '',
        status: '',
    },
}

export const reducer = (state: IState = initialState, action: any) => {
    switch (action.type) {

        case SORT_CHANGE:
            return { ...state, sort: action.sort }

        case FILTERS_CHANGE:
            return { ...state, filters: action.filters }

        default: return state
    }
}