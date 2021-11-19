import {useEffect, useRef, useState} from 'react'
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux'
import {setActiveItem, setCurrentPage, setPerPage} from '../../redux/actions/dbActions'
import cn from 'classnames'
import {ReactComponent as Arrow} from '../Pagination/arrow.svg'
import styles from './PerPage.module.scss'

export const PerPage = (): JSX.Element => {
    const [activeModal,setActiveModal] = useState(false)
    const modalRef = useRef<HTMLDivElement>(null)
    const dispatch = useAppDispatch()
    const active = useAppSelector(state => state.db.activeItem)
    const currentPage = useAppSelector(state => state.db.currentPage)
    const totalCount = useAppSelector(state => state.db.totalCount)
    const perPage = useAppSelector(state => state.db.perPage)
    const pagesCount = Math.ceil(Number(totalCount) / perPage)

    const setListPerPage = [10, 20, 50]
    const activeLabel = setListPerPage[active]

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
    },[activeModal])

    const handleOutsideClick = (e) => {
        const path = e.path || (e.composedPath && e.composedPath())
        if (!path.includes(modalRef.current)) {
            setActiveModal(false)
        }
    }

    const setPerPageCount = (index) => {
        if (index === 0) {
            dispatch(setCurrentPage(1))
            dispatch(setPerPage(10))
            dispatch(setActiveItem(0))
        } else if (index === 1) {
            dispatch(setCurrentPage(1))
            dispatch(setPerPage(20))
            dispatch(setActiveItem(1))
        } else if (index === 2) {
            dispatch(setCurrentPage(1))
            dispatch(setPerPage(50))
            dispatch(setActiveItem(2))
        }
    }

    return (
        <div className={styles.totalPages} >
            <span className={styles.currentPageTotal}>{currentPage} / {pagesCount}</span>
            <div className={styles.activeLabelBlock} onClick={() => setActiveModal(!activeModal)} ref={modalRef}>
                <span className={styles.activeLabel}>{activeLabel}</span>
                <Arrow className={styles.arrowDown}/>
                {activeModal &&
                <ul className={styles.setPerPageBlock}>
                    {setListPerPage.map((p, index) =>
                        <li key={p} className={cn(styles.setPerPageItem, {
                            [styles.setPerPageActive]: active === index
                        })} onClick={() => setPerPageCount(index)}>
                            {p}
                        </li>)}
                </ul>}
            </div>
        </div>
    )
}