
import { useTranslation } from "react-i18next";
import styles from './LanguageSelector.module.css'
import usflag from '../../../assets/us.svg'
import esflag from '../../../assets/es.svg'
import brflag from '../../../assets/br.svg'

function LanguageSelector() {

  const { i18n } = useTranslation();
  const { t } = useTranslation()

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (

    <>

      <hr />

      <div className={styles.selector}>

        {/* <div className={styles.radios}>
          <label>
            <input type="radio" name="myRadio" value="en" onClick={() => changeLanguage('en')} />
            {t("english")}
          </label>
          <label>
            <input type="radio" name="myRadio" value="es" onClick={() => changeLanguage('es')} />
            {t("spanish")}
          </label>
          <label>
            <input type="radio" name="myRadio" value="pt" onClick={() => changeLanguage('pt')}/>
            {t("portuguese")}
          </label>
        </div> */}

        <div className={styles.buttons}>
          <button onClick={() => changeLanguage('en')}><img src={usflag} />{t("english")}</button>
          <button onClick={() => changeLanguage('es')}><img src={esflag} />{t("spanish")}</button>
          <button onClick={() => changeLanguage('pt')}><img src={brflag} />{t("portuguese")}</button>
        </div>

      </div>
    </>
  );
}

export default LanguageSelector;
