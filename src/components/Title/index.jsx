/* eslint-disable react/prop-types */

import styles from './Title.module.css'

const Title = ( { children }) => {

    return (

        <h1 className={styles.title}>{children}</h1>

    )
}

export default Title