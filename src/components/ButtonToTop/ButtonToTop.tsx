import {motion, useAnimation} from 'framer-motion'
import {useEffect} from 'react'
import {useScrollY} from '../../hooks/useScroll'
import {ReactComponent as ArrowIcon} from './arrow.svg'
import styles from './ButtonToTop.module.scss'

export const ButtonToTop = (): JSX.Element => {
    const y = useScrollY()
    const controls = useAnimation()

    useEffect(() => {
        controls.start({ opacity: y/ document.body.scrollHeight })
    },[y, controls])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <motion.div
            animate={controls}
            initial={{opacity: 0}}
        >
            <button
                className={styles.btn}
                onClick={scrollToTop}
            >
                <ArrowIcon/>
            </button>
        </motion.div>
    )
}