/* eslint-disable react/prop-types */
import styles from './Checkbox.module.css'

const Checkbox = ( {children, label} ) => {

    return(
        <>
            <div className={styles.checkbox}>
                <input type='checkbox' id={label} />
                <label htmlFor={label} />             
                <p> {children} </p>
            </div> 
        </> 
    )
}

export default Checkbox