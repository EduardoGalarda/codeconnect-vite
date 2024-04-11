/* eslint-disable react/prop-types */

import styles from './button.module.css'

const Button = ( {children, type} ) => {

    return(

        <>
          <button 
            className={styles.button} 
            type={type}
            >
                {children}
            </button>  

        </>
    )

}

export default Button