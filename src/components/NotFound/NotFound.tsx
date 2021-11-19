import styles from './NotFound.module.scss'

export const NotFound = (): JSX.Element => {
    return (
        <div className={styles.notFound}>
            <h1>Ничего не найдено!</h1>
            <p>Повторите поиск по имени аккаунта</p>
        </div>
    )
}