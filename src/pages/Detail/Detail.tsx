import {useNavigate, useParams} from 'react-router-dom'
import cn from 'classnames'
import styles from './Details.module.scss'

const Detail = () => {
    const {account,terminal,order,status,date} = useParams()
    const navigate = useNavigate()

    const statusName =
        status === 'new' ? 'новое' :
        status === 'assigned_to' ? 'назначено' :
        status === 'completed' ? 'заверщено' :
        status === 'started' ? 'выполняется' :
        status === 'declined' ? 'отменено' : ''

    return (
        <div className={styles.detailsWrapper}>
            <div className={styles.detailsBlock}>
                <h1>{order}</h1>
                <h2>{account}</h2>
                <h3>{terminal}</h3>
                <div className={styles.grid}>
                    <h5>{date}</h5>
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
                <button className={styles.backBtn} onClick={() => navigate('/')}>Назад</button>
            </div>
        </div>
    )
}

export default Detail