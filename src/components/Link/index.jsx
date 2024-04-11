/* eslint-disable react/prop-types */
import styles from './Link.module.css'

const Link = ( { children, classe, link } ) => {

    return (

        <a href={link} className={styles[classe]}>
            {children}
        </a>

    )
}

export default Link