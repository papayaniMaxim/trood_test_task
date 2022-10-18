import { IFilters, IData } from "../components/TokenTable/interfaces"


export function dataFilter(
    tableData: IData[],
    filters: IFilters) {

    const data: IData[] = [...tableData]

    if (filters.status === '' && filters.type === '') return tableData

    if (filters.status === '') {
        return (data.filter(item => item.type.toUpperCase().includes(filters.type.toUpperCase())))
    }
    return data.filter(item => {
        return item.status === filters.status && item.type.toUpperCase().includes(filters.type.toUpperCase())
    })

}


