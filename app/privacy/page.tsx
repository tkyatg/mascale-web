'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Privacy() {
  const { t, language } = useLanguage()

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-16 md:py-24">
        <div className="mb-16 md:mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            {t('privacy.title')}
          </h1>
          <p className="text-sm text-gray-400">{t('privacy.updated')}</p>
        </div>

        {language === 'ja' ? (
          <div className="space-y-16">
            <Section>
              <p className="text-gray-600 leading-relaxed">
                厚木拓哉(以下「当方」といいます)は、本アプリ「MASCALE」(以下「本アプリ」といいます)における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー(以下「本ポリシー」といいます)を定めます。
              </p>
            </Section>

            <Section title="第1条(個人情報)">
              <p className="text-gray-600 leading-relaxed">
                「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報を指します。
              </p>
            </Section>

            <Section title="第2条(収集する情報)">
              <p className="text-gray-600 leading-relaxed mb-8">現在、本アプリは以下のとおり情報を取り扱います。</p>

              <SubSection title="データの保存方法">
                <ul className="space-y-4">
                  <ListItem>本アプリは、SQLiteデータベースを使用して、すべてのデータ(トレーニング記録、エクササイズ情報、設定情報等)をユーザーの端末内にローカル保存します</ListItem>
                  <ListItem>体重の内部単位はキログラム(kg)で保存され、UI上で kg/lb の切り替えが可能です</ListItem>
                  <ListItem>当方のサーバーやクラウドサービスに、トレーニングデータや個人情報を送信しません</ListItem>
                </ul>
              </SubSection>

              <SubSection title="アナリティクス">
                <ul className="space-y-4">
                  <ListItem>アプリの改善を目的として、匿名の使用統計情報を収集しています(例:アプリ起動、ワークアウト完了、エクササイズ追加、セット記録、招待コードコピーなどのイベント)</ListItem>
                  <ListItem>これらの情報は、Firebase Analytics(Google)を使用して、個人を特定できない形式で収集されます</ListItem>
                  <ListItem>以下の種類の情報を収集しています:</ListItem>
                  <li className="flex items-start text-gray-600 leading-relaxed ml-6">
                    <span className="text-gray-300 mr-3 mt-2 flex-shrink-0">◦</span>
                    <span>使用イベント:app_open(アプリ起動)、workout_completed(ワークアウト完了)、exercise_added(エクササイズ追加)、set_logged(セット記録)、invitation_code_copied(招待コードコピー)</span>
                  </li>
                  <li className="flex items-start text-gray-600 leading-relaxed ml-6">
                    <span className="text-gray-300 mr-3 mt-2 flex-shrink-0">◦</span>
                    <span>数値ユーザープロパティ:累計ワークアウト数、週あたりワークアウト数、平均部位数、連続記録日数、部位使用率など</span>
                  </li>
                  <li className="flex items-start text-gray-600 leading-relaxed ml-6">
                    <span className="text-gray-300 mr-3 mt-2 flex-shrink-0">◦</span>
                    <span>技術情報:デバイス種類、OSバージョン、アプリバージョン</span>
                  </li>
                  <ListItem>アナリティクスデータは、ユーザーの継続率パターンを理解し、アプリ機能を改善する目的のみで使用されます</ListItem>
                  <ListItem>個人を特定できる情報(氏名、メールアドレスなど)は一切収集しません</ListItem>
                  <ListItem>現バージョンではアナリティクスをオフにすることはできませんが、すべてのデータは匿名化されています</ListItem>
                </ul>
              </SubSection>

              <SubSection title="アプリ内レビュー">
                <ul className="space-y-4">
                  <ListItem>本アプリは、App Store(iOS)およびGoogle Play ストア(Android)が提供するアプリ内レビュー機能を使用します</ListItem>
                  <ListItem>この機能により、ユーザーはアプリを離れることなくアプリを評価・レビューできます</ListItem>
                  <ListItem>レビューデータはAppleおよびGoogleがそれぞれ処理し、当方はこの情報を収集または保存しません</ListItem>
                  <ListItem>レビューのリクエストは、ユーザー体験を妨げないよう、使用パターンに基づいて自動的にトリガーされます</ListItem>
                </ul>
              </SubSection>

              <SubSection title="将来のバージョン">
                <p className="text-gray-600 leading-relaxed mb-6">今後、以下の機能を追加する可能性があります。その際は本ポリシーを更新し、アプリ内で通知いたします。</p>
                <ul className="space-y-4">
                  <ListItem>クラウド同期機能:ユーザーの同意のもと、トレーニングデータをクラウドに保存し、複数端末間で同期</ListItem>
                  <ListItem>ユーザーアカウント機能:匿名認証またはメールアドレス等を使用したサインイン</ListItem>
                  <ListItem>広告表示:アプリ内での広告配信(アプリ内課金により削除可能)</ListItem>
                </ul>
              </SubSection>
            </Section>

            <Section title="第3条(データの保存場所と削除)">
              <ul className="space-y-4">
                <ListItem>本アプリで記録したすべてのデータは、SQLiteデータベースとしてユーザーの端末内にのみ保存されます</ListItem>
                <ListItem>データは端末のアプリ専用領域に保存され、他のアプリからアクセスされることはありません</ListItem>
                <ListItem>ユーザーが本アプリをアンインストールした場合、すべてのデータは端末から完全に削除されます</ListItem>
                <ListItem>当方は、ユーザーのデータにアクセスすることはできません</ListItem>
                <ListItem>現バージョンではクラウドバックアップ機能はありませんので、端末の故障や紛失に備えて、ユーザー自身でバックアップを行うことを推奨します</ListItem>
              </ul>
            </Section>

            <Section title="第4条(利用目的)">
              <p className="text-gray-600 leading-relaxed mb-6">本アプリで取り扱う情報は、以下の目的で利用します。</p>
              <ul className="space-y-4">
                <ListItem>トレーニング記録(エクササイズ、セット、重量、レップ数等)の管理および表示</ListItem>
                <ListItem>アプリの設定情報(単位の設定など)の保存</ListItem>
                <ListItem>カレンダー表示およびトレーニング履歴の可視化</ListItem>
                <ListItem>匿名の使用統計情報の収集によるアプリの機能向上およびユーザー体験の改善</ListItem>
                <ListItem>将来的な機能追加(クラウド同期、広告表示、テンプレート機能、ボディメトリクス等)に伴うデータ処理</ListItem>
              </ul>
            </Section>

            <Section title="第5条(免責事項)">
              <ul className="space-y-4">
                <ListItem>本アプリは、データを端末にローカル保存します。端末の故障、紛失、またはアプリの不具合等によるデータの損失について、当方は一切の責任を負いません</ListItem>
                <ListItem>ユーザーは自己の責任において、必要に応じてデータのバックアップを行うものとします</ListItem>
              </ul>
            </Section>

            <Section title="第6条(第三者提供)">
              <p className="text-gray-600 leading-relaxed mb-8">本アプリは、以下の第三者サービスを利用する場合があります。</p>

              <SubSection title="アナリティクスサービス">
                <ul className="space-y-4">
                  <ListItem>Firebase Analytics(Google):匿名の使用統計情報を収集し、アプリの改善に利用</ListItem>
                  <ListItem>収集される情報は個人を特定できない形式であり、デバイスID、アプリの使用状況、操作イベント等が含まれます</ListItem>
                  <ListItem>
                    Firebase Analyticsのプライバシーポリシー:
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 ml-1 underline decoration-1 underline-offset-2">
                      https://policies.google.com/privacy
                    </a>
                  </ListItem>
                </ul>
              </SubSection>

              <SubSection title="将来的なサービス">
                <p className="text-gray-600 leading-relaxed mb-6">以下のサービスを導入する場合は、本ポリシーを更新し、事前に通知いたします。</p>
                <ul className="space-y-4">
                  <ListItem>広告配信サービス:アプリ内広告の表示(ユーザーの興味関心に基づく広告を含む場合があります)</ListItem>
                  <ListItem>クラウドストレージサービス:トレーニングデータの同期およびバックアップ</ListItem>
                  <ListItem>決済サービス:アプリ内課金の処理(App Store、Google Play)</ListItem>
                </ul>
              </SubSection>
            </Section>

            <Section title="第7条(アフィリエイトプログラム)">
              <p className="text-gray-600 leading-relaxed mb-8">本アプリは、アプリの開発・維持のサポート手段として、第三者サービス(例:iHerb)への紹介コードまたはアフィリエイトリンクを含む場合があります。</p>

              <SubSection title="情報の取扱い">
                <ul className="space-y-4">
                  <ListItem>当方は、アフィリエイトリンクの使用に関連する個人情報を収集または保存しません</ListItem>
                  <ListItem>ユーザーがアフィリエイトリンクをクリックまたは紹介コードを使用すると、第三者のウェブサイトに移動します</ListItem>
                  <ListItem>第三者のウェブサイトで提供される情報は、それぞれのプライバシーポリシーの対象となります</ListItem>
                  <ListItem>当方は、第三者サービスから集約された、個人を特定できない統計情報(例:紹介数、獲得した手数料)を受け取る場合があります</ListItem>
                </ul>
              </SubSection>
            </Section>

            <Section title="第8条(多言語対応)">
              <p className="text-gray-600 leading-relaxed mb-6">本アプリは、ユーザーインターフェースにおいて以下の言語に対応しています:</p>
              <ul className="space-y-4">
                <ListItem>英語、日本語、スペイン語、ポルトガル語、ドイツ語、フランス語、中国語(簡体字)、韓国語、イタリア語、インドネシア語、ロシア語、トルコ語、オランダ語、ポーランド語、タイ語、ベトナム語、アラビア語、ヒンディー語、ペルシャ語(ファルシ語)</ListItem>
                <ListItem>法的文書(利用規約およびプライバシーポリシー)は現在、英語と日本語のみで提供されています</ListItem>
                <ListItem>その他の言語のユーザーには、法的文書の英語版が表示されます</ListItem>
                <ListItem>言語設定は端末にローカル保存され、サーバーに送信されることはありません</ListItem>
              </ul>
            </Section>

            <Section title="第9条(プライバシーポリシーの変更)">
              <p className="text-gray-600 leading-relaxed">
                本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。変更後のプライバシーポリシーは、本アプリ内に掲載したときから効力を生じるものとします。
              </p>
            </Section>

            <Section title="第10条(お問い合わせ窓口)">
              <p className="text-gray-600 leading-relaxed mb-8">本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。</p>
              <div className="space-y-2 text-gray-600">
                <p>
                  <span className="text-gray-500 text-sm">メールアドレス</span><br />
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
          </div>
        ) : (
          <div className="space-y-16">
            <Section>
              <p className="text-gray-600 leading-relaxed">
                Takuya Atsugi (hereinafter referred to as &quot;we&quot;) establishes this Privacy Policy (hereinafter referred to as &quot;this Policy&quot;) regarding the handling of users&apos; personal information in the smartphone application &quot;MASCALE&quot; (hereinafter referred to as &quot;this App&quot;) as follows.
              </p>
            </Section>

            <Section title="Article 1 (Personal Information)">
              <p className="text-gray-600 leading-relaxed">
                &quot;Personal Information&quot; refers to &quot;personal information&quot; as defined in the Personal Information Protection Act, which is information about a living individual that can identify a specific individual through name, date of birth, address, telephone number, contact information, or other descriptions contained in such information.
              </p>
            </Section>

            <Section title="Article 2 (Information Collected)">
              <p className="text-gray-600 leading-relaxed mb-8">Currently, this App handles information as follows.</p>

              <SubSection title="Data Storage Method">
                <ul className="space-y-4">
                  <ListItem>This App uses SQLite database to store all data (training records, exercise information, settings, etc.) locally on the user&apos;s device</ListItem>
                  <ListItem>Weight internal units are stored in kilograms (kg), with UI options to switch between kg/lb</ListItem>
                  <ListItem>We do not transmit training data or personal information to our servers or cloud services</ListItem>
                </ul>
              </SubSection>

              <SubSection title="Analytics">
                <ul className="space-y-4">
                  <ListItem>For the purpose of improving the App, we collect anonymous usage statistics (e.g., app launch, workout completion, exercise addition, set logging, and invitation code copying events)</ListItem>
                  <ListItem>This information is collected in a form that cannot identify individuals using Firebase Analytics (Google)</ListItem>
                  <ListItem>The following types of information are collected:</ListItem>
                  <li className="flex items-start text-gray-600 leading-relaxed ml-6">
                    <span className="text-gray-300 mr-3 mt-2 flex-shrink-0">◦</span>
                    <span>Usage events: app_open, workout_completed, exercise_added, set_logged, invitation_code_copied</span>
                  </li>
                  <li className="flex items-start text-gray-600 leading-relaxed ml-6">
                    <span className="text-gray-300 mr-3 mt-2 flex-shrink-0">◦</span>
                    <span>Numerical user properties: lifetime workout count, workouts per week, average body parts per workout, current streak, body part usage rates, etc.</span>
                  </li>
                  <li className="flex items-start text-gray-600 leading-relaxed ml-6">
                    <span className="text-gray-300 mr-3 mt-2 flex-shrink-0">◦</span>
                    <span>Technical information: device type, OS version, app version</span>
                  </li>
                  <ListItem>Analytics data is used solely for understanding user retention patterns and improving app features</ListItem>
                  <ListItem>No personally identifiable information (name, email, etc.) is collected</ListItem>
                  <ListItem>Analytics cannot be disabled in the current version, but all data is anonymized</ListItem>
                </ul>
              </SubSection>

              <SubSection title="In-App Review">
                <ul className="space-y-4">
                  <ListItem>The App uses the in-app review feature provided by the App Store (iOS) and Google Play Store (Android)</ListItem>
                  <ListItem>This feature allows users to rate and review the App without leaving the App</ListItem>
                  <ListItem>The review data is handled by Apple and Google respectively, and we do not collect or store this information</ListItem>
                  <ListItem>The review request is triggered automatically based on usage patterns to avoid disrupting the user experience</ListItem>
                </ul>
              </SubSection>

              <SubSection title="Future Versions">
                <p className="text-gray-600 leading-relaxed mb-6">We may add the following features in the future. In that case, we will update this Policy and notify users within the app.</p>
                <ul className="space-y-4">
                  <ListItem>Cloud sync feature: With user consent, store training data in the cloud and sync across multiple devices</ListItem>
                  <ListItem>User account feature: Sign-in using anonymous authentication or email address</ListItem>
                  <ListItem>Ad display: In-app advertising (removable through in-app purchase)</ListItem>
                </ul>
              </SubSection>
            </Section>

            <Section title="Article 3 (Data Storage Location and Deletion)">
              <ul className="space-y-4">
                <ListItem>All data recorded in this App is stored only on the user&apos;s device as an SQLite database</ListItem>
                <ListItem>Data is stored in the app&apos;s dedicated area on the device and cannot be accessed by other apps</ListItem>
                <ListItem>If the user uninstalls this App, all data will be completely deleted from the device</ListItem>
                <ListItem>We cannot access user data</ListItem>
                <ListItem>The current version does not have cloud backup functionality, so we recommend users to back up their data themselves in case of device failure or loss</ListItem>
              </ul>
            </Section>

            <Section title="Article 4 (Purpose of Use)">
              <p className="text-gray-600 leading-relaxed mb-6">Information handled in this App is used for the following purposes.</p>
              <ul className="space-y-4">
                <ListItem>Management and display of training records (exercises, sets, weight, reps, etc.)</ListItem>
                <ListItem>Storage of app settings (unit settings, etc.)</ListItem>
                <ListItem>Calendar display and visualization of training history</ListItem>
                <ListItem>App functionality improvement and user experience enhancement through collection of anonymous usage statistics</ListItem>
                <ListItem>Data processing associated with future feature additions (cloud sync, ad display, template features, body metrics, etc.)</ListItem>
              </ul>
            </Section>

            <Section title="Article 5 (Disclaimer)">
              <ul className="space-y-4">
                <ListItem>This App stores data locally on the device. We accept no responsibility for data loss due to device failure, loss, or app malfunction</ListItem>
                <ListItem>Users shall back up data as necessary at their own responsibility</ListItem>
              </ul>
            </Section>

            <Section title="Article 6 (Third Party Provision)">
              <p className="text-gray-600 leading-relaxed mb-8">This App may use the following third-party services.</p>

              <SubSection title="Analytics Services">
                <ul className="space-y-4">
                  <ListItem>Firebase Analytics (Google): Collects anonymous usage statistics to improve the app</ListItem>
                  <ListItem>Collected information is in a format that cannot identify individuals and includes device ID, app usage, operation events, etc.</ListItem>
                  <ListItem>
                    Firebase Analytics Privacy Policy:
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 ml-1 underline decoration-1 underline-offset-2">
                      https://policies.google.com/privacy
                    </a>
                  </ListItem>
                </ul>
              </SubSection>

              <SubSection title="Future Services">
                <p className="text-gray-600 leading-relaxed mb-6">If we introduce the following services, we will update this Policy and notify users in advance.</p>
                <ul className="space-y-4">
                  <ListItem>Ad serving services: Display of in-app ads (may include interest-based advertising)</ListItem>
                  <ListItem>Cloud storage services: Sync and backup of training data</ListItem>
                  <ListItem>Payment services: In-app purchase processing (App Store, Google Play)</ListItem>
                </ul>
              </SubSection>
            </Section>

            <Section title="Article 7 (Affiliate Program)">
              <p className="text-gray-600 leading-relaxed mb-8">The App may include referral codes or affiliate links to third-party services (e.g., iHerb) as a means of supporting the development and maintenance of the App.</p>

              <SubSection title="Information Handling">
                <ul className="space-y-4">
                  <ListItem>We do not collect or store any personal information related to affiliate link usage</ListItem>
                  <ListItem>When users click on affiliate links or use referral codes, they are directed to third-party websites</ListItem>
                  <ListItem>Any information provided on third-party websites is subject to their respective privacy policies</ListItem>
                  <ListItem>We may receive aggregated, non-personally identifiable statistics (e.g., number of referrals, commissions earned) from the third-party service</ListItem>
                </ul>
              </SubSection>
            </Section>

            <Section title="Article 8 (Multilingual Support)">
              <p className="text-gray-600 leading-relaxed mb-6">The App supports the following languages for the user interface:</p>
              <ul className="space-y-4">
                <ListItem>English, Japanese, Spanish, Portuguese, German, French, Chinese (Simplified), Korean, Italian, Indonesian, Russian, Turkish, Dutch, Polish, Thai, Vietnamese, Arabic, Hindi, and Persian (Farsi)</ListItem>
                <ListItem>Legal documents (Terms of Service and Privacy Policy) are currently available in English and Japanese only</ListItem>
                <ListItem>For users of other languages, English versions of the legal documents will be displayed</ListItem>
                <ListItem>Language preference is stored locally on the device and is not transmitted to any server</ListItem>
              </ul>
            </Section>

            <Section title="Article 9 (Changes to Privacy Policy)">
              <p className="text-gray-600 leading-relaxed">
                The content of this Policy may be changed without notice to users, except as otherwise provided by law or this Policy. The revised Privacy Policy shall become effective when posted within this App.
              </p>
            </Section>

            <Section title="Article 10 (Contact)">
              <p className="text-gray-600 leading-relaxed mb-8">For inquiries regarding this Policy, please contact us at the following:</p>
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

function SubSection({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="mt-8 first:mt-0 pl-4 border-l-2 border-gray-200">
      <h3 className="font-semibold text-lg mb-5 text-gray-900">{title}</h3>
      <div>{children}</div>
    </div>
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
