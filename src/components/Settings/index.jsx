/* eslint-disable react/prop-types */

import LanguageSelector from '../LanguageSelector'
import styles from './Settings.module.css'

const Settings = ( { children } ) => {

    return (

        <nav>
            
            <ul>
                <li className={styles.dropdown}>
                    <a href="">{ children }</a>

                    <div className={styles.dropdownMenu}>
                        <LanguageSelector />
                    </div>
                </li>
            </ul>
        </nav>

       
    
           
       

    )
}

export default Settings

