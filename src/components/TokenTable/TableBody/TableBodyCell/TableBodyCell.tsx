import { IData } from "../../interfaces";
import classes from './TableBodyCell.module.css'

function TableBodyCell(props: { dataItem: IData }) {

    const { dataItem } = props

    const itemStatus = dataItem.status
    const dataItemEntries = Object.entries({
        ...dataItem,
        volume: '$' + ' ' + dataItem.volume,
        roi: dataItem.roi + ' %',
        hedge: dataItem.hedge + ' %',
    })

    return (<>

        {dataItemEntries.map(entry => {

            if (entry[0] === 'id' || entry[0] === 'status') return

            return (
                <td className={classes.tableBodyCell}
                    key={entry[0]}>
                    {entry[0] === 'name'
                        && <div className={classes.statusIndicator + " " + classes[itemStatus]}></div>}
                    {entry[1]}
                </td>)
        })
        }
    </>);
}

export default TableBodyCell;