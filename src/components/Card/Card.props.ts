import {DetailedHTMLProps, HTMLAttributes} from 'react'

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    id: any
    createdDate: any
    orderType: string | undefined
    terminalName: string | undefined
    account: string | undefined
    status: string | undefined
    createdUserName: string | undefined
    createdUserSurname: string | undefined
    createdUserPatronymic: string | undefined
}
