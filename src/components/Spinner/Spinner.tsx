import styles from './Spinner.module.scss'

export const Spinner = (): JSX.Element => {
    return (
        <div className={styles.spinnerCenter}>
            <div className={styles.spinner}></div>
        </div>
    )
}