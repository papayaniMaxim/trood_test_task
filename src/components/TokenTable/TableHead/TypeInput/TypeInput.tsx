import { useContext, useEffect, useState } from 'react';
import { tableContext } from '../../TokenTable';
import classes from './TypeInput.module.css'

function TypeInput() {

    const { onFilter, filters } = useContext(tableContext)
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('')

    useEffect(()=> onFilter({ ...filters, type: value }),[value])

    return (
        <>
            <b className={classes.arrows}
                onClick={() => setOpen(prev => !prev)}>
                {open ? '⋀' : '⋁'}
            </b>
            {open &&
                <>
                    <div
                        className={classes.layout}
                        onClick={() => setOpen(() => false)}></div>
                    <input
                        value={value}
                        className={classes.input}
                        onChange={e => {
                            setValue(() => e.target.value.toUpperCase())
                        }}
                        placeholder='Input type...'
                    />
                </>
            }
        </>
    );
}

export default TypeInput;