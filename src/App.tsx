import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { IFilters, IState } from './components/TokenTable/interfaces';
import TokenTable from './components/TokenTable/TokenTable';
import { onFilterAction, onSortAction } from './store/actions';

function App() {

    const { sort, filters, tableData } = useSelector((state: IState) => state)
    const dispatch = useDispatch()

    const onSort = (sort: string) => {
        dispatch(onSortAction(sort))
    }

    const onFilter = (filters: IFilters) => {
        dispatch(onFilterAction(filters))
    }

    const onBuy = (id: number) => { }

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/trood_test_task' element={
                        <TokenTable
                            data={tableData}
                            filters={filters}
                            sort={sort}
                            onSort={onSort}
                            onFilter={onFilter}
                            onBuy={onBuy} />} />
                    <Route path='/trood_test_task/project/:id' />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
