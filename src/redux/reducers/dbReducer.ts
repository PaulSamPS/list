import {RootObject} from "../../interfaces/db.interface";

export const SET_DB = 'SET_DB'
export const SET_IS_FETCHING = 'SET_IS_FETCHING'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_PER_PAGE = 'SET_PER_PAGE'
export const SET_CURRENT_PAGE_BUTTON = 'SET_CURRENT_PAGE_BUTTON'
export const SET_ACTIVE_ITEM = 'SET_ACTIVE_ITEM'

export interface IItems{
    items: RootObject[]
    isFetching: boolean
    currentPage: number
    perPage: number,
    totalCount: number,
    activeItem: number
}

const defaultState: IItems = {
    items: [],
    isFetching: true,
    currentPage: 1,
    perPage: 10,
    totalCount: 0,
    activeItem: 0
}

const dbReducer = (state = defaultState,action: any) => {
    switch (action.type) {
        case SET_DB:
            return {
                ...state,
                items: action.payload.data,
                totalCount: action.payload.headers['x-total-count'],
                isFetching: false
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case SET_CURRENT_PAGE_BUTTON:
            return {
                ...state,
                currentPage: action.payload
            }
        case SET_PER_PAGE:
            return {
                ...state,
                perPage: action.payload
            }
        case SET_ACTIVE_ITEM:
            return {
                ...state,
                activeItem: action.payload
            }
        default:
            return state
    }
}

export default dbReducer
