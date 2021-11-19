import {DetailedHTMLProps, HTMLAttributes} from 'react'
import {RootObject} from '../../interfaces/db.interface'

export interface CardListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    data: RootObject
}