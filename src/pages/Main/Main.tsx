import {useAppDispatch, useAppSelector} from '../../hooks/useRedux'
import {getDb} from '../../redux/actions/dbActions'
import {useEffect,useState} from 'react'
import {Search, Spinner} from '../../components'
import {Header} from '../../components'
import {RootObject} from '../../interfaces/db.interface'
import {CardList} from '../../components'
import {Pagination} from '../../components'
import {PerPage} from '../../components'
import {ButtonToTop} from '../../components'
import {NotFound} from '../../components'
import styles from './Main.module.scss'

export const Main = (): JSX.Element => {
    const [search, setSearch] = useState<string>('')

    const dispatch = useAppDispatch()
    const db = useAppSelector(state => state.db.items)
    const isFetching = useAppSelector(state => state.db.isFetching)
    const currentPage = useAppSelector(state => state.db.currentPage)
    const perPage = useAppSelector(state => state.db.perPage)

    useEffect(() => {
        dispatch(getDb(search,currentPage,perPage))
    }, [currentPage,perPage])

    return (
        <div className={styles.main}>
            {isFetching ? <Spinner/> :
                <>
                    <Search setSearch={setSearch} search={search} />
                    {db.length === 0 ? <NotFound/> :
                        <>
                            <Header />
                            {db.map((d: RootObject) => <CardList key={d.id} data={d}/>)}
                            <Pagination />
                            <PerPage />
                            <ButtonToTop/>
                        </>
                    }
                </>
            }
        </div>
    )
}
