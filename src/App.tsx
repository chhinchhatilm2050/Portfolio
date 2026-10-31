import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold text-white">
        {t('hero.greeting')} — Portfolio 🚀
      </h1>
    </div>
  )
}

export default App
