
export interface IState {
    tableData: IData[],
    sort: string,
    filters: IFilters,
}
export interface IData {
    id: number,
    name: string,
    status: 'green' | 'red' | 'yellow',
    type: string,
    conditions: string,
    volume: number,
    roi: number,
    free: number,
    hedge: number,

}

export interface IFilters {
    status: string,
    type: string,
}

export interface ITableContext {
    data: IData[],
    filters: IFilters,
    sort: string,
    onSort: (sort: string) => void,
    onFilter: (filters: IFilters) => void,
    onBuy: (id: number) => void,
}

