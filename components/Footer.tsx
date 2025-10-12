'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 md:py-20 mt-20 md:mt-32">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent mb-4">MASCALE</h3>
            <p className="text-gray-600 leading-relaxed">{t('footer.tagline')}</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4">{t('footer.links')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-green-600 transition-colors inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-green-600 transition-colors inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  {t('footer.terms')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-green-600 transition-colors inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  {t('footer.contact')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4">{t('footer.contact.title')}</h3>
            <a href="mailto:takuya.atsugi911@gmail.com" className="text-gray-600 hover:text-green-600 transition-colors break-all">
              takuya.atsugi911@gmail.com
            </a>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-gray-200 text-sm text-gray-600">
          <p>&copy; 2025 厚木拓哉</p>
        </div>
      </div>
    </footer>
  )
}
