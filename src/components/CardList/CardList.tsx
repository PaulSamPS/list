import {CardListProps} from './CardList.props'
import {Card} from '../index'

export const CardList = ({data}: CardListProps): JSX.Element => {
    const {
        id,
        created_date,
        order_type,
        terminal,
        account,
        status,
        created_user
    } = data

    return (
        <>
            <Card
                id={id}
                createdDate={created_date}
                orderType={order_type?.name}
                terminalName={terminal?.name}
                account={account?.name}
                status={status}
                createdUserName={created_user?.name}
                createdUserSurname={created_user?.surname}
                createdUserPatronymic={created_user?.patronymic}
            />
        </>
    )
}