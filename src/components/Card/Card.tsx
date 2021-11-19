import {CardProps} from './Card.props'
import { Link } from 'react-router-dom'
import moment from 'moment'
import cn from 'classnames'
import styles from './Card.module.scss'

export const Card = ({id,createdDate,orderType,terminalName,account,status,createdUserName,createdUserSurname,createdUserPatronymic,className}: CardProps): JSX.Element => {
    const date = moment(new Date(parseFloat(createdDate))).format('DD.MM.YYYY  hh:mm')

    const statusName =
        status === 'new' ? 'новое' :
        status === 'assigned_to' ? 'назначено' :
        status === 'completed' ? 'заверщено' :
        status === 'started' ? 'выполняется' :
        status === 'declined' ? 'отменено' : ''

    return (
        <div className={cn(styles.gridBlock,className)}>
            <div className={styles.date}>
                <span className={styles.number}><Link to={`/detail/${account}/${terminalName}/${orderType}/${status}/${date}`}>№{id}</Link></span>
                <p key={id}>{date}</p>
            </div>
            <div className={styles.orderType}>
                <span>{orderType}</span>
                <p>{createdUserSurname} {createdUserName} {createdUserPatronymic}</p>
            </div>
            <div className={styles.account}>
                <span>{account}</span>
                <p className={styles.terminalName}>{terminalName}</p>
            </div>
            <div className={styles.statusBlock}>
                <button className={cn(styles.status, {
                    [styles.statusOrange]: status === 'assigned_to',
                    [styles.statusRed]: status === 'new',
                    [styles.statusGreen]: status === 'completed',
                    [styles.statusBlue]: status === 'started',
                    [styles.statusBlack]: status === 'declined',
                })}>
                    {statusName}
                </button>
            </div>
        </div>
  )
}