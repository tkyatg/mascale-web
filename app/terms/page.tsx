'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Terms() {
  const { t, language } = useLanguage()

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-16 md:py-24">
        <div className="mb-16 md:mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            {t('terms.title')}
          </h1>
          <p className="text-sm text-gray-400">{t('terms.updated')}</p>
        </div>

        {language === 'ja' ? (
          <div className="space-y-16">
            <Section title="第1条(適用)">
              <p className="text-gray-600 leading-relaxed">
                本規約は、厚木拓哉(以下「当方」といいます)が提供するスマートフォンアプリケーション「MASCALE 」(以下「本アプリ」といいます)の利用条件を定めるものです。本アプリをご利用いただくことで、本規約に同意したものとみなされます。
              </p>
            </Section>

            <Section title="第2条(本アプリの内容)">
              <p className="text-gray-600 leading-relaxed mb-6">本アプリは、ユーザーがトレーニング(筋力トレーニング、カーディオ等)の記録を行い、カレンダー形式でその履歴を管理することを目的としたアプリケーションです。</p>
              <p className="font-semibold mb-4 text-gray-900">主な機能:</p>
              <ul className="space-y-4">
                <ListItem>カレンダー形式でのトレーニング記録の管理</ListItem>
                <ListItem>エクササイズごとのセット、重量、レップ数の記録</ListItem>
                <ListItem>体重単位の切り替え(kg/lb)</ListItem>
                <ListItem>トレーニング履歴の可視化</ListItem>
                <ListItem>すべてのデータはSQLiteデータベースを使用して端末内にローカル保存されます</ListItem>
              </ul>
            </Section>

            <Section title="第3条(無料提供および将来的な収益化)">
              <p className="text-gray-600 leading-relaxed mb-6">本アプリは現在無料で提供されています。ただし、将来的に以下の収益化機能を追加する可能性があります。</p>
              <ul className="space-y-4">
                <ListItem>広告の表示:アプリ内での広告配信</ListItem>
                <ListItem>アプリ内課金:広告削除機能やプレミアム機能の提供(非消費型アイテム、復元可能)</ListItem>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-6">これらの機能を追加する場合は、本規約およびプライバシーポリシーを更新し、アプリ内で事前に通知いたします。</p>
            </Section>

            <Section title="第4条(利用環境)">
              <p className="text-gray-600 leading-relaxed mb-6">本アプリの利用には、対応するスマートフォン端末(iOS/Android)が必要です。</p>
              <ul className="space-y-4">
                <ListItem>本アプリはオフラインファーストで設計されており、インターネット接続がなくても基本機能を利用できます</ListItem>
                <ListItem>アナリティクス情報の送信など、一部の機能にはインターネット接続が必要です</ListItem>
                <ListItem>将来的にクラウド同期機能を追加する場合は、インターネット接続が必要になります</ListItem>
                <ListItem>これらの環境整備にかかる費用(通信料等)は、ユーザーの負担とします</ListItem>
              </ul>
            </Section>

            <Section title="第5条(禁止事項)">
              <p className="text-gray-600 leading-relaxed mb-4">本アプリの利用にあたり、以下の行為を禁止します。</p>
              <ul className="space-y-4">
                <ListItem>法令または公序良俗に違反する行為</ListItem>
                <ListItem>犯罪行為に関連する行為</ListItem>
                <ListItem>本アプリの機能を不正に改変、リバースエンジニアリング、逆コンパイルする行為</ListItem>
                <ListItem>本アプリのデータベース(SQLite)に直接アクセスし、不正にデータを操作する行為</ListItem>
                <ListItem>将来的に導入されるサーバーやネットワークの機能を破壊したり、妨害したりする行為</ListItem>
                <ListItem>本アプリの運営を妨害するおそれのある行為</ListItem>
                <ListItem>他のユーザーに関する個人情報等を収集または蓄積する行為(将来的な機能追加時)</ListItem>
                <ListItem>不正アクセスをし、またはこれを試みる行為</ListItem>
                <ListItem>本アプリを無断で商業目的で利用する行為</ListItem>
                <ListItem>アプリ内課金の不正利用や返金の濫用(将来的な機能追加時)</ListItem>
                <ListItem>その他、当方が不適切と判断する行為</ListItem>
              </ul>
            </Section>

            <Section title="第6条(本アプリの提供の停止等)">
              <p className="text-gray-600 leading-relaxed mb-4">当方は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本アプリの全部または一部の提供を停止または中断することができるものとします。</p>
              <ul className="space-y-4">
                <ListItem>本アプリにかかるシステムの保守点検または更新を行う場合</ListItem>
                <ListItem>地震、落雷、火災、停電または天災などの不可抗力により、本アプリの提供が困難となった場合</ListItem>
                <ListItem>その他、当方が本アプリの提供が困難と判断した場合</ListItem>
              </ul>
            </Section>

            <Section title="第7条(免責事項)">
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>1. 本アプリは、トレーニング記録を管理するためのツールであり、医療的アドバイス、診断、治療を提供するものではありません。健康上の問題がある場合は、必ず医師または専門家にご相談ください。</p>
                <p>2. 当方は、本アプリの内容、動作、品質について、いかなる保証も行いません。</p>
                <p>3. 当方は、本アプリの利用によって生じたいかなる損害(データの損失、デバイスの故障、その他の直接的または間接的な損害を含みますが、これらに限りません)について、一切の責任を負いません。</p>
                <p>4. 本アプリは、SQLiteデータベースを使用してユーザーの端末にデータをローカル保存します。端末の故障、紛失、OS アップデート、アプリの不具合等によるデータ損失のリスクがあります。ユーザーは自己の責任においてデータのバックアップを行うものとします。</p>
                <p>5. 現バージョンではクラウドバックアップ機能は提供されていません。将来的に同機能を追加した場合でも、データの完全性や可用性を保証するものではありません。</p>
              </div>
            </Section>

            <Section title="第8条(利用規約の変更)">
              <p className="text-gray-600 leading-relaxed">
                当方は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。変更後の本規約は、本アプリ内に掲載したときから効力を生じるものとします。
              </p>
            </Section>

            <Section title="第9条(個人情報の取扱い)">
              <p className="text-gray-600 leading-relaxed">
                本アプリにおける個人情報の取扱いについては、別途「
                <Link href="/privacy" className="text-green-600 hover:text-green-700 underline decoration-1 underline-offset-2">
                  プライバシーポリシー
                </Link>
                」に定めるところによります。
              </p>
            </Section>

            <Section title="第10条(サポート)">
              <p className="text-gray-600 leading-relaxed mb-8">本アプリに関するお問い合わせは、以下のメールアドレスまでご連絡ください。</p>
              <div className="space-y-2 text-gray-600">
                <p>
                  <span className="text-gray-500 text-sm">メール</span><br />
                  <a href="mailto:takuya.atsugi911@gmail.com" className="text-green-600 hover:text-green-700 underline decoration-1 underline-offset-2">
                    takuya.atsugi911@gmail.com
                  </a>
                </p>
                <p>
                  <span className="text-gray-500 text-sm">対応言語</span><br />
                  日本語のみ
                </p>
              </div>
            </Section>

            <Section title="第11条(準拠法・裁判管轄)">
              <p className="text-gray-600 leading-relaxed">
                本規約の解釈にあたっては、日本法を準拠法とします。本アプリに関して紛争が生じた場合には、当方の所在地を管轄する裁判所を専属的合意管轄とします。
              </p>
            </Section>
          </div>
        ) : (
          <div className="space-y-16">
            <Section title="Article 1 (Application)">
              <p className="text-gray-600 leading-relaxed">
                These Terms of Service define the conditions for using the smartphone application &quot;MASCALE&quot; (hereinafter referred to as &quot;this App&quot;) provided by Takuya Atsugi (hereinafter referred to as &quot;we&quot;). By using this App, you are deemed to have agreed to these Terms.
              </p>
            </Section>

            <Section title="Article 2 (App Content)">
              <p className="text-gray-600 leading-relaxed mb-6">This App is an application designed for users to record training (strength training, cardio, etc.) and manage that history in calendar format.</p>
              <p className="font-semibold mb-4 text-gray-900">Main Features:</p>
              <ul className="space-y-4">
                <ListItem>Training record management in calendar format</ListItem>
                <ListItem>Recording sets, weight, and reps for each exercise</ListItem>
                <ListItem>Weight unit switching (kg/lb)</ListItem>
                <ListItem>Visualization of training history</ListItem>
                <ListItem>All data is stored locally on the device using SQLite database</ListItem>
              </ul>
            </Section>

            <Section title="Article 3 (Free Provision and Future Monetization)">
              <p className="text-gray-600 leading-relaxed mb-6">This App is currently provided free of charge. However, we may add the following monetization features in the future.</p>
              <ul className="space-y-4">
                <ListItem>Ad display: In-app advertising</ListItem>
                <ListItem>In-app purchases: Providing ad removal and premium features (non-consumable items, restorable)</ListItem>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-6">If these features are added, we will update these Terms and the Privacy Policy and notify users within the app in advance.</p>
            </Section>

            <Section title="Article 4 (Usage Environment)">
              <p className="text-gray-600 leading-relaxed mb-6">Using this App requires a compatible smartphone device (iOS/Android).</p>
              <ul className="space-y-4">
                <ListItem>This App is designed as offline-first and can be used without an internet connection for basic features</ListItem>
                <ListItem>Some features, such as sending analytics information, require an internet connection</ListItem>
                <ListItem>If cloud sync functionality is added in the future, an internet connection will be required</ListItem>
                <ListItem>Users are responsible for the costs of setting up these environments (communication fees, etc.)</ListItem>
              </ul>
            </Section>

            <Section title="Article 5 (Prohibited Acts)">
              <p className="text-gray-600 leading-relaxed mb-4">The following acts are prohibited when using this App.</p>
              <ul className="space-y-4">
                <ListItem>Acts that violate laws or public order and morals</ListItem>
                <ListItem>Acts related to criminal activities</ListItem>
                <ListItem>Unauthorized modification, reverse engineering, or decompilation of app functions</ListItem>
                <ListItem>Direct access to the app&apos;s database (SQLite) to illegally manipulate data</ListItem>
                <ListItem>Acts that destroy or interfere with servers or network functions that may be introduced in the future</ListItem>
                <ListItem>Acts likely to interfere with app operations</ListItem>
                <ListItem>Collecting or accumulating personal information about other users (for future feature additions)</ListItem>
                <ListItem>Unauthorized access or attempts to do so</ListItem>
                <ListItem>Unauthorized commercial use of this App</ListItem>
                <ListItem>Fraudulent use of in-app purchases or abuse of refunds (for future feature additions)</ListItem>
                <ListItem>Other acts that we deem inappropriate</ListItem>
              </ul>
            </Section>

            <Section title="Article 6 (Suspension of App Provision)">
              <p className="text-gray-600 leading-relaxed mb-4">We may suspend or interrupt provision of all or part of this App without prior notice to users if we determine any of the following circumstances exist.</p>
              <ul className="space-y-4">
                <ListItem>When performing maintenance or updates to the app system</ListItem>
                <ListItem>When provision of this App becomes difficult due to force majeure such as earthquakes, lightning, fires, power outages, or natural disasters</ListItem>
                <ListItem>When we determine that provision of this App is difficult for other reasons</ListItem>
              </ul>
            </Section>

            <Section title="Article 7 (Disclaimer)">
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>1. This App is a tool for managing training records and does not provide medical advice, diagnosis, or treatment. If you have health concerns, please consult a physician or specialist.</p>
                <p>2. We make no warranties regarding the content, operation, or quality of this App.</p>
                <p>3. We accept no responsibility for any damages arising from the use of this App (including but not limited to data loss, device failure, or other direct or indirect damages).</p>
                <p>4. This App stores data locally on the user&apos;s device using SQLite database. There are risks of data loss due to device failure, loss, OS updates, app malfunctions, etc. Users shall back up data at their own responsibility as necessary.</p>
                <p>5. The current version does not provide cloud backup functionality. Even if this functionality is added in the future, we do not guarantee data integrity or availability.</p>
              </div>
            </Section>

            <Section title="Article 8 (Changes to Terms)">
              <p className="text-gray-600 leading-relaxed">
                We may change these Terms at any time without notice to users when deemed necessary. The revised Terms shall become effective when posted within this App.
              </p>
            </Section>

            <Section title="Article 9 (Handling of Personal Information)">
              <p className="text-gray-600 leading-relaxed">
                The handling of personal information in this App is subject to the separate{' '}
                <Link href="/privacy" className="text-green-600 hover:text-green-700 underline decoration-1 underline-offset-2">
                  Privacy Policy
                </Link>
                .
              </p>
            </Section>

            <Section title="Article 10 (Support)">
              <p className="text-gray-600 leading-relaxed mb-8">For inquiries regarding this App, please contact us at the following email address.</p>
              <div className="space-y-2 text-gray-600">
                <p>
                  <span className="text-gray-500 text-sm">Email</span><br />
                  <a href="mailto:takuya.atsugi911@gmail.com" className="text-green-600 hover:text-green-700 underline decoration-1 underline-offset-2">
                    takuya.atsugi911@gmail.com
                  </a>
                </p>
                <p>
                  <span className="text-gray-500 text-sm">Supported Language</span><br />
                  Japanese only
                </p>
              </div>
            </Section>

            <Section title="Article 11 (Governing Law and Jurisdiction)">
              <p className="text-gray-600 leading-relaxed">
                These Terms shall be governed by Japanese law. In the event of any disputes regarding this App, the court with jurisdiction over our location shall have exclusive jurisdiction.
              </p>
            </Section>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}

function Section({ title, children }: { title?: string, children: React.ReactNode }) {
  return (
    <section>
      {title && <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">{title}</h2>}
      <div>{children}</div>
    </section>
  )
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start text-gray-600 leading-relaxed">
      <span className="text-gray-300 mr-3 mt-2 flex-shrink-0">•</span>
      <span>{children}</span>
    </li>
  )
}
