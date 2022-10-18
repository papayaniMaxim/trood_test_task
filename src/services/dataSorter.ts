import { IData } from "../components/TokenTable/interfaces"

export const dataSorter = (
    tableData: IData[],
    sort: string) => {

    const data: IData[] = [...tableData]

    if (sort != '') {
        
        if (sort === 'volume' || sort === 'roi' || sort === 'free' || sort === 'hedge') {
            return data.sort((a, b) => a[sort] - b[sort])
        }
        if (sort === 'type' || sort === 'name' || sort === 'conditions'){
            return data.sort((a, b) => a[sort].localeCompare(b[sort]))
        }

        switch (sort) {                
            case '-type':
                return data.sort((a, b) => - a.type.localeCompare(b.type))

            case '-name':
                return data.sort((a, b) => - a.name.localeCompare(b.name))

            case '-conditions':
                return data.sort((a, b) => - a.conditions.localeCompare(b.conditions))

            case '-volume':
                return data.sort((a, b) => - (a.volume - b.volume))

            case '-roi':
                return data.sort((a, b) => - (a.roi - b.roi))

            case '-free':
                return data.sort((a, b) => - (a.free - b.free))

            case '-hedge':
                return data.sort((a, b) => - (a.hedge - b.hedge))
        }
    }
    return data
}
