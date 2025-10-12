'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Home() {
  const { t } = useLanguage()

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        {/* Hero Section */}
        <div className="text-center mb-20 md:mb-32">
          <div className="inline-block mb-6">
            <div className="bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-medium">
              {t('home.hero.badge')}
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent">
              MASCALE
            </span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-3 md:mb-4 font-medium whitespace-pre-line">
            {t('home.hero.tagline')}
          </p>
          <p className="text-base sm:text-lg text-gray-500 mb-10 md:mb-12 max-w-2xl mx-auto whitespace-pre-line">
            {t('home.hero.description')}
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-2xl text-base font-semibold hover:from-green-700 hover:to-green-600 transition-all shadow-lg hover:shadow-2xl hover:scale-105 duration-200"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
            </svg>
            {t('home.hero.download')}
          </a>
        </div>

        {/* Features Section */}
        <div className="mb-20 md:mb-32">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{t('home.features.title')}</h2>
            <p className="text-gray-600 text-lg">{t('home.features.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z"/>
                </svg>
              }
              title={t('home.features.calendar.title')}
              description={t('home.features.calendar.description')}
            />
            <FeatureCard
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/>
                </svg>
              }
              title={t('home.features.detailed.title')}
              description={t('home.features.detailed.description')}
            />
            <FeatureCard
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              }
              title={t('home.features.bodypart.title')}
              description={t('home.features.bodypart.description')}
            />
            <FeatureCard
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              }
              title={t('home.features.multilang.title')}
              description={t('home.features.multilang.description')}
            />
            <FeatureCard
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              }
              title={t('home.features.units.title')}
              description={t('home.features.units.description')}
            />
            <FeatureCard
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              }
              title={t('home.features.darkmode.title')}
              description={t('home.features.darkmode.description')}
            />
          </div>
        </div>

        {/* Supported Languages */}
        <div className="mb-20 md:mb-32">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{t('home.languages.title')}</h2>
            <p className="text-gray-600 text-lg">{t('home.languages.subtitle')}</p>
          </div>
          <div className="max-w-5xl mx-auto bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {[
                '🇯🇵 日本語', '🇺🇸 English', '🇪🇸 Español',
                '🇵🇹 Português', '🇩🇪 Deutsch', '🇫🇷 Français',
                '🇨🇳 中文', '🇰🇷 한국어', '🇮🇹 Italiano',
                '🇮🇩 Indonesia', '🇷🇺 Русский', '🇹🇷 Türkçe',
                '🇳🇱 Nederlands', '🇵🇱 Polski', '🇹🇭 ไทย',
                '🇻🇳 Tiếng Việt', '🇸🇦 العربية', '🇮🇳 हिन्दी',
                '🇮🇷 فارسی'
              ].map((lang, index) => (
                <div key={index} className="flex items-center justify-center p-3 bg-gray-50 hover:bg-green-50 rounded-xl transition-all duration-200 hover:scale-105 cursor-default">
                  <p className="font-medium text-sm sm:text-base text-gray-700">{lang}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="group bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:border-green-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="mb-5">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-xl group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-base text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}
