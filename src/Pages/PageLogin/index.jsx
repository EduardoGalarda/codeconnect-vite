import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import useLocalStorage from 'use-local-storage'
import imageLogin from '../../images/artwork.png'
import Title from '../../components/atoms/Title'
import Subtitle from '../../components/atoms/Subtitle'
import TypeField from '../../components/molecules/TypeField'
import Checkbox from '../../components/atoms/Checkbox'
import Button from '../../components/atoms/Button'
import Text from '../../components/atoms/Text'
import Social from '../../components/molecules/Social'
import Link from '../../components/atoms/Link'
import Settings from '../../components/organisms/Settings'
import Toggle from '../../components/atoms/Toggle'
import { Card } from "@/components/ui/card"


const PageLogin = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);
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
    <div className={`min-h-screen w-full flex items-center justify-center p-4 bg-background transition-colors duration-300 ${isDark ? "dark" : ""}`} data-theme={isDark ? "dark" : "light"}>
      <div className="absolute top-4 right-4 flex items-center gap-4 z-10">
        <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
        <Settings>{t("language")}</Settings>
      </div>

      <Card className="w-full max-w-[900px] overflow-hidden border-none shadow-2xl flex flex-col md:flex-row bg-card">
        <div className="hidden md:block w-1/2 relative bg-primary/5">
          <img
            className="absolute inset-0 w-full h-full object-cover opacity-90"
            src={imageLogin}
            alt='CodeConnect Promo'
          />
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <section className="w-full max-w-sm mx-auto">
            <header className="mb-8">
              <Title>{t('login.title')}</Title>
              <Subtitle>{t('login.subtitle')}</Subtitle>
            </header>

            <form onSubmit={handleSubmit} className="space-y-4">
              <TypeField
                label={t('user.label')}
                type='email'
                placeholder={t('user.placeholder')}
                value={email}
                setValor={setEmail}
              />

              <TypeField
                label={t('password.label')}
                type='password'
                placeholder={t('password.placeholder')}
                value={password}
                setValor={setPassword}
              />

              <div className="flex items-center justify-between py-2">
                <Checkbox label='remember'>
                  {t('login.remember')}
                </Checkbox>
                <button
                  type="button"
                  onClick={rescuePassword}
                  className="text-sm text-primary hover:underline font-medium transition-colors"
                >
                  {t('login.forgot')}
                </button>
              </div>

              <Button type='submit' className="w-full h-11 text-lg">
                {t('login.login')}
              </Button>
            </form>

            <div className="mt-8 space-y-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground italic">
                    {t('login.options')}
                  </span>
                </div>
              </div>

              <ul className="flex justify-center flex-wrap gap-4">
                <Social link='https://www.github.com' name='Github' />
                <Social link='https://www.google.com' name='Google' />
              </ul>

              <div className="text-center pt-4">
                <Text variant="muted">
                  {t('login.question')}
                  <Link variant='linkCadastro' link='#' className="ml-2">
                    {t('login.create')}
                  </Link>
                </Text>
              </div>
            </div>
          </section>
        </div>
      </Card>
    </div>
  )
}

export default PageLogin
