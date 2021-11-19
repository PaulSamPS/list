import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface SearchProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    setSearch: (value: string) => void
    search: string
}