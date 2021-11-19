import {useAppDispatch, useAppSelector} from '../../hooks/useRedux'
import {setCurrentPage} from '../../redux/actions/dbActions'
import {createPages} from '../../utils/pageCreator'
import cn from 'classnames'
import { ReactComponent as Arrow } from './arrow.svg'
import styles from './Pagination.module.scss'

export const Pagination = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const currentPage = useAppSelector(state => state.db.currentPage)
    const totalCount = useAppSelector(state => state.db.totalCount)
    const perPage = useAppSelector(state => state.db.perPage)
    const pagesCount = Math.ceil(Number(totalCount) / perPage)
    const pages = []

    createPages(pages,pagesCount,currentPage)

    const onClickPrev = () => {
        dispatch(setCurrentPage(currentPage - 1))
    }

    const onClickNext = () => {
        dispatch(setCurrentPage(currentPage + 1))
    }

    return (
        <div>
            <ul className={styles.pagination}>
                <button className={cn(styles.prevNext,styles.arrowLeft)} disabled={currentPage <= 1} onClick={onClickPrev}>
                    <Arrow />
                </button>
                <div className={styles.paginationItemBlock}>
                    {pages.map(p =>
                        <button key={p} onClick={() => dispatch(setCurrentPage(p))} className={cn(styles.paginationItem, {
                            [styles.activePage]: currentPage === p
                        })}>
                            {p}
                         </button>
                    )}
                </div>
                <button className={cn(styles.prevNext,styles.arrowRight)} disabled={currentPage > pagesCount -1} onClick={onClickNext}>
                    <Arrow />
                </button>
            </ul>
        </div>
    )
}