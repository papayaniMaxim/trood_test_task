import { useContext, useState } from 'react';
import { tableContext } from '../../TokenTable';
import classes from './StatusSelect.module.css'

function StatusSelect() {

    const { onFilter, filters } = useContext(tableContext)
    const options = ['All', 'green', 'yellow', 'red']
    const [open, setOpen] = useState(false)

    const filterStatusHandler = (status: string) => {
        if (status === 'All') status = ''
        return onFilter({ ...filters, status: status })
    }

    
    
    return (

        <div className={classes.container}>
            <b className={classes.arrows}
                onClick={() => setOpen(prev => !prev)}>
                {open ? '⋀' : '⋁'}
            </b>

            {open &&
                <>
                    <div
                        className={classes.layout}
                        onClick={() => setOpen(() => false)}>
                    </div>

                    <ul className={classes.optionsList}>

                        {options.map(option => (

                            <li className={classes.option}
                                key={option}
                                onClick={() => filterStatusHandler(option)}>
                                {option}
                            </li>
                        ))}

                    </ul>
                </>}
        </div>);
}

export default StatusSelect;