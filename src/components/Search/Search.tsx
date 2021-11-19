import {SearchProps} from './Search.props'
import React from 'react'
import {setCurrentPage} from '../../redux/actions/dbActions'
import {getDb,getDbClearInput} from '../../redux/actions/dbActions'
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux'
import cn from 'classnames'
import {ReactComponent as Glass} from './search.svg'
import styles from './Search.module.scss'

export const Search = ({search,setSearch,className,...props}: SearchProps) => {
    const dispatch = useAppDispatch()
    const currentPage = useAppSelector(state => state.db.currentPage)
    const perPage = useAppSelector(state => state.db.perPage)

    const searchHandler = () => {
        if (search === '') {
            return
        }
        dispatch(setCurrentPage(1))
        dispatch(getDb(search, currentPage, perPage))
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            searchHandler()
        }
    }

    const handleClearInput = () => {
        setSearch('')
        dispatch(getDbClearInput(currentPage, perPage))
    }

    return (
        <>
            <div className={ cn(className, styles.search) } { ...props }>
                <input
                    className={ styles.input }
                    placeholder='Поиск...'
                    value={ search }
                    onChange={ (e) => setSearch(e.target.value) }
                    onSubmit={searchHandler}
                    onKeyDown={handleKeyDown}
                    required={true}
                />
                {search !== '' ? <span className={styles.clear} onClick={handleClearInput}>очистить</span>: ''}
                <Glass className={styles.button} onClick={searchHandler}/>
            </div>
        </>
    )
}