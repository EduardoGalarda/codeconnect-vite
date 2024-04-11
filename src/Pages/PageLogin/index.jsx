
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './PageLogin.module.css'
import useLocalStorage from 'use-local-storage'
import imageLogin from '../../images/artwork.png'
import Title from '../../components/Title'
import Subtitle from '../../components/Subtitle'
import TypeField from '../../components/TypeField'
import Checkbox from '../../components/Checkbox'
import Button from '../../components/Button'
import Text from '../../components/Text'
import Social from '../../components/Social'
import Link from '../../components/Link'
import Settings from '../../components/Settings'
import Toggle from '../../components/Toggle'


const PageLogin = () => {

  // constantes relacionadas ao dark theme
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);
  
  // constantes relacionadas a traducao
  const { t } = useTranslation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(t('alert.login'))
  }
  const rescuePassword = (event) => {
    event.preventDefault()
    alert(t('alert.rescue'))
  }

  return (

    <div className={styles.container} data-theme={isDark ? "dark" : "light"} >

        <div className={styles.toggleButton}>
          <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
          <Settings>{t("language")}</Settings>        
        </div>

    <div className={styles.containerLogin}  >

      <img  className={styles.img} src={imageLogin} alt='' />

      <section>

        <form onSubmit={handleSubmit}>

          <Title>{t('login.title')}</Title>
          
          <Subtitle>{t('login.subtitle')}</Subtitle>

          <TypeField
            label={t('user.label')} 
            tipo='email' 
            placeholder={t('user.placeholder')}
            value={email} 
            setValor={setEmail}
          />

          <TypeField
            label={t('password.label')}
            tipo='password' 
            placeholder={t('password.placeholder')}
            value={password} 
            setValor={setPassword}
          />

          <fieldset className={styles.opcoes}> 

            <Checkbox label= 'remember'>
              {t('login.remember')}
            </Checkbox>

            <p onClick={rescuePassword}>
              <a href='#' aria-label='rescue password'>{t('login.forgot')}</a>
            </p>

          </fieldset>

          <Button type='submit'>{t('login.login')}</Button>


        </form>

        <div className={styles.links} >
          <Text classe='text'> {t('login.options')} </Text>

          <ul>

            <Social 
              link='https://www.github.com' 
              name='Github' 
            />

            <Social 
              link='https://www.google.com' 
              name='Google' 
            />

          </ul>

          <Text classe='text'> {t('login.question')} </Text>

          <Link
            classe='linkCadastro'
            link='#' 
          >
            {t('login.create')}
          </Link>

        </div>

      </section>

    </div>

    </div>

  )
}

export default PageLogin