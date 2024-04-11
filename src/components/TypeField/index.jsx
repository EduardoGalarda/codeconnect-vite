/* eslint-disable react/prop-types */

import styles from './TypeField.module.css'

const TypeField = ( { label, type, placeholder, value, setValor } ) => {

    return (

        <div className={styles.typeField}>

            <label htmlFor={type}>{label}</label>

            <input 
                required
                type={type}
                placeholder={placeholder}
                id={type}
                value={value}
                onChange={(event) => setValor(event.target.value)}>
                        
            </input>

        </div>

    )
}

export default TypeField
