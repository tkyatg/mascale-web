'use client'

import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

type Language = 'ja' | 'en' | 'es' | 'pt' | 'de' | 'fr' | 'zh' | 'ko' | 'it' | 'id' | 'ru' | 'tr' | 'nl' | 'pl' | 'th' | 'vi' | 'ar' | 'hi' | 'fa'

const languages: Record<Language, string> = {
  ja: '日本語',
  en: 'English',
  es: 'Español',
  pt: 'Português',
  de: 'Deutsch',
  fr: 'Français',
  zh: '中文',
  ko: '한국어',
  it: 'Italiano',
  id: 'Indonesia',
  ru: 'Русский',
  tr: 'Türkçe',
  nl: 'Nederlands',
  pl: 'Polski',
  th: 'ไทย',
  vi: 'Tiếng Việt',
  ar: 'العربية',
  hi: 'हिन्दी',
  fa: 'فارسی',
}

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // 外側をクリックしたらドロップダウンを閉じる
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-gray-100 rounded-lg transition-all"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
        <span>{languages[language]}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {/* ドロップダウンメニュー */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50 max-h-96 overflow-y-auto">
          {(Object.keys(languages) as Language[]).map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={`w-full text-left px-4 py-2.5 text-sm hover:bg-green-50 transition-colors ${
                language === lang ? 'bg-green-50 text-green-600 font-medium' : 'text-gray-700'
              }`}
            >
              {languages[lang]}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
