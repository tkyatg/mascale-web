'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  // メニューが開いている時は背景のスクロールを無効化
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      {/* ハンバーガーボタン */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 relative z-[70]"
        aria-label="メニュー"
      >
        <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* モバイルメニュー - 全画面 */}
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-white z-[60] md:hidden">
          <div className="flex flex-col h-full w-full">
            {/* ヘッダー */}
            <div className="flex justify-between items-center px-4 py-5 border-b border-gray-100 bg-white">
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">MASCALE</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-gray-900 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* メニューリンク */}
            <nav className="flex flex-col p-6 space-y-2 bg-white flex-1 overflow-y-auto">
              <Link
                href="/"
                className="text-xl font-medium text-gray-800 hover:text-green-600 hover:bg-green-50 transition-all py-4 px-4 rounded-xl"
                onClick={() => setIsOpen(false)}
              >
                ホーム
              </Link>
              <Link
                href="/privacy"
                className="text-xl font-medium text-gray-800 hover:text-green-600 hover:bg-green-50 transition-all py-4 px-4 rounded-xl"
                onClick={() => setIsOpen(false)}
              >
                プライバシー
              </Link>
              <Link
                href="/terms"
                className="text-xl font-medium text-gray-800 hover:text-green-600 hover:bg-green-50 transition-all py-4 px-4 rounded-xl"
                onClick={() => setIsOpen(false)}
              >
                利用規約
              </Link>
              <Link
                href="/contact"
                className="text-xl font-medium text-gray-800 hover:text-green-600 hover:bg-green-50 transition-all py-4 px-4 rounded-xl"
                onClick={() => setIsOpen(false)}
              >
                お問い合わせ
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
