import { useNavigate } from "react-router-dom";
import BuyButton from "./BuyButton/BuyButton";
import { IData } from "../interfaces";
import TableBodyCell from "./TableBodyCell/TableBodyCell";
import classes from './TableBody.module.css'
import { useContext } from "react";
import { tableContext } from "../TokenTable";

function TableBody(props: {
    filteredAndSortedData: IData[]
}) {
    
    const { filteredAndSortedData } = props
    const { onBuy } = useContext(tableContext)
    const navivigate = useNavigate()
    
    return (
        <tbody>
            {filteredAndSortedData.map(item => (
                <tr onClick={() => navivigate('/project/' + item.id)}
                    key={item.id}
                    className={classes.bodyRows + " " + classes[item.status]}>
                    <TableBodyCell dataItem={item} />
                    <td className={classes.tableBodyCell}><BuyButton id={item.id} onBuy={onBuy}>Buy</BuyButton></td>
                </tr>
            )
            )}
        </tbody>);
}

export default TableBody;