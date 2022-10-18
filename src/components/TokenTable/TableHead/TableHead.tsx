import { useMemo } from 'react'
import ColumnNameWithSortIndicator from './ColumnNameWithSortIndicator/ColumnNameWithSortIndicator'
import SelectedValueMarker from './SelectedValueMarker/SelectedValueMarker'
import StatusSelect from './StatusSelect/StatusSelect'
import TypeInput from './TypeInput/TypeInput'
import classes from './TableHead.module.css'
import { useContext } from 'react'
import { tableContext } from '../TokenTable'

function TableHead() {
    const { filters, sort } = useContext(tableContext)
    
    const headerCells = useMemo(() => {

        const headerColumnsArray = [
            'name',
            'type',
            'conditions',
            'volume',
            'roi',
            'free',
            'hedge',
            'button'
        ]

        return headerColumnsArray.map(key => {
            if (key === 'button') return <th key={key}></th>
            return (
                <th key={key}>
                    <div className={classes.tableHeaderCell}>
                        {key === 'name' && <StatusSelect />}
                        {key === 'type' && <TypeInput />}
                        <SelectedValueMarker value={key}  />
                        <ColumnNameWithSortIndicator value={key}  />
                    </div>
                </th>
            )
        })
    }, [sort, filters])

    return (
        <thead>
            <tr className={classes.tableHeaderRows} >
                {headerCells}
            </tr>
        </thead>
    );
}

export default TableHead;