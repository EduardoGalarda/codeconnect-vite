/* eslint-disable react/prop-types */

import styles from './Text.module.css'


const Text = ( { children, classe }) => {

    return (

        <p className={styles[classe]}> {children} </p>

    )
}

export default Text