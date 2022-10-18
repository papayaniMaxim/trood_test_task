import { MouseEventHandler, useContext } from 'react'
import { tableContext } from '../../TokenTable'
import classes from './ColumnNameWithSortIndicator.module.css'

function ColumnNameWithSortIndicator(props: {
    value: string,
}) {

    const { value } = props
    const { sort, onSort } = useContext(tableContext)

    const svgPath = () => {
        if (sort === value) return "M -216.1 419.7 l -15.1 14.8 c -0.4 0.3 -1.2 0.3 -1.6 0 l -15.1 -14.8 c -0.4 -0.3 0.1 -0.8 0.8 -0.8 h 30.2 C -216.2 418.9 -215.8 419.3 -216.1 419.7 z"
        if (sort === '-' + value) return "M -247.9 433 l 15.1 -14.8 c 0.4 -0.3 1.2 -0.3 1.6 0 l 15.1 14.8 c 0.4 0.3 -0.1 0.8 -0.8 0.8 h -30.2 C -247.8 433.7 -248.2 433.3 -247.9 433 z"
    }

    const columnName = (value: string) => {
        switch (value) {
            case 'name': return 'Project'
            case 'type': return 'Token type'
            case 'conditions': return 'Conditions'
            case 'volume': return 'Volume'
            case 'roi': return 'ROI'
            case 'free': return 'Free float'
            case 'hedge': return 'Insurance hedge'
        }
    }

    const sortHandler: MouseEventHandler = () => {
        if (sort === value) return onSort("-" + value)
        return onSort(value)
    }

    return (
        <section className={classes.columnNameSection}
        onClick={sortHandler}
        >
            {columnName(value)}
            <svg
                width='12'
                height='12'
                viewBox="-265 388.9 64 64" >
                <g><path d={svgPath()} /></g>
            </svg>
        </section>);
}

export default ColumnNameWithSortIndicator;

