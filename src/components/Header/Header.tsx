import styles from './Header.module.scss'

export const Header = (): JSX.Element => {
    return (
        <div className={styles.gridHeader}>
            <span>Номер/Дата</span>
            <span>Тип задания/Автор</span>
            <span>Аккаунт/Терминал</span>
            <span>Статус</span>
        </div>
    )
}