'use client'

import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Header() {
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <nav className="max-w-6xl mx-auto px-4 py-4 md:py-5 flex justify-between items-center">
        <Link href="/" className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent hover:from-green-700 hover:to-green-600 transition-all">
          MASCALE
        </Link>

        <div className="flex items-center gap-6">
          {/* デスクトップメニュー */}
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li>
              <Link href="/privacy" className="text-gray-700 hover:text-green-600 transition-colors">
                {t('header.privacy')}
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-gray-700 hover:text-green-600 transition-colors">
                {t('header.terms')}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors">
                {t('header.contact')}
              </Link>
            </li>
          </ul>

          {/* 言語切り替え */}
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  )
}
