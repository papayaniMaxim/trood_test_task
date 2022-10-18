import { createContext, useMemo } from "react";
import { IData, IFilters } from "./interfaces";
import { dataFilter } from "../../services/dataFilter";
import { dataSorter } from "../../services/dataSorter";
import classes from "./TokenTable.module.css"
import TableBody from "./TableBody/TableBody";
import TableHead from "./TableHead/TableHead";

export const tableContext = createContext<any>(undefined)

function TokenTable(props: {
    data: IData[],
    filters: IFilters,
    sort: string,
    onSort: (sort: string) => void,
    onFilter: (filters: IFilters) => void,
    onBuy: (id: number) => void,
}) {

    const { filters, sort, data } = props

    const filteredAndSortedData: IData[] = useMemo(() => {

        const filteredData = dataFilter(data, filters)
        const filteredAndSortedData = dataSorter(filteredData, sort)
        return filteredAndSortedData 
    }, [sort, filters])

    return (
        <tableContext.Provider value={props}>
            <table className={classes.table} >
                <TableHead />
                <TableBody filteredAndSortedData={filteredAndSortedData} />
            </table>
        </tableContext.Provider>
    );
}

export default TokenTable;

