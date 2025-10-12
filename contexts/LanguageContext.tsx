'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'ja' | 'en' | 'es' | 'pt' | 'de' | 'fr' | 'zh' | 'ko' | 'it' | 'id' | 'ru' | 'tr' | 'nl' | 'pl' | 'th' | 'vi' | 'ar' | 'hi' | 'fa'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  ja: {
    // Header
    'header.privacy': 'プライバシー',
    'header.terms': '利用規約',
    'header.contact': 'お問い合わせ',

    // Home - Hero
    'home.hero.badge': 'トレーニング記録アプリ',
    'home.hero.tagline': '記録を重ね、進化を続ける',
    'home.hero.description': 'シンプルで直感的なトレーニング記録で、\nあなたの成長を可視化します',
    'home.hero.download': 'App Storeでダウンロード',

    // Home - Features
    'home.features.title': '主な機能',
    'home.features.subtitle': 'MASCALEがあなたのトレーニングをサポート',
    'home.features.calendar.title': 'カレンダー記録',
    'home.features.calendar.description': 'カレンダー形式でトレーニングの履歴を一目で確認。いつ、何をトレーニングしたか簡単に管理できます。',
    'home.features.detailed.title': '詳細なトレーニング記録',
    'home.features.detailed.description': 'エクササイズごとにセット数、重量、レップ数を記録。総ボリュームも自動計算されます。',
    'home.features.bodypart.title': '部位別管理',
    'home.features.bodypart.description': '胸、肩、腕、背中、脚、腹筋など、部位ごとにエクササイズを分類して管理できます。',
    'home.features.multilang.title': '19言語対応',
    'home.features.multilang.description': '日本語、英語、スペイン語、中国語、韓国語など19の言語に対応しています。',
    'home.features.units.title': '単位切り替え',
    'home.features.units.description': '重量単位をキログラム(kg)とポンド(lb)で切り替え可能。お好みの単位で記録できます。',
    'home.features.darkmode.title': 'ダークモード対応',
    'home.features.darkmode.description': 'ライト・ダークモード、システム設定に従う、の3つから選択可能です。',

    // Home - Languages
    'home.languages.title': '対応言語',
    'home.languages.subtitle': '世界中のユーザーに対応',

    // Footer
    'footer.tagline': '記録を重ね、進化を続ける',
    'footer.links': 'リンク',
    'footer.privacy': 'プライバシーポリシー',
    'footer.terms': '利用規約',
    'footer.contact': 'お問い合わせ',
    'footer.contact.title': 'お問い合わせ',

    // Privacy Page
    'privacy.title': 'プライバシーポリシー',
    'privacy.updated': '最終更新日: 2025年10月12日',

    // Terms Page
    'terms.title': '利用規約',
    'terms.updated': '最終更新日: 2025年10月12日',
    'terms.provider': '提供者: 厚木拓哉',

    // Article 1
    'terms.article1.title': '第1条(適用)',
    'terms.article1.content': '本規約は、厚木拓哉(以下「当方」といいます)が提供するスマートフォンアプリケーション「MASCALE」(以下「本アプリ」といいます)の利用条件を定めるものです。本アプリをご利用いただくことで、本規約に同意したものとみなされます。',

    // Article 2
    'terms.article2.title': '第2条(本アプリの内容)',
    'terms.article2.intro': '本アプリは、ユーザーがトレーニング(筋力トレーニング、カーディオ等)の記録を行い、カレンダー形式でその履歴を管理することを目的としたアプリケーションです。',
    'terms.article2.features.title': '主な機能:',
    'terms.article2.features.1': 'カレンダー形式でのトレーニング記録の管理',
    'terms.article2.features.2': 'エクササイズごとのセット、重量、レップ数の記録',
    'terms.article2.features.3': '体重単位の切り替え(kg/lb)',
    'terms.article2.features.4': 'トレーニング履歴の可視化',
    'terms.article2.features.5': 'すべてのデータはSQLiteデータベースを使用して端末内にローカル保存されます',

    // Article 3
    'terms.article3.title': '第3条(無料提供および将来的な収益化)',
    'terms.article3.intro': '本アプリは現在無料で提供されています。ただし、将来的に以下の収益化機能を追加する可能性があります。',
    'terms.article3.items.1': '広告の表示:アプリ内での広告配信',
    'terms.article3.items.2': 'アプリ内課金:広告削除機能やプレミアム機能の提供(非消費型アイテム、復元可能)',
    'terms.article3.outro': 'これらの機能を追加する場合は、本規約およびプライバシーポリシーを更新し、アプリ内で事前に通知いたします。',

    // Article 4
    'terms.article4.title': '第4条(利用環境)',
    'terms.article4.intro': '本アプリの利用には、対応するスマートフォン端末(iOS/Android)が必要です。',
    'terms.article4.items.1': '本アプリはオフラインファーストで設計されており、インターネット接続がなくても基本機能を利用できます',
    'terms.article4.items.2': 'アナリティクス情報(匿名の使用統計)は、インターネット接続が利用可能な場合に自動的にFirebase Analyticsに送信されます',
    'terms.article4.items.3': '将来的にクラウド同期機能を追加する場合は、インターネット接続が必要になります',
    'terms.article4.items.4': 'これらの環境整備にかかる費用(通信料等)は、ユーザーの負担とします',

    // Article 5
    'terms.article5.title': '第5条(禁止事項)',
    'terms.article5.intro': '本アプリの利用にあたり、以下の行為を禁止します。',
    'terms.article5.items.1': '法令または公序良俗に違反する行為',
    'terms.article5.items.2': '犯罪行為に関連する行為',
    'terms.article5.items.3': '本アプリの機能を不正に改変、リバースエンジニアリング、逆コンパイルする行為',
    'terms.article5.items.4': '本アプリのデータベース(SQLite)に直接アクセスし、不正にデータを操作する行為',
    'terms.article5.items.5': '将来的に導入されるサーバーやネットワークの機能を破壊したり、妨害したりする行為',
    'terms.article5.items.6': '本アプリの運営を妨害するおそれのある行為',
    'terms.article5.items.7': '他のユーザーに関する個人情報等を収集または蓄積する行為(将来的な機能追加時)',
    'terms.article5.items.8': '不正アクセスをし、またはこれを試みる行為',
    'terms.article5.items.9': '本アプリを無断で商業目的で利用する行為',
    'terms.article5.items.10': 'アプリ内課金の不正利用や返金の濫用(将来的な機能追加時)',
    'terms.article5.items.11': 'その他、当方が不適切と判断する行為',

    // Article 6
    'terms.article6.title': '第6条(本アプリの提供の停止等)',
    'terms.article6.intro': '当方は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本アプリの全部または一部の提供を停止または中断することができるものとします。',
    'terms.article6.items.1': '本アプリにかかるシステムの保守点検または更新を行う場合',
    'terms.article6.items.2': '地震、落雷、火災、停電または天災などの不可抗力により、本アプリの提供が困難となった場合',
    'terms.article6.items.3': 'その他、当方が本アプリの提供が困難と判断した場合',

    // Article 7
    'terms.article7.title': '第7条(免責事項)',
    'terms.article7.items.1': '本アプリは、トレーニング記録を管理するためのツールであり、医療的アドバイス、診断、治療を提供するものではありません。健康上の問題がある場合は、必ず医師または専門家にご相談ください。',
    'terms.article7.items.2': '当方は、本アプリの内容、動作、品質について、いかなる保証も行いません。',
    'terms.article7.items.3': '当方は、本アプリの利用によって生じたいかなる損害(データの損失、デバイスの故障、その他の直接的または間接的な損害を含みますが、これらに限りません)について、一切の責任を負いません。',
    'terms.article7.items.4': '本アプリは、SQLiteデータベースを使用してユーザーの端末にデータをローカル保存します。端末の故障、紛失、OSアップデート、アプリの不具合等によるデータ損失のリスクがあります。ユーザーは自己の責任においてデータのバックアップを行うものとします。',
    'terms.article7.items.5': '現バージョンではクラウドバックアップ機能は提供されていません。将来的に同機能を追加した場合でも、データの完全性や可用性を保証するものではありません。',

    // Article 8
    'terms.article8.title': '第8条(利用規約の変更)',
    'terms.article8.content': '当方は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。変更後の本規約は、本アプリ内に掲載したときから効力を生じるものとします。',

    // Article 9
    'terms.article9.title': '第9条(個人情報の取扱い)',
    'terms.article9.content': '本アプリにおける個人情報の取扱いについては、別途「プライバシーポリシー」に定めるところによります。',

    // Article 10
    'terms.article10.title': '第10条(アフィリエイトプログラム)',
    'terms.article10.intro': '本アプリは、アプリの開発・維持のサポート手段として、第三者サービス(例:iHerb)への紹介コードまたはアフィリエイトリンクを含む場合があります。ユーザーがこれらのリンクを通じて購入を行った場合:',
    'terms.article10.items.1': '当方は第三者サービスから手数料を受け取る場合があります',
    'terms.article10.items.2': 'ユーザーに追加費用は発生しません',
    'terms.article10.items.3': 'これらの紹介コードの使用は完全に任意です',

    // Article 11
    'terms.article11.title': '第11条(多言語対応)',
    'terms.article11.intro': '本アプリは、ユーザーインターフェースにおいて以下の言語に対応しています:',
    'terms.article11.items.1': '英語、日本語、スペイン語、ポルトガル語、ドイツ語、フランス語、中国語(簡体字)、韓国語、イタリア語、インドネシア語、ロシア語、トルコ語、オランダ語、ポーランド語、タイ語、ベトナム語、アラビア語、ヒンディー語、ペルシャ語(ファルシ語)',
    'terms.article11.items.2': '法的文書(利用規約およびプライバシーポリシー)は現在19言語すべてで提供されています',
    'terms.article11.items.3': '翻訳の正確性を期していますが、日本語版が正式版となります',

    // Article 12
    'terms.article12.title': '第12条(サポート)',
    'terms.article12.intro': '本アプリに関するお問い合わせは、以下のメールアドレスまでご連絡ください。',
    'terms.article12.email': 'takuya.atsugi911@gmail.com',
    'terms.article12.language': '日本語のみ',

    // Article 13
    'terms.article13.title': '第13条(準拠法・裁判管轄)',
    'terms.article13.content': '本規約の解釈にあたっては、日本法を準拠法とします。本アプリに関して紛争が生じた場合には、当方の所在地を管轄する裁判所を専属的合意管轄とします。',

    // Contact Page
    'contact.title': 'お問い合わせ',
    'contact.description': 'MASCALE に関するご質問、ご意見、不具合の報告などは、お気軽にお問い合わせください',
    'contact.email.title': 'メールでのお問い合わせ',
    'contact.language.title': '対応言語',
    'contact.language.value': '日本語のみ',
    'contact.response.title': 'レスポンス',
    'contact.response.value': '迅速に対応いたします',
  },
  en: {
    // Header
    'header.privacy': 'Privacy',
    'header.terms': 'Terms',
    'header.contact': 'Contact',

    // Home - Hero
    'home.hero.badge': 'Training Log App',
    'home.hero.tagline': 'Record and Keep Evolving',
    'home.hero.description': 'Visualize your progress with simple and\nintuitive training records',
    'home.hero.download': 'Download on the App Store',

    // Home - Features
    'home.features.title': 'Key Features',
    'home.features.subtitle': 'MASCALE supports your training',
    'home.features.calendar.title': 'Calendar Records',
    'home.features.calendar.description': 'View your training history at a glance in calendar format. Easily manage when and what you trained.',
    'home.features.detailed.title': 'Detailed Training Records',
    'home.features.detailed.description': 'Record sets, weight, and reps for each exercise. Total volume is automatically calculated.',
    'home.features.bodypart.title': 'Body Part Management',
    'home.features.bodypart.description': 'Organize exercises by body parts such as chest, shoulders, arms, back, legs, and abs.',
    'home.features.multilang.title': '19 Language Support',
    'home.features.multilang.description': 'Supports 19 languages including Japanese, English, Spanish, Chinese, and Korean.',
    'home.features.units.title': 'Unit Switching',
    'home.features.units.description': 'Switch weight units between kilograms (kg) and pounds (lb). Record in your preferred unit.',
    'home.features.darkmode.title': 'Dark Mode Support',
    'home.features.darkmode.description': 'Choose from light mode, dark mode, or follow system settings.',

    // Home - Languages
    'home.languages.title': 'Supported Languages',
    'home.languages.subtitle': 'Available for users worldwide',

    // Footer
    'footer.tagline': 'Record and Keep Evolving',
    'footer.links': 'Links',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.contact': 'Contact',
    'footer.contact.title': 'Contact Us',

    // Privacy Page
    'privacy.title': 'Privacy Policy',
    'privacy.updated': 'Last Updated: October 12, 2025',

    // Terms Page
    'terms.title': 'Terms of Service',
    'terms.updated': 'Last Updated: October 12, 2025',
    'terms.provider': 'Provider: Takuya Atsugi',

    // Article 1
    'terms.article1.title': 'Article 1 (Application)',
    'terms.article1.content': 'These Terms of Service define the conditions for using the smartphone application "MASCALE" (hereinafter referred to as "this App") provided by Takuya Atsugi (hereinafter referred to as "we"). By using this App, you are deemed to have agreed to these Terms.',

    // Article 2
    'terms.article2.title': 'Article 2 (App Content)',
    'terms.article2.intro': 'This App is an application designed for users to record training (strength training, cardio, etc.) and manage that history in calendar format.',
    'terms.article2.features.title': 'Main Features:',
    'terms.article2.features.1': 'Training record management in calendar format',
    'terms.article2.features.2': 'Recording sets, weight, and reps for each exercise',
    'terms.article2.features.3': 'Weight unit switching (kg/lb)',
    'terms.article2.features.4': 'Visualization of training history',
    'terms.article2.features.5': 'All data is stored locally on the device using SQLite database',

    // Article 3
    'terms.article3.title': 'Article 3 (Free Provision and Future Monetization)',
    'terms.article3.intro': 'This App is currently provided free of charge. However, we may add the following monetization features in the future.',
    'terms.article3.items.1': 'Ad display: In-app advertising',
    'terms.article3.items.2': 'In-app purchases: Providing ad removal and premium features (non-consumable items, restorable)',
    'terms.article3.outro': 'If these features are added, we will update these Terms and the Privacy Policy and notify users within the app in advance.',

    // Article 4
    'terms.article4.title': 'Article 4 (Usage Environment)',
    'terms.article4.intro': 'Using this App requires a compatible smartphone device (iOS/Android).',
    'terms.article4.items.1': 'This App is designed as offline-first and can be used without an internet connection for basic features',
    'terms.article4.items.2': 'Analytics information (anonymous usage statistics) is automatically sent to Firebase Analytics when an internet connection is available',
    'terms.article4.items.3': 'If cloud sync functionality is added in the future, an internet connection will be required',
    'terms.article4.items.4': 'Users are responsible for the costs of setting up these environments (communication fees, etc.)',

    // Article 5
    'terms.article5.title': 'Article 5 (Prohibited Acts)',
    'terms.article5.intro': 'The following acts are prohibited when using this App.',
    'terms.article5.items.1': 'Acts that violate laws or public order and morals',
    'terms.article5.items.2': 'Acts related to criminal activities',
    'terms.article5.items.3': 'Unauthorized modification, reverse engineering, or decompilation of app functions',
    'terms.article5.items.4': 'Direct access to the app\'s database (SQLite) to illegally manipulate data',
    'terms.article5.items.5': 'Acts that destroy or interfere with servers or network functions that may be introduced in the future',
    'terms.article5.items.6': 'Acts likely to interfere with app operations',
    'terms.article5.items.7': 'Collecting or accumulating personal information about other users (for future feature additions)',
    'terms.article5.items.8': 'Unauthorized access or attempts to do so',
    'terms.article5.items.9': 'Unauthorized commercial use of this App',
    'terms.article5.items.10': 'Fraudulent use of in-app purchases or abuse of refunds (for future feature additions)',
    'terms.article5.items.11': 'Other acts that we deem inappropriate',

    // Article 6
    'terms.article6.title': 'Article 6 (Suspension of App Provision)',
    'terms.article6.intro': 'We may suspend or interrupt provision of all or part of this App without prior notice to users if we determine any of the following circumstances exist.',
    'terms.article6.items.1': 'When performing maintenance or updates to the app system',
    'terms.article6.items.2': 'When provision of this App becomes difficult due to force majeure such as earthquakes, lightning, fires, power outages, or natural disasters',
    'terms.article6.items.3': 'When we determine that provision of this App is difficult for other reasons',

    // Article 7
    'terms.article7.title': 'Article 7 (Disclaimer)',
    'terms.article7.items.1': 'This App is a tool for managing training records and does not provide medical advice, diagnosis, or treatment. If you have health concerns, please consult a physician or specialist.',
    'terms.article7.items.2': 'We make no warranties regarding the content, operation, or quality of this App.',
    'terms.article7.items.3': 'We accept no responsibility for any damages arising from the use of this App (including but not limited to data loss, device failure, or other direct or indirect damages).',
    'terms.article7.items.4': 'This App stores data locally on the user\'s device using SQLite database. There are risks of data loss due to device failure, loss, OS updates, app malfunctions, etc. Users shall back up data at their own responsibility as necessary.',
    'terms.article7.items.5': 'The current version does not provide cloud backup functionality. Even if this functionality is added in the future, we do not guarantee data integrity or availability.',

    // Article 8
    'terms.article8.title': 'Article 8 (Changes to Terms)',
    'terms.article8.content': 'We may change these Terms at any time without notice to users when deemed necessary. The revised Terms shall become effective when posted within this App.',

    // Article 9
    'terms.article9.title': 'Article 9 (Handling of Personal Information)',
    'terms.article9.content': 'The handling of personal information in this App is subject to the separate Privacy Policy.',

    // Article 10
    'terms.article10.title': 'Article 10 (Affiliate Program)',
    'terms.article10.intro': 'The App may include referral codes or affiliate links to third-party services (e.g., iHerb) as a means of supporting the development and maintenance of the App. When users make purchases through these links:',
    'terms.article10.items.1': 'We may receive a commission from the third-party service',
    'terms.article10.items.2': 'There is no additional cost to users',
    'terms.article10.items.3': 'The use of these referral codes is entirely voluntary',

    // Article 11
    'terms.article11.title': 'Article 11 (Multilingual Support)',
    'terms.article11.intro': 'The App supports the following languages for the user interface and legal documents:',
    'terms.article11.items.1': 'English, Japanese, Spanish, Portuguese, German, French, Chinese (Simplified), Korean, Italian, Indonesian, Russian, Turkish, Dutch, Polish, Thai, Vietnamese, Arabic, Hindi, and Persian (Farsi)',
    'terms.article11.items.2': 'Legal documents (Terms of Service and Privacy Policy) are now available in all 19 languages',
    'terms.article11.items.3': 'While we strive for accuracy in translations, the Japanese version serves as the official version',

    // Article 12
    'terms.article12.title': 'Article 12 (Support)',
    'terms.article12.intro': 'For inquiries regarding this App, please contact us at the following email address.',
    'terms.article12.email': 'takuya.atsugi911@gmail.com',
    'terms.article12.language': 'Japanese only',

    // Article 13
    'terms.article13.title': 'Article 13 (Governing Law and Jurisdiction)',
    'terms.article13.content': 'These Terms shall be governed by Japanese law. In the event of any disputes regarding this App, the court with jurisdiction over our location shall have exclusive jurisdiction.',

    // Contact Page
    'contact.title': 'Contact Us',
    'contact.description': 'Feel free to contact us with any questions, feedback, or bug reports about MASCALE',
    'contact.email.title': 'Contact by Email',
    'contact.language.title': 'Supported Language',
    'contact.language.value': 'Japanese only',
    'contact.response.title': 'Response',
    'contact.response.value': 'We will respond promptly',
  },
  es: {
    'header.privacy': 'Privacidad',
    'header.terms': 'Términos',
    'header.contact': 'Contacto',
    'home.hero.badge': 'Aplicación de Registro de Entrenamiento',
    'home.hero.tagline': 'Registra y Sigue Evolucionando',
    'home.hero.description': 'Visualiza tu progreso con registros de\nentrenamiento simples e intuitivos',
    'home.hero.download': 'Descargar en la App Store',
    'home.features.title': 'Características Principales',
    'home.features.subtitle': 'MASCALE apoya tu entrenamiento',
    'home.features.calendar.title': 'Registros de Calendario',
    'home.features.calendar.description': 'Ve tu historial de entrenamiento de un vistazo en formato de calendario. Gestiona fácilmente cuándo y qué entrenaste.',
    'home.features.detailed.title': 'Registros Detallados de Entrenamiento',
    'home.features.detailed.description': 'Registra series, peso y repeticiones para cada ejercicio. El volumen total se calcula automáticamente.',
    'home.features.bodypart.title': 'Gestión por Parte del Cuerpo',
    'home.features.bodypart.description': 'Organiza ejercicios por partes del cuerpo como pecho, hombros, brazos, espalda, piernas y abdominales.',
    'home.features.multilang.title': 'Soporte para 19 Idiomas',
    'home.features.multilang.description': 'Soporta 19 idiomas incluyendo japonés, inglés, español, chino y coreano.',
    'home.features.units.title': 'Cambio de Unidades',
    'home.features.units.description': 'Cambia las unidades de peso entre kilogramos (kg) y libras (lb). Registra en tu unidad preferida.',
    'home.features.darkmode.title': 'Soporte para Modo Oscuro',
    'home.features.darkmode.description': 'Elige entre modo claro, modo oscuro o seguir la configuración del sistema.',
    'home.languages.title': 'Idiomas Soportados',
    'home.languages.subtitle': 'Disponible para usuarios en todo el mundo',
    'footer.tagline': 'Registra y Sigue Evolucionando',
    'footer.links': 'Enlaces',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    'footer.contact': 'Contacto',
    'footer.contact.title': 'Contáctenos',
    'privacy.title': 'Política de Privacidad',
    'privacy.updated': 'Última actualización: 12 de octubre de 2025',
    'terms.title': 'Términos de Servicio',
    'terms.updated': 'Última actualización: 12 de octubre de 2025',
    'terms.provider': 'Proveedor: Takuya Atsugi',

    // Article 1
    'terms.article1.title': 'Artículo 1 (Aplicación)',
    'terms.article1.content': 'Estos Términos de Servicio definen las condiciones para usar la aplicación de smartphone "MASCALE" (en adelante, "esta Aplicación") proporcionada por Takuya Atsugi (en adelante, "nosotros"). Al usar esta Aplicación, se considera que has aceptado estos Términos.',

    // Article 2
    'terms.article2.title': 'Artículo 2 (Contenido de la Aplicación)',
    'terms.article2.intro': 'Esta Aplicación es una aplicación diseñada para que los usuarios registren entrenamientos (entrenamiento de fuerza, cardio, etc.) y gestionen ese historial en formato de calendario.',
    'terms.article2.features.title': 'Características Principales:',
    'terms.article2.features.1': 'Gestión de registros de entrenamiento en formato de calendario',
    'terms.article2.features.2': 'Registro de series, peso y repeticiones para cada ejercicio',
    'terms.article2.features.3': 'Cambio de unidad de peso (kg/lb)',
    'terms.article2.features.4': 'Visualización del historial de entrenamiento',
    'terms.article2.features.5': 'Todos los datos se almacenan localmente en el dispositivo usando base de datos SQLite',

    // Article 3
    'terms.article3.title': 'Artículo 3 (Provisión Gratuita y Monetización Futura)',
    'terms.article3.intro': 'Esta Aplicación se proporciona actualmente de forma gratuita. Sin embargo, podemos agregar las siguientes funciones de monetización en el futuro.',
    'terms.article3.items.1': 'Visualización de anuncios: Publicidad dentro de la aplicación',
    'terms.article3.items.2': 'Compras dentro de la aplicación: Provisión de eliminación de anuncios y funciones premium (artículos no consumibles, restaurables)',
    'terms.article3.outro': 'Si se agregan estas funciones, actualizaremos estos Términos y la Política de Privacidad y notificaremos a los usuarios dentro de la aplicación con anticipación.',

    // Article 4
    'terms.article4.title': 'Artículo 4 (Entorno de Uso)',
    'terms.article4.intro': 'El uso de esta Aplicación requiere un dispositivo smartphone compatible (iOS/Android).',
    'terms.article4.items.1': 'Esta Aplicación está diseñada como offline-first y puede usarse sin conexión a Internet para funciones básicas',
    'terms.article4.items.2': 'La información de análisis (estadísticas de uso anónimas) se envía automáticamente a Firebase Analytics cuando hay una conexión a Internet disponible',
    'terms.article4.items.3': 'Si se agrega funcionalidad de sincronización en la nube en el futuro, se requerirá una conexión a Internet',
    'terms.article4.items.4': 'Los usuarios son responsables de los costos de configurar estos entornos (tarifas de comunicación, etc.)',

    // Article 5
    'terms.article5.title': 'Artículo 5 (Actos Prohibidos)',
    'terms.article5.intro': 'Los siguientes actos están prohibidos al usar esta Aplicación.',
    'terms.article5.items.1': 'Actos que violen leyes u orden público y moral',
    'terms.article5.items.2': 'Actos relacionados con actividades criminales',
    'terms.article5.items.3': 'Modificación no autorizada, ingeniería inversa o descompilación de funciones de la aplicación',
    'terms.article5.items.4': 'Acceso directo a la base de datos de la aplicación (SQLite) para manipular datos ilegalmente',
    'terms.article5.items.5': 'Actos que destruyan o interfieran con servidores o funciones de red que puedan introducirse en el futuro',
    'terms.article5.items.6': 'Actos que probablemente interfieran con las operaciones de la aplicación',
    'terms.article5.items.7': 'Recopilar o acumular información personal sobre otros usuarios (para futuras agregaciones de funciones)',
    'terms.article5.items.8': 'Acceso no autorizado o intentos de hacerlo',
    'terms.article5.items.9': 'Uso comercial no autorizado de esta Aplicación',
    'terms.article5.items.10': 'Uso fraudulento de compras dentro de la aplicación o abuso de reembolsos (para futuras agregaciones de funciones)',
    'terms.article5.items.11': 'Otros actos que consideremos inapropiados',

    // Article 6
    'terms.article6.title': 'Artículo 6 (Suspensión de la Provisión de la Aplicación)',
    'terms.article6.intro': 'Podemos suspender o interrumpir la provisión de toda o parte de esta Aplicación sin previo aviso a los usuarios si determinamos que existe cualquiera de las siguientes circunstancias.',
    'terms.article6.items.1': 'Al realizar mantenimiento o actualizaciones del sistema de la aplicación',
    'terms.article6.items.2': 'Cuando la provisión de esta Aplicación se vuelve difícil debido a fuerza mayor como terremotos, rayos, incendios, cortes de energía o desastres naturales',
    'terms.article6.items.3': 'Cuando determinamos que la provisión de esta Aplicación es difícil por otras razones',

    // Article 7
    'terms.article7.title': 'Artículo 7 (Exención de Responsabilidad)',
    'terms.article7.items.1': 'Esta Aplicación es una herramienta para gestionar registros de entrenamiento y no proporciona consejo médico, diagnóstico o tratamiento. Si tienes problemas de salud, consulta a un médico o especialista.',
    'terms.article7.items.2': 'No ofrecemos garantías sobre el contenido, operación o calidad de esta Aplicación.',
    'terms.article7.items.3': 'No aceptamos responsabilidad por ningún daño derivado del uso de esta Aplicación (incluida pero no limitada a pérdida de datos, falla del dispositivo u otros daños directos o indirectos).',
    'terms.article7.items.4': 'Esta Aplicación almacena datos localmente en el dispositivo del usuario usando base de datos SQLite. Hay riesgos de pérdida de datos debido a falla del dispositivo, pérdida, actualizaciones del sistema operativo, mal funcionamiento de la aplicación, etc. Los usuarios deben respaldar los datos bajo su propia responsabilidad según sea necesario.',
    'terms.article7.items.5': 'La versión actual no proporciona funcionalidad de respaldo en la nube. Incluso si esta funcionalidad se agrega en el futuro, no garantizamos la integridad o disponibilidad de los datos.',

    // Article 8
    'terms.article8.title': 'Artículo 8 (Cambios en los Términos)',
    'terms.article8.content': 'Podemos cambiar estos Términos en cualquier momento sin previo aviso a los usuarios cuando se considere necesario. Los Términos revisados entrarán en vigencia cuando se publiquen dentro de esta Aplicación.',

    // Article 9
    'terms.article9.title': 'Artículo 9 (Manejo de Información Personal)',
    'terms.article9.content': 'El manejo de información personal en esta Aplicación está sujeto a la Política de Privacidad separada.',

    // Article 10
    'terms.article10.title': 'Artículo 10 (Programa de Afiliados)',
    'terms.article10.intro': 'La Aplicación puede incluir códigos de referencia o enlaces de afiliados a servicios de terceros (por ejemplo, iHerb) como medio de apoyo al desarrollo y mantenimiento de la Aplicación. Cuando los usuarios realizan compras a través de estos enlaces:',
    'terms.article10.items.1': 'Podemos recibir una comisión del servicio de terceros',
    'terms.article10.items.2': 'No hay costo adicional para los usuarios',
    'terms.article10.items.3': 'El uso de estos códigos de referencia es completamente voluntario',

    // Article 11
    'terms.article11.title': 'Artículo 11 (Soporte Multilingüe)',
    'terms.article11.intro': 'La Aplicación admite los siguientes idiomas para la interfaz de usuario y documentos legales:',
    'terms.article11.items.1': 'Inglés, Japonés, Español, Portugués, Alemán, Francés, Chino (Simplificado), Coreano, Italiano, Indonesio, Ruso, Turco, Holandés, Polaco, Tailandés, Vietnamita, Árabe, Hindi y Persa (Farsi)',
    'terms.article11.items.2': 'Los documentos legales (Términos de Servicio y Política de Privacidad) están ahora disponibles en los 19 idiomas',
    'terms.article11.items.3': 'Si bien nos esforzamos por la precisión en las traducciones, la versión japonesa sirve como la versión oficial',

    // Article 12
    'terms.article12.title': 'Artículo 12 (Soporte)',
    'terms.article12.intro': 'Para consultas sobre esta Aplicación, contáctanos en la siguiente dirección de correo electrónico.',
    'terms.article12.email': 'takuya.atsugi911@gmail.com',
    'terms.article12.language': 'Solo japonés',

    // Article 13
    'terms.article13.title': 'Artículo 13 (Ley Aplicable y Jurisdicción)',
    'terms.article13.content': 'Estos Términos se regirán por la ley japonesa. En caso de cualquier disputa relacionada con esta Aplicación, el tribunal con jurisdicción sobre nuestra ubicación tendrá jurisdicción exclusiva.',
    'contact.title': 'Contáctenos',
    'contact.description': 'No dude en contactarnos con cualquier pregunta, comentario o informe de errores sobre MASCALE',
    'contact.email.title': 'Contacto por Correo Electrónico',
    'contact.language.title': 'Idioma Soportado',
    'contact.language.value': 'Solo japonés',
    'contact.response.title': 'Respuesta',
    'contact.response.value': 'Responderemos rápidamente',
  },
  pt: {
    'header.privacy': 'Privacidade',
    'header.terms': 'Termos',
    'header.contact': 'Contato',
    'home.hero.badge': 'Aplicativo de Registro de Treino',
    'home.hero.tagline': 'Registre e Continue Evoluindo',
    'home.hero.description': 'Visualize seu progresso com registros de\ntreino simples e intuitivos',
    'home.hero.download': 'Baixar na App Store',
    'home.features.title': 'Principais Recursos',
    'home.features.subtitle': 'MASCALE apoia seu treino',
    'home.features.calendar.title': 'Registros de Calendário',
    'home.features.calendar.description': 'Veja seu histórico de treino rapidamente em formato de calendário. Gerencie facilmente quando e o que você treinou.',
    'home.features.detailed.title': 'Registros Detalhados de Treino',
    'home.features.detailed.description': 'Registre séries, peso e repetições para cada exercício. O volume total é calculado automaticamente.',
    'home.features.bodypart.title': 'Gestão por Parte do Corpo',
    'home.features.bodypart.description': 'Organize exercícios por partes do corpo como peito, ombros, braços, costas, pernas e abdômen.',
    'home.features.multilang.title': 'Suporte para 19 Idiomas',
    'home.features.multilang.description': 'Suporta 19 idiomas incluindo japonês, inglês, espanhol, chinês e coreano.',
    'home.features.units.title': 'Troca de Unidades',
    'home.features.units.description': 'Troque unidades de peso entre quilogramas (kg) e libras (lb). Registre na sua unidade preferida.',
    'home.features.darkmode.title': 'Suporte para Modo Escuro',
    'home.features.darkmode.description': 'Escolha entre modo claro, modo escuro ou seguir as configurações do sistema.',
    'home.languages.title': 'Idiomas Suportados',
    'home.languages.subtitle': 'Disponível para usuários em todo o mundo',
    'footer.tagline': 'Registre e Continue Evoluindo',
    'footer.links': 'Links',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Serviço',
    'footer.contact': 'Contato',
    'footer.contact.title': 'Entre em Contato',
    'privacy.title': 'Política de Privacidade',
    'privacy.updated': 'Última atualização: 12 de outubro de 2025',
    'terms.title': 'Termos de Serviço',
    'terms.updated': 'Última atualização: 12 de outubro de 2025',
    'terms.provider': 'Provedor: Takuya Atsugi',

    // Article 1
    'terms.article1.title': 'Artigo 1 (Aplicação)',
    'terms.article1.content': 'Estes Termos de Serviço definem as condições para usar o aplicativo de smartphone "MASCALE" (doravante referido como "este Aplicativo") fornecido por Takuya Atsugi (doravante referido como "nós"). Ao usar este Aplicativo, você é considerado como tendo concordado com estes Termos.',

    // Article 2
    'terms.article2.title': 'Artigo 2 (Conteúdo do Aplicativo)',
    'terms.article2.intro': 'Este Aplicativo é um aplicativo projetado para os usuários registrarem treinos (treinamento de força, cardio, etc.) e gerenciarem esse histórico em formato de calendário.',
    'terms.article2.features.title': 'Principais Recursos:',
    'terms.article2.features.1': 'Gestão de registros de treino em formato de calendário',
    'terms.article2.features.2': 'Registro de séries, peso e repetições para cada exercício',
    'terms.article2.features.3': 'Alternância de unidade de peso (kg/lb)',
    'terms.article2.features.4': 'Visualização do histórico de treino',
    'terms.article2.features.5': 'Todos os dados são armazenados localmente no dispositivo usando banco de dados SQLite',

    // Article 3
    'terms.article3.title': 'Artigo 3 (Fornecimento Gratuito e Monetização Futura)',
    'terms.article3.intro': 'Este Aplicativo é atualmente fornecido gratuitamente. No entanto, podemos adicionar os seguintes recursos de monetização no futuro.',
    'terms.article3.items.1': 'Exibição de anúncios: Publicidade no aplicativo',
    'terms.article3.items.2': 'Compras no aplicativo: Fornecimento de remoção de anúncios e recursos premium (itens não consumíveis, restauráveis)',
    'terms.article3.outro': 'Se esses recursos forem adicionados, atualizaremos estes Termos e a Política de Privacidade e notificaremos os usuários dentro do aplicativo com antecedência.',

    // Article 4
    'terms.article4.title': 'Artigo 4 (Ambiente de Uso)',
    'terms.article4.intro': 'O uso deste Aplicativo requer um dispositivo smartphone compatível (iOS/Android).',
    'terms.article4.items.1': 'Este Aplicativo é projetado como offline-first e pode ser usado sem conexão à Internet para recursos básicos',
    'terms.article4.items.2': 'Informações de análise (estatísticas de uso anônimas) são enviadas automaticamente para o Firebase Analytics quando uma conexão à Internet está disponível',
    'terms.article4.items.3': 'Se a funcionalidade de sincronização na nuvem for adicionada no futuro, uma conexão à Internet será necessária',
    'terms.article4.items.4': 'Os usuários são responsáveis pelos custos de configurar esses ambientes (taxas de comunicação, etc.)',

    // Article 5
    'terms.article5.title': 'Artigo 5 (Atos Proibidos)',
    'terms.article5.intro': 'Os seguintes atos são proibidos ao usar este Aplicativo.',
    'terms.article5.items.1': 'Atos que violem leis ou ordem pública e moral',
    'terms.article5.items.2': 'Atos relacionados a atividades criminosas',
    'terms.article5.items.3': 'Modificação não autorizada, engenharia reversa ou descompilação de funções do aplicativo',
    'terms.article5.items.4': 'Acesso direto ao banco de dados do aplicativo (SQLite) para manipular dados ilegalmente',
    'terms.article5.items.5': 'Atos que destruam ou interfiram com servidores ou funções de rede que possam ser introduzidos no futuro',
    'terms.article5.items.6': 'Atos que provavelmente interfiram com as operações do aplicativo',
    'terms.article5.items.7': 'Coletar ou acumular informações pessoais sobre outros usuários (para futuras adições de recursos)',
    'terms.article5.items.8': 'Acesso não autorizado ou tentativas de fazê-lo',
    'terms.article5.items.9': 'Uso comercial não autorizado deste Aplicativo',
    'terms.article5.items.10': 'Uso fraudulento de compras no aplicativo ou abuso de reembolsos (para futuras adições de recursos)',
    'terms.article5.items.11': 'Outros atos que consideramos inapropriados',

    // Article 6
    'terms.article6.title': 'Artigo 6 (Suspensão do Fornecimento do Aplicativo)',
    'terms.article6.intro': 'Podemos suspender ou interromper o fornecimento de todo ou parte deste Aplicativo sem aviso prévio aos usuários se determinarmos que existe qualquer uma das seguintes circunstâncias.',
    'terms.article6.items.1': 'Ao realizar manutenção ou atualizações do sistema do aplicativo',
    'terms.article6.items.2': 'Quando o fornecimento deste Aplicativo se torna difícil devido a força maior, como terremotos, raios, incêndios, quedas de energia ou desastres naturais',
    'terms.article6.items.3': 'Quando determinamos que o fornecimento deste Aplicativo é difícil por outras razões',

    // Article 7
    'terms.article7.title': 'Artigo 7 (Isenção de Responsabilidade)',
    'terms.article7.items.1': 'Este Aplicativo é uma ferramenta para gerenciar registros de treino e não fornece aconselhamento médico, diagnóstico ou tratamento. Se você tiver problemas de saúde, consulte um médico ou especialista.',
    'terms.article7.items.2': 'Não oferecemos garantias sobre o conteúdo, operação ou qualidade deste Aplicativo.',
    'terms.article7.items.3': 'Não aceitamos responsabilidade por quaisquer danos decorrentes do uso deste Aplicativo (incluindo, mas não limitado a perda de dados, falha do dispositivo ou outros danos diretos ou indiretos).',
    'terms.article7.items.4': 'Este Aplicativo armazena dados localmente no dispositivo do usuário usando banco de dados SQLite. Existem riscos de perda de dados devido a falha do dispositivo, perda, atualizações do sistema operacional, mau funcionamento do aplicativo, etc. Os usuários devem fazer backup dos dados sob sua própria responsabilidade conforme necessário.',
    'terms.article7.items.5': 'A versão atual não fornece funcionalidade de backup na nuvem. Mesmo se essa funcionalidade for adicionada no futuro, não garantimos a integridade ou disponibilidade dos dados.',

    // Article 8
    'terms.article8.title': 'Artigo 8 (Alterações nos Termos)',
    'terms.article8.content': 'Podemos alterar estes Termos a qualquer momento sem aviso prévio aos usuários quando considerado necessário. Os Termos revisados entrarão em vigor quando publicados dentro deste Aplicativo.',

    // Article 9
    'terms.article9.title': 'Artigo 9 (Tratamento de Informações Pessoais)',
    'terms.article9.content': 'O tratamento de informações pessoais neste Aplicativo está sujeito à Política de Privacidade separada.',

    // Article 10
    'terms.article10.title': 'Artigo 10 (Programa de Afiliados)',
    'terms.article10.intro': 'O Aplicativo pode incluir códigos de referência ou links de afiliados para serviços de terceiros (por exemplo, iHerb) como meio de apoiar o desenvolvimento e manutenção do Aplicativo. Quando os usuários fazem compras através desses links:',
    'terms.article10.items.1': 'Podemos receber uma comissão do serviço de terceiros',
    'terms.article10.items.2': 'Não há custo adicional para os usuários',
    'terms.article10.items.3': 'O uso desses códigos de referência é totalmente voluntário',

    // Article 11
    'terms.article11.title': 'Artigo 11 (Suporte Multilíngue)',
    'terms.article11.intro': 'O Aplicativo suporta os seguintes idiomas para a interface do usuário e documentos legais:',
    'terms.article11.items.1': 'Inglês, Japonês, Espanhol, Português, Alemão, Francês, Chinês (Simplificado), Coreano, Italiano, Indonésio, Russo, Turco, Holandês, Polonês, Tailandês, Vietnamita, Árabe, Hindi e Persa (Farsi)',
    'terms.article11.items.2': 'Os documentos legais (Termos de Serviço e Política de Privacidade) estão agora disponíveis em todos os 19 idiomas',
    'terms.article11.items.3': 'Embora nos esforcemos pela precisão nas traduções, a versão japonesa serve como a versão oficial',

    // Article 12
    'terms.article12.title': 'Artigo 12 (Suporte)',
    'terms.article12.intro': 'Para consultas sobre este Aplicativo, entre em contato conosco no seguinte endereço de e-mail.',
    'terms.article12.email': 'takuya.atsugi911@gmail.com',
    'terms.article12.language': 'Apenas japonês',

    // Article 13
    'terms.article13.title': 'Artigo 13 (Lei Aplicável e Jurisdição)',
    'terms.article13.content': 'Estes Termos serão regidos pela lei japonesa. Em caso de quaisquer disputas relacionadas a este Aplicativo, o tribunal com jurisdição sobre nossa localização terá jurisdição exclusiva.',

    'contact.title': 'Entre em Contato',
    'contact.description': 'Sinta-se à vontade para entrar em contato conosco com qualquer dúvida, comentário ou relatório de bug sobre MASCALE',
    'contact.email.title': 'Contato por E-mail',
    'contact.language.title': 'Idioma Suportado',
    'contact.language.value': 'Apenas japonês',
    'contact.response.title': 'Resposta',
    'contact.response.value': 'Responderemos prontamente',
  },
  de: {
    'header.privacy': 'Datenschutz',
    'header.terms': 'Bedingungen',
    'header.contact': 'Kontakt',
    'home.hero.badge': 'Trainingsprotokoll-App',
    'home.hero.tagline': 'Aufzeichnen und Weiterentwickeln',
    'home.hero.description': 'Visualisieren Sie Ihren Fortschritt mit einfachen\nund intuitiven Trainingsprotokollen',
    'home.hero.download': 'Im App Store herunterladen',
    'home.features.title': 'Hauptfunktionen',
    'home.features.subtitle': 'MASCALE unterstützt Ihr Training',
    'home.features.calendar.title': 'Kalenderaufzeichnungen',
    'home.features.calendar.description': 'Sehen Sie Ihre Trainingshistorie auf einen Blick im Kalenderformat. Verwalten Sie einfach, wann und was Sie trainiert haben.',
    'home.features.detailed.title': 'Detaillierte Trainingsaufzeichnungen',
    'home.features.detailed.description': 'Zeichnen Sie Sätze, Gewicht und Wiederholungen für jede Übung auf. Das Gesamtvolumen wird automatisch berechnet.',
    'home.features.bodypart.title': 'Körperteil-Management',
    'home.features.bodypart.description': 'Organisieren Sie Übungen nach Körperteilen wie Brust, Schultern, Arme, Rücken, Beine und Bauch.',
    'home.features.multilang.title': 'Unterstützung für 19 Sprachen',
    'home.features.multilang.description': 'Unterstützt 19 Sprachen einschließlich Japanisch, Englisch, Spanisch, Chinesisch und Koreanisch.',
    'home.features.units.title': 'Einheitenwechsel',
    'home.features.units.description': 'Wechseln Sie Gewichtseinheiten zwischen Kilogramm (kg) und Pfund (lb). Zeichnen Sie in Ihrer bevorzugten Einheit auf.',
    'home.features.darkmode.title': 'Dark Mode-Unterstützung',
    'home.features.darkmode.description': 'Wählen Sie zwischen hellem Modus, dunklem Modus oder folgen Sie den Systemeinstellungen.',
    'home.languages.title': 'Unterstützte Sprachen',
    'home.languages.subtitle': 'Verfügbar für Benutzer weltweit',
    'footer.tagline': 'Aufzeichnen und Weiterentwickeln',
    'footer.links': 'Links',
    'footer.privacy': 'Datenschutzrichtlinie',
    'footer.terms': 'Nutzungsbedingungen',
    'footer.contact': 'Kontakt',
    'footer.contact.title': 'Kontaktieren Sie uns',
    'privacy.title': 'Datenschutzrichtlinie',
    'privacy.updated': 'Zuletzt aktualisiert: 12. Oktober 2025',
    'terms.title': 'Nutzungsbedingungen',
    'terms.updated': 'Zuletzt aktualisiert: 12. Oktober 2025',
    'terms.provider': 'Anbieter: Takuya Atsugi',

    // Article 1
    'terms.article1.title': 'Artikel 1 (Anwendung)',
    'terms.article1.content': 'Diese Nutzungsbedingungen definieren die Bedingungen für die Nutzung der Smartphone-Anwendung "MASCALE" (im Folgenden als "diese App" bezeichnet), die von Takuya Atsugi (im Folgenden als "wir" bezeichnet) bereitgestellt wird. Durch die Nutzung dieser App gelten Sie als mit diesen Bedingungen einverstanden.',

    // Article 2
    'terms.article2.title': 'Artikel 2 (App-Inhalt)',
    'terms.article2.intro': 'Diese App ist eine Anwendung, die es Benutzern ermöglicht, Trainings (Krafttraining, Cardio usw.) aufzuzeichnen und diese Historie im Kalenderformat zu verwalten.',
    'terms.article2.features.title': 'Hauptfunktionen:',
    'terms.article2.features.1': 'Verwaltung von Trainingsaufzeichnungen im Kalenderformat',
    'terms.article2.features.2': 'Aufzeichnung von Sätzen, Gewicht und Wiederholungen für jede Übung',
    'terms.article2.features.3': 'Wechsel der Gewichtseinheit (kg/lb)',
    'terms.article2.features.4': 'Visualisierung der Trainingshistorie',
    'terms.article2.features.5': 'Alle Daten werden lokal auf dem Gerät mit SQLite-Datenbank gespeichert',

    // Article 3
    'terms.article3.title': 'Artikel 3 (Kostenlose Bereitstellung und zukünftige Monetarisierung)',
    'terms.article3.intro': 'Diese App wird derzeit kostenlos bereitgestellt. Wir können jedoch in Zukunft die folgenden Monetarisierungsfunktionen hinzufügen.',
    'terms.article3.items.1': 'Anzeigenschaltung: In-App-Werbung',
    'terms.article3.items.2': 'In-App-Käufe: Bereitstellung von Werbeentfernung und Premium-Funktionen (nicht verbrauchbare Artikel, wiederherstellbar)',
    'terms.article3.outro': 'Wenn diese Funktionen hinzugefügt werden, werden wir diese Bedingungen und die Datenschutzrichtlinie aktualisieren und die Benutzer im Voraus innerhalb der App benachrichtigen.',

    // Article 4
    'terms.article4.title': 'Artikel 4 (Nutzungsumgebung)',
    'terms.article4.intro': 'Die Nutzung dieser App erfordert ein kompatibles Smartphone-Gerät (iOS/Android).',
    'terms.article4.items.1': 'Diese App ist als Offline-First konzipiert und kann ohne Internetverbindung für grundlegende Funktionen genutzt werden',
    'terms.article4.items.2': 'Analyseinformationen (anonyme Nutzungsstatistiken) werden automatisch an Firebase Analytics gesendet, wenn eine Internetverbindung verfügbar ist',
    'terms.article4.items.3': 'Wenn in Zukunft Cloud-Synchronisierungsfunktionen hinzugefügt werden, wird eine Internetverbindung erforderlich sein',
    'terms.article4.items.4': 'Benutzer sind für die Kosten der Einrichtung dieser Umgebungen (Kommunikationsgebühren usw.) verantwortlich',

    // Article 5
    'terms.article5.title': 'Artikel 5 (Verbotene Handlungen)',
    'terms.article5.intro': 'Die folgenden Handlungen sind bei der Nutzung dieser App verboten.',
    'terms.article5.items.1': 'Handlungen, die gegen Gesetze oder öffentliche Ordnung und Moral verstoßen',
    'terms.article5.items.2': 'Handlungen im Zusammenhang mit kriminellen Aktivitäten',
    'terms.article5.items.3': 'Unbefugte Änderung, Reverse Engineering oder Dekompilierung von App-Funktionen',
    'terms.article5.items.4': 'Direkter Zugriff auf die App-Datenbank (SQLite) zur illegalen Manipulation von Daten',
    'terms.article5.items.5': 'Handlungen, die Server oder Netzwerkfunktionen zerstören oder stören, die in Zukunft eingeführt werden können',
    'terms.article5.items.6': 'Handlungen, die wahrscheinlich den App-Betrieb stören',
    'terms.article5.items.7': 'Sammeln oder Anhäufen persönlicher Informationen über andere Benutzer (für zukünftige Funktionserweiterungen)',
    'terms.article5.items.8': 'Unbefugter Zugriff oder Versuche dazu',
    'terms.article5.items.9': 'Unbefugte kommerzielle Nutzung dieser App',
    'terms.article5.items.10': 'Betrügerische Nutzung von In-App-Käufen oder Missbrauch von Rückerstattungen (für zukünftige Funktionserweiterungen)',
    'terms.article5.items.11': 'Andere Handlungen, die wir als unangemessen erachten',

    // Article 6
    'terms.article6.title': 'Artikel 6 (Aussetzung der App-Bereitstellung)',
    'terms.article6.intro': 'Wir können die Bereitstellung dieser App ganz oder teilweise ohne vorherige Ankündigung an die Benutzer aussetzen oder unterbrechen, wenn wir feststellen, dass eine der folgenden Umstände vorliegt.',
    'terms.article6.items.1': 'Bei Durchführung von Wartung oder Updates am App-System',
    'terms.article6.items.2': 'Wenn die Bereitstellung dieser App aufgrund höherer Gewalt wie Erdbeben, Blitzschlag, Feuer, Stromausfällen oder Naturkatastrophen schwierig wird',
    'terms.article6.items.3': 'Wenn wir feststellen, dass die Bereitstellung dieser App aus anderen Gründen schwierig ist',

    // Article 7
    'terms.article7.title': 'Artikel 7 (Haftungsausschluss)',
    'terms.article7.items.1': 'Diese App ist ein Tool zur Verwaltung von Trainingsaufzeichnungen und bietet keine medizinische Beratung, Diagnose oder Behandlung. Wenn Sie gesundheitliche Bedenken haben, konsultieren Sie bitte einen Arzt oder Spezialisten.',
    'terms.article7.items.2': 'Wir geben keine Garantien hinsichtlich des Inhalts, des Betriebs oder der Qualität dieser App ab.',
    'terms.article7.items.3': 'Wir übernehmen keine Verantwortung für Schäden, die sich aus der Nutzung dieser App ergeben (einschließlich, aber nicht beschränkt auf Datenverlust, Geräteausfall oder andere direkte oder indirekte Schäden).',
    'terms.article7.items.4': 'Diese App speichert Daten lokal auf dem Gerät des Benutzers mit SQLite-Datenbank. Es besteht das Risiko von Datenverlust durch Geräteausfall, Verlust, Betriebssystem-Updates, App-Fehlfunktionen usw. Benutzer müssen ihre Daten bei Bedarf in eigener Verantwortung sichern.',
    'terms.article7.items.5': 'Die aktuelle Version bietet keine Cloud-Backup-Funktionalität. Selbst wenn diese Funktionalität in Zukunft hinzugefügt wird, garantieren wir nicht die Datenintegrität oder Verfügbarkeit.',

    // Article 8
    'terms.article8.title': 'Artikel 8 (Änderungen der Bedingungen)',
    'terms.article8.content': 'Wir können diese Bedingungen jederzeit ohne Ankündigung an die Benutzer ändern, wenn dies als notwendig erachtet wird. Die überarbeiteten Bedingungen treten in Kraft, wenn sie innerhalb dieser App veröffentlicht werden.',

    // Article 9
    'terms.article9.title': 'Artikel 9 (Umgang mit persönlichen Informationen)',
    'terms.article9.content': 'Der Umgang mit persönlichen Informationen in dieser App unterliegt der separaten Datenschutzrichtlinie.',

    // Article 10
    'terms.article10.title': 'Artikel 10 (Partnerprogramm)',
    'terms.article10.intro': 'Die App kann Empfehlungscodes oder Affiliate-Links zu Drittanbieterdiensten (z.B. iHerb) als Mittel zur Unterstützung der Entwicklung und Wartung der App enthalten. Wenn Benutzer über diese Links Käufe tätigen:',
    'terms.article10.items.1': 'Wir können eine Provision vom Drittanbieterdienst erhalten',
    'terms.article10.items.2': 'Für Benutzer entstehen keine zusätzlichen Kosten',
    'terms.article10.items.3': 'Die Verwendung dieser Empfehlungscodes ist vollständig freiwillig',

    // Article 11
    'terms.article11.title': 'Artikel 11 (Mehrsprachige Unterstützung)',
    'terms.article11.intro': 'Die App unterstützt die folgenden Sprachen für die Benutzeroberfläche und rechtliche Dokumente:',
    'terms.article11.items.1': 'Englisch, Japanisch, Spanisch, Portugiesisch, Deutsch, Französisch, Chinesisch (Vereinfacht), Koreanisch, Italienisch, Indonesisch, Russisch, Türkisch, Niederländisch, Polnisch, Thailändisch, Vietnamesisch, Arabisch, Hindi und Persisch (Farsi)',
    'terms.article11.items.2': 'Die rechtlichen Dokumente (Nutzungsbedingungen und Datenschutzrichtlinie) sind jetzt in allen 19 Sprachen verfügbar',
    'terms.article11.items.3': 'Obwohl wir uns um Genauigkeit in den Übersetzungen bemühen, dient die japanische Version als offizielle Version',

    // Article 12
    'terms.article12.title': 'Artikel 12 (Support)',
    'terms.article12.intro': 'Für Anfragen zu dieser App kontaktieren Sie uns bitte unter der folgenden E-Mail-Adresse.',
    'terms.article12.email': 'takuya.atsugi911@gmail.com',
    'terms.article12.language': 'Nur Japanisch',

    // Article 13
    'terms.article13.title': 'Artikel 13 (Anwendbares Recht und Gerichtsstand)',
    'terms.article13.content': 'Diese Bedingungen unterliegen japanischem Recht. Im Falle von Streitigkeiten bezüglich dieser App hat das Gericht mit Zuständigkeit für unseren Standort die ausschließliche Gerichtsbarkeit.',

    'contact.title': 'Kontaktieren Sie uns',
    'contact.description': 'Kontaktieren Sie uns gerne bei Fragen, Feedback oder Fehlerberichten zu MASCALE',
    'contact.email.title': 'Kontakt per E-Mail',
    'contact.language.title': 'Unterstützte Sprache',
    'contact.language.value': 'Nur Japanisch',
    'contact.response.title': 'Antwort',
    'contact.response.value': 'Wir werden umgehend antworten',
  },
  fr: {
    'header.privacy': 'Confidentialité',
    'header.terms': 'Conditions',
    'header.contact': 'Contact',
    'home.hero.badge': 'Application de Journal d\'Entraînement',
    'home.hero.tagline': 'Enregistrer et Continuer à Évoluer',
    'home.hero.description': 'Visualisez votre progression avec des enregistrements\nd\'entraînement simples et intuitifs',
    'home.hero.download': 'Télécharger sur l\'App Store',
    'home.features.title': 'Fonctionnalités Principales',
    'home.features.subtitle': 'MASCALE soutient votre entraînement',
    'home.features.calendar.title': 'Enregistrements de Calendrier',
    'home.features.calendar.description': 'Consultez votre historique d\'entraînement en un coup d\'œil au format calendrier. Gérez facilement quand et quoi vous avez entraîné.',
    'home.features.detailed.title': 'Enregistrements Détaillés d\'Entraînement',
    'home.features.detailed.description': 'Enregistrez les séries, le poids et les répétitions pour chaque exercice. Le volume total est calculé automatiquement.',
    'home.features.bodypart.title': 'Gestion par Partie du Corps',
    'home.features.bodypart.description': 'Organisez les exercices par parties du corps comme la poitrine, les épaules, les bras, le dos, les jambes et les abdominaux.',
    'home.features.multilang.title': 'Support de 19 Langues',
    'home.features.multilang.description': 'Prend en charge 19 langues dont le japonais, l\'anglais, l\'espagnol, le chinois et le coréen.',
    'home.features.units.title': 'Changement d\'Unités',
    'home.features.units.description': 'Changez les unités de poids entre kilogrammes (kg) et livres (lb). Enregistrez dans votre unité préférée.',
    'home.features.darkmode.title': 'Support du Mode Sombre',
    'home.features.darkmode.description': 'Choisissez entre mode clair, mode sombre ou suivre les paramètres système.',
    'home.languages.title': 'Langues Supportées',
    'home.languages.subtitle': 'Disponible pour les utilisateurs du monde entier',
    'footer.tagline': 'Enregistrer et Continuer à Évoluer',
    'footer.links': 'Liens',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions d\'Utilisation',
    'footer.contact': 'Contact',
    'footer.contact.title': 'Contactez-nous',
    'privacy.title': 'Politique de Confidentialité',
    'privacy.updated': 'Dernière mise à jour : 12 octobre 2025',
    'terms.title': 'Conditions d\'Utilisation',
    'terms.updated': 'Dernière mise à jour : 12 octobre 2025',
    'terms.provider': 'Fournisseur: Takuya Atsugi',

    // Article 1
    'terms.article1.title': 'Article 1 (Application)',
    'terms.article1.content': 'Ces Conditions d\'Utilisation définissent les conditions d\'utilisation de l\'application smartphone "MASCALE" (ci-après dénommée "cette Application") fournie par Takuya Atsugi (ci-après dénommé "nous"). En utilisant cette Application, vous êtes réputé avoir accepté ces Conditions.',

    // Article 2
    'terms.article2.title': 'Article 2 (Contenu de l\'Application)',
    'terms.article2.intro': 'Cette Application est une application conçue pour permettre aux utilisateurs d\'enregistrer des entraînements (musculation, cardio, etc.) et de gérer cet historique au format calendrier.',
    'terms.article2.features.title': 'Fonctionnalités Principales:',
    'terms.article2.features.1': 'Gestion des enregistrements d\'entraînement au format calendrier',
    'terms.article2.features.2': 'Enregistrement des séries, poids et répétitions pour chaque exercice',
    'terms.article2.features.3': 'Changement d\'unité de poids (kg/lb)',
    'terms.article2.features.4': 'Visualisation de l\'historique d\'entraînement',
    'terms.article2.features.5': 'Toutes les données sont stockées localement sur l\'appareil à l\'aide d\'une base de données SQLite',

    // Article 3
    'terms.article3.title': 'Article 3 (Fourniture Gratuite et Monétisation Future)',
    'terms.article3.intro': 'Cette Application est actuellement fournie gratuitement. Cependant, nous pouvons ajouter les fonctionnalités de monétisation suivantes à l\'avenir.',
    'terms.article3.items.1': 'Affichage de publicités: Publicité dans l\'application',
    'terms.article3.items.2': 'Achats intégrés: Fourniture de suppression de publicités et de fonctionnalités premium (articles non consommables, restaurables)',
    'terms.article3.outro': 'Si ces fonctionnalités sont ajoutées, nous mettrons à jour ces Conditions et la Politique de Confidentialité et informerons les utilisateurs dans l\'application à l\'avance.',

    // Article 4
    'terms.article4.title': 'Article 4 (Environnement d\'Utilisation)',
    'terms.article4.intro': 'L\'utilisation de cette Application nécessite un appareil smartphone compatible (iOS/Android).',
    'terms.article4.items.1': 'Cette Application est conçue comme hors ligne d\'abord et peut être utilisée sans connexion Internet pour les fonctionnalités de base',
    'terms.article4.items.2': 'Les informations d\'analyse (statistiques d\'utilisation anonymes) sont automatiquement envoyées à Firebase Analytics lorsqu\'une connexion Internet est disponible',
    'terms.article4.items.3': 'Si une fonctionnalité de synchronisation cloud est ajoutée à l\'avenir, une connexion Internet sera requise',
    'terms.article4.items.4': 'Les utilisateurs sont responsables des coûts de configuration de ces environnements (frais de communication, etc.)',

    // Article 5
    'terms.article5.title': 'Article 5 (Actes Interdits)',
    'terms.article5.intro': 'Les actes suivants sont interdits lors de l\'utilisation de cette Application.',
    'terms.article5.items.1': 'Actes qui violent les lois ou l\'ordre public et les mœurs',
    'terms.article5.items.2': 'Actes liés à des activités criminelles',
    'terms.article5.items.3': 'Modification non autorisée, rétro-ingénierie ou décompilation des fonctions de l\'application',
    'terms.article5.items.4': 'Accès direct à la base de données de l\'application (SQLite) pour manipuler illégalement les données',
    'terms.article5.items.5': 'Actes qui détruisent ou interfèrent avec les serveurs ou les fonctions réseau qui peuvent être introduits à l\'avenir',
    'terms.article5.items.6': 'Actes susceptibles d\'interférer avec les opérations de l\'application',
    'terms.article5.items.7': 'Collecte ou accumulation d\'informations personnelles sur d\'autres utilisateurs (pour de futures ajouts de fonctionnalités)',
    'terms.article5.items.8': 'Accès non autorisé ou tentatives de le faire',
    'terms.article5.items.9': 'Utilisation commerciale non autorisée de cette Application',
    'terms.article5.items.10': 'Utilisation frauduleuse d\'achats intégrés ou abus de remboursements (pour de futures ajouts de fonctionnalités)',
    'terms.article5.items.11': 'Autres actes que nous jugeons inappropriés',

    // Article 6
    'terms.article6.title': 'Article 6 (Suspension de la Fourniture de l\'Application)',
    'terms.article6.intro': 'Nous pouvons suspendre ou interrompre la fourniture de tout ou partie de cette Application sans préavis aux utilisateurs si nous déterminons que l\'une des circonstances suivantes existe.',
    'terms.article6.items.1': 'Lors de la maintenance ou des mises à jour du système de l\'application',
    'terms.article6.items.2': 'Lorsque la fourniture de cette Application devient difficile en raison de force majeure telle que tremblements de terre, foudre, incendies, pannes de courant ou catastrophes naturelles',
    'terms.article6.items.3': 'Lorsque nous déterminons que la fourniture de cette Application est difficile pour d\'autres raisons',

    // Article 7
    'terms.article7.title': 'Article 7 (Clause de Non-Responsabilité)',
    'terms.article7.items.1': 'Cette Application est un outil pour gérer les enregistrements d\'entraînement et ne fournit pas de conseils médicaux, de diagnostic ou de traitement. Si vous avez des problèmes de santé, veuillez consulter un médecin ou un spécialiste.',
    'terms.article7.items.2': 'Nous n\'offrons aucune garantie concernant le contenu, le fonctionnement ou la qualité de cette Application.',
    'terms.article7.items.3': 'Nous n\'acceptons aucune responsabilité pour les dommages résultant de l\'utilisation de cette Application (y compris, mais sans s\'y limiter, la perte de données, la défaillance de l\'appareil ou autres dommages directs ou indirects).',
    'terms.article7.items.4': 'Cette Application stocke les données localement sur l\'appareil de l\'utilisateur à l\'aide d\'une base de données SQLite. Il existe des risques de perte de données dus à une défaillance de l\'appareil, une perte, des mises à jour du système d\'exploitation, des dysfonctionnements de l\'application, etc. Les utilisateurs doivent sauvegarder les données sous leur propre responsabilité si nécessaire.',
    'terms.article7.items.5': 'La version actuelle ne fournit pas de fonctionnalité de sauvegarde cloud. Même si cette fonctionnalité est ajoutée à l\'avenir, nous ne garantissons pas l\'intégrité ou la disponibilité des données.',

    // Article 8
    'terms.article8.title': 'Article 8 (Modifications des Conditions)',
    'terms.article8.content': 'Nous pouvons modifier ces Conditions à tout moment sans préavis aux utilisateurs lorsque cela est jugé nécessaire. Les Conditions révisées entreront en vigueur lorsqu\'elles seront publiées dans cette Application.',

    // Article 9
    'terms.article9.title': 'Article 9 (Traitement des Informations Personnelles)',
    'terms.article9.content': 'Le traitement des informations personnelles dans cette Application est soumis à la Politique de Confidentialité séparée.',

    // Article 10
    'terms.article10.title': 'Article 10 (Programme d\'Affiliation)',
    'terms.article10.intro': 'L\'Application peut inclure des codes de parrainage ou des liens d\'affiliation vers des services tiers (par exemple, iHerb) comme moyen de soutenir le développement et la maintenance de l\'Application. Lorsque les utilisateurs effectuent des achats via ces liens:',
    'terms.article10.items.1': 'Nous pouvons recevoir une commission du service tiers',
    'terms.article10.items.2': 'Il n\'y a pas de coût supplémentaire pour les utilisateurs',
    'terms.article10.items.3': 'L\'utilisation de ces codes de parrainage est entièrement volontaire',

    // Article 11
    'terms.article11.title': 'Article 11 (Support Multilingue)',
    'terms.article11.intro': 'L\'Application prend en charge les langues suivantes pour l\'interface utilisateur et les documents juridiques:',
    'terms.article11.items.1': 'Anglais, Japonais, Espagnol, Portugais, Allemand, Français, Chinois (Simplifié), Coréen, Italien, Indonésien, Russe, Turc, Néerlandais, Polonais, Thaï, Vietnamien, Arabe, Hindi et Persan (Farsi)',
    'terms.article11.items.2': 'Les documents juridiques (Conditions d\'Utilisation et Politique de Confidentialité) sont maintenant disponibles dans les 19 langues',
    'terms.article11.items.3': 'Bien que nous nous efforcions d\'assurer l\'exactitude des traductions, la version japonaise fait foi',

    // Article 12
    'terms.article12.title': 'Article 12 (Support)',
    'terms.article12.intro': 'Pour toute question concernant cette Application, veuillez nous contacter à l\'adresse e-mail suivante.',
    'terms.article12.email': 'takuya.atsugi911@gmail.com',
    'terms.article12.language': 'Japonais uniquement',

    // Article 13
    'terms.article13.title': 'Article 13 (Loi Applicable et Juridiction)',
    'terms.article13.content': 'Ces Conditions sont régies par le droit japonais. En cas de litige concernant cette Application, le tribunal ayant juridiction sur notre emplacement aura juridiction exclusive.',

    'contact.title': 'Contactez-nous',
    'contact.description': 'N\'hésitez pas à nous contacter pour toute question, commentaire ou rapport de bug concernant MASCALE',
    'contact.email.title': 'Contact par E-mail',
    'contact.language.title': 'Langue Supportée',
    'contact.language.value': 'Japonais uniquement',
    'contact.response.title': 'Réponse',
    'contact.response.value': 'Nous répondrons rapidement',
  },
  zh: {
    'header.privacy': '隐私',
    'header.terms': '条款',
    'header.contact': '联系',
    'home.hero.badge': '训练记录应用',
    'home.hero.tagline': '记录并持续进化',
    'home.hero.description': '通过简单直观的训练记录\n可视化您的进步',
    'home.hero.download': '在 App Store 下载',
    'home.features.title': '主要功能',
    'home.features.subtitle': 'MASCALE 支持您的训练',
    'home.features.calendar.title': '日历记录',
    'home.features.calendar.description': '以日历格式一目了然地查看您的训练历史。轻松管理何时训练了什么。',
    'home.features.detailed.title': '详细的训练记录',
    'home.features.detailed.description': '记录每个练习的组数、重量和次数。总量自动计算。',
    'home.features.bodypart.title': '部位管理',
    'home.features.bodypart.description': '按身体部位组织练习，如胸部、肩部、手臂、背部、腿部和腹部。',
    'home.features.multilang.title': '支持19种语言',
    'home.features.multilang.description': '支持19种语言，包括日语、英语、西班牙语、中文和韩语。',
    'home.features.units.title': '单位切换',
    'home.features.units.description': '在千克(kg)和磅(lb)之间切换重量单位。以您喜欢的单位记录。',
    'home.features.darkmode.title': '深色模式支持',
    'home.features.darkmode.description': '在浅色模式、深色模式之间选择或跟随系统设置。',
    'home.languages.title': '支持的语言',
    'home.languages.subtitle': '为全球用户提供服务',
    'footer.tagline': '记录并持续进化',
    'footer.links': '链接',
    'footer.privacy': '隐私政策',
    'footer.terms': '服务条款',
    'footer.contact': '联系',
    'footer.contact.title': '联系我们',
    'privacy.title': '隐私政策',
    'privacy.updated': '最后更新：2025年10月12日',
    'terms.title': '服务条款',
    'terms.updated': '最后更新：2025年10月12日',
    'terms.provider': '提供者: Takuya Atsugi',

    // Article 1
    'terms.article1.title': '第1条（适用）',
    'terms.article1.content': '本服务条款规定了使用由Takuya Atsugi（以下简称"我方"）提供的智能手机应用程序"MASCALE"（以下简称"本应用"）的条件。使用本应用即表示您同意本条款。',

    // Article 2
    'terms.article2.title': '第2条（应用内容）',
    'terms.article2.intro': '本应用是一款旨在让用户记录训练（力量训练、有氧运动等）并以日历格式管理历史记录的应用程序。',
    'terms.article2.features.title': '主要功能：',
    'terms.article2.features.1': '以日历格式管理训练记录',
    'terms.article2.features.2': '记录每个练习的组数、重量和次数',
    'terms.article2.features.3': '切换重量单位（kg/lb）',
    'terms.article2.features.4': '训练历史可视化',
    'terms.article2.features.5': '所有数据使用SQLite数据库存储在设备本地',

    // Article 3
    'terms.article3.title': '第3条（免费提供和未来变现）',
    'terms.article3.intro': '本应用目前免费提供。但是，我们可能在未来添加以下变现功能。',
    'terms.article3.items.1': '广告展示：应用内广告',
    'terms.article3.items.2': '应用内购买：提供去除广告和高级功能（非消耗性项目，可恢复）',
    'terms.article3.outro': '如果添加这些功能，我们将更新本条款和隐私政策，并提前在应用内通知用户。',

    // Article 4
    'terms.article4.title': '第4条（使用环境）',
    'terms.article4.intro': '使用本应用需要兼容的智能手机设备（iOS/Android）。',
    'terms.article4.items.1': '本应用采用离线优先设计，基本功能可在无互联网连接的情况下使用',
    'terms.article4.items.2': '分析信息（匿名使用统计）在有互联网连接时会自动发送到Firebase Analytics',
    'terms.article4.items.3': '如果未来添加云同步功能，将需要互联网连接',
    'terms.article4.items.4': '用户负责设置这些环境的费用（通信费等）',

    // Article 5
    'terms.article5.title': '第5条（禁止行为）',
    'terms.article5.intro': '使用本应用时禁止以下行为。',
    'terms.article5.items.1': '违反法律或公共秩序和道德的行为',
    'terms.article5.items.2': '与犯罪活动相关的行为',
    'terms.article5.items.3': '未经授权修改、逆向工程或反编译应用功能',
    'terms.article5.items.4': '直接访问应用数据库（SQLite）以非法操纵数据',
    'terms.article5.items.5': '破坏或干扰未来可能引入的服务器或网络功能的行为',
    'terms.article5.items.6': '可能干扰应用运营的行为',
    'terms.article5.items.7': '收集或积累其他用户的个人信息（用于未来功能添加）',
    'terms.article5.items.8': '未经授权的访问或尝试访问',
    'terms.article5.items.9': '未经授权将本应用用于商业用途',
    'terms.article5.items.10': '欺诈性使用应用内购买或滥用退款（用于未来功能添加）',
    'terms.article5.items.11': '我们认为不适当的其他行为',

    // Article 6
    'terms.article6.title': '第6条（暂停应用提供）',
    'terms.article6.intro': '如果我们确定存在以下任何情况，我们可以在不事先通知用户的情况下暂停或中断提供全部或部分本应用。',
    'terms.article6.items.1': '对应用系统进行维护或更新时',
    'terms.article6.items.2': '由于地震、雷电、火灾、停电或自然灾害等不可抗力导致提供本应用变得困难时',
    'terms.article6.items.3': '我们确定由于其他原因提供本应用很困难时',

    // Article 7
    'terms.article7.title': '第7条（免责声明）',
    'terms.article7.items.1': '本应用是管理训练记录的工具，不提供医疗建议、诊断或治疗。如果您有健康问题，请咨询医生或专家。',
    'terms.article7.items.2': '我们不对本应用的内容、运行或质量提供任何保证。',
    'terms.article7.items.3': '我们不对使用本应用造成的任何损害（包括但不限于数据丢失、设备故障或其他直接或间接损害）承担任何责任。',
    'terms.article7.items.4': '本应用使用SQLite数据库在用户设备上本地存储数据。存在因设备故障、丢失、操作系统更新、应用故障等造成数据丢失的风险。用户应在必要时自行负责备份数据。',
    'terms.article7.items.5': '当前版本不提供云备份功能。即使将来添加此功能，我们也不保证数据的完整性或可用性。',

    // Article 8
    'terms.article8.title': '第8条（条款变更）',
    'terms.article8.content': '我们可以在认为必要时随时更改本条款，无需通知用户。修订后的条款在本应用内发布时生效。',

    // Article 9
    'terms.article9.title': '第9条（个人信息处理）',
    'terms.article9.content': '本应用中个人信息的处理受单独的隐私政策约束。',

    // Article 10
    'terms.article10.title': '第10条（联盟计划）',
    'terms.article10.intro': '应用可能包含第三方服务（例如iHerb）的推荐代码或联盟链接，作为支持应用开发和维护的一种手段。当用户通过这些链接进行购买时：',
    'terms.article10.items.1': '我们可能会从第三方服务获得佣金',
    'terms.article10.items.2': '用户无需支付额外费用',
    'terms.article10.items.3': '使用这些推荐代码完全自愿',

    // Article 11
    'terms.article11.title': '第11条（多语言支持）',
    'terms.article11.intro': '应用支持以下语言的用户界面和法律文件：',
    'terms.article11.items.1': '英语、日语、西班牙语、葡萄牙语、德语、法语、中文（简体）、韩语、意大利语、印尼语、俄语、土耳其语、荷兰语、波兰语、泰语、越南语、阿拉伯语、印地语和波斯语（法尔西语）',
    'terms.article11.items.2': '法律文件（服务条款和隐私政策）现已提供全部19种语言版本',
    'terms.article11.items.3': '虽然我们力求翻译准确，但日语版本为官方版本',

    // Article 12
    'terms.article12.title': '第12条（支持）',
    'terms.article12.intro': '有关本应用的咨询，请通过以下电子邮件地址与我们联系。',
    'terms.article12.email': 'takuya.atsugi911@gmail.com',
    'terms.article12.language': '仅日语',

    // Article 13
    'terms.article13.title': '第13条（适用法律和管辖权）',
    'terms.article13.content': '本条款受日本法律管辖。如果发生与本应用相关的任何争议，对我方所在地有管辖权的法院具有专属管辖权。',

    'contact.title': '联系我们',
    'contact.description': '如有关于 MASCALE 的任何问题、反馈或错误报告，请随时与我们联系',
    'contact.email.title': '电子邮件联系',
    'contact.language.title': '支持的语言',
    'contact.language.value': '仅日语',
    'contact.response.title': '响应',
    'contact.response.value': '我们将迅速回复',
  },
  ko: {
    'header.privacy': '개인정보',
    'header.terms': '이용약관',
    'header.contact': '문의',
    'home.hero.badge': '운동 기록 앱',
    'home.hero.tagline': '기록하고 계속 발전하기',
    'home.hero.description': '간단하고 직관적인 운동 기록으로\n진행 상황을 시각화하세요',
    'home.hero.download': 'App Store에서 다운로드',
    'home.features.title': '주요 기능',
    'home.features.subtitle': 'MASCALE이 운동을 지원합니다',
    'home.features.calendar.title': '캘린더 기록',
    'home.features.calendar.description': '캘린더 형식으로 운동 기록을 한눈에 확인하세요. 언제 무엇을 운동했는지 쉽게 관리할 수 있습니다.',
    'home.features.detailed.title': '상세한 운동 기록',
    'home.features.detailed.description': '각 운동의 세트, 무게, 반복 횟수를 기록하세요. 총 볼륨은 자동으로 계산됩니다.',
    'home.features.bodypart.title': '부위별 관리',
    'home.features.bodypart.description': '가슴, 어깨, 팔, 등, 다리, 복근과 같은 신체 부위별로 운동을 정리하세요.',
    'home.features.multilang.title': '19개 언어 지원',
    'home.features.multilang.description': '일본어, 영어, 스페인어, 중국어, 한국어를 포함한 19개 언어를 지원합니다.',
    'home.features.units.title': '단위 전환',
    'home.features.units.description': '킬로그램(kg)과 파운드(lb) 사이에서 무게 단위를 전환하세요. 선호하는 단위로 기록하세요.',
    'home.features.darkmode.title': '다크 모드 지원',
    'home.features.darkmode.description': '라이트 모드, 다크 모드 중에서 선택하거나 시스템 설정을 따르세요.',
    'home.languages.title': '지원 언어',
    'home.languages.subtitle': '전 세계 사용자를 위해 제공',
    'footer.tagline': '기록하고 계속 발전하기',
    'footer.links': '링크',
    'footer.privacy': '개인정보 보호정책',
    'footer.terms': '서비스 약관',
    'footer.contact': '문의',
    'footer.contact.title': '문의하기',
    'privacy.title': '개인정보 보호정책',
    'privacy.updated': '최종 업데이트: 2025년 10월 12일',
    'terms.title': '서비스 약관',
    'terms.updated': '최종 업데이트: 2025년 10월 12일',
    'terms.provider': '제공자: Takuya Atsugi',

    // Article 1
    'terms.article1.title': '제1조 (적용)',
    'terms.article1.content': '본 서비스 약관은 Takuya Atsugi(이하 "당사")가 제공하는 스마트폰 애플리케이션 "MASCALE"(이하 "본 앱")의 이용 조건을 정의합니다. 본 앱을 사용함으로써 귀하는 본 약관에 동의한 것으로 간주됩니다。',

    // Article 2
    'terms.article2.title': '제2조 (앱 콘텐츠)',
    'terms.article2.intro': '본 앱은 사용자가 훈련(근력 운동, 유산소 운동 등)을 기록하고 그 이력을 달력 형식으로 관리하도록 설계된 애플리케이션입니다。',
    'terms.article2.features.title': '주요 기능:',
    'terms.article2.features.1': '달력 형식의 훈련 기록 관리',
    'terms.article2.features.2': '각 운동에 대한 세트, 무게, 반복 횟수 기록',
    'terms.article2.features.3': '무게 단위 전환 (kg/lb)',
    'terms.article2.features.4': '훈련 이력 시각화',
    'terms.article2.features.5': '모든 데이터는 SQLite 데이터베이스를 사용하여 기기에 로컬로 저장됩니다',

    // Article 3
    'terms.article3.title': '제3조 (무료 제공 및 향후 수익화)',
    'terms.article3.intro': '본 앱은 현재 무료로 제공됩니다. 그러나 향후 다음과 같은 수익화 기능을 추가할 수 있습니다。',
    'terms.article3.items.1': '광고 표시: 앱 내 광고',
    'terms.article3.items.2': '앱 내 구매: 광고 제거 및 프리미엄 기능 제공 (비소모성 항목, 복원 가능)',
    'terms.article3.outro': '이러한 기능이 추가되는 경우 본 약관과 개인정보 보호정책을 업데이트하고 앱 내에서 사전에 사용자에게 알려드리겠습니다。',

    // Article 4
    'terms.article4.title': '제4조 (사용 환경)',
    'terms.article4.intro': '본 앱을 사용하려면 호환 가능한 스마트폰 기기(iOS/Android)가 필요합니다。',
    'terms.article4.items.1': '본 앱은 오프라인 우선으로 설계되어 기본 기능에 대해 인터넷 연결 없이 사용할 수 있습니다',
    'terms.article4.items.2': '분석 정보(익명 사용 통계)는 인터넷 연결이 가능할 때 자동으로 Firebase Analytics로 전송됩니다',
    'terms.article4.items.3': '향후 클라우드 동기화 기능이 추가되면 인터넷 연결이 필요합니다',
    'terms.article4.items.4': '사용자는 이러한 환경 설정 비용(통신비 등)에 대한 책임이 있습니다',

    // Article 5
    'terms.article5.title': '제5조 (금지 행위)',
    'terms.article5.intro': '본 앱 사용 시 다음 행위가 금지됩니다。',
    'terms.article5.items.1': '법률이나 공공 질서 및 도덕을 위반하는 행위',
    'terms.article5.items.2': '범죄 활동과 관련된 행위',
    'terms.article5.items.3': '앱 기능의 무단 수정, 리버스 엔지니어링 또는 디컴파일',
    'terms.article5.items.4': '앱 데이터베이스(SQLite)에 직접 액세스하여 불법적으로 데이터를 조작하는 행위',
    'terms.article5.items.5': '향후 도입될 수 있는 서버 또는 네트워크 기능을 파괴하거나 방해하는 행위',
    'terms.article5.items.6': '앱 운영을 방해할 가능성이 있는 행위',
    'terms.article5.items.7': '다른 사용자에 대한 개인 정보 수집 또는 축적 (향후 기능 추가 시)',
    'terms.article5.items.8': '무단 액세스 또는 그 시도',
    'terms.article5.items.9': '본 앱의 무단 상업적 사용',
    'terms.article5.items.10': '앱 내 구매의 부정 사용 또는 환불 남용 (향후 기능 추가 시)',
    'terms.article5.items.11': '당사가 부적절하다고 판단하는 기타 행위',

    // Article 6
    'terms.article6.title': '제6조 (앱 제공 중단)',
    'terms.article6.intro': '당사는 다음 중 하나의 상황이 존재한다고 판단하는 경우 사용자에게 사전 통지 없이 본 앱의 전부 또는 일부 제공을 중단하거나 중단할 수 있습니다。',
    'terms.article6.items.1': '앱 시스템의 유지보수 또는 업데이트를 수행할 때',
    'terms.article6.items.2': '지진, 낙뢰, 화재, 정전 또는 자연재해와 같은 불가항력으로 인해 본 앱 제공이 어려워질 때',
    'terms.article6.items.3': '기타 이유로 본 앱 제공이 어렵다고 판단할 때',

    // Article 7
    'terms.article7.title': '제7조 (면책 조항)',
    'terms.article7.items.1': '본 앱은 훈련 기록 관리를 위한 도구이며 의료 조언, 진단 또는 치료를 제공하지 않습니다. 건강 문제가 있는 경우 의사 또는 전문가와 상담하십시오。',
    'terms.article7.items.2': '당사는 본 앱의 내용, 작동 또는 품질에 대해 어떠한 보증도 하지 않습니다。',
    'terms.article7.items.3': '당사는 본 앱 사용으로 인한 어떠한 손해(데이터 손실, 기기 고장 또는 기타 직간접적 손해를 포함하되 이에 국한되지 않음)에 대해 책임을 지지 않습니다。',
    'terms.article7.items.4': '본 앱은 SQLite 데이터베이스를 사용하여 사용자 기기에 데이터를 로컬로 저장합니다. 기기 고장, 분실, OS 업데이트, 앱 오작동 등으로 인한 데이터 손실 위험이 있습니다. 사용자는 필요에 따라 자신의 책임 하에 데이터를 백업해야 합니다。',
    'terms.article7.items.5': '현재 버전에는 클라우드 백업 기능이 제공되지 않습니다. 향후 이 기능이 추가되더라도 데이터 무결성 또는 가용성을 보장하지 않습니다。',

    // Article 8
    'terms.article8.title': '제8조 (약관 변경)',
    'terms.article8.content': '당사는 필요하다고 판단되는 경우 사용자에게 통지 없이 언제든지 본 약관을 변경할 수 있습니다. 개정된 약관은 본 앱 내에 게시될 때 효력이 발생합니다。',

    // Article 9
    'terms.article9.title': '제9조 (개인정보 처리)',
    'terms.article9.content': '본 앱의 개인정보 처리는 별도의 개인정보 보호정책의 적용을 받습니다。',

    // Article 10
    'terms.article10.title': '제10조 (제휴 프로그램)',
    'terms.article10.intro': '앱은 앱의 개발 및 유지보수를 지원하는 수단으로 제3자 서비스(예: iHerb)에 대한 추천 코드 또는 제휴 링크를 포함할 수 있습니다. 사용자가 이러한 링크를 통해 구매할 때:',
    'terms.article10.items.1': '당사는 제3자 서비스로부터 수수료를 받을 수 있습니다',
    'terms.article10.items.2': '사용자에게 추가 비용은 없습니다',
    'terms.article10.items.3': '이러한 추천 코드의 사용은 전적으로 자발적입니다',

    // Article 11
    'terms.article11.title': '제11조 (다국어 지원)',
    'terms.article11.intro': '앱은 사용자 인터페이스 및 법적 문서에 대해 다음 언어를 지원합니다:',
    'terms.article11.items.1': '영어, 일본어, 스페인어, 포르투갈어, 독일어, 프랑스어, 중국어(간체), 한국어, 이탈리아어, 인도네시아어, 러시아어, 터키어, 네덜란드어, 폴란드어, 태국어, 베트남어, 아랍어, 힌디어 및 페르시아어(파르시)',
    'terms.article11.items.2': '법적 문서(서비스 약관 및 개인정보 보호정책)는 이제 19개 언어 모두로 제공됩니다',
    'terms.article11.items.3': '번역의 정확성을 위해 노력하고 있지만 일본어 버전이 공식 버전입니다',

    // Article 12
    'terms.article12.title': '제12조 (지원)',
    'terms.article12.intro': '본 앱에 대한 문의사항은 다음 이메일 주소로 문의하시기 바랍니다。',
    'terms.article12.email': 'takuya.atsugi911@gmail.com',
    'terms.article12.language': '일본어만',

    // Article 13
    'terms.article13.title': '제13조 (준거법 및 관할권)',
    'terms.article13.content': '본 약관은 일본 법률의 적용을 받습니다. 본 앱과 관련하여 분쟁이 발생하는 경우 당사 소재지를 관할하는 법원이 전속 관할권을 갖습니다。',

    'contact.title': '문의하기',
    'contact.description': 'MASCALE에 대한 질문, 피드백 또는 버그 보고는 언제든지 문의해 주세요',
    'contact.email.title': '이메일로 문의',
    'contact.language.title': '지원 언어',
    'contact.language.value': '일본어만',
    'contact.response.title': '응답',
    'contact.response.value': '신속하게 응답하겠습니다',
  },
  it: {
    'header.privacy': 'Privacy',
    'header.terms': 'Termini',
    'header.contact': 'Contatto',
    'home.hero.badge': 'App per il Registro degli Allenamenti',
    'home.hero.tagline': 'Registra e Continua a Evolvere',
    'home.hero.description': 'Visualizza i tuoi progressi con registri di\nallenamento semplici e intuitivi',
    'home.hero.download': 'Scarica dall\'App Store',
    'home.features.title': 'Caratteristiche Principali',
    'home.features.subtitle': 'MASCALE supporta il tuo allenamento',
    'home.features.calendar.title': 'Registri del Calendario',
    'home.features.calendar.description': 'Visualizza la cronologia degli allenamenti a colpo d\'occhio in formato calendario. Gestisci facilmente quando e cosa hai allenato.',
    'home.features.detailed.title': 'Registri Dettagliati degli Allenamenti',
    'home.features.detailed.description': 'Registra serie, peso e ripetizioni per ogni esercizio. Il volume totale viene calcolato automaticamente.',
    'home.features.bodypart.title': 'Gestione per Parte del Corpo',
    'home.features.bodypart.description': 'Organizza gli esercizi per parti del corpo come petto, spalle, braccia, schiena, gambe e addominali.',
    'home.features.multilang.title': 'Supporto per 19 Lingue',
    'home.features.multilang.description': 'Supporta 19 lingue tra cui giapponese, inglese, spagnolo, cinese e coreano.',
    'home.features.units.title': 'Cambio di Unità',
    'home.features.units.description': 'Cambia le unità di peso tra chilogrammi (kg) e libbre (lb). Registra nella tua unità preferita.',
    'home.features.darkmode.title': 'Supporto Modalità Scura',
    'home.features.darkmode.description': 'Scegli tra modalità chiara, modalità scura o segui le impostazioni di sistema.',
    'home.languages.title': 'Lingue Supportate',
    'home.languages.subtitle': 'Disponibile per utenti in tutto il mondo',
    'footer.tagline': 'Registra e Continua a Evolvere',
    'footer.links': 'Collegamenti',
    'footer.privacy': 'Informativa sulla Privacy',
    'footer.terms': 'Termini di Servizio',
    'footer.contact': 'Contatto',
    'footer.contact.title': 'Contattaci',
    'privacy.title': 'Informativa sulla Privacy',
    'privacy.updated': 'Ultimo aggiornamento: 12 ottobre 2025',
    'terms.title': 'Termini di Servizio',
    'terms.updated': 'Ultimo aggiornamento: 12 ottobre 2025',
    'contact.title': 'Contattaci',
    'contact.description': 'Non esitare a contattarci per domande, feedback o segnalazioni di bug su MASCALE',
    'contact.email.title': 'Contatto via Email',
    'contact.language.title': 'Lingua Supportata',
    'contact.language.value': 'Solo giapponese',
    'contact.response.title': 'Risposta',
    'contact.response.value': 'Risponderemo prontamente',

    // Terms Page
    'terms.provider': 'Fornitore: Takuya Atsugi',

    // Article 1
    'terms.article1.title': 'Articolo 1 (Applicazione)',
    'terms.article1.content': 'Questi Termini di Servizio definiscono le condizioni per l\'utilizzo dell\'applicazione per smartphone "MASCALE" (di seguito "l\'App") fornita da Takuya Atsugi (di seguito "noi"). Utilizzando l\'App, si considera che tu abbia accettato questi Termini.',

    // Article 2
    'terms.article2.title': 'Articolo 2 (Contenuto dell\'App)',
    'terms.article2.intro': 'L\'App è un\'applicazione progettata per consentire agli utenti di registrare gli allenamenti (allenamento di forza, cardio, ecc.) e gestire quella storia in formato calendario.',
    'terms.article2.features.title': 'Caratteristiche Principali:',
    'terms.article2.features.1': 'Gestione dei record di allenamento in formato calendario',
    'terms.article2.features.2': 'Registrazione di serie, peso e ripetizioni per ogni esercizio',
    'terms.article2.features.3': 'Cambio di unità di peso (kg/lb)',
    'terms.article2.features.4': 'Visualizzazione della cronologia degli allenamenti',
    'terms.article2.features.5': 'Tutti i dati sono memorizzati localmente sul dispositivo utilizzando il database SQLite',

    // Article 3
    'terms.article3.title': 'Articolo 3 (Fornitura Gratuita e Monetizzazione Futura)',
    'terms.article3.intro': 'L\'App è attualmente fornita gratuitamente. Tuttavia, potremmo aggiungere le seguenti funzionalità di monetizzazione in futuro.',
    'terms.article3.items.1': 'Visualizzazione di annunci: Pubblicità all\'interno dell\'app',
    'terms.article3.items.2': 'Acquisti in-app: Fornire rimozione degli annunci e funzionalità premium (articoli non consumabili, ripristinabili)',
    'terms.article3.outro': 'Se queste funzionalità vengono aggiunte, aggiorneremo questi Termini e l\'Informativa sulla Privacy e avviseremo gli utenti all\'interno dell\'app in anticipo.',

    // Article 4
    'terms.article4.title': 'Articolo 4 (Ambiente di Utilizzo)',
    'terms.article4.intro': 'L\'utilizzo di questa App richiede un dispositivo smartphone compatibile (iOS/Android).',
    'terms.article4.items.1': 'L\'App è progettata per funzionare offline-first e può essere utilizzata senza connessione Internet per le funzionalità di base',
    'terms.article4.items.2': 'Le informazioni di analisi (statistiche di utilizzo anonime) vengono inviate automaticamente a Firebase Analytics quando è disponibile una connessione Internet',
    'terms.article4.items.3': 'Se viene aggiunta in futuro la funzionalità di sincronizzazione cloud, sarà necessaria una connessione Internet',
    'terms.article4.items.4': 'Gli utenti sono responsabili dei costi di configurazione di questi ambienti (tariffe di comunicazione, ecc.)',

    // Article 5
    'terms.article5.title': 'Articolo 5 (Atti Proibiti)',
    'terms.article5.intro': 'I seguenti atti sono proibiti quando si utilizza l\'App.',
    'terms.article5.items.1': 'Atti che violano le leggi o l\'ordine pubblico e la morale',
    'terms.article5.items.2': 'Atti relativi ad attività criminali',
    'terms.article5.items.3': 'Modifica non autorizzata, reverse engineering o decompilazione delle funzionalità dell\'app',
    'terms.article5.items.4': 'Accesso diretto al database dell\'app (SQLite) per manipolare illegalmente i dati',
    'terms.article5.items.5': 'Atti che distruggono o interferiscono con i server o le funzioni di rete che potrebbero essere introdotte in futuro',
    'terms.article5.items.6': 'Atti che potrebbero interferire con le operazioni dell\'app',
    'terms.article5.items.7': 'Raccolta o accumulo di informazioni personali su altri utenti (per aggiunte di funzionalità future)',
    'terms.article5.items.8': 'Accesso non autorizzato o tentativi di farlo',
    'terms.article5.items.9': 'Uso commerciale non autorizzato di questa App',
    'terms.article5.items.10': 'Uso fraudolento di acquisti in-app o abuso di rimborsi (per aggiunte di funzionalità future)',
    'terms.article5.items.11': 'Altri atti che riteniamo inappropriati',

    // Article 6
    'terms.article6.title': 'Articolo 6 (Sospensione della Fornitura dell\'App)',
    'terms.article6.intro': 'Potremmo sospendere o interrompere la fornitura di tutta o parte di questa App senza preavviso agli utenti se determiniamo che esiste una qualsiasi delle seguenti circostanze.',
    'terms.article6.items.1': 'Quando eseguiamo manutenzione o aggiornamenti al sistema dell\'app',
    'terms.article6.items.2': 'Quando la fornitura di questa App diventa difficile a causa di forza maggiore come terremoti, fulmini, incendi, interruzioni di corrente o disastri naturali',
    'terms.article6.items.3': 'Quando determiniamo che la fornitura di questa App è difficile per altri motivi',

    // Article 7
    'terms.article7.title': 'Articolo 7 (Esclusione di Responsabilità)',
    'terms.article7.items.1': 'Questa App è uno strumento per gestire i record di allenamento e non fornisce consigli medici, diagnosi o trattamento. Se hai problemi di salute, consulta un medico o uno specialista.',
    'terms.article7.items.2': 'Non forniamo garanzie riguardo al contenuto, al funzionamento o alla qualità di questa App.',
    'terms.article7.items.3': 'Non accettiamo alcuna responsabilità per eventuali danni derivanti dall\'uso di questa App (inclusi ma non limitati a perdita di dati, guasto del dispositivo o altri danni diretti o indiretti).',
    'terms.article7.items.4': 'Questa App memorizza i dati localmente sul dispositivo dell\'utente utilizzando il database SQLite. Ci sono rischi di perdita di dati dovuti a guasto del dispositivo, smarrimento, aggiornamenti del sistema operativo, malfunzionamenti dell\'app, ecc. Gli utenti devono eseguire il backup dei dati a propria responsabilità secondo necessità.',
    'terms.article7.items.5': 'La versione attuale non fornisce funzionalità di backup cloud. Anche se questa funzionalità viene aggiunta in futuro, non garantiamo l\'integrità o la disponibilità dei dati.',

    // Article 8
    'terms.article8.title': 'Articolo 8 (Modifiche ai Termini)',
    'terms.article8.content': 'Potremmo modificare questi Termini in qualsiasi momento senza preavviso agli utenti quando ritenuto necessario. I Termini rivisti entreranno in vigore quando pubblicati all\'interno di questa App.',

    // Article 9
    'terms.article9.title': 'Articolo 9 (Gestione delle Informazioni Personali)',
    'terms.article9.content': 'La gestione delle informazioni personali in questa App è soggetta all\'Informativa sulla Privacy separata.',

    // Article 10
    'terms.article10.title': 'Articolo 10 (Programma di Affiliazione)',
    'terms.article10.intro': 'L\'App può includere codici di riferimento o link di affiliazione a servizi di terze parti (ad esempio, iHerb) come mezzo per supportare lo sviluppo e la manutenzione dell\'App. Quando gli utenti effettuano acquisti tramite questi link:',
    'terms.article10.items.1': 'Potremmo ricevere una commissione dal servizio di terze parti',
    'terms.article10.items.2': 'Non ci sono costi aggiuntivi per gli utenti',
    'terms.article10.items.3': 'L\'uso di questi codici di riferimento è completamente volontario',

    // Article 11
    'terms.article11.title': 'Articolo 11 (Supporto Multilingue)',
    'terms.article11.intro': 'L\'App supporta le seguenti lingue per l\'interfaccia utente e i documenti legali:',
    'terms.article11.items.1': 'Inglese, Giapponese, Spagnolo, Portoghese, Tedesco, Francese, Cinese (Semplificato), Coreano, Italiano, Indonesiano, Russo, Turco, Olandese, Polacco, Tailandese, Vietnamita, Arabo, Hindi e Persiano (Farsi)',
    'terms.article11.items.2': 'I documenti legali (Termini di Servizio e Informativa sulla Privacy) sono ora disponibili in tutte le 19 lingue',
    'terms.article11.items.3': 'Sebbene ci sforziamo per l\'accuratezza nelle traduzioni, la versione giapponese funge da versione ufficiale',

    // Article 12
    'terms.article12.title': 'Articolo 12 (Supporto)',
    'terms.article12.intro': 'Per richieste riguardanti questa App, contattaci al seguente indirizzo email.',
    'terms.article12.email': 'takuya.atsugi911@gmail.com',
    'terms.article12.language': 'Solo giapponese',

    // Article 13
    'terms.article13.title': 'Articolo 13 (Legge Applicabile e Giurisdizione)',
    'terms.article13.content': 'Questi Termini saranno regolati dalla legge giapponese. In caso di controversie riguardanti questa App, il tribunale con giurisdizione sulla nostra posizione avrà giurisdizione esclusiva.',
  },
  id: {
    'header.privacy': 'Privasi',
    'header.terms': 'Ketentuan',
    'header.contact': 'Kontak',
    'home.hero.badge': 'Aplikasi Catatan Latihan',
    'home.hero.tagline': 'Catat dan Terus Berkembang',
    'home.hero.description': 'Visualisasikan kemajuan Anda dengan catatan\nlatihan yang sederhana dan intuitif',
    'home.hero.download': 'Unduh di App Store',
    'home.features.title': 'Fitur Utama',
    'home.features.subtitle': 'MASCALE mendukung latihan Anda',
    'home.features.calendar.title': 'Catatan Kalender',
    'home.features.calendar.description': 'Lihat riwayat latihan Anda sekilas dalam format kalender. Kelola dengan mudah kapan dan apa yang Anda latih.',
    'home.features.detailed.title': 'Catatan Latihan Terperinci',
    'home.features.detailed.description': 'Catat set, berat, dan repetisi untuk setiap latihan. Volume total dihitung secara otomatis.',
    'home.features.bodypart.title': 'Manajemen Bagian Tubuh',
    'home.features.bodypart.description': 'Atur latihan berdasarkan bagian tubuh seperti dada, bahu, lengan, punggung, kaki, dan perut.',
    'home.features.multilang.title': 'Dukungan 19 Bahasa',
    'home.features.multilang.description': 'Mendukung 19 bahasa termasuk Jepang, Inggris, Spanyol, Cina, dan Korea.',
    'home.features.units.title': 'Pergantian Unit',
    'home.features.units.description': 'Alihkan unit berat antara kilogram (kg) dan pon (lb). Catat dalam unit pilihan Anda.',
    'home.features.darkmode.title': 'Dukungan Mode Gelap',
    'home.features.darkmode.description': 'Pilih antara mode terang, mode gelap, atau ikuti pengaturan sistem.',
    'home.languages.title': 'Bahasa yang Didukung',
    'home.languages.subtitle': 'Tersedia untuk pengguna di seluruh dunia',
    'footer.tagline': 'Catat dan Terus Berkembang',
    'footer.links': 'Tautan',
    'footer.privacy': 'Kebijakan Privasi',
    'footer.terms': 'Ketentuan Layanan',
    'footer.contact': 'Kontak',
    'footer.contact.title': 'Hubungi Kami',
    'privacy.title': 'Kebijakan Privasi',
    'privacy.updated': 'Terakhir diperbarui: 12 Oktober 2025',
    'terms.title': 'Ketentuan Layanan',
    'terms.updated': 'Terakhir diperbarui: 12 Oktober 2025',
    'contact.title': 'Hubungi Kami',
    'contact.description': 'Jangan ragu untuk menghubungi kami dengan pertanyaan, masukan, atau laporan bug tentang MASCALE',
    'contact.email.title': 'Kontak melalui Email',
    'contact.language.title': 'Bahasa yang Didukung',
    'contact.language.value': 'Hanya Jepang',
    'contact.response.title': 'Respons',
    'contact.response.value': 'Kami akan merespons dengan cepat',

    // Terms Page
    'terms.provider': 'Penyedia: Takuya Atsugi',

    // Article 1
    'terms.article1.title': 'Pasal 1 (Penerapan)',
    'terms.article1.content': 'Ketentuan Layanan ini mendefinisikan kondisi untuk menggunakan aplikasi smartphone "MASCALE" (selanjutnya disebut "Aplikasi ini") yang disediakan oleh Takuya Atsugi (selanjutnya disebut "kami"). Dengan menggunakan Aplikasi ini, Anda dianggap telah menyetujui Ketentuan ini.',

    // Article 2
    'terms.article2.title': 'Pasal 2 (Konten Aplikasi)',
    'terms.article2.intro': 'Aplikasi ini adalah aplikasi yang dirancang untuk memungkinkan pengguna mencatat latihan (latihan kekuatan, kardio, dll.) dan mengelola riwayat tersebut dalam format kalender.',
    'terms.article2.features.title': 'Fitur Utama:',
    'terms.article2.features.1': 'Manajemen catatan latihan dalam format kalender',
    'terms.article2.features.2': 'Pencatatan set, berat, dan repetisi untuk setiap latihan',
    'terms.article2.features.3': 'Pergantian unit berat (kg/lb)',
    'terms.article2.features.4': 'Visualisasi riwayat latihan',
    'terms.article2.features.5': 'Semua data disimpan secara lokal di perangkat menggunakan database SQLite',

    // Article 3
    'terms.article3.title': 'Pasal 3 (Penyediaan Gratis dan Monetisasi Masa Depan)',
    'terms.article3.intro': 'Aplikasi ini saat ini disediakan secara gratis. Namun, kami dapat menambahkan fitur monetisasi berikut di masa depan.',
    'terms.article3.items.1': 'Tampilan iklan: Iklan dalam aplikasi',
    'terms.article3.items.2': 'Pembelian dalam aplikasi: Menyediakan penghapusan iklan dan fitur premium (item non-konsumsi, dapat dipulihkan)',
    'terms.article3.outro': 'Jika fitur ini ditambahkan, kami akan memperbarui Ketentuan ini dan Kebijakan Privasi dan memberi tahu pengguna dalam aplikasi sebelumnya.',

    // Article 4
    'terms.article4.title': 'Pasal 4 (Lingkungan Penggunaan)',
    'terms.article4.intro': 'Menggunakan Aplikasi ini memerlukan perangkat smartphone yang kompatibel (iOS/Android).',
    'terms.article4.items.1': 'Aplikasi ini dirancang offline-first dan dapat digunakan tanpa koneksi internet untuk fitur dasar',
    'terms.article4.items.2': 'Informasi analitik (statistik penggunaan anonim) dikirim secara otomatis ke Firebase Analytics ketika koneksi internet tersedia',
    'terms.article4.items.3': 'Jika fungsionalitas sinkronisasi cloud ditambahkan di masa depan, koneksi internet akan diperlukan',
    'terms.article4.items.4': 'Pengguna bertanggung jawab atas biaya pengaturan lingkungan ini (biaya komunikasi, dll.)',

    // Article 5
    'terms.article5.title': 'Pasal 5 (Tindakan Terlarang)',
    'terms.article5.intro': 'Tindakan berikut dilarang saat menggunakan Aplikasi ini.',
    'terms.article5.items.1': 'Tindakan yang melanggar hukum atau ketertiban umum dan moral',
    'terms.article5.items.2': 'Tindakan yang berkaitan dengan aktivitas kriminal',
    'terms.article5.items.3': 'Modifikasi tidak sah, reverse engineering, atau dekompilasi fungsi aplikasi',
    'terms.article5.items.4': 'Akses langsung ke database aplikasi (SQLite) untuk memanipulasi data secara ilegal',
    'terms.article5.items.5': 'Tindakan yang merusak atau mengganggu server atau fungsi jaringan yang mungkin diperkenalkan di masa depan',
    'terms.article5.items.6': 'Tindakan yang mungkin mengganggu operasi aplikasi',
    'terms.article5.items.7': 'Mengumpulkan atau mengakumulasi informasi pribadi tentang pengguna lain (untuk penambahan fitur di masa depan)',
    'terms.article5.items.8': 'Akses tidak sah atau upaya untuk melakukannya',
    'terms.article5.items.9': 'Penggunaan komersial tidak sah dari Aplikasi ini',
    'terms.article5.items.10': 'Penggunaan penipuan pembelian dalam aplikasi atau penyalahgunaan pengembalian dana (untuk penambahan fitur di masa depan)',
    'terms.article5.items.11': 'Tindakan lain yang kami anggap tidak pantas',

    // Article 6
    'terms.article6.title': 'Pasal 6 (Penangguhan Penyediaan Aplikasi)',
    'terms.article6.intro': 'Kami dapat menangguhkan atau menghentikan penyediaan semua atau sebagian dari Aplikasi ini tanpa pemberitahuan sebelumnya kepada pengguna jika kami menentukan ada salah satu dari keadaan berikut.',
    'terms.article6.items.1': 'Saat melakukan pemeliharaan atau pembaruan sistem aplikasi',
    'terms.article6.items.2': 'Ketika penyediaan Aplikasi ini menjadi sulit karena force majeure seperti gempa bumi, petir, kebakaran, pemadaman listrik, atau bencana alam',
    'terms.article6.items.3': 'Ketika kami menentukan bahwa penyediaan Aplikasi ini sulit karena alasan lain',

    // Article 7
    'terms.article7.title': 'Pasal 7 (Penafian)',
    'terms.article7.items.1': 'Aplikasi ini adalah alat untuk mengelola catatan latihan dan tidak memberikan nasihat medis, diagnosis, atau perawatan. Jika Anda memiliki masalah kesehatan, silakan berkonsultasi dengan dokter atau spesialis.',
    'terms.article7.items.2': 'Kami tidak memberikan jaminan mengenai konten, operasi, atau kualitas Aplikasi ini.',
    'terms.article7.items.3': 'Kami tidak menerima tanggung jawab atas kerusakan apa pun yang timbul dari penggunaan Aplikasi ini (termasuk namun tidak terbatas pada kehilangan data, kegagalan perangkat, atau kerusakan langsung atau tidak langsung lainnya).',
    'terms.article7.items.4': 'Aplikasi ini menyimpan data secara lokal di perangkat pengguna menggunakan database SQLite. Ada risiko kehilangan data karena kegagalan perangkat, kehilangan, pembaruan OS, malfungsi aplikasi, dll. Pengguna harus mencadangkan data atas tanggung jawab mereka sendiri sesuai kebutuhan.',
    'terms.article7.items.5': 'Versi saat ini tidak menyediakan fungsionalitas cadangan cloud. Bahkan jika fungsionalitas ini ditambahkan di masa depan, kami tidak menjamin integritas atau ketersediaan data.',

    // Article 8
    'terms.article8.title': 'Pasal 8 (Perubahan Ketentuan)',
    'terms.article8.content': 'Kami dapat mengubah Ketentuan ini kapan saja tanpa pemberitahuan kepada pengguna ketika dianggap perlu. Ketentuan yang direvisi akan berlaku saat diposting dalam Aplikasi ini.',

    // Article 9
    'terms.article9.title': 'Pasal 9 (Penanganan Informasi Pribadi)',
    'terms.article9.content': 'Penanganan informasi pribadi dalam Aplikasi ini tunduk pada Kebijakan Privasi yang terpisah.',

    // Article 10
    'terms.article10.title': 'Pasal 10 (Program Afiliasi)',
    'terms.article10.intro': 'Aplikasi ini dapat mencakup kode rujukan atau tautan afiliasi ke layanan pihak ketiga (misalnya, iHerb) sebagai cara untuk mendukung pengembangan dan pemeliharaan Aplikasi. Ketika pengguna melakukan pembelian melalui tautan ini:',
    'terms.article10.items.1': 'Kami mungkin menerima komisi dari layanan pihak ketiga',
    'terms.article10.items.2': 'Tidak ada biaya tambahan untuk pengguna',
    'terms.article10.items.3': 'Penggunaan kode rujukan ini sepenuhnya bersifat sukarela',

    // Article 11
    'terms.article11.title': 'Pasal 11 (Dukungan Multibahasa)',
    'terms.article11.intro': 'Aplikasi ini mendukung bahasa berikut untuk antarmuka pengguna dan dokumen hukum:',
    'terms.article11.items.1': 'Bahasa Inggris, Jepang, Spanyol, Portugis, Jerman, Prancis, Cina (Disederhanakan), Korea, Italia, Indonesia, Rusia, Turki, Belanda, Polandia, Thailand, Vietnam, Arab, Hindi, dan Persia (Farsi)',
    'terms.article11.items.2': 'Dokumen hukum (Ketentuan Layanan dan Kebijakan Privasi) sekarang tersedia dalam semua 19 bahasa',
    'terms.article11.items.3': 'Sementara kami berusaha untuk akurasi dalam terjemahan, versi Jepang berfungsi sebagai versi resmi',

    // Article 12
    'terms.article12.title': 'Pasal 12 (Dukungan)',
    'terms.article12.intro': 'Untuk pertanyaan mengenai Aplikasi ini, silakan hubungi kami di alamat email berikut.',
    'terms.article12.email': 'takuya.atsugi911@gmail.com',
    'terms.article12.language': 'Hanya bahasa Jepang',

    // Article 13
    'terms.article13.title': 'Pasal 13 (Hukum yang Mengatur dan Yurisdiksi)',
    'terms.article13.content': 'Ketentuan ini akan diatur oleh hukum Jepang. Dalam hal terjadi perselisihan mengenai Aplikasi ini, pengadilan dengan yurisdiksi atas lokasi kami akan memiliki yurisdiksi eksklusif.',
  },
  ru: {
    'header.privacy': 'Конфиденциальность',
    'header.terms': 'Условия',
    'header.contact': 'Контакт',
    'home.hero.badge': 'Приложение для записи тренировок',
    'home.hero.tagline': 'Записывайте и продолжайте развиваться',
    'home.hero.description': 'Визуализируйте свой прогресс с помощью простых и\nинтуитивных записей тренировок',
    'home.hero.download': 'Загрузить в App Store',
    'home.features.title': 'Основные функции',
    'home.features.subtitle': 'MASCALE поддерживает ваши тренировки',
    'home.features.calendar.title': 'Календарные записи',
    'home.features.calendar.description': 'Просматривайте историю тренировок с первого взгляда в формате календаря. Легко управляйте тем, когда и что вы тренировали.',
    'home.features.detailed.title': 'Подробные записи тренировок',
    'home.features.detailed.description': 'Записывайте подходы, вес и повторения для каждого упражнения. Общий объем рассчитывается автоматически.',
    'home.features.bodypart.title': 'Управление частями тела',
    'home.features.bodypart.description': 'Организуйте упражнения по частям тела, таким как грудь, плечи, руки, спина, ноги и пресс.',
    'home.features.multilang.title': 'Поддержка 19 языков',
    'home.features.multilang.description': 'Поддерживает 19 языков, включая японский, английский, испанский, китайский и корейский.',
    'home.features.units.title': 'Переключение единиц',
    'home.features.units.description': 'Переключайте единицы веса между килограммами (кг) и фунтами (фунты). Записывайте в предпочитаемых единицах.',
    'home.features.darkmode.title': 'Поддержка темного режима',
    'home.features.darkmode.description': 'Выберите светлый режим, темный режим или следуйте системным настройкам.',
    'home.languages.title': 'Поддерживаемые языки',
    'home.languages.subtitle': 'Доступно для пользователей по всему миру',
    'footer.tagline': 'Записывайте и продолжайте развиваться',
    'footer.links': 'Ссылки',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия обслуживания',
    'footer.contact': 'Контакт',
    'footer.contact.title': 'Свяжитесь с нами',
    'privacy.title': 'Политика конфиденциальности',
    'privacy.updated': 'Последнее обновление: 12 октября 2025 г.',
    'terms.title': 'Условия обслуживания',
    'terms.updated': 'Последнее обновление: 12 октября 2025 г.',
    'contact.title': 'Свяжитесь с нами',
    'contact.description': 'Не стесняйтесь обращаться к нам с любыми вопросами, отзывами или отчетами об ошибках о MASCALE',
    'contact.email.title': 'Контакт по электронной почте',
    'contact.language.title': 'Поддерживаемый язык',
    'contact.language.value': 'Только японский',
    'contact.response.title': 'Ответ',
    'contact.response.value': 'Мы ответим быстро',

    // Terms Page
    'terms.provider': 'Поставщик: Takuya Atsugi',

    // Article 1
    'terms.article1.title': 'Статья 1 (Применение)',
    'terms.article1.content': 'Настоящие Условия использования определяют условия использования приложения для смартфонов "MASCALE" (далее - "Приложение"), предоставляемого Takuya Atsugi (далее - "мы"). Используя это Приложение, вы считаетесь согласившимся с настоящими Условиями.',

    // Article 2
    'terms.article2.title': 'Статья 2 (Содержание приложения)',
    'terms.article2.intro': 'Данное Приложение предназначено для записи пользователями тренировок (силовые тренировки, кардио и т.д.) и управления этой историей в формате календаря.',
    'terms.article2.features.title': 'Основные возможности:',
    'terms.article2.features.1': 'Управление записями тренировок в формате календаря',
    'terms.article2.features.2': 'Запись подходов, веса и повторений для каждого упражнения',
    'terms.article2.features.3': 'Переключение единиц веса (кг/фунт)',
    'terms.article2.features.4': 'Визуализация истории тренировок',
    'terms.article2.features.5': 'Все данные хранятся локально на устройстве с использованием базы данных SQLite',

    // Article 3
    'terms.article3.title': 'Статья 3 (Бесплатное предоставление и будущая монетизация)',
    'terms.article3.intro': 'В настоящее время Приложение предоставляется бесплатно. Однако в будущем мы можем добавить следующие функции монетизации.',
    'terms.article3.items.1': 'Показ рекламы: реклама в приложении',
    'terms.article3.items.2': 'Покупки в приложении: предоставление удаления рекламы и премиум-функций (непотребляемые товары, восстанавливаемые)',
    'terms.article3.outro': 'Если эти функции будут добавлены, мы обновим настоящие Условия и Политику конфиденциальности и заранее уведомим пользователей в приложении.',

    // Article 4
    'terms.article4.title': 'Статья 4 (Среда использования)',
    'terms.article4.intro': 'Для использования данного Приложения требуется совместимое устройство смартфона (iOS/Android).',
    'terms.article4.items.1': 'Приложение спроектировано как работающее в автономном режиме и может использоваться без подключения к Интернету для базовых функций',
    'terms.article4.items.2': 'Аналитическая информация (анонимная статистика использования) автоматически отправляется в Firebase Analytics при наличии подключения к Интернету',
    'terms.article4.items.3': 'Если в будущем будет добавлена функция облачной синхронизации, потребуется подключение к Интернету',
    'terms.article4.items.4': 'Пользователи несут ответственность за расходы на настройку этих сред (плата за связь и т.д.)',

    // Article 5
    'terms.article5.title': 'Статья 5 (Запрещенные действия)',
    'terms.article5.intro': 'При использовании данного Приложения запрещены следующие действия.',
    'terms.article5.items.1': 'Действия, нарушающие законы или общественный порядок и нравственность',
    'terms.article5.items.2': 'Действия, связанные с преступной деятельностью',
    'terms.article5.items.3': 'Несанкционированная модификация, обратная разработка или декомпиляция функций приложения',
    'terms.article5.items.4': 'Прямой доступ к базе данных приложения (SQLite) для незаконного манипулирования данными',
    'terms.article5.items.5': 'Действия, которые уничтожают или мешают работе серверов или сетевых функций, которые могут быть введены в будущем',
    'terms.article5.items.6': 'Действия, которые могут помешать работе приложения',
    'terms.article5.items.7': 'Сбор или накопление личной информации о других пользователях (для будущих дополнений функций)',
    'terms.article5.items.8': 'Несанкционированный доступ или попытки его осуществления',
    'terms.article5.items.9': 'Несанкционированное коммерческое использование данного Приложения',
    'terms.article5.items.10': 'Мошенническое использование покупок в приложении или злоупотребление возвратами (для будущих дополнений функций)',
    'terms.article5.items.11': 'Другие действия, которые мы считаем неуместными',

    // Article 6
    'terms.article6.title': 'Статья 6 (Приостановка предоставления приложения)',
    'terms.article6.intro': 'Мы можем приостановить или прервать предоставление всего или части данного Приложения без предварительного уведомления пользователей, если мы определим, что существуют любые из следующих обстоятельств.',
    'terms.article6.items.1': 'При проведении технического обслуживания или обновлений системы приложения',
    'terms.article6.items.2': 'Когда предоставление данного Приложения становится затруднительным из-за форс-мажорных обстоятельств, таких как землетрясения, молния, пожары, отключения электроэнергии или стихийные бедствия',
    'terms.article6.items.3': 'Когда мы определяем, что предоставление данного Приложения затруднительно по другим причинам',

    // Article 7
    'terms.article7.title': 'Статья 7 (Отказ от ответственности)',
    'terms.article7.items.1': 'Данное Приложение является инструментом для управления записями тренировок и не предоставляет медицинских консультаций, диагностики или лечения. Если у вас есть проблемы со здоровьем, пожалуйста, проконсультируйтесь с врачом или специалистом.',
    'terms.article7.items.2': 'Мы не даем никаких гарантий относительно содержания, работы или качества данного Приложения.',
    'terms.article7.items.3': 'Мы не несем ответственности за любой ущерб, возникающий в результате использования данного Приложения (включая, но не ограничиваясь потерей данных, отказом устройства или другим прямым или косвенным ущербом).',
    'terms.article7.items.4': 'Данное Приложение хранит данные локально на устройстве пользователя с использованием базы данных SQLite. Существуют риски потери данных из-за сбоя устройства, потери, обновлений ОС, неисправности приложения и т.д. Пользователи должны делать резервные копии данных на свой страх и риск по мере необходимости.',
    'terms.article7.items.5': 'Текущая версия не предоставляет функции облачного резервного копирования. Даже если эта функция будет добавлена в будущем, мы не гарантируем целостность или доступность данных.',

    // Article 8
    'terms.article8.title': 'Статья 8 (Изменения в Условиях)',
    'terms.article8.content': 'Мы можем изменить настоящие Условия в любое время без уведомления пользователей, когда это будет сочтено необходимым. Пересмотренные Условия вступают в силу после публикации в данном Приложении.',

    // Article 9
    'terms.article9.title': 'Статья 9 (Обработка личной информации)',
    'terms.article9.content': 'Обработка личной информации в данном Приложении регулируется отдельной Политикой конфиденциальности.',

    // Article 10
    'terms.article10.title': 'Статья 10 (Партнерская программа)',
    'terms.article10.intro': 'Приложение может включать реферальные коды или партнерские ссылки на сторонние сервисы (например, iHerb) в качестве средства поддержки разработки и обслуживания Приложения. Когда пользователи совершают покупки по этим ссылкам:',
    'terms.article10.items.1': 'Мы можем получать комиссию от стороннего сервиса',
    'terms.article10.items.2': 'Для пользователей нет дополнительных расходов',
    'terms.article10.items.3': 'Использование этих реферальных кодов полностью добровольное',

    // Article 11
    'terms.article11.title': 'Статья 11 (Многоязычная поддержка)',
    'terms.article11.intro': 'Приложение поддерживает следующие языки для пользовательского интерфейса и юридических документов:',
    'terms.article11.items.1': 'Английский, японский, испанский, португальский, немецкий, французский, китайский (упрощенный), корейский, итальянский, индонезийский, русский, турецкий, голландский, польский, тайский, вьетнамский, арабский, хинди и персидский (фарси)',
    'terms.article11.items.2': 'Юридические документы (Условия использования и Политика конфиденциальности) теперь доступны на всех 19 языках',
    'terms.article11.items.3': 'Хотя мы стремимся к точности переводов, японская версия служит официальной версией',

    // Article 12
    'terms.article12.title': 'Статья 12 (Поддержка)',
    'terms.article12.intro': 'По вопросам, касающимся данного Приложения, свяжитесь с нами по следующему адресу электронной почты.',
    'terms.article12.email': 'takuya.atsugi911@gmail.com',
    'terms.article12.language': 'Только японский язык',

    // Article 13
    'terms.article13.title': 'Статья 13 (Применимое право и юрисдикция)',
    'terms.article13.content': 'Настоящие Условия регулируются законодательством Японии. В случае возникновения споров относительно данного Приложения исключительную юрисдикцию имеет суд с юрисдикцией по нашему местонахождению.',
  },
  tr: {
    'header.privacy': 'Gizlilik',
    'header.terms': 'Şartlar',
    'header.contact': 'İletişim',
    'home.hero.badge': 'Antrenman Kaydı Uygulaması',
    'home.hero.tagline': 'Kaydet ve Gelişmeye Devam Et',
    'home.hero.description': 'Basit ve sezgisel antrenman kayıtlarıyla\nilerlemenizi görselleştirin',
    'home.hero.download': 'App Store\'dan İndirin',
    'home.features.title': 'Ana Özellikler',
    'home.features.subtitle': 'MASCALE antrenmanınızı destekler',
    'home.features.calendar.title': 'Takvim Kayıtları',
    'home.features.calendar.description': 'Antrenman geçmişinizi takvim formatında bir bakışta görün. Ne zaman ve ne antrenman yaptığınızı kolayca yönetin.',
    'home.features.detailed.title': 'Detaylı Antrenman Kayıtları',
    'home.features.detailed.description': 'Her egzersiz için set, ağırlık ve tekrar sayısını kaydedin. Toplam hacim otomatik olarak hesaplanır.',
    'home.features.bodypart.title': 'Vücut Bölümü Yönetimi',
    'home.features.bodypart.description': 'Göğüs, omuzlar, kollar, sırt, bacaklar ve karın gibi vücut bölümlerine göre egzersizleri düzenleyin.',
    'home.features.multilang.title': '19 Dil Desteği',
    'home.features.multilang.description': 'Japonca, İngilizce, İspanyolca, Çince ve Korece dahil 19 dili destekler.',
    'home.features.units.title': 'Birim Değiştirme',
    'home.features.units.description': 'Ağırlık birimlerini kilogram (kg) ve pound (lb) arasında değiştirin. Tercih ettiğiniz birimde kaydedin.',
    'home.features.darkmode.title': 'Karanlık Mod Desteği',
    'home.features.darkmode.description': 'Açık mod, karanlık mod arasından seçim yapın veya sistem ayarlarını izleyin.',
    'home.languages.title': 'Desteklenen Diller',
    'home.languages.subtitle': 'Dünya çapında kullanıcılar için kullanılabilir',
    'footer.tagline': 'Kaydet ve Gelişmeye Devam Et',
    'footer.links': 'Bağlantılar',
    'footer.privacy': 'Gizlilik Politikası',
    'footer.terms': 'Hizmet Şartları',
    'footer.contact': 'İletişim',
    'footer.contact.title': 'Bize Ulaşın',
    'privacy.title': 'Gizlilik Politikası',
    'privacy.updated': 'Son güncelleme: 12 Ekim 2025',
    'terms.title': 'Hizmet Şartları',
    'terms.updated': 'Son güncelleme: 12 Ekim 2025',
    'contact.title': 'Bize Ulaşın',
    'contact.description': 'MASCALE hakkında sorularınız, geri bildirimleriniz veya hata raporlarınız için bize ulaşmaktan çekinmeyin',
    'contact.email.title': 'E-posta ile İletişim',
    'contact.language.title': 'Desteklenen Dil',
    'contact.language.value': 'Sadece Japonca',
    'contact.response.title': 'Yanıt',
    'contact.response.value': 'Hızlı bir şekilde yanıt vereceğiz',

    // Terms Page
    'terms.provider': 'Sağlayıcı: Takuya Atsugi',

    // Article 1
    'terms.article1.title': 'Madde 1 (Uygulama)',
    'terms.article1.content': 'Bu Hizmet Şartları, Takuya Atsugi (bundan böyle "biz" olarak anılacaktır) tarafından sağlanan "MASCALE" akıllı telefon uygulamasını (bundan böyle "bu Uygulama" olarak anılacaktır) kullanma koşullarını tanımlar. Bu Uygulamayı kullanarak, bu Şartları kabul etmiş sayılırsınız.',

    // Article 2
    'terms.article2.title': 'Madde 2 (Uygulama İçeriği)',
    'terms.article2.intro': 'Bu Uygulama, kullanıcıların antrenman (güç antrenmanı, kardio vb.) kaydetmesine ve bu geçmişi takvim formatında yönetmesine olanak tanımak için tasarlanmış bir uygulamadır.',
    'terms.article2.features.title': 'Ana Özellikler:',
    'terms.article2.features.1': 'Takvim formatında antrenman kaydı yönetimi',
    'terms.article2.features.2': 'Her egzersiz için set, ağırlık ve tekrar sayısının kaydedilmesi',
    'terms.article2.features.3': 'Ağırlık birimi değiştirme (kg/lb)',
    'terms.article2.features.4': 'Antrenman geçmişinin görselleştirilmesi',
    'terms.article2.features.5': 'Tüm veriler SQLite veritabanı kullanılarak cihazda yerel olarak saklanır',

    // Article 3
    'terms.article3.title': 'Madde 3 (Ücretsiz Sağlama ve Gelecekteki Monetizasyon)',
    'terms.article3.intro': 'Bu Uygulama şu anda ücretsiz olarak sağlanmaktadır. Ancak, gelecekte aşağıdaki monetizasyon özelliklerini ekleyebiliriz.',
    'terms.article3.items.1': 'Reklam gösterimi: Uygulama içi reklamcılık',
    'terms.article3.items.2': 'Uygulama içi satın alımlar: Reklam kaldırma ve premium özellikler sağlama (tüketilemeyen öğeler, geri yüklenebilir)',
    'terms.article3.outro': 'Bu özellikler eklenirse, bu Şartları ve Gizlilik Politikasını güncelleyeceğiz ve kullanıcıları uygulama içinde önceden bilgilendireceğiz.',

    // Article 4
    'terms.article4.title': 'Madde 4 (Kullanım Ortamı)',
    'terms.article4.intro': 'Bu Uygulamayı kullanmak için uyumlu bir akıllı telefon cihazı (iOS/Android) gerekir.',
    'terms.article4.items.1': 'Bu Uygulama çevrimdışı öncelikli olarak tasarlanmıştır ve temel özellikler için internet bağlantısı olmadan kullanılabilir',
    'terms.article4.items.2': 'Analitik bilgiler (anonim kullanım istatistikleri) internet bağlantısı mevcut olduğunda Firebase Analytics\'e otomatik olarak gönderilir',
    'terms.article4.items.3': 'Gelecekte bulut senkronizasyon işlevselliği eklenirse, internet bağlantısı gerekli olacaktır',
    'terms.article4.items.4': 'Kullanıcılar bu ortamları kurmak için gerekli maliyetlerden (iletişim ücretleri vb.) sorumludur',

    // Article 5
    'terms.article5.title': 'Madde 5 (Yasaklanan Eylemler)',
    'terms.article5.intro': 'Bu Uygulamayı kullanırken aşağıdaki eylemler yasaktır.',
    'terms.article5.items.1': 'Yasaları veya kamu düzenini ve ahlakını ihlal eden eylemler',
    'terms.article5.items.2': 'Suç faaliyetleriyle ilgili eylemler',
    'terms.article5.items.3': 'Uygulama işlevlerinin yetkisiz değiştirilmesi, tersine mühendislik veya kaynak kodlarının çıkarılması',
    'terms.article5.items.4': 'Verileri yasadışı olarak manipüle etmek için uygulamanın veritabanına (SQLite) doğrudan erişim',
    'terms.article5.items.5': 'Gelecekte tanıtılabilecek sunucuları veya ağ işlevlerini tahrip eden veya bunlara müdahale eden eylemler',
    'terms.article5.items.6': 'Uygulama işlemlerine müdahale edebilecek eylemler',
    'terms.article5.items.7': 'Diğer kullanıcılar hakkında kişisel bilgi toplama veya biriktirme (gelecekteki özellik eklemeleri için)',
    'terms.article5.items.8': 'Yetkisiz erişim veya bunu yapma girişimleri',
    'terms.article5.items.9': 'Bu Uygulamanın yetkisiz ticari kullanımı',
    'terms.article5.items.10': 'Uygulama içi satın alımların hileli kullanımı veya geri ödemelerin kötüye kullanılması (gelecekteki özellik eklemeleri için)',
    'terms.article5.items.11': 'Uygunsuz olduğunu düşündüğümüz diğer eylemler',

    // Article 6
    'terms.article6.title': 'Madde 6 (Uygulama Sağlamanın Askıya Alınması)',
    'terms.article6.intro': 'Aşağıdaki koşullardan herhangi birinin mevcut olduğunu belirlersek, kullanıcılara önceden haber vermeksizin bu Uygulamanın tamamını veya bir kısmını askıya alabilir veya kesintiye uğratabiliriz.',
    'terms.article6.items.1': 'Uygulama sistemi için bakım veya güncellemeler yapılırken',
    'terms.article6.items.2': 'Bu Uygulamanın sağlanması depremler, yıldırım, yangınlar, elektrik kesintileri veya doğal afetler gibi mücbir sebeplerden dolayı zorlaştığında',
    'terms.article6.items.3': 'Bu Uygulamanın sağlanmasının diğer nedenlerle zor olduğunu belirlediğimizde',

    // Article 7
    'terms.article7.title': 'Madde 7 (Sorumluluk Reddi)',
    'terms.article7.items.1': 'Bu Uygulama, antrenman kayıtlarını yönetmek için bir araçtır ve tıbbi tavsiye, teşhis veya tedavi sağlamaz. Sağlık sorunlarınız varsa, lütfen bir doktor veya uzmanla görüşün.',
    'terms.article7.items.2': 'Bu Uygulamanın içeriği, çalışması veya kalitesi hakkında herhangi bir garanti vermiyoruz.',
    'terms.article7.items.3': 'Bu Uygulamanın kullanımından kaynaklanan herhangi bir zarardan (veri kaybı, cihaz arızası veya diğer doğrudan veya dolaylı zararlar dahil ancak bunlarla sınırlı olmamak üzere) sorumluluk kabul etmiyoruz.',
    'terms.article7.items.4': 'Bu Uygulama, SQLite veritabanını kullanarak verileri kullanıcının cihazında yerel olarak saklar. Cihaz arızası, kayıp, işletim sistemi güncellemeleri, uygulama arızaları vb. nedeniyle veri kaybı riskleri vardır. Kullanıcılar gerektiğinde verilerini kendi sorumluluklarında yedeklemelidir.',
    'terms.article7.items.5': 'Mevcut sürüm bulut yedekleme işlevselliği sağlamaz. Bu işlevsellik gelecekte eklenirse bile, veri bütünlüğünü veya kullanılabilirliğini garanti etmiyoruz.',

    // Article 8
    'terms.article8.title': 'Madde 8 (Şartlarda Değişiklikler)',
    'terms.article8.content': 'Gerekli olduğunu düşündüğümüzde, kullanıcılara haber vermeksizin bu Şartları istediğimiz zaman değiştirebiliriz. Revize edilen Şartlar, bu Uygulama içinde yayınlandığında yürürlüğe girecektir.',

    // Article 9
    'terms.article9.title': 'Madde 9 (Kişisel Bilgilerin İşlenmesi)',
    'terms.article9.content': 'Bu Uygulamadaki kişisel bilgilerin işlenmesi, ayrı Gizlilik Politikasına tabidir.',

    // Article 10
    'terms.article10.title': 'Madde 10 (Ortaklık Programı)',
    'terms.article10.intro': 'Uygulama, Uygulamanın geliştirilmesini ve bakımını desteklemek için üçüncü taraf hizmetlere (örneğin, iHerb) yönlendirme kodları veya ortaklık bağlantıları içerebilir. Kullanıcılar bu bağlantılar üzerinden alışveriş yaptığında:',
    'terms.article10.items.1': 'Üçüncü taraf hizmetten komisyon alabiliriz',
    'terms.article10.items.2': 'Kullanıcılar için ek maliyet yoktur',
    'terms.article10.items.3': 'Bu yönlendirme kodlarının kullanımı tamamen gönüllüdür',

    // Article 11
    'terms.article11.title': 'Madde 11 (Çok Dilli Destek)',
    'terms.article11.intro': 'Uygulama, kullanıcı arayüzü ve yasal belgeler için aşağıdaki dilleri destekler:',
    'terms.article11.items.1': 'İngilizce, Japonca, İspanyolca, Portekizce, Almanca, Fransızca, Çince (Basitleştirilmiş), Korece, İtalyanca, Endonezce, Rusça, Türkçe, Hollandaca, Lehçe, Tayca, Vietnamca, Arapça, Hintçe ve Farsça (Farsi)',
    'terms.article11.items.2': 'Yasal belgeler (Hizmet Şartları ve Gizlilik Politikası) artık tüm 19 dilde mevcuttur',
    'terms.article11.items.3': 'Çevirilerde doğruluk için çaba göstersek de, Japonca sürüm resmi sürüm olarak hizmet eder',

    // Article 12
    'terms.article12.title': 'Madde 12 (Destek)',
    'terms.article12.intro': 'Bu Uygulama ile ilgili sorularınız için lütfen aşağıdaki e-posta adresinden bize ulaşın.',
    'terms.article12.email': 'takuya.atsugi911@gmail.com',
    'terms.article12.language': 'Sadece Japonca',

    // Article 13
    'terms.article13.title': 'Madde 13 (Geçerli Hukuk ve Yargı Yetkisi)',
    'terms.article13.content': 'Bu Şartlar Japon hukuku tarafından yönetilecektir. Bu Uygulama ile ilgili herhangi bir anlaşmazlık durumunda, konumumuz üzerinde yargı yetkisine sahip mahkeme münhasır yargı yetkisine sahip olacaktır.',
  },
  nl: {
    'header.privacy': 'Privacy',
    'header.terms': 'Voorwaarden',
    'header.contact': 'Contact',
    'home.hero.badge': 'Trainingslog App',
    'home.hero.tagline': 'Registreer en Blijf Evolueren',
    'home.hero.description': 'Visualiseer je voortgang met eenvoudige en\nintuïtieve trainingsregistraties',
    'home.hero.download': 'Download op de App Store',
    'home.features.title': 'Belangrijkste Functies',
    'home.features.subtitle': 'MASCALE ondersteunt je training',
    'home.features.calendar.title': 'Kalenderregistraties',
    'home.features.calendar.description': 'Bekijk je trainingsgeschiedenis in één oogopslag in kalenderformaat. Beheer eenvoudig wanneer en wat je hebt getraind.',
    'home.features.detailed.title': 'Gedetailleerde Trainingsregistraties',
    'home.features.detailed.description': 'Registreer sets, gewicht en herhalingen voor elke oefening. Totaal volume wordt automatisch berekend.',
    'home.features.bodypart.title': 'Lichaamsdeel Beheer',
    'home.features.bodypart.description': 'Organiseer oefeningen per lichaamsdeel zoals borst, schouders, armen, rug, benen en buik.',
    'home.features.multilang.title': 'Ondersteuning voor 19 Talen',
    'home.features.multilang.description': 'Ondersteunt 19 talen waaronder Japans, Engels, Spaans, Chinees en Koreaans.',
    'home.features.units.title': 'Eenheid Wisselen',
    'home.features.units.description': 'Wissel gewichtseenheden tussen kilogrammen (kg) en ponden (lb). Registreer in je voorkeursunit.',
    'home.features.darkmode.title': 'Donkere Modus Ondersteuning',
    'home.features.darkmode.description': 'Kies tussen lichte modus, donkere modus of volg systeeminstellingen.',
    'home.languages.title': 'Ondersteunde Talen',
    'home.languages.subtitle': 'Beschikbaar voor gebruikers wereldwijd',
    'footer.tagline': 'Registreer en Blijf Evolueren',
    'footer.links': 'Links',
    'footer.privacy': 'Privacybeleid',
    'footer.terms': 'Servicevoorwaarden',
    'footer.contact': 'Contact',
    'footer.contact.title': 'Neem Contact Op',
    'privacy.title': 'Privacybeleid',
    'privacy.updated': 'Laatst bijgewerkt: 12 oktober 2025',
    'terms.title': 'Servicevoorwaarden',
    'terms.updated': 'Laatst bijgewerkt: 12 oktober 2025',
    'contact.title': 'Neem Contact Op',
    'contact.description': 'Neem gerust contact met ons op met vragen, feedback of bugrapporten over MASCALE',
    'contact.email.title': 'Contact via E-mail',
    'contact.language.title': 'Ondersteunde Taal',
    'contact.language.value': 'Alleen Japans',
    'contact.response.title': 'Reactie',
    'contact.response.value': 'We zullen snel reageren',

    // Terms Page
    'terms.provider': 'Provider: Takuya Atsugi',

    // Article 1
    'terms.article1.title': 'Artikel 1 (Toepassing)',
    'terms.article1.content': 'Deze Servicevoorwaarden definiëren de voorwaarden voor het gebruik van de smartphone-applicatie "MASCALE" (hierna "deze App" genoemd) die wordt aangeboden door Takuya Atsugi (hierna "wij" genoemd). Door deze App te gebruiken, wordt u geacht deze Voorwaarden te hebben geaccepteerd.',

    // Article 2
    'terms.article2.title': 'Artikel 2 (App-inhoud)',
    'terms.article2.intro': 'Deze App is een applicatie die is ontworpen om gebruikers in staat te stellen trainingen (krachttraining, cardio, enz.) te registreren en die geschiedenis in kalenderformaat te beheren.',
    'terms.article2.features.title': 'Hoofdkenmerken:',
    'terms.article2.features.1': 'Beheer van trainingsrecords in kalenderformaat',
    'terms.article2.features.2': 'Registratie van sets, gewicht en herhalingen voor elke oefening',
    'terms.article2.features.3': 'Wisselen van gewichtseenheden (kg/lb)',
    'terms.article2.features.4': 'Visualisatie van trainingsgeschiedenis',
    'terms.article2.features.5': 'Alle gegevens worden lokaal op het apparaat opgeslagen met behulp van SQLite-database',

    // Article 3
    'terms.article3.title': 'Artikel 3 (Gratis Verstrekking en Toekomstige Monetisatie)',
    'terms.article3.intro': 'Deze App wordt momenteel gratis aangeboden. We kunnen echter in de toekomst de volgende monetisatiefuncties toevoegen.',
    'terms.article3.items.1': 'Advertentieweergave: In-app advertenties',
    'terms.article3.items.2': 'In-app aankopen: Het aanbieden van advertentieverwijdering en premium functies (niet-verbruikbare items, herstelbaar)',
    'terms.article3.outro': 'Als deze functies worden toegevoegd, zullen we deze Voorwaarden en het Privacybeleid bijwerken en gebruikers vooraf in de app informeren.',

    // Article 4
    'terms.article4.title': 'Artikel 4 (Gebruiksomgeving)',
    'terms.article4.intro': 'Het gebruik van deze App vereist een compatibel smartphone-apparaat (iOS/Android).',
    'terms.article4.items.1': 'Deze App is ontworpen als offline-first en kan worden gebruikt zonder internetverbinding voor basisfuncties',
    'terms.article4.items.2': 'Analytics-informatie (anonieme gebruiksstatistieken) wordt automatisch naar Firebase Analytics verzonden wanneer een internetverbinding beschikbaar is',
    'terms.article4.items.3': 'Als in de toekomst cloud-synchronisatiefunctionaliteit wordt toegevoegd, is een internetverbinding vereist',
    'terms.article4.items.4': 'Gebruikers zijn verantwoordelijk voor de kosten van het opzetten van deze omgevingen (communicatiekosten, enz.)',

    // Article 5
    'terms.article5.title': 'Artikel 5 (Verboden Handelingen)',
    'terms.article5.intro': 'De volgende handelingen zijn verboden bij het gebruik van deze App.',
    'terms.article5.items.1': 'Handelingen die wetten of openbare orde en goede zeden schenden',
    'terms.article5.items.2': 'Handelingen met betrekking tot criminele activiteiten',
    'terms.article5.items.3': 'Ongeautoriseerde wijziging, reverse engineering of decompilatie van app-functies',
    'terms.article5.items.4': 'Directe toegang tot de database van de app (SQLite) om gegevens illegaal te manipuleren',
    'terms.article5.items.5': 'Handelingen die servers of netwerkfuncties die in de toekomst kunnen worden geïntroduceerd, vernietigen of verstoren',
    'terms.article5.items.6': 'Handelingen die waarschijnlijk de werking van de app verstoren',
    'terms.article5.items.7': 'Het verzamelen of accumuleren van persoonlijke informatie over andere gebruikers (voor toekomstige functies)',
    'terms.article5.items.8': 'Ongeautoriseerde toegang of pogingen daartoe',
    'terms.article5.items.9': 'Ongeautoriseerd commercieel gebruik van deze App',
    'terms.article5.items.10': 'Frauduleus gebruik van in-app aankopen of misbruik van terugbetalingen (voor toekomstige functies)',
    'terms.article5.items.11': 'Andere handelingen die wij ongepast achten',

    // Article 6
    'terms.article6.title': 'Artikel 6 (Opschorting van App-verstrekking)',
    'terms.article6.intro': 'We kunnen de verstrekking van deze App geheel of gedeeltelijk opschorten of onderbreken zonder voorafgaande kennisgeving aan gebruikers als we vaststellen dat een van de volgende omstandigheden bestaat.',
    'terms.article6.items.1': 'Bij het uitvoeren van onderhoud of updates aan het app-systeem',
    'terms.article6.items.2': 'Wanneer de verstrekking van deze App moeilijk wordt vanwege overmacht zoals aardbevingen, bliksem, branden, stroomstoringen of natuurrampen',
    'terms.article6.items.3': 'Wanneer we vaststellen dat de verstrekking van deze App om andere redenen moeilijk is',

    // Article 7
    'terms.article7.title': 'Artikel 7 (Disclaimer)',
    'terms.article7.items.1': 'Deze App is een hulpmiddel voor het beheren van trainingsrecords en biedt geen medisch advies, diagnose of behandeling. Als u gezondheidsproblemen heeft, raadpleeg dan een arts of specialist.',
    'terms.article7.items.2': 'We geven geen garanties met betrekking tot de inhoud, werking of kwaliteit van deze App.',
    'terms.article7.items.3': 'We aanvaarden geen verantwoordelijkheid voor schade die voortvloeit uit het gebruik van deze App (inclusief maar niet beperkt tot gegevensverlies, apparaatfalen of andere directe of indirecte schade).',
    'terms.article7.items.4': 'Deze App slaat gegevens lokaal op op het apparaat van de gebruiker met behulp van SQLite-database. Er zijn risico\'s van gegevensverlies als gevolg van apparaatfalen, verlies, OS-updates, app-storingen, enz. Gebruikers moeten naar eigen verantwoordelijkheid indien nodig een back-up maken van gegevens.',
    'terms.article7.items.5': 'De huidige versie biedt geen cloud-backupfunctionaliteit. Zelfs als deze functionaliteit in de toekomst wordt toegevoegd, garanderen we de integriteit of beschikbaarheid van gegevens niet.',

    // Article 8
    'terms.article8.title': 'Artikel 8 (Wijzigingen in Voorwaarden)',
    'terms.article8.content': 'We kunnen deze Voorwaarden op elk moment zonder kennisgeving aan gebruikers wijzigen wanneer dit nodig wordt geacht. De herziene Voorwaarden worden van kracht wanneer ze binnen deze App worden gepubliceerd.',

    // Article 9
    'terms.article9.title': 'Artikel 9 (Omgang met Persoonlijke Informatie)',
    'terms.article9.content': 'De omgang met persoonlijke informatie in deze App is onderworpen aan het afzonderlijke Privacybeleid.',

    // Article 10
    'terms.article10.title': 'Artikel 10 (Partnerprogramma)',
    'terms.article10.intro': 'De App kan verwijzingscodes of partnerlinks naar diensten van derden (bijv. iHerb) bevatten als middel om de ontwikkeling en het onderhoud van de App te ondersteunen. Wanneer gebruikers via deze links aankopen doen:',
    'terms.article10.items.1': 'Kunnen we een commissie ontvangen van de dienst van derden',
    'terms.article10.items.2': 'Er zijn geen extra kosten voor gebruikers',
    'terms.article10.items.3': 'Het gebruik van deze verwijzingscodes is volledig vrijwillig',

    // Article 11
    'terms.article11.title': 'Artikel 11 (Meertalige Ondersteuning)',
    'terms.article11.intro': 'De App ondersteunt de volgende talen voor de gebruikersinterface en juridische documenten:',
    'terms.article11.items.1': 'Engels, Japans, Spaans, Portugees, Duits, Frans, Chinees (Vereenvoudigd), Koreaans, Italiaans, Indonesisch, Russisch, Turks, Nederlands, Pools, Thais, Vietnamees, Arabisch, Hindi en Perzisch (Farsi)',
    'terms.article11.items.2': 'Juridische documenten (Servicevoorwaarden en Privacybeleid) zijn nu beschikbaar in alle 19 talen',
    'terms.article11.items.3': 'Hoewel we streven naar nauwkeurigheid in vertalingen, dient de Japanse versie als de officiële versie',

    // Article 12
    'terms.article12.title': 'Artikel 12 (Ondersteuning)',
    'terms.article12.intro': 'Voor vragen over deze App kunt u contact met ons opnemen via het volgende e-mailadres.',
    'terms.article12.email': 'takuya.atsugi911@gmail.com',
    'terms.article12.language': 'Alleen Japans',

    // Article 13
    'terms.article13.title': 'Artikel 13 (Toepasselijk Recht en Jurisdictie)',
    'terms.article13.content': 'Deze Voorwaarden worden beheerst door Japans recht. In geval van geschillen met betrekking tot deze App heeft de rechtbank met jurisdictie over onze locatie exclusieve jurisdictie.',
  },
  pl: {
    'header.privacy': 'Prywatność',
    'header.terms': 'Warunki',
    'header.contact': 'Kontakt',
    'home.hero.badge': 'Aplikacja do Dziennika Treningowego',
    'home.hero.tagline': 'Zapisuj i Rozwijaj Się',
    'home.hero.description': 'Wizualizuj swoje postępy dzięki prostym i\nintuicyjnym zapisom treningowym',
    'home.hero.download': 'Pobierz w App Store',
    'home.features.title': 'Główne Funkcje',
    'home.features.subtitle': 'MASCALE wspiera Twoje treningi',
    'home.features.calendar.title': 'Zapisy Kalendarzowe',
    'home.features.calendar.description': 'Przeglądaj historię treningów na pierwszy rzut oka w formacie kalendarza. Łatwo zarządzaj tym, kiedy i co trenowałeś.',
    'home.features.detailed.title': 'Szczegółowe Zapisy Treningowe',
    'home.features.detailed.description': 'Zapisuj serie, wagę i powtórzenia dla każdego ćwiczenia. Całkowita objętość jest automatycznie obliczana.',
    'home.features.bodypart.title': 'Zarządzanie Częściami Ciała',
    'home.features.bodypart.description': 'Organizuj ćwiczenia według części ciała, takich jak klatka piersiowa, ramiona, ręce, plecy, nogi i brzuch.',
    'home.features.multilang.title': 'Wsparcie 19 Języków',
    'home.features.multilang.description': 'Obsługuje 19 języków, w tym japoński, angielski, hiszpański, chiński i koreański.',
    'home.features.units.title': 'Przełączanie Jednostek',
    'home.features.units.description': 'Przełączaj jednostki wagi między kilogramami (kg) a funtami (lb). Zapisuj w preferowanej jednostce.',
    'home.features.darkmode.title': 'Wsparcie Trybu Ciemnego',
    'home.features.darkmode.description': 'Wybierz tryb jasny, tryb ciemny lub postępuj zgodnie z ustawieniami systemu.',
    'home.languages.title': 'Obsługiwane Języki',
    'home.languages.subtitle': 'Dostępne dla użytkowników na całym świecie',
    'footer.tagline': 'Zapisuj i Rozwijaj Się',
    'footer.links': 'Linki',
    'footer.privacy': 'Polityka Prywatności',
    'footer.terms': 'Warunki Usługi',
    'footer.contact': 'Kontakt',
    'footer.contact.title': 'Skontaktuj Się z Nami',
    'privacy.title': 'Polityka Prywatności',
    'privacy.updated': 'Ostatnia aktualizacja: 12 października 2025',
    'terms.title': 'Warunki Usługi',
    'terms.updated': 'Ostatnia aktualizacja: 12 października 2025',
    'contact.title': 'Skontaktuj Się z Nami',
    'contact.description': 'Nie wahaj się skontaktować z nami w przypadku pytań, opinii lub raportów o błędach dotyczących MASCALE',
    'contact.email.title': 'Kontakt przez E-mail',
    'contact.language.title': 'Obsługiwany Język',
    'contact.language.value': 'Tylko japoński',
    'contact.response.title': 'Odpowiedź',
    'contact.response.value': 'Odpowiemy szybko',

    // Terms Page
    'terms.provider': 'Dostawca: Takuya Atsugi',

    // Article 1
    'terms.article1.title': 'Artykuł 1 (Zastosowanie)',
    'terms.article1.content': 'Niniejsze Warunki Usługi definiują warunki korzystania z aplikacji na smartfony "MASCALE" (zwanej dalej "Aplikacją") udostępnianej przez Takuya Atsugi (zwanego dalej "nami"). Korzystając z Aplikacji, uznaje się, że zaakceptowałeś niniejsze Warunki.',

    // Article 2
    'terms.article2.title': 'Artykuł 2 (Zawartość Aplikacji)',
    'terms.article2.intro': 'Aplikacja została zaprojektowana, aby umożliwić użytkownikom rejestrowanie treningów (trening siłowy, cardio itp.) i zarządzanie tą historią w formacie kalendarza.',
    'terms.article2.features.title': 'Główne Funkcje:',
    'terms.article2.features.1': 'Zarządzanie zapisami treningowymi w formacie kalendarza',
    'terms.article2.features.2': 'Rejestrowanie serii, wagi i powtórzeń dla każdego ćwiczenia',
    'terms.article2.features.3': 'Przełączanie jednostek wagi (kg/lb)',
    'terms.article2.features.4': 'Wizualizacja historii treningów',
    'terms.article2.features.5': 'Wszystkie dane są przechowywane lokalnie na urządzeniu przy użyciu bazy danych SQLite',

    // Article 3
    'terms.article3.title': 'Artykuł 3 (Bezpłatne Udostępnianie i Przyszła Monetyzacja)',
    'terms.article3.intro': 'Aplikacja jest obecnie udostępniana bezpłatnie. Możemy jednak dodać następujące funkcje monetyzacji w przyszłości.',
    'terms.article3.items.1': 'Wyświetlanie reklam: Reklamy w aplikacji',
    'terms.article3.items.2': 'Zakupy w aplikacji: Zapewnienie usunięcia reklam i funkcji premium (przedmioty niezużywalne, możliwe do przywrócenia)',
    'terms.article3.outro': 'Jeśli te funkcje zostaną dodane, zaktualizujemy niniejsze Warunki i Politykę Prywatności oraz powiadomimy użytkowników z wyprzedzeniem w aplikacji.',

    // Article 4
    'terms.article4.title': 'Artykuł 4 (Środowisko Użytkowania)',
    'terms.article4.intro': 'Korzystanie z Aplikacji wymaga kompatybilnego urządzenia smartfona (iOS/Android).',
    'terms.article4.items.1': 'Aplikacja została zaprojektowana jako offline-first i może być używana bez połączenia internetowego dla podstawowych funkcji',
    'terms.article4.items.2': 'Informacje analityczne (anonimowe statystyki użytkowania) są automatycznie wysyłane do Firebase Analytics, gdy dostępne jest połączenie internetowe',
    'terms.article4.items.3': 'Jeśli w przyszłości zostanie dodana funkcjonalność synchronizacji w chmurze, wymagane będzie połączenie internetowe',
    'terms.article4.items.4': 'Użytkownicy ponoszą odpowiedzialność za koszty konfiguracji tych środowisk (opłaty za komunikację itp.)',

    // Article 5
    'terms.article5.title': 'Artykuł 5 (Zabronione Działania)',
    'terms.article5.intro': 'Następujące działania są zabronione podczas korzystania z Aplikacji.',
    'terms.article5.items.1': 'Działania naruszające prawo lub porządek publiczny i moralność',
    'terms.article5.items.2': 'Działania związane z działalnością przestępczą',
    'terms.article5.items.3': 'Nieautoryzowana modyfikacja, inżynieria wsteczna lub dekompilacja funkcji aplikacji',
    'terms.article5.items.4': 'Bezpośredni dostęp do bazy danych aplikacji (SQLite) w celu nielegalnej manipulacji danymi',
    'terms.article5.items.5': 'Działania, które niszczą lub zakłócają serwery lub funkcje sieciowe, które mogą zostać wprowadzone w przyszłości',
    'terms.article5.items.6': 'Działania mogące zakłócać działanie aplikacji',
    'terms.article5.items.7': 'Zbieranie lub gromadzenie informacji osobowych o innych użytkownikach (dla przyszłych dodatków funkcji)',
    'terms.article5.items.8': 'Nieautoryzowany dostęp lub próby jego uzyskania',
    'terms.article5.items.9': 'Nieautoryzowane komercyjne wykorzystanie Aplikacji',
    'terms.article5.items.10': 'Oszukańcze wykorzystanie zakupów w aplikacji lub nadużywanie zwrotów (dla przyszłych dodatków funkcji)',
    'terms.article5.items.11': 'Inne działania, które uznajemy za nieodpowiednie',

    // Article 6
    'terms.article6.title': 'Artykuł 6 (Zawieszenie Udostępniania Aplikacji)',
    'terms.article6.intro': 'Możemy zawiesić lub przerwać udostępnianie całości lub części Aplikacji bez uprzedniego powiadomienia użytkowników, jeśli ustalimy, że istnieją jakiekolwiek z następujących okoliczności.',
    'terms.article6.items.1': 'Podczas przeprowadzania konserwacji lub aktualizacji systemu aplikacji',
    'terms.article6.items.2': 'Gdy udostępnianie Aplikacji staje się trudne z powodu siły wyższej, takiej jak trzęsienia ziemi, pioruny, pożary, awarie zasilania lub klęski żywiołowe',
    'terms.article6.items.3': 'Gdy ustalimy, że udostępnianie Aplikacji jest trudne z innych powodów',

    // Article 7
    'terms.article7.title': 'Artykuł 7 (Wyłączenie Odpowiedzialności)',
    'terms.article7.items.1': 'Aplikacja jest narzędziem do zarządzania zapisami treningowymi i nie zapewnia porad medycznych, diagnozy ani leczenia. Jeśli masz problemy zdrowotne, skonsultuj się z lekarzem lub specjalistą.',
    'terms.article7.items.2': 'Nie udzielamy żadnych gwarancji dotyczących zawartości, działania lub jakości Aplikacji.',
    'terms.article7.items.3': 'Nie ponosimy odpowiedzialności za jakiekolwiek szkody wynikające z użytkowania Aplikacji (w tym między innymi utratę danych, awarię urządzenia lub inne szkody bezpośrednie lub pośrednie).',
    'terms.article7.items.4': 'Aplikacja przechowuje dane lokalnie na urządzeniu użytkownika przy użyciu bazy danych SQLite. Istnieją ryzyka utraty danych z powodu awarii urządzenia, utraty, aktualizacji systemu operacyjnego, usterek aplikacji itp. Użytkownicy powinni na własną odpowiedzialność tworzyć kopie zapasowe danych w razie potrzeby.',
    'terms.article7.items.5': 'Obecna wersja nie zapewnia funkcjonalności tworzenia kopii zapasowych w chmurze. Nawet jeśli ta funkcjonalność zostanie dodana w przyszłości, nie gwarantujemy integralności ani dostępności danych.',

    // Article 8
    'terms.article8.title': 'Artykuł 8 (Zmiany w Warunkach)',
    'terms.article8.content': 'Możemy zmienić niniejsze Warunki w dowolnym momencie bez powiadomienia użytkowników, gdy uznamy to za konieczne. Zmienione Warunki wejdą w życie po ich opublikowaniu w Aplikacji.',

    // Article 9
    'terms.article9.title': 'Artykuł 9 (Przetwarzanie Informacji Osobowych)',
    'terms.article9.content': 'Przetwarzanie informacji osobowych w Aplikacji podlega oddzielnej Polityce Prywatności.',

    // Article 10
    'terms.article10.title': 'Artykuł 10 (Program Partnerski)',
    'terms.article10.intro': 'Aplikacja może zawierać kody polecające lub linki partnerskie do usług stron trzecich (np. iHerb) jako sposób wspierania rozwoju i utrzymania Aplikacji. Gdy użytkownicy dokonują zakupów za pośrednictwem tych linków:',
    'terms.article10.items.1': 'Możemy otrzymać prowizję od usługi strony trzeciej',
    'terms.article10.items.2': 'Nie ma dodatkowych kosztów dla użytkowników',
    'terms.article10.items.3': 'Korzystanie z tych kodów polecających jest całkowicie dobrowolne',

    // Article 11
    'terms.article11.title': 'Artykuł 11 (Wsparcie Wielojęzyczne)',
    'terms.article11.intro': 'Aplikacja obsługuje następujące języki dla interfejsu użytkownika i dokumentów prawnych:',
    'terms.article11.items.1': 'Angielski, japoński, hiszpański, portugalski, niemiecki, francuski, chiński (uproszczony), koreański, włoski, indonezyjski, rosyjski, turecki, holenderski, polski, tajski, wietnamski, arabski, hindi i perski (farsi)',
    'terms.article11.items.2': 'Dokumenty prawne (Warunki Usługi i Polityka Prywatności) są obecnie dostępne we wszystkich 19 językach',
    'terms.article11.items.3': 'Chociaż dążymy do dokładności w tłumaczeniach, wersja japońska służy jako oficjalna wersja',

    // Article 12
    'terms.article12.title': 'Artykuł 12 (Wsparcie)',
    'terms.article12.intro': 'W sprawie pytań dotyczących Aplikacji prosimy o kontakt pod następującym adresem e-mail.',
    'terms.article12.email': 'takuya.atsugi911@gmail.com',
    'terms.article12.language': 'Tylko japoński',

    // Article 13
    'terms.article13.title': 'Artykuł 13 (Prawo Właściwe i Jurysdykcja)',
    'terms.article13.content': 'Niniejsze Warunki podlegają prawu japońskiemu. W przypadku jakichkolwiek sporów dotyczących Aplikacji, sąd mający jurysdykcję nad naszą lokalizacją będzie miał wyłączną jurysdykcję.',
  },
  th: {
    'header.privacy': 'ความเป็นส่วนตัว',
    'header.terms': 'ข้อกำหนด',
    'header.contact': 'ติดต่อ',
    'home.hero.badge': 'แอปบันทึกการออกกำลังกาย',
    'home.hero.tagline': 'บันทึกและพัฒนาต่อไป',
    'home.hero.description': 'มองเห็นความก้าวหน้าด้วยบันทึกการออกกำลังกาย\nที่เรียบง่ายและใช้งานง่าย',
    'home.hero.download': 'ดาวน์โหลดใน App Store',
    'home.features.title': 'ฟีเจอร์หลัก',
    'home.features.subtitle': 'MASCALE สนับสนุนการออกกำลังกายของคุณ',
    'home.features.calendar.title': 'บันทึกปฏิทิน',
    'home.features.calendar.description': 'ดูประวัติการออกกำลังกายได้ในรูปแบบปฏิทิน จัดการได้ง่ายว่าคุณออกกำลังกายเมื่อใดและอะไร',
    'home.features.detailed.title': 'บันทึกการออกกำลังกายโดยละเอียด',
    'home.features.detailed.description': 'บันทึกเซต น้ำหนัก และจำนวนครั้งสำหรับแต่ละแบบฝึกหัด ปริมาณรวมจะคำนวณโดยอัตโนมัติ',
    'home.features.bodypart.title': 'การจัดการตามส่วนของร่างกาย',
    'home.features.bodypart.description': 'จัดระเบียบแบบฝึกหัดตามส่วนของร่างกาย เช่น หน้าอก ไหล่ แขน หลัง ขา และหน้าท้อง',
    'home.features.multilang.title': 'รองรับ 19 ภาษา',
    'home.features.multilang.description': 'รองรับ 19 ภาษา รวมถึงญี่ปุ่น อังกฤษ สเปน จีน และเกาหลี',
    'home.features.units.title': 'การสลับหน่วย',
    'home.features.units.description': 'สลับหน่วยน้ำหนักระหว่างกิโลกรัม (kg) และปอนด์ (lb) บันทึกในหน่วยที่คุณชอบ',
    'home.features.darkmode.title': 'รองรับโหมดมืด',
    'home.features.darkmode.description': 'เลือกระหว่างโหมดสว่าง โหมดมืด หรือตามการตั้งค่าระบบ',
    'home.languages.title': 'ภาษาที่รองรับ',
    'home.languages.subtitle': 'พร้อมให้บริการผู้ใช้ทั่วโลก',
    'footer.tagline': 'บันทึกและพัฒนาต่อไป',
    'footer.links': 'ลิงก์',
    'footer.privacy': 'นโยบายความเป็นส่วนตัว',
    'footer.terms': 'เงื่อนไขการให้บริการ',
    'footer.contact': 'ติดต่อ',
    'footer.contact.title': 'ติดต่อเรา',
    'privacy.title': 'นโยบายความเป็นส่วนตัว',
    'privacy.updated': 'อัปเดตล่าสุด: 12 ตุลาคม 2025',
    'terms.title': 'เงื่อนไขการให้บริการ',
    'terms.updated': 'อัปเดตล่าสุด: 12 ตุลาคม 2025',
    'contact.title': 'ติดต่อเรา',
    'contact.description': 'อย่าลังเลที่จะติดต่อเราหากมีคำถาม ข้อเสนอแนะ หรือรายงานข้อบกพร่องเกี่ยวกับ MASCALE',
    'contact.email.title': 'ติดต่อทางอีเมล',
    'contact.language.title': 'ภาษาที่รองรับ',
    'contact.language.value': 'เฉพาะภาษาญี่ปุ่น',
    'contact.response.title': 'การตอบกลับ',
    'contact.response.value': 'เราจะตอบกลับอย่างรวดเร็ว',

    // Terms Page
    'terms.provider': 'ผู้ให้บริการ: Takuya Atsugi',

    // Article 1
    'terms.article1.title': 'ข้อ 1 (การใช้งาน)',
    'terms.article1.content': 'เงื่อนไขการให้บริการนี้กำหนดเงื่อนไขสำหรับการใช้แอปพลิเคชันสมาร์ทโฟน "MASCALE" (ต่อไปนี้จะเรียกว่า "แอปนี้") ที่จัดทำโดย Takuya Atsugi (ต่อไปนี้จะเรียกว่า "เรา") เมื่อใช้แอปนี้ คุณจะถูกพิจารณาว่าได้ยอมรับเงื่อนไขเหล่านี้แล้ว',

    // Article 2
    'terms.article2.title': 'ข้อ 2 (เนื้อหาของแอป)',
    'terms.article2.intro': 'แอปนี้เป็นแอปพลิเคชันที่ออกแบบมาเพื่อให้ผู้ใช้บันทึกการออกกำลังกาย (การฝึกความแข็งแรง คาร์ดิโอ ฯลฯ) และจัดการประวัตินั้นในรูปแบบปฏิทิน',
    'terms.article2.features.title': 'คุณสมบัติหลัก:',
    'terms.article2.features.1': 'การจัดการบันทึกการฝึกในรูปแบบปฏิทิน',
    'terms.article2.features.2': 'การบันทึกเซต น้ำหนัก และจำนวนครั้งสำหรับแต่ละท่าออกกำลังกาย',
    'terms.article2.features.3': 'การสลับหน่วยน้ำหนัก (kg/lb)',
    'terms.article2.features.4': 'การแสดงผลประวัติการฝึก',
    'terms.article2.features.5': 'ข้อมูลทั้งหมดจะถูกจัดเก็บในเครื่องโดยใช้ฐานข้อมูล SQLite',

    // Article 3
    'terms.article3.title': 'ข้อ 3 (การให้บริการฟรีและการสร้างรายได้ในอนาคต)',
    'terms.article3.intro': 'ปัจจุบันแอปนี้ให้บริการฟรี อย่างไรก็ตาม เราอาจเพิ่มคุณสมบัติการสร้างรายได้ต่อไปนี้ในอนาคต',
    'terms.article3.items.1': 'การแสดงโฆษณา: โฆษณาในแอป',
    'terms.article3.items.2': 'การซื้อในแอป: การให้บริการการลบโฆษณาและคุณสมบัติพรีเมียม (รายการที่ไม่สิ้นเปลือง สามารถคืนค่าได้)',
    'terms.article3.outro': 'หากเพิ่มคุณสมบัติเหล่านี้ เราจะอัปเดตเงื่อนไขเหล่านี้และนโยบายความเป็นส่วนตัว และแจ้งผู้ใช้ล่วงหน้าภายในแอป',

    // Article 4
    'terms.article4.title': 'ข้อ 4 (สภาพแวดล้อมการใช้งาน)',
    'terms.article4.intro': 'การใช้แอปนี้ต้องใช้อุปกรณ์สมาร์ทโฟนที่เข้ากันได้ (iOS/Android)',
    'terms.article4.items.1': 'แอปนี้ออกแบบมาให้ทำงานแบบออฟไลน์ได้เป็นหลัก และสามารถใช้งานได้โดยไม่ต้องเชื่อมต่ออินเทอร์เน็ตสำหรับคุณสมบัติพื้นฐาน',
    'terms.article4.items.2': 'ข้อมูลการวิเคราะห์ (สถิติการใช้งานแบบไม่ระบุตัวตน) จะถูกส่งไปยัง Firebase Analytics โดยอัตโนมัติเมื่อมีการเชื่อมต่ออินเทอร์เน็ต',
    'terms.article4.items.3': 'หากเพิ่มฟังก์ชันการซิงค์คลาวด์ในอนาคต จะต้องมีการเชื่อมต่ออินเทอร์เน็ต',
    'terms.article4.items.4': 'ผู้ใช้มีความรับผิดชอบต่อค่าใช้จ่ายในการตั้งค่าสภาพแวดล้อมเหล่านี้ (ค่าสื่อสาร ฯลฯ)',

    // Article 5
    'terms.article5.title': 'ข้อ 5 (การกระทำที่ต้องห้าม)',
    'terms.article5.intro': 'การกระทำต่อไปนี้ถูกห้ามเมื่อใช้แอปนี้',
    'terms.article5.items.1': 'การกระทำที่ละเมิดกฎหมายหรือความสงบเรียบร้อยและศีลธรรม',
    'terms.article5.items.2': 'การกระทำที่เกี่ยวข้องกับกิจกรรมอาชญากรรม',
    'terms.article5.items.3': 'การดัดแปลงโดยไม่ได้รับอนุญาต วิศวกรรมย้อนกลับ หรือการแยกชิ้นส่วนของฟังก์ชันแอป',
    'terms.article5.items.4': 'การเข้าถึงฐานข้อมูลของแอป (SQLite) โดยตรงเพื่อจัดการข้อมูลอย่างผิดกฎหมาย',
    'terms.article5.items.5': 'การกระทำที่ทำลายหรือรบกวนเซิร์ฟเวอร์หรือฟังก์ชันเครือข่ายที่อาจเปิดตัวในอนาคต',
    'terms.article5.items.6': 'การกระทำที่อาจรบกวนการทำงานของแอป',
    'terms.article5.items.7': 'การรวบรวมหรือสะสมข้อมูลส่วนบุคคลของผู้ใช้รายอื่น (สำหรับการเพิ่มคุณสมบัติในอนาคต)',
    'terms.article5.items.8': 'การเข้าถึงโดยไม่ได้รับอนุญาตหรือความพยายามในการทำเช่นนั้น',
    'terms.article5.items.9': 'การใช้แอปนี้เชิงพาณิชย์โดยไม่ได้รับอนุญาต',
    'terms.article5.items.10': 'การใช้การซื้อในแอปอย่างฉ้อฉลหรือการใช้การคืนเงินในทางที่ผิด (สำหรับการเพิ่มคุณสมบัติในอนาคต)',
    'terms.article5.items.11': 'การกระทำอื่นๆ ที่เราพิจารณาว่าไม่เหมาะสม',

    // Article 6
    'terms.article6.title': 'ข้อ 6 (การระงับการให้บริการแอป)',
    'terms.article6.intro': 'เราอาจระงับหรือหยุดการให้บริการทั้งหมดหรือบางส่วนของแอปนี้โดยไม่แจ้งให้ผู้ใช้ทราบล่วงหน้า หากเราพิจารณาว่ามีสถานการณ์ใดต่อไปนี้เกิดขึ้น',
    'terms.article6.items.1': 'เมื่อดำเนินการบำรุงรักษาหรืออัปเดตระบบแอป',
    'terms.article6.items.2': 'เมื่อการให้บริการแอปนี้กลายเป็นเรื่องยากเนื่องจากเหตุสุดวิสัยเช่นแผ่นดินไหว ฟ้าผ่า ไฟไหม้ ไฟฟ้าดับ หรือภัยธรรมชาติ',
    'terms.article6.items.3': 'เมื่อเราพิจารณาว่าการให้บริการแอปนี้เป็นเรื่องยากด้วยเหตุผลอื่นๆ',

    // Article 7
    'terms.article7.title': 'ข้อ 7 (ข้อจำกัดความรับผิด)',
    'terms.article7.items.1': 'แอปนี้เป็นเครื่องมือสำหรับจัดการบันทึกการฝึก และไม่ให้คำแนะนำทางการแพทย์ การวินิจฉัย หรือการรักษา หากคุณมีปัญหาสุขภาพ โปรดปรึกษาแพทย์หรือผู้เชี่ยวชาญ',
    'terms.article7.items.2': 'เราไม่ให้การรับประกันใดๆ เกี่ยวกับเนื้อหา การทำงาน หรือคุณภาพของแอปนี้',
    'terms.article7.items.3': 'เราไม่รับผิดชอบต่อความเสียหายใดๆ ที่เกิดจากการใช้แอปนี้ (รวมถึงแต่ไม่จำกัดเพียงการสูญหายของข้อมูล ความล้มเหลวของอุปกรณ์ หรือความเสียหายโดยตรงหรือทางอ้อมอื่นๆ)',
    'terms.article7.items.4': 'แอปนี้จัดเก็บข้อมูลในเครื่องบนอุปกรณ์ของผู้ใช้โดยใช้ฐานข้อมูล SQLite มีความเสี่ยงของการสูญหายข้อมูลเนื่องจากความล้มเหลวของอุปกรณ์ การสูญหาย การอัปเดต OS ความผิดพลาดของแอป ฯลฯ ผู้ใช้ควรสำรองข้อมูลตามความจำเป็นในความรับผิดชอบของตนเอง',
    'terms.article7.items.5': 'เวอร์ชันปัจจุบันไม่ให้ฟังก์ชันการสำรองข้อมูลคลาวด์ แม้ว่าฟังก์ชันนี้จะถูกเพิ่มในอนาคต เราก็ไม่รับประกันความสมบูรณ์หรือความพร้อมใช้งานของข้อมูล',

    // Article 8
    'terms.article8.title': 'ข้อ 8 (การเปลี่ยนแปลงเงื่อนไข)',
    'terms.article8.content': 'เราอาจเปลี่ยนแปลงเงื่อนไขเหล่านี้ได้ตลอดเวลาโดยไม่ต้องแจ้งให้ผู้ใช้ทราบเมื่อเห็นว่าจำเป็น เงื่อนไขที่แก้ไขจะมีผลบังคับใช้เมื่อโพสต์ภายในแอปนี้',

    // Article 9
    'terms.article9.title': 'ข้อ 9 (การจัดการข้อมูลส่วนบุคคล)',
    'terms.article9.content': 'การจัดการข้อมูลส่วนบุคคลในแอปนี้อยู่ภายใต้นโยบายความเป็นส่วนตัวแยกต่างหาก',

    // Article 10
    'terms.article10.title': 'ข้อ 10 (โปรแกรมพันธมิตร)',
    'terms.article10.intro': 'แอปอาจมีรหัสแนะนำหรือลิงก์พันธมิตรไปยังบริการของบุคคลที่สาม (เช่น iHerb) เป็นวิธีสนับสนุนการพัฒนาและการบำรุงรักษาแอป เมื่อผู้ใช้ซื้อผ่านลิงก์เหล่านี้:',
    'terms.article10.items.1': 'เราอาจได้รับค่าคอมมิชชันจากบริการของบุคคลที่สาม',
    'terms.article10.items.2': 'ไม่มีค่าใช้จ่ายเพิ่มเติมสำหรับผู้ใช้',
    'terms.article10.items.3': 'การใช้รหัสแนะนำเหล่านี้เป็นไปโดยสมัครใจทั้งหมด',

    // Article 11
    'terms.article11.title': 'ข้อ 11 (การสนับสนุนหลายภาษา)',
    'terms.article11.intro': 'แอปรองรับภาษาต่อไปนี้สำหรับส่วนติดต่อผู้ใช้และเอกสารทางกฎหมาย:',
    'terms.article11.items.1': 'อังกฤษ ญี่ปุ่น สเปน โปรตุเกส เยอรมัน ฝรั่งเศส จีน (ตัวย่อ) เกาหลี อิตาลี อินโดนีเซีย รัสเซีย ตุรกี ดัตช์ โปแลนด์ ไทย เวียดนาม อาหรับ ฮินดี และเปอร์เซีย (ฟาร์ซี)',
    'terms.article11.items.2': 'เอกสารทางกฎหมาย (เงื่อนไขการให้บริการและนโยบายความเป็นส่วนตัว) ตอนนี้มีให้บริการในทั้ง 19 ภาษา',
    'terms.article11.items.3': 'แม้ว่าเราจะมุ่งมั่นเพื่อความแม่นยำในการแปล แต่เวอร์ชันภาษาญี่ปุ่นเป็นเวอร์ชันอย่างเป็นทางการ',

    // Article 12
    'terms.article12.title': 'ข้อ 12 (การสนับสนุน)',
    'terms.article12.intro': 'สำหรับคำถามเกี่ยวกับแอปนี้ โปรดติดต่อเราที่อีเมลต่อไปนี้',
    'terms.article12.email': 'takuya.atsugi911@gmail.com',
    'terms.article12.language': 'ภาษาญี่ปุ่นเท่านั้น',

    // Article 13
    'terms.article13.title': 'ข้อ 13 (กฎหมายที่ใช้บังคับและเขตอำนาจศาล)',
    'terms.article13.content': 'เงื่อนไขเหล่านี้จะอยู่ภายใต้กฎหมายญี่ปุ่น ในกรณีที่มีข้อพิพาทเกี่ยวกับแอปนี้ ศาลที่มีเขตอำนาจศาลเหนือสถานที่ของเราจะมีเขตอำนาจศาลเดียว',
  },
  vi: {
    'header.privacy': 'Quyền riêng tư',
    'header.terms': 'Điều khoản',
    'header.contact': 'Liên hệ',
    'home.hero.badge': 'Ứng Dụng Nhật Ký Tập Luyện',
    'home.hero.tagline': 'Ghi Chép và Tiếp Tục Phát Triển',
    'home.hero.description': 'Hình dung tiến trình của bạn với các bản ghi\ntập luyện đơn giản và trực quan',
    'home.hero.download': 'Tải xuống trên App Store',
    'home.features.title': 'Tính Năng Chính',
    'home.features.subtitle': 'MASCALE hỗ trợ tập luyện của bạn',
    'home.features.calendar.title': 'Bản Ghi Lịch',
    'home.features.calendar.description': 'Xem lịch sử tập luyện của bạn trong nháy mắt ở định dạng lịch. Dễ dàng quản lý khi nào và bạn đã tập gì.',
    'home.features.detailed.title': 'Bản Ghi Tập Luyện Chi Tiết',
    'home.features.detailed.description': 'Ghi lại hiệp, trọng lượng và số lần lặp lại cho mỗi bài tập. Tổng khối lượng được tính tự động.',
    'home.features.bodypart.title': 'Quản Lý Theo Bộ Phận Cơ Thể',
    'home.features.bodypart.description': 'Tổ chức bài tập theo các bộ phận cơ thể như ngực, vai, cánh tay, lưng, chân và bụng.',
    'home.features.multilang.title': 'Hỗ Trợ 19 Ngôn Ngữ',
    'home.features.multilang.description': 'Hỗ trợ 19 ngôn ngữ bao gồm tiếng Nhật, tiếng Anh, tiếng Tây Ban Nha, tiếng Trung và tiếng Hàn.',
    'home.features.units.title': 'Chuyển Đổi Đơn Vị',
    'home.features.units.description': 'Chuyển đổi đơn vị trọng lượng giữa kilôgam (kg) và pao (lb). Ghi lại theo đơn vị bạn thích.',
    'home.features.darkmode.title': 'Hỗ Trợ Chế Độ Tối',
    'home.features.darkmode.description': 'Chọn giữa chế độ sáng, chế độ tối hoặc theo cài đặt hệ thống.',
    'home.languages.title': 'Ngôn Ngữ Được Hỗ Trợ',
    'home.languages.subtitle': 'Có sẵn cho người dùng trên toàn thế giới',
    'footer.tagline': 'Ghi Chép và Tiếp Tục Phát Triển',
    'footer.links': 'Liên Kết',
    'footer.privacy': 'Chính Sách Bảo Mật',
    'footer.terms': 'Điều Khoản Dịch Vụ',
    'footer.contact': 'Liên Hệ',
    'footer.contact.title': 'Liên Hệ Với Chúng Tôi',
    'privacy.title': 'Chính Sách Bảo Mật',
    'privacy.updated': 'Cập nhật lần cuối: 12 tháng 10 năm 2025',
    'terms.title': 'Điều Khoản Dịch Vụ',
    'terms.updated': 'Cập nhật lần cuối: 12 tháng 10 năm 2025',
    'contact.title': 'Liên Hệ Với Chúng Tôi',
    'contact.description': 'Đừng ngần ngại liên hệ với chúng tôi với bất kỳ câu hỏi, phản hồi hoặc báo cáo lỗi nào về MASCALE',
    'contact.email.title': 'Liên Hệ qua Email',
    'contact.language.title': 'Ngôn Ngữ Được Hỗ Trợ',
    'contact.language.value': 'Chỉ tiếng Nhật',
    'contact.response.title': 'Phản Hồi',
    'contact.response.value': 'Chúng tôi sẽ phản hồi nhanh chóng',

    // Terms Page
    'terms.provider': 'Nhà cung cấp: Takuya Atsugi',

    // Article 1
    'terms.article1.title': 'Điều 1 (Ứng dụng)',
    'terms.article1.content': 'Các Điều khoản Dịch vụ này xác định các điều kiện sử dụng ứng dụng điện thoại thông minh "MASCALE" (sau đây gọi là "Ứng dụng này") do Takuya Atsugi cung cấp (sau đây gọi là "chúng tôi"). Bằng cách sử dụng Ứng dụng này, bạn được coi là đã đồng ý với các Điều khoản này.',

    // Article 2
    'terms.article2.title': 'Điều 2 (Nội dung Ứng dụng)',
    'terms.article2.intro': 'Ứng dụng này là một ứng dụng được thiết kế để cho phép người dùng ghi lại các buổi tập luyện (tập luyện sức mạnh, cardio, v.v.) và quản lý lịch sử đó theo định dạng lịch.',
    'terms.article2.features.title': 'Tính năng chính:',
    'terms.article2.features.1': 'Quản lý hồ sơ tập luyện theo định dạng lịch',
    'terms.article2.features.2': 'Ghi lại số lượng set, trọng lượng và số lần lặp cho mỗi bài tập',
    'terms.article2.features.3': 'Chuyển đổi đơn vị trọng lượng (kg/lb)',
    'terms.article2.features.4': 'Trực quan hóa lịch sử tập luyện',
    'terms.article2.features.5': 'Tất cả dữ liệu được lưu trữ cục bộ trên thiết bị bằng cơ sở dữ liệu SQLite',

    // Article 3
    'terms.article3.title': 'Điều 3 (Cung cấp Miễn phí và Kiếm tiền Trong tương lai)',
    'terms.article3.intro': 'Ứng dụng này hiện được cung cấp miễn phí. Tuy nhiên, chúng tôi có thể thêm các tính năng kiếm tiền sau đây trong tương lai.',
    'terms.article3.items.1': 'Hiển thị quảng cáo: Quảng cáo trong ứng dụng',
    'terms.article3.items.2': 'Mua hàng trong ứng dụng: Cung cấp loại bỏ quảng cáo và các tính năng cao cấp (mặt hàng không tiêu hao, có thể khôi phục)',
    'terms.article3.outro': 'Nếu các tính năng này được thêm vào, chúng tôi sẽ cập nhật các Điều khoản này và Chính sách Bảo mật và thông báo cho người dùng trong ứng dụng trước.',

    // Article 4
    'terms.article4.title': 'Điều 4 (Môi trường Sử dụng)',
    'terms.article4.intro': 'Việc sử dụng Ứng dụng này yêu cầu thiết bị điện thoại thông minh tương thích (iOS/Android).',
    'terms.article4.items.1': 'Ứng dụng này được thiết kế để hoạt động ngoại tuyến trước và có thể được sử dụng mà không cần kết nối internet cho các tính năng cơ bản',
    'terms.article4.items.2': 'Thông tin phân tích (thống kê sử dụng ẩn danh) được tự động gửi đến Firebase Analytics khi có kết nối internet',
    'terms.article4.items.3': 'Nếu chức năng đồng bộ hóa đám mây được thêm vào trong tương lai, sẽ cần kết nối internet',
    'terms.article4.items.4': 'Người dùng chịu trách nhiệm về chi phí thiết lập các môi trường này (phí liên lạc, v.v.)',

    // Article 5
    'terms.article5.title': 'Điều 5 (Các Hành vi Bị cấm)',
    'terms.article5.intro': 'Các hành vi sau đây bị cấm khi sử dụng Ứng dụng này.',
    'terms.article5.items.1': 'Các hành vi vi phạm pháp luật hoặc trật tự công cộng và đạo đức',
    'terms.article5.items.2': 'Các hành vi liên quan đến hoạt động tội phạm',
    'terms.article5.items.3': 'Sửa đổi trái phép, kỹ thuật đảo ngược hoặc dịch ngược các chức năng ứng dụng',
    'terms.article5.items.4': 'Truy cập trực tiếp vào cơ sở dữ liệu của ứng dụng (SQLite) để thao tác dữ liệu bất hợp pháp',
    'terms.article5.items.5': 'Các hành vi phá hủy hoặc can thiệp vào máy chủ hoặc chức năng mạng có thể được giới thiệu trong tương lai',
    'terms.article5.items.6': 'Các hành vi có khả năng can thiệp vào hoạt động của ứng dụng',
    'terms.article5.items.7': 'Thu thập hoặc tích lũy thông tin cá nhân về người dùng khác (cho các tính năng bổ sung trong tương lai)',
    'terms.article5.items.8': 'Truy cập trái phép hoặc cố gắng làm như vậy',
    'terms.article5.items.9': 'Sử dụng thương mại trái phép Ứng dụng này',
    'terms.article5.items.10': 'Sử dụng gian lận các giao dịch mua trong ứng dụng hoặc lạm dụng hoàn tiền (cho các tính năng bổ sung trong tương lai)',
    'terms.article5.items.11': 'Các hành vi khác mà chúng tôi cho là không phù hợp',

    // Article 6
    'terms.article6.title': 'Điều 6 (Tạm ngưng Cung cấp Ứng dụng)',
    'terms.article6.intro': 'Chúng tôi có thể tạm ngưng hoặc ngừng cung cấp toàn bộ hoặc một phần Ứng dụng này mà không cần thông báo trước cho người dùng nếu chúng tôi xác định rằng bất kỳ trường hợp nào sau đây tồn tại.',
    'terms.article6.items.1': 'Khi thực hiện bảo trì hoặc cập nhật hệ thống ứng dụng',
    'terms.article6.items.2': 'Khi việc cung cấp Ứng dụng này trở nên khó khăn do bất khả kháng như động đất, sét, hỏa hoạn, mất điện hoặc thiên tai',
    'terms.article6.items.3': 'Khi chúng tôi xác định rằng việc cung cấp Ứng dụng này là khó khăn vì các lý do khác',

    // Article 7
    'terms.article7.title': 'Điều 7 (Tuyên bố Miễn trừ Trách nhiệm)',
    'terms.article7.items.1': 'Ứng dụng này là công cụ để quản lý hồ sơ tập luyện và không cung cấp tư vấn y tế, chẩn đoán hoặc điều trị. Nếu bạn có vấn đề sức khỏe, vui lòng tham khảo ý kiến bác sĩ hoặc chuyên gia.',
    'terms.article7.items.2': 'Chúng tôi không đưa ra bảo đảm nào liên quan đến nội dung, hoạt động hoặc chất lượng của Ứng dụng này.',
    'terms.article7.items.3': 'Chúng tôi không chịu trách nhiệm về bất kỳ thiệt hại nào phát sinh từ việc sử dụng Ứng dụng này (bao gồm nhưng không giới hạn ở mất dữ liệu, lỗi thiết bị hoặc thiệt hại trực tiếp hoặc gián tiếp khác).',
    'terms.article7.items.4': 'Ứng dụng này lưu trữ dữ liệu cục bộ trên thiết bị của người dùng bằng cơ sở dữ liệu SQLite. Có nguy cơ mất dữ liệu do lỗi thiết bị, mất mát, cập nhật hệ điều hành, trục trặc ứng dụng, v.v. Người dùng nên sao lưu dữ liệu theo trách nhiệm của mình khi cần thiết.',
    'terms.article7.items.5': 'Phiên bản hiện tại không cung cấp chức năng sao lưu đám mây. Ngay cả khi chức năng này được thêm vào trong tương lai, chúng tôi không đảm bảo tính toàn vẹn hoặc khả năng sẵn có của dữ liệu.',

    // Article 8
    'terms.article8.title': 'Điều 8 (Thay đổi Điều khoản)',
    'terms.article8.content': 'Chúng tôi có thể thay đổi các Điều khoản này bất cứ lúc nào mà không cần thông báo cho người dùng khi được coi là cần thiết. Các Điều khoản sửa đổi sẽ có hiệu lực khi được đăng trong Ứng dụng này.',

    // Article 9
    'terms.article9.title': 'Điều 9 (Xử lý Thông tin Cá nhân)',
    'terms.article9.content': 'Việc xử lý thông tin cá nhân trong Ứng dụng này tuân theo Chính sách Bảo mật riêng biệt.',

    // Article 10
    'terms.article10.title': 'Điều 10 (Chương trình Liên kết)',
    'terms.article10.intro': 'Ứng dụng có thể bao gồm mã giới thiệu hoặc liên kết liên kết đến các dịch vụ của bên thứ ba (ví dụ: iHerb) như một phương tiện hỗ trợ phát triển và bảo trì Ứng dụng. Khi người dùng mua hàng thông qua các liên kết này:',
    'terms.article10.items.1': 'Chúng tôi có thể nhận hoa hồng từ dịch vụ bên thứ ba',
    'terms.article10.items.2': 'Không có chi phí bổ sung cho người dùng',
    'terms.article10.items.3': 'Việc sử dụng các mã giới thiệu này hoàn toàn tự nguyện',

    // Article 11
    'terms.article11.title': 'Điều 11 (Hỗ trợ Đa ngôn ngữ)',
    'terms.article11.intro': 'Ứng dụng hỗ trợ các ngôn ngữ sau cho giao diện người dùng và tài liệu pháp lý:',
    'terms.article11.items.1': 'Tiếng Anh, Tiếng Nhật, Tiếng Tây Ban Nha, Tiếng Bồ Đào Nha, Tiếng Đức, Tiếng Pháp, Tiếng Trung (Giản thể), Tiếng Hàn, Tiếng Ý, Tiếng Indonesia, Tiếng Nga, Tiếng Thổ Nhĩ Kỳ, Tiếng Hà Lan, Tiếng Ba Lan, Tiếng Thái, Tiếng Việt, Tiếng Ả Rập, Tiếng Hindi và Tiếng Ba Tư (Farsi)',
    'terms.article11.items.2': 'Các tài liệu pháp lý (Điều khoản Dịch vụ và Chính sách Bảo mật) hiện có sẵn trong tất cả 19 ngôn ngữ',
    'terms.article11.items.3': 'Mặc dù chúng tôi cố gắng đảm bảo độ chính xác trong bản dịch, phiên bản tiếng Nhật đóng vai trò là phiên bản chính thức',

    // Article 12
    'terms.article12.title': 'Điều 12 (Hỗ trợ)',
    'terms.article12.intro': 'Đối với các câu hỏi liên quan đến Ứng dụng này, vui lòng liên hệ với chúng tôi theo địa chỉ email sau.',
    'terms.article12.email': 'takuya.atsugi911@gmail.com',
    'terms.article12.language': 'Chỉ tiếng Nhật',

    // Article 13
    'terms.article13.title': 'Điều 13 (Luật Áp dụng và Quyền tài phán)',
    'terms.article13.content': 'Các Điều khoản này sẽ được điều chỉnh bởi luật pháp Nhật Bản. Trong trường hợp có bất kỳ tranh chấp nào liên quan đến Ứng dụng này, tòa án có thẩm quyền đối với vị trí của chúng tôi sẽ có quyền tài phán duy nhất.',
  },
  ar: {
    'header.privacy': 'الخصوصية',
    'header.terms': 'الشروط',
    'header.contact': 'اتصل',
    'home.hero.badge': 'تطبيق سجل التدريب',
    'home.hero.tagline': 'سجل واستمر في التطور',
    'home.hero.description': 'تصور تقدمك بسجلات تدريب\nبسيطة وبديهية',
    'home.hero.download': 'تنزيل على App Store',
    'home.features.title': 'الميزات الرئيسية',
    'home.features.subtitle': 'MASCALE يدعم تدريبك',
    'home.features.calendar.title': 'سجلات التقويم',
    'home.features.calendar.description': 'اعرض تاريخ تدريبك بنظرة سريعة بتنسيق التقويم. إدارة سهلة لما تدربت عليه ومتى.',
    'home.features.detailed.title': 'سجلات تدريب مفصلة',
    'home.features.detailed.description': 'سجل المجموعات والوزن والتكرارات لكل تمرين. يتم حساب الحجم الإجمالي تلقائيًا.',
    'home.features.bodypart.title': 'إدارة أجزاء الجسم',
    'home.features.bodypart.description': 'نظم التمارين حسب أجزاء الجسم مثل الصدر والكتفين والذراعين والظهر والساقين والبطن.',
    'home.features.multilang.title': 'دعم 19 لغة',
    'home.features.multilang.description': 'يدعم 19 لغة بما في ذلك اليابانية والإنجليزية والإسبانية والصينية والكورية.',
    'home.features.units.title': 'تبديل الوحدات',
    'home.features.units.description': 'قم بالتبديل بين وحدات الوزن بين الكيلوجرام (كجم) والرطل (رطل). سجل بالوحدة المفضلة لديك.',
    'home.features.darkmode.title': 'دعم الوضع الداكن',
    'home.features.darkmode.description': 'اختر بين الوضع الفاتح أو الوضع الداكن أو اتبع إعدادات النظام.',
    'home.languages.title': 'اللغات المدعومة',
    'home.languages.subtitle': 'متاح للمستخدمين في جميع أنحاء العالم',
    'footer.tagline': 'سجل واستمر في التطور',
    'footer.links': 'روابط',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.contact': 'اتصل',
    'footer.contact.title': 'اتصل بنا',
    'privacy.title': 'سياسة الخصوصية',
    'privacy.updated': 'آخر تحديث: 12 أكتوبر 2025',
    'terms.title': 'شروط الخدمة',
    'terms.updated': 'آخر تحديث: 12 أكتوبر 2025',
    'contact.title': 'اتصل بنا',
    'contact.description': 'لا تتردد في الاتصال بنا بأي أسئلة أو ملاحظات أو تقارير أخطاء حول MASCALE',
    'contact.email.title': 'الاتصال عبر البريد الإلكتروني',
    'contact.language.title': 'اللغة المدعومة',
    'contact.language.value': 'اليابانية فقط',
    'contact.response.title': 'الرد',
    'contact.response.value': 'سنرد بسرعة',

    // Terms Page
    'terms.provider': 'المزود: Takuya Atsugi',

    // Article 1
    'terms.article1.title': 'المادة 1 (التطبيق)',
    'terms.article1.content': 'تحدد شروط الخدمة هذه شروط استخدام تطبيق الهاتف الذكي "MASCALE" (المشار إليه فيما بعد بـ "هذا التطبيق") الذي تقدمه Takuya Atsugi (المشار إليها فيما بعد بـ "نحن"). باستخدام هذا التطبيق، يُعتبر أنك وافقت على هذه الشروط.',

    // Article 2
    'terms.article2.title': 'المادة 2 (محتوى التطبيق)',
    'terms.article2.intro': 'هذا التطبيق هو تطبيق مصمم للسماح للمستخدمين بتسجيل التمارين (تمارين القوة، الكارديو، إلخ) وإدارة هذا السجل بتنسيق التقويم.',
    'terms.article2.features.title': 'الميزات الرئيسية:',
    'terms.article2.features.1': 'إدارة سجلات التدريب بتنسيق التقويم',
    'terms.article2.features.2': 'تسجيل المجموعات والوزن والتكرارات لكل تمرين',
    'terms.article2.features.3': 'تبديل وحدات الوزن (كجم/رطل)',
    'terms.article2.features.4': 'تصور سجل التدريب',
    'terms.article2.features.5': 'يتم تخزين جميع البيانات محليًا على الجهاز باستخدام قاعدة بيانات SQLite',

    // Article 3
    'terms.article3.title': 'المادة 3 (التوفير المجاني والتحقيق الدخل المستقبلي)',
    'terms.article3.intro': 'يتم توفير هذا التطبيق حاليًا مجانًا. ومع ذلك، قد نضيف ميزات تحقيق الدخل التالية في المستقبل.',
    'terms.article3.items.1': 'عرض الإعلانات: الإعلانات داخل التطبيق',
    'terms.article3.items.2': 'عمليات الشراء داخل التطبيق: توفير إزالة الإعلانات والميزات المميزة (عناصر غير قابلة للاستهلاك، قابلة للاستعادة)',
    'terms.article3.outro': 'إذا تم إضافة هذه الميزات، سنقوم بتحديث هذه الشروط وسياسة الخصوصية وإخطار المستخدمين مسبقًا داخل التطبيق.',

    // Article 4
    'terms.article4.title': 'المادة 4 (بيئة الاستخدام)',
    'terms.article4.intro': 'يتطلب استخدام هذا التطبيق جهاز هاتف ذكي متوافق (iOS/Android).',
    'terms.article4.items.1': 'تم تصميم هذا التطبيق ليعمل دون اتصال بالإنترنت أولاً ويمكن استخدامه بدون اتصال بالإنترنت للميزات الأساسية',
    'terms.article4.items.2': 'يتم إرسال معلومات التحليلات (إحصائيات الاستخدام المجهولة) تلقائيًا إلى Firebase Analytics عند توفر اتصال بالإنترنت',
    'terms.article4.items.3': 'إذا تمت إضافة وظيفة المزامنة السحابية في المستقبل، فسيكون الاتصال بالإنترنت مطلوبًا',
    'terms.article4.items.4': 'يتحمل المستخدمون مسؤولية تكاليف إعداد هذه البيئات (رسوم الاتصال، إلخ)',

    // Article 5
    'terms.article5.title': 'المادة 5 (الأفعال المحظورة)',
    'terms.article5.intro': 'الأفعال التالية محظورة عند استخدام هذا التطبيق.',
    'terms.article5.items.1': 'الأفعال التي تنتهك القوانين أو النظام العام والأخلاق',
    'terms.article5.items.2': 'الأفعال المتعلقة بالأنشطة الإجرامية',
    'terms.article5.items.3': 'التعديل غير المصرح به أو الهندسة العكسية أو إلغاء تجميع وظائف التطبيق',
    'terms.article5.items.4': 'الوصول المباشر إلى قاعدة بيانات التطبيق (SQLite) للتلاعب بالبيانات بشكل غير قانوني',
    'terms.article5.items.5': 'الأفعال التي تدمر أو تتداخل مع الخوادم أو وظائف الشبكة التي قد يتم تقديمها في المستقبل',
    'terms.article5.items.6': 'الأفعال التي من المحتمل أن تتداخل مع عمليات التطبيق',
    'terms.article5.items.7': 'جمع أو تراكم المعلومات الشخصية حول المستخدمين الآخرين (لإضافات الميزات المستقبلية)',
    'terms.article5.items.8': 'الوصول غير المصرح به أو محاولات القيام بذلك',
    'terms.article5.items.9': 'الاستخدام التجاري غير المصرح به لهذا التطبيق',
    'terms.article5.items.10': 'الاستخدام الاحتيالي لعمليات الشراء داخل التطبيق أو إساءة استخدام المبالغ المستردة (لإضافات الميزات المستقبلية)',
    'terms.article5.items.11': 'أفعال أخرى نعتبرها غير مناسبة',

    // Article 6
    'terms.article6.title': 'المادة 6 (تعليق توفير التطبيق)',
    'terms.article6.intro': 'قد نعلق أو نوقف توفير كل أو جزء من هذا التطبيق دون إشعار مسبق للمستخدمين إذا قررنا وجود أي من الظروف التالية.',
    'terms.article6.items.1': 'عند إجراء الصيانة أو التحديثات لنظام التطبيق',
    'terms.article6.items.2': 'عندما يصبح توفير هذا التطبيق صعبًا بسبب القوة القاهرة مثل الزلازل أو البرق أو الحرائق أو انقطاع التيار الكهربائي أو الكوارث الطبيعية',
    'terms.article6.items.3': 'عندما نقرر أن توفير هذا التطبيق صعب لأسباب أخرى',

    // Article 7
    'terms.article7.title': 'المادة 7 (إخلاء المسؤولية)',
    'terms.article7.items.1': 'هذا التطبيق هو أداة لإدارة سجلات التدريب ولا يقدم نصائح طبية أو تشخيصًا أو علاجًا. إذا كان لديك مخاوف صحية، يرجى استشارة طبيب أو أخصائي.',
    'terms.article7.items.2': 'نحن لا نقدم أي ضمانات بشأن محتوى أو تشغيل أو جودة هذا التطبيق.',
    'terms.article7.items.3': 'نحن لا نتحمل أي مسؤولية عن أي أضرار ناشئة عن استخدام هذا التطبيق (بما في ذلك على سبيل المثال لا الحصر فقدان البيانات أو فشل الجهاز أو أضرار مباشرة أو غير مباشرة أخرى).',
    'terms.article7.items.4': 'يخزن هذا التطبيق البيانات محليًا على جهاز المستخدم باستخدام قاعدة بيانات SQLite. توجد مخاطر فقدان البيانات بسبب فشل الجهاز أو الفقدان أو تحديثات نظام التشغيل أو أعطال التطبيق، إلخ. يجب على المستخدمين نسخ البيانات احتياطيًا على مسؤوليتهم الخاصة حسب الحاجة.',
    'terms.article7.items.5': 'الإصدار الحالي لا يوفر وظيفة النسخ الاحتياطي السحابي. حتى لو تمت إضافة هذه الوظيفة في المستقبل، فإننا لا نضمن سلامة البيانات أو توفرها.',

    // Article 8
    'terms.article8.title': 'المادة 8 (التغييرات في الشروط)',
    'terms.article8.content': 'يمكننا تغيير هذه الشروط في أي وقت دون إشعار للمستخدمين عند اعتبار ذلك ضروريًا. ستصبح الشروط المعدلة سارية المفعول عند نشرها داخل هذا التطبيق.',

    // Article 9
    'terms.article9.title': 'المادة 9 (التعامل مع المعلومات الشخصية)',
    'terms.article9.content': 'يخضع التعامل مع المعلومات الشخصية في هذا التطبيق لسياسة الخصوصية المنفصلة.',

    // Article 10
    'terms.article10.title': 'المادة 10 (برنامج الشراكة)',
    'terms.article10.intro': 'قد يتضمن التطبيق رموز إحالة أو روابط شراكة لخدمات الطرف الثالث (مثل iHerb) كوسيلة لدعم تطوير وصيانة التطبيق. عندما يقوم المستخدمون بإجراء عمليات شراء من خلال هذه الروابط:',
    'terms.article10.items.1': 'قد نتلقى عمولة من خدمة الطرف الثالث',
    'terms.article10.items.2': 'لا توجد تكلفة إضافية على المستخدمين',
    'terms.article10.items.3': 'استخدام رموز الإحالة هذه طوعي تمامًا',

    // Article 11
    'terms.article11.title': 'المادة 11 (الدعم متعدد اللغات)',
    'terms.article11.intro': 'يدعم التطبيق اللغات التالية لواجهة المستخدم والوثائق القانونية:',
    'terms.article11.items.1': 'الإنجليزية واليابانية والإسبانية والبرتغالية والألمانية والفرنسية والصينية (المبسطة) والكورية والإيطالية والإندونيسية والروسية والتركية والهولندية والبولندية والتايلاندية والفيتنامية والعربية والهندية والفارسية (الفارسي)',
    'terms.article11.items.2': 'الوثائق القانونية (شروط الخدمة وسياسة الخصوصية) متاحة الآن بجميع اللغات الـ 19',
    'terms.article11.items.3': 'بينما نسعى لتحقيق الدقة في الترجمات، فإن النسخة اليابانية تعمل كالنسخة الرسمية',

    // Article 12
    'terms.article12.title': 'المادة 12 (الدعم)',
    'terms.article12.intro': 'للاستفسارات المتعلقة بهذا التطبيق، يرجى الاتصال بنا على عنوان البريد الإلكتروني التالي.',
    'terms.article12.email': 'takuya.atsugi911@gmail.com',
    'terms.article12.language': 'اليابانية فقط',

    // Article 13
    'terms.article13.title': 'المادة 13 (القانون الحاكم والاختصاص القضائي)',
    'terms.article13.content': 'تخضع هذه الشروط للقانون الياباني. في حالة وجود أي نزاعات تتعلق بهذا التطبيق، فإن المحكمة ذات الاختصاص القضائي على موقعنا سيكون لها الاختصاص القضائي الحصري.',
  },
  hi: {
    'header.privacy': 'गोपनीयता',
    'header.terms': 'शर्तें',
    'header.contact': 'संपर्क',
    'home.hero.badge': 'प्रशिक्षण लॉग ऐप',
    'home.hero.tagline': 'रिकॉर्ड करें और विकसित होते रहें',
    'home.hero.description': 'सरल और सहज प्रशिक्षण रिकॉर्ड के साथ\nअपनी प्रगति की कल्पना करें',
    'home.hero.download': 'App Store पर डाउनलोड करें',
    'home.features.title': 'मुख्य विशेषताएं',
    'home.features.subtitle': 'MASCALE आपके प्रशिक्षण का समर्थन करता है',
    'home.features.calendar.title': 'कैलेंडर रिकॉर्ड',
    'home.features.calendar.description': 'कैलेंडर प्रारूप में एक नज़र में अपने प्रशिक्षण इतिहास को देखें। आसानी से प्रबंधित करें कि आपने कब और क्या प्रशिक्षण लिया।',
    'home.features.detailed.title': 'विस्तृत प्रशिक्षण रिकॉर्ड',
    'home.features.detailed.description': 'प्रत्येक व्यायाम के लिए सेट, वजन और दोहराव रिकॉर्ड करें। कुल मात्रा स्वचालित रूप से गणना की जाती है।',
    'home.features.bodypart.title': 'शरीर के अंग प्रबंधन',
    'home.features.bodypart.description': 'छाती, कंधे, बाहें, पीठ, पैर और पेट जैसे शरीर के अंगों द्वारा व्यायाम को व्यवस्थित करें।',
    'home.features.multilang.title': '19 भाषा समर्थन',
    'home.features.multilang.description': 'जापानी, अंग्रेजी, स्पेनिश, चीनी और कोरियाई सहित 19 भाषाओं का समर्थन करता है।',
    'home.features.units.title': 'इकाई स्विचिंग',
    'home.features.units.description': 'किलोग्राम (kg) और पाउंड (lb) के बीच वजन इकाइयों को स्विच करें। अपनी पसंदीदा इकाई में रिकॉर्ड करें।',
    'home.features.darkmode.title': 'डार्क मोड समर्थन',
    'home.features.darkmode.description': 'लाइट मोड, डार्क मोड के बीच चुनें या सिस्टम सेटिंग्स का पालन करें।',
    'home.languages.title': 'समर्थित भाषाएं',
    'home.languages.subtitle': 'दुनिया भर के उपयोगकर्ताओं के लिए उपलब्ध',
    'footer.tagline': 'रिकॉर्ड करें और विकसित होते रहें',
    'footer.links': 'लिंक',
    'footer.privacy': 'गोपनीयता नीति',
    'footer.terms': 'सेवा की शर्तें',
    'footer.contact': 'संपर्क',
    'footer.contact.title': 'हमसे संपर्क करें',
    'privacy.title': 'गोपनीयता नीति',
    'privacy.updated': 'अंतिम अपडेट: 12 अक्टूबर 2025',
    'terms.title': 'सेवा की शर्तें',
    'terms.updated': 'अंतिम अपडेट: 12 अक्टूबर 2025',
    'contact.title': 'हमसे संपर्क करें',
    'contact.description': 'MASCALE के बारे में किसी भी प्रश्न, फीडबैक या बग रिपोर्ट के साथ हमसे संपर्क करने में संकोच न करें',
    'contact.email.title': 'ईमेल द्वारा संपर्क',
    'contact.language.title': 'समर्थित भाषा',
    'contact.language.value': 'केवल जापानी',
    'contact.response.title': 'प्रतिक्रिया',
    'contact.response.value': 'हम शीघ्र प्रतिक्रिया देंगे',

    // Terms Page
    'terms.provider': 'प्रदाता: Takuya Atsugi',

    // Article 1
    'terms.article1.title': 'अनुच्छेद 1 (आवेदन)',
    'terms.article1.content': 'ये सेवा की शर्तें Takuya Atsugi (इसके बाद "हम" के रूप में संदर्भित) द्वारा प्रदान किए गए स्मार्टफोन एप्लिकेशन "MASCALE" (इसके बाद "यह ऐप" के रूप में संदर्भित) का उपयोग करने की शर्तों को परिभाषित करती हैं। इस ऐप का उपयोग करके, आपको इन शर्तों से सहमत माना जाता है।',

    // Article 2
    'terms.article2.title': 'अनुच्छेद 2 (ऐप सामग्री)',
    'terms.article2.intro': 'यह ऐप एक एप्लिकेशन है जो उपयोगकर्ताओं को प्रशिक्षण (शक्ति प्रशिक्षण, कार्डियो, आदि) रिकॉर्ड करने और उस इतिहास को कैलेंडर प्रारूप में प्रबंधित करने की अनुमति देने के लिए डिज़ाइन किया गया है।',
    'terms.article2.features.title': 'मुख्य विशेषताएं:',
    'terms.article2.features.1': 'कैलेंडर प्रारूप में प्रशिक्षण रिकॉर्ड प्रबंधन',
    'terms.article2.features.2': 'प्रत्येक व्यायाम के लिए सेट, वजन और दोहराव रिकॉर्डिंग',
    'terms.article2.features.3': 'वजन इकाई स्विचिंग (kg/lb)',
    'terms.article2.features.4': 'प्रशिक्षण इतिहास का दृश्यता',
    'terms.article2.features.5': 'सभी डेटा SQLite डेटाबेस का उपयोग करके डिवाइस पर स्थानीय रूप से संग्रहीत किया जाता है',

    // Article 3
    'terms.article3.title': 'अनुच्छेद 3 (मुफ्त प्रावधान और भविष्य का मुद्रीकरण)',
    'terms.article3.intro': 'यह ऐप वर्तमान में मुफ्त में प्रदान किया जा रहा है। हालांकि, हम भविष्य में निम्नलिखित मुद्रीकरण सुविधाओं को जोड़ सकते हैं।',
    'terms.article3.items.1': 'विज्ञापन प्रदर्शन: इन-ऐप विज्ञापन',
    'terms.article3.items.2': 'इन-ऐप खरीद: विज्ञापन हटाने और प्रीमियम सुविधाएं प्रदान करना (गैर-उपभोग्य वस्तुएं, पुनर्स्थापना योग्य)',
    'terms.article3.outro': 'यदि इन सुविधाओं को जोड़ा जाता है, तो हम इन शर्तों और गोपनीयता नीति को अपडेट करेंगे और ऐप के भीतर उपयोगकर्ताओं को पहले से सूचित करेंगे।',

    // Article 4
    'terms.article4.title': 'अनुच्छेद 4 (उपयोग पर्यावरण)',
    'terms.article4.intro': 'इस ऐप का उपयोग करने के लिए एक संगत स्मार्टफोन डिवाइस (iOS/Android) की आवश्यकता है।',
    'terms.article4.items.1': 'यह ऐप ऑफ़लाइन-फर्स्ट के रूप में डिज़ाइन किया गया है और बुनियादी सुविधाओं के लिए इंटरनेट कनेक्शन के बिना उपयोग किया जा सकता है',
    'terms.article4.items.2': 'विश्लेषणात्मक जानकारी (गुमनाम उपयोग सांख्यिकी) स्वचालित रूप से Firebase Analytics को भेजी जाती है जब इंटरनेट कनेक्शन उपलब्ध होता है',
    'terms.article4.items.3': 'यदि भविष्य में क्लाउड सिंक कार्यक्षमता जोड़ी जाती है, तो इंटरनेट कनेक्शन की आवश्यकता होगी',
    'terms.article4.items.4': 'उपयोगकर्ता इन वातावरणों को सेट करने की लागत (संचार शुल्क, आदि) के लिए जिम्मेदार हैं',

    // Article 5
    'terms.article5.title': 'अनुच्छेद 5 (निषिद्ध कार्य)',
    'terms.article5.intro': 'इस ऐप का उपयोग करते समय निम्नलिखित कार्य निषिद्ध हैं।',
    'terms.article5.items.1': 'कानूनों या सार्वजनिक व्यवस्था और नैतिकता का उल्लंघन करने वाले कार्य',
    'terms.article5.items.2': 'आपराधिक गतिविधियों से संबंधित कार्य',
    'terms.article5.items.3': 'ऐप कार्यों का अनधिकृत संशोधन, रिवर्स इंजीनियरिंग या डीकंपाइलेशन',
    'terms.article5.items.4': 'डेटा को अवैध रूप से हेरफेर करने के लिए ऐप के डेटाबेस (SQLite) तक सीधी पहुंच',
    'terms.article5.items.5': 'भविष्य में पेश किए जा सकने वाले सर्वर या नेटवर्क फ़ंक्शन को नष्ट या हस्तक्षेप करने वाले कार्य',
    'terms.article5.items.6': 'ऐप संचालन में हस्तक्षेप करने की संभावना वाले कार्य',
    'terms.article5.items.7': 'अन्य उपयोगकर्ताओं के बारे में व्यक्तिगत जानकारी एकत्र करना या संचय करना (भविष्य की सुविधा जोड़ के लिए)',
    'terms.article5.items.8': 'अनधिकृत पहुंच या ऐसा करने के प्रयास',
    'terms.article5.items.9': 'इस ऐप का अनधिकृत वाणिज्यिक उपयोग',
    'terms.article5.items.10': 'इन-ऐप खरीद का धोखाधड़ीपूर्ण उपयोग या रिफंड का दुरुपयोग (भविष्य की सुविधा जोड़ के लिए)',
    'terms.article5.items.11': 'अन्य कार्य जिन्हें हम अनुचित मानते हैं',

    // Article 6
    'terms.article6.title': 'अनुच्छेद 6 (ऐप प्रावधान का निलंबन)',
    'terms.article6.intro': 'हम उपयोगकर्ताओं को पूर्व सूचना के बिना इस ऐप के सभी या किसी हिस्से के प्रावधान को निलंबित या बाधित कर सकते हैं यदि हम यह निर्धारित करते हैं कि निम्नलिखित परिस्थितियों में से कोई भी मौजूद है।',
    'terms.article6.items.1': 'ऐप सिस्टम के लिए रखरखाव या अपडेट करते समय',
    'terms.article6.items.2': 'जब इस ऐप का प्रावधान भूकंप, बिजली, आग, बिजली कटौती या प्राकृतिक आपदाओं जैसी अप्रत्याशित परिस्थितियों के कारण कठिन हो जाता है',
    'terms.article6.items.3': 'जब हम यह निर्धारित करते हैं कि अन्य कारणों से इस ऐप का प्रावधान कठिन है',

    // Article 7
    'terms.article7.title': 'अनुच्छेद 7 (अस्वीकरण)',
    'terms.article7.items.1': 'यह ऐप प्रशिक्षण रिकॉर्ड प्रबंधित करने के लिए एक उपकरण है और चिकित्सा सलाह, निदान या उपचार प्रदान नहीं करता है। यदि आपको स्वास्थ्य संबंधी चिंताएं हैं, तो कृपया डॉक्टर या विशेषज्ञ से परामर्श करें।',
    'terms.article7.items.2': 'हम इस ऐप की सामग्री, संचालन या गुणवत्ता के बारे में कोई वारंटी नहीं देते हैं।',
    'terms.article7.items.3': 'हम इस ऐप के उपयोग से उत्पन्न किसी भी क्षति के लिए कोई जिम्मेदारी स्वीकार नहीं करते हैं (डेटा हानि, डिवाइस विफलता या अन्य प्रत्यक्ष या अप्रत्यक्ष क्षति सहित लेकिन इन तक सीमित नहीं)।',
    'terms.article7.items.4': 'यह ऐप SQLite डेटाबेस का उपयोग करके उपयोगकर्ता के डिवाइस पर स्थानीय रूप से डेटा संग्रहीत करता है। डिवाइस विफलता, हानि, OS अपडेट, ऐप खराबी आदि के कारण डेटा हानि के जोखिम हैं। उपयोगकर्ताओं को आवश्यकतानुसार अपनी जिम्मेदारी पर डेटा का बैकअप लेना चाहिए।',
    'terms.article7.items.5': 'वर्तमान संस्करण क्लाउड बैकअप कार्यक्षमता प्रदान नहीं करता है। भले ही यह कार्यक्षमता भविष्य में जोड़ी जाए, हम डेटा अखंडता या उपलब्धता की गारंटी नहीं देते हैं।',

    // Article 8
    'terms.article8.title': 'अनुच्छेद 8 (शर्तों में परिवर्तन)',
    'terms.article8.content': 'जब आवश्यक माना जाता है तो हम उपयोगकर्ताओं को सूचना के बिना किसी भी समय इन शर्तों को बदल सकते हैं। संशोधित शर्तें इस ऐप के भीतर पोस्ट होने पर प्रभावी हो जाएंगी।',

    // Article 9
    'terms.article9.title': 'अनुच्छेद 9 (व्यक्तिगत जानकारी का प्रबंधन)',
    'terms.article9.content': 'इस ऐप में व्यक्तिगत जानकारी का प्रबंधन अलग गोपनीयता नीति के अधीन है।',

    // Article 10
    'terms.article10.title': 'अनुच्छेद 10 (सहबद्ध कार्यक्रम)',
    'terms.article10.intro': 'ऐप में तीसरे पक्ष की सेवाओं (जैसे, iHerb) के लिए रेफ़रल कोड या सहबद्ध लिंक शामिल हो सकते हैं जो ऐप के विकास और रखरखाव का समर्थन करने के साधन के रूप में हैं। जब उपयोगकर्ता इन लिंक के माध्यम से खरीदारी करते हैं:',
    'terms.article10.items.1': 'हम तीसरे पक्ष की सेवा से कमीशन प्राप्त कर सकते हैं',
    'terms.article10.items.2': 'उपयोगकर्ताओं के लिए कोई अतिरिक्त लागत नहीं है',
    'terms.article10.items.3': 'इन रेफ़रल कोड का उपयोग पूरी तरह से स्वैच्छिक है',

    // Article 11
    'terms.article11.title': 'अनुच्छेद 11 (बहुभाषी समर्थन)',
    'terms.article11.intro': 'ऐप उपयोगकर्ता इंटरफ़ेस और कानूनी दस्तावेजों के लिए निम्नलिखित भाषाओं का समर्थन करता है:',
    'terms.article11.items.1': 'अंग्रेजी, जापानी, स्पेनिश, पुर्तगाली, जर्मन, फ्रेंच, चीनी (सरलीकृत), कोरियाई, इतालवी, इंडोनेशियाई, रूसी, तुर्की, डच, पोलिश, थाई, वियतनामी, अरबी, हिंदी और फारसी (फारसी)',
    'terms.article11.items.2': 'कानूनी दस्तावेज (सेवा की शर्तें और गोपनीयता नीति) अब सभी 19 भाषाओं में उपलब्ध हैं',
    'terms.article11.items.3': 'हालांकि हम अनुवादों में सटीकता के लिए प्रयास करते हैं, जापानी संस्करण आधिकारिक संस्करण के रूप में कार्य करता है',

    // Article 12
    'terms.article12.title': 'अनुच्छेद 12 (समर्थन)',
    'terms.article12.intro': 'इस ऐप के संबंध में पूछताछ के लिए, कृपया निम्नलिखित ईमेल पते पर हमसे संपर्क करें।',
    'terms.article12.email': 'takuya.atsugi911@gmail.com',
    'terms.article12.language': 'केवल जापानी',

    // Article 13
    'terms.article13.title': 'अनुच्छेद 13 (लागू कानून और अधिकार क्षेत्र)',
    'terms.article13.content': 'ये शर्तें जापानी कानून द्वारा शासित होंगी। इस ऐप के संबंध में किसी भी विवाद की स्थिति में, हमारे स्थान पर अधिकार क्षेत्र वाले न्यायालय का विशेष अधिकार क्षेत्र होगा।',
  },
  fa: {
    'header.privacy': 'حریم خصوصی',
    'header.terms': 'شرایط',
    'header.contact': 'تماس',
    'home.hero.badge': 'برنامه گزارش تمرین',
    'home.hero.tagline': 'ثبت کنید و به تکامل ادامه دهید',
    'home.hero.description': 'پیشرفت خود را با گزارش‌های تمرینی\nساده و شهودی تجسم کنید',
    'home.hero.download': 'دانلود در App Store',
    'home.features.title': 'ویژگی‌های کلیدی',
    'home.features.subtitle': 'MASCALE از تمرین شما پشتیبانی می‌کند',
    'home.features.calendar.title': 'گزارش‌های تقویم',
    'home.features.calendar.description': 'تاریخچه تمرین خود را در یک نگاه در قالب تقویم مشاهده کنید. به راحتی مدیریت کنید که چه وقت و چه چیزی تمرین کرده‌اید.',
    'home.features.detailed.title': 'گزارش‌های تمرینی تفصیلی',
    'home.features.detailed.description': 'ست‌ها، وزن و تکرارها را برای هر تمرین ثبت کنید. حجم کل به طور خودکار محاسبه می‌شود.',
    'home.features.bodypart.title': 'مدیریت بخش‌های بدن',
    'home.features.bodypart.description': 'تمرین‌ها را بر اساس بخش‌های بدن مانند سینه، شانه، بازو، کمر، پا و شکم سازماندهی کنید.',
    'home.features.multilang.title': 'پشتیبانی از 19 زبان',
    'home.features.multilang.description': 'از 19 زبان از جمله ژاپنی، انگلیسی، اسپانیایی، چینی و کره‌ای پشتیبانی می‌کند.',
    'home.features.units.title': 'تغییر واحد',
    'home.features.units.description': 'واحدهای وزن را بین کیلوگرم (kg) و پوند (lb) تغییر دهید. در واحد مورد علاقه خود ثبت کنید.',
    'home.features.darkmode.title': 'پشتیبانی از حالت تاریک',
    'home.features.darkmode.description': 'بین حالت روشن، حالت تاریک انتخاب کنید یا از تنظیمات سیستم پیروی کنید.',
    'home.languages.title': 'زبان‌های پشتیبانی‌شده',
    'home.languages.subtitle': 'برای کاربران در سراسر جهان در دسترس است',
    'footer.tagline': 'ثبت کنید و به تکامل ادامه دهید',
    'footer.links': 'پیوندها',
    'footer.privacy': 'سیاست حریم خصوصی',
    'footer.terms': 'شرایط خدمات',
    'footer.contact': 'تماس',
    'footer.contact.title': 'با ما تماس بگیرید',
    'privacy.title': 'سیاست حریم خصوصی',
    'privacy.updated': 'آخرین به‌روزرسانی: 12 اکتبر 2025',
    'terms.title': 'شرایط خدمات',
    'terms.updated': 'آخرین به‌روزرسانی: 12 اکتبر 2025',
    'contact.title': 'با ما تماس بگیرید',
    'contact.description': 'برای هرگونه سوال، بازخورد یا گزارش اشکال در مورد MASCALE با ما تماس بگیرید',
    'contact.email.title': 'تماس از طریق ایمیل',
    'contact.language.title': 'زبان پشتیبانی‌شده',
    'contact.language.value': 'فقط ژاپنی',
    'contact.response.title': 'پاسخ',
    'contact.response.value': 'ما به سرعت پاسخ خواهیم داد',

    // Terms Page
    'terms.provider': 'ارائه‌دهنده: Takuya Atsugi',

    // Article 1
    'terms.article1.title': 'ماده 1 (کاربرد)',
    'terms.article1.content': 'این شرایط خدمات شرایط استفاده از برنامه تلفن هوشمند "MASCALE" (که از این پس به عنوان "این برنامه" نامیده می‌شود) ارائه شده توسط Takuya Atsugi (که از این پس به عنوان "ما" نامیده می‌شود) را تعریف می‌کند. با استفاده از این برنامه، شما موافقت خود را با این شرایط اعلام می‌کنید.',

    // Article 2
    'terms.article2.title': 'ماده 2 (محتوای برنامه)',
    'terms.article2.intro': 'این برنامه برنامه‌ای است که برای اجازه دادن به کاربران برای ثبت تمرینات (تمرینات قدرتی، کاردیو و غیره) و مدیریت آن تاریخچه در قالب تقویم طراحی شده است.',
    'terms.article2.features.title': 'ویژگی‌های اصلی:',
    'terms.article2.features.1': 'مدیریت سوابق تمرین در قالب تقویم',
    'terms.article2.features.2': 'ثبت ست‌ها، وزن و تکرارها برای هر تمرین',
    'terms.article2.features.3': 'تعویض واحد وزن (kg/lb)',
    'terms.article2.features.4': 'تجسم تاریخچه تمرین',
    'terms.article2.features.5': 'تمام داده‌ها به صورت محلی بر روی دستگاه با استفاده از پایگاه داده SQLite ذخیره می‌شوند',

    // Article 3
    'terms.article3.title': 'ماده 3 (ارائه رایگان و کسب درآمد آینده)',
    'terms.article3.intro': 'این برنامه در حال حاضر به صورت رایگان ارائه می‌شود. با این حال، ما ممکن است ویژگی‌های کسب درآمد زیر را در آینده اضافه کنیم.',
    'terms.article3.items.1': 'نمایش تبلیغات: تبلیغات درون برنامه‌ای',
    'terms.article3.items.2': 'خریدهای درون برنامه‌ای: ارائه حذف تبلیغات و ویژگی‌های ممتاز (اقلام غیر مصرفی، قابل بازیابی)',
    'terms.article3.outro': 'اگر این ویژگی‌ها اضافه شوند، ما این شرایط و سیاست حریم خصوصی را به‌روزرسانی کرده و کاربران را از قبل در داخل برنامه مطلع خواهیم کرد.',

    // Article 4
    'terms.article4.title': 'ماده 4 (محیط استفاده)',
    'terms.article4.intro': 'استفاده از این برنامه به دستگاه تلفن هوشمند سازگار (iOS/Android) نیاز دارد.',
    'terms.article4.items.1': 'این برنامه به عنوان آفلاین اول طراحی شده و می‌تواند بدون اتصال به اینترنت برای ویژگی‌های اساسی استفاده شود',
    'terms.article4.items.2': 'اطلاعات تحلیلی (آمار استفاده ناشناس) به طور خودکار به Firebase Analytics ارسال می‌شود زمانی که اتصال به اینترنت در دسترس باشد',
    'terms.article4.items.3': 'اگر قابلیت همگام‌سازی ابری در آینده اضافه شود، اتصال به اینترنت مورد نیاز خواهد بود',
    'terms.article4.items.4': 'کاربران مسئول هزینه‌های راه‌اندازی این محیط‌ها هستند (هزینه‌های ارتباطی و غیره)',

    // Article 5
    'terms.article5.title': 'ماده 5 (اعمال ممنوع)',
    'terms.article5.intro': 'اعمال زیر هنگام استفاده از این برنامه ممنوع است.',
    'terms.article5.items.1': 'اعمالی که قوانین یا نظم عمومی و اخلاق را نقض می‌کنند',
    'terms.article5.items.2': 'اعمال مربوط به فعالیت‌های جنایی',
    'terms.article5.items.3': 'تغییر غیرمجاز، مهندسی معکوس یا دیکامپایل کردن عملکردهای برنامه',
    'terms.article5.items.4': 'دسترسی مستقیم به پایگاه داده برنامه (SQLite) برای دستکاری غیرقانونی داده‌ها',
    'terms.article5.items.5': 'اعمالی که سرورها یا عملکردهای شبکه که ممکن است در آینده معرفی شوند را تخریب یا مداخله می‌کنند',
    'terms.article5.items.6': 'اعمالی که احتمالاً با عملیات برنامه تداخل دارند',
    'terms.article5.items.7': 'جمع‌آوری یا انباشت اطلاعات شخصی در مورد سایر کاربران (برای افزودن ویژگی‌های آینده)',
    'terms.article5.items.8': 'دسترسی غیرمجاز یا تلاش برای انجام آن',
    'terms.article5.items.9': 'استفاده تجاری غیرمجاز از این برنامه',
    'terms.article5.items.10': 'استفاده کلاهبردارانه از خریدهای درون برنامه‌ای یا سوء استفاده از بازپرداخت‌ها (برای افزودن ویژگی‌های آینده)',
    'terms.article5.items.11': 'سایر اعمالی که ما نامناسب تشخیص می‌دهیم',

    // Article 6
    'terms.article6.title': 'ماده 6 (تعلیق ارائه برنامه)',
    'terms.article6.intro': 'ما ممکن است ارائه تمام یا بخشی از این برنامه را بدون اطلاع قبلی به کاربران تعلیق یا قطع کنیم اگر تشخیص دهیم که هر یک از شرایط زیر وجود دارد.',
    'terms.article6.items.1': 'هنگام انجام نگهداری یا به‌روزرسانی سیستم برنامه',
    'terms.article6.items.2': 'زمانی که ارائه این برنامه به دلیل force majeure مانند زلزله، صاعقه، آتش‌سوزی، قطع برق یا بلایای طبیعی دشوار می‌شود',
    'terms.article6.items.3': 'زمانی که تشخیص می‌دهیم که ارائه این برنامه به دلایل دیگر دشوار است',

    // Article 7
    'terms.article7.title': 'ماده 7 (سلب مسئولیت)',
    'terms.article7.items.1': 'این برنامه ابزاری برای مدیریت سوابق تمرین است و مشاوره پزشکی، تشخیص یا درمان ارائه نمی‌دهد. اگر نگرانی‌های سلامتی دارید، لطفاً با پزشک یا متخصص مشورت کنید.',
    'terms.article7.items.2': 'ما هیچ ضمانتی در مورد محتوا، عملکرد یا کیفیت این برنامه ارائه نمی‌دهیم.',
    'terms.article7.items.3': 'ما هیچ مسئولیتی در قبال خسارات ناشی از استفاده از این برنامه (از جمله اما نه محدود به از دست دادن داده‌ها، خرابی دستگاه یا سایر خسارات مستقیم یا غیرمستقیم) نمی‌پذیریم.',
    'terms.article7.items.4': 'این برنامه داده‌ها را به صورت محلی بر روی دستگاه کاربر با استفاده از پایگاه داده SQLite ذخیره می‌کند. خطرات از دست دادن داده‌ها به دلیل خرابی دستگاه، گم شدن، به‌روزرسانی‌های سیستم عامل، نقص برنامه و غیره وجود دارد. کاربران باید در صورت نیاز به مسئولیت خود از داده‌ها نسخه پشتیبان تهیه کنند.',
    'terms.article7.items.5': 'نسخه فعلی قابلیت پشتیبان‌گیری ابری را ارائه نمی‌دهد. حتی اگر این قابلیت در آینده اضافه شود، ما یکپارچگی یا در دسترس بودن داده‌ها را تضمین نمی‌کنیم.',

    // Article 8
    'terms.article8.title': 'ماده 8 (تغییرات در شرایط)',
    'terms.article8.content': 'ما ممکن است این شرایط را در هر زمان بدون اطلاع به کاربران تغییر دهیم زمانی که لازم تشخیص داده شود. شرایط بازبینی شده زمانی که در این برنامه منتشر شوند لازم‌الاجرا خواهند شد.',

    // Article 9
    'terms.article9.title': 'ماده 9 (رسیدگی به اطلاعات شخصی)',
    'terms.article9.content': 'رسیدگی به اطلاعات شخصی در این برنامه تابع سیاست حریم خصوصی جداگانه است.',

    // Article 10
    'terms.article10.title': 'ماده 10 (برنامه وابسته)',
    'terms.article10.intro': 'برنامه ممکن است شامل کدهای ارجاع یا لینک‌های وابسته به خدمات شخص ثالث (مثلاً iHerb) به عنوان ابزاری برای پشتیبانی از توسعه و نگهداری برنامه باشد. زمانی که کاربران از طریق این لینک‌ها خرید می‌کنند:',
    'terms.article10.items.1': 'ما ممکن است کمیسیونی از خدمات شخص ثالث دریافت کنیم',
    'terms.article10.items.2': 'هیچ هزینه اضافی برای کاربران وجود ندارد',
    'terms.article10.items.3': 'استفاده از این کدهای ارجاع کاملاً داوطلبانه است',

    // Article 11
    'terms.article11.title': 'ماده 11 (پشتیبانی چندزبانه)',
    'terms.article11.intro': 'برنامه از زبان‌های زیر برای رابط کاربری و اسناد قانونی پشتیبانی می‌کند:',
    'terms.article11.items.1': 'انگلیسی، ژاپنی، اسپانیایی، پرتغالی، آلمانی، فرانسوی، چینی (ساده‌شده)، کره‌ای، ایتالیایی، اندونزیایی، روسی، ترکی، هلندی، لهستانی، تایلندی، ویتنامی، عربی، هندی و فارسی (فارسی)',
    'terms.article11.items.2': 'اسناد قانونی (شرایط خدمات و سیاست حریم خصوصی) اکنون در تمام 19 زبان در دسترس هستند',
    'terms.article11.items.3': 'در حالی که ما برای دقت در ترجمه‌ها تلاش می‌کنیم، نسخه ژاپنی به عنوان نسخه رسمی عمل می‌کند',

    // Article 12
    'terms.article12.title': 'ماده 12 (پشتیبانی)',
    'terms.article12.intro': 'برای سوالات مربوط به این برنامه، لطفاً با ما در آدرس ایمیل زیر تماس بگیرید.',
    'terms.article12.email': 'takuya.atsugi911@gmail.com',
    'terms.article12.language': 'فقط ژاپنی',

    // Article 13
    'terms.article13.title': 'ماده 13 (قانون حاکم و صلاحیت قضایی)',
    'terms.article13.content': 'این شرایط تابع قانون ژاپن خواهد بود. در صورت بروز اختلاف در مورد این برنامه، دادگاهی که صلاحیت قضایی بر موقعیت ما دارد، صلاحیت انحصاری خواهد داشت.',
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ja')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null
    const validLanguages: Language[] = ['ja', 'en', 'es', 'pt', 'de', 'fr', 'zh', 'ko', 'it', 'id', 'ru', 'tr', 'nl', 'pl', 'th', 'vi', 'ar', 'hi', 'fa']
    if (savedLanguage && validLanguages.includes(savedLanguage)) {
      setLanguageState(savedLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ja']] || translations['en'][key as keyof typeof translations['en']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
