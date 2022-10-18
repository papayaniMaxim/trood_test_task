import { useContext } from 'react'
import { IFilters } from '../../interfaces'
import { tableContext } from '../../TokenTable'
import classes from './SelectedValueMarker.module.css'

function SelectedValueMarker(props: {
    value: string,
}) {

    const { value } = props
    const { filters } = useContext(tableContext)

    if (value === 'type') {
        if (filters.type === '') return <div className={classes.selectedValue}>All</div>
        return <div className={classes.selectedValue}>{filters.type}</div>
    }

    if (value === 'name') {
        if (filters.status === '') return <div className={classes.selectedValue}>All</div>
        return <div className={classes.selectedValue}>{filters.status}</div>
    }
    return null;
}

export default SelectedValueMarker;