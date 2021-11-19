export interface OrderType {
    name: string
    oguid: string
}

export interface Terminal {
    name: string
    oguid: string
}

export interface Account {
    name: string
    oguid: string
}

export interface CreatedUser {
    surname: string
    name: string
    patronymic: string
    oguid: string
}

export interface RootObject {
    id: string
    oguid?: string
    status: string
    order_type: OrderType
    terminal: Terminal
    account: Account
    created_user: CreatedUser
    created_date: any
}

