import {Dispatch} from 'redux'
import axios from 'axios'
import {
    SET_ACTIVE_ITEM,
    SET_CURRENT_PAGE,
    SET_CURRENT_PAGE_BUTTON,
    SET_DB,
    SET_IS_FETCHING,
    SET_PER_PAGE,
} from '../reducers/dbReducer'

export const getDb = (search = 'a',currentPage: number, perPage: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        const res = await axios.get(`http://localhost:3001/list/?account.name_like=${search}&_sort=id&_order=asc&_page=${currentPage}&_limit=${perPage}?_start=0&_end=99`)
        dispatch(setDb(res))
    }
}

export const getDbClearInput = (currentPage: number, perPage: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        const res = await axios.get(`http://localhost:3001/list/?_sort=id&_order=asc&_page=${currentPage}&_limit=${perPage}?_start=0&_end=99`)
        dispatch(setDb(res))
    }
}

export const setDb = (db: any) => ({type: SET_DB, payload: db})
export const setIsFetching = (bool: any) => ({type: SET_IS_FETCHING, payload: bool})
export const setCurrentPage = (page: any) => ({type: SET_CURRENT_PAGE, payload: page})
export const setPerPage = (limit: any) => ({type: SET_PER_PAGE, payload: limit})
export const setActiveItem = (index: any) => ({type: SET_ACTIVE_ITEM, payload: index})
export const setCurrentPageButton = (number: any) => ({type: SET_CURRENT_PAGE_BUTTON, payload: number})
