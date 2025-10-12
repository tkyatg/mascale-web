'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Contact() {
  const { t, language } = useLanguage()

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-16 md:py-24">
        <div className="mb-16 md:mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            {t('contact.title')}
          </h1>
          <p className="text-base md:text-lg text-gray-500 leading-relaxed">
            {t('contact.description')}
          </p>
        </div>

        <div className="space-y-16">
          <Section title={t('contact.email.title')}>
            <a
              href="mailto:takuya.atsugi911@gmail.com"
              className="text-xl md:text-2xl text-green-600 hover:text-green-700 underline decoration-1 underline-offset-4 transition-colors"
            >
              takuya.atsugi911@gmail.com
            </a>
          </Section>

          <Section title={t('contact.language.title')}>
            <p className="text-lg text-gray-600">{t('contact.language.value')}</p>
          </Section>

          <Section title={t('contact.response.title')}>
            <p className="text-lg text-gray-600">{t('contact.response.value')}</p>
          </Section>

          <Section title={language === 'ja' ? 'ご注意ください' : 'Please Note'}>
            <ul className="space-y-4">
              <ListItem>
                {language === 'ja'
                  ? 'お問い合わせには、できる限り迅速に対応するよう努めますが、回答までにお時間をいただく場合があります'
                  : 'We strive to respond to inquiries as quickly as possible, but it may take some time to reply'}
              </ListItem>
              <ListItem>
                {language === 'ja'
                  ? '内容によっては、回答できない場合もございますので、予めご了承ください'
                  : 'Please note that we may not be able to respond to certain inquiries'}
              </ListItem>
              <ListItem>
                {language === 'ja'
                  ? '営業時間や定休日は設定しておりませんが、個人での運営のため、返信が遅れる場合があります'
                  : 'While we do not have set business hours or holidays, responses may be delayed as this is individually operated'}
              </ListItem>
            </ul>
          </Section>

          <Section title={language === 'ja' ? 'お問い合わせ内容の例' : 'Examples of Inquiries'}>
            <div className="space-y-8">
              <ExampleSection title={language === 'ja' ? '不具合の報告' : 'Bug Reports'}>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {language === 'ja'
                    ? 'アプリの動作に問題がある場合は、以下の情報を含めてご連絡ください:'
                    : 'If you experience issues with the app, please include the following information:'}
                </p>
                <ul className="space-y-3">
                  <SmallListItem>
                    {language === 'ja' ? '使用している端末(機種名)' : 'Device model you are using'}
                  </SmallListItem>
                  <SmallListItem>
                    {language === 'ja' ? 'OSのバージョン' : 'OS version'}
                  </SmallListItem>
                  <SmallListItem>
                    {language === 'ja' ? 'アプリのバージョン' : 'App version'}
                  </SmallListItem>
                  <SmallListItem>
                    {language === 'ja' ? '不具合の詳細' : 'Details of the issue'}
                  </SmallListItem>
                </ul>
              </ExampleSection>

              <ExampleSection title={language === 'ja' ? '機能のご要望' : 'Feature Requests'}>
                <p className="text-gray-600 leading-relaxed">
                  {language === 'ja'
                    ? '新しい機能のご提案や改善のアイデアをお待ちしております。あなたの声でMASCALEをより良くしていきます。'
                    : 'We welcome suggestions for new features and improvement ideas. Your feedback helps make MASCALE better.'}
                </p>
              </ExampleSection>

              <ExampleSection title={language === 'ja' ? '使い方のご質問' : 'Usage Questions'}>
                <p className="text-gray-600 leading-relaxed">
                  {language === 'ja'
                    ? 'アプリの使い方についてご不明な点がある場合は、お気軽にお問い合わせください。'
                    : 'If you have questions about how to use the app, please feel free to contact us.'}
                </p>
              </ExampleSection>

              <ExampleSection title={language === 'ja' ? 'その他のお問い合わせ' : 'Other Inquiries'}>
                <p className="text-gray-600 leading-relaxed">
                  {language === 'ja'
                    ? '上記以外のご質問やご意見も、お気軽にお寄せください。'
                    : 'Please feel free to send us any other questions or comments.'}
                </p>
              </ExampleSection>
            </div>
          </Section>

          <Section title={language === 'ja' ? 'プライバシーについて' : 'Privacy'}>
            <ul className="space-y-4">
              <ListItem>
                {language === 'ja'
                  ? 'いただいた個人情報は、お問い合わせへの対応にのみ使用し、第三者に提供することはありません'
                  : 'Personal information provided will only be used to respond to inquiries and will not be shared with third parties'}
              </ListItem>
              <ListItem>
                {language === 'ja'
                  ? '本アプリは個人で開発・運営しているため、サポート体制には限りがあります。あらかじめご了承ください'
                  : 'As this app is developed and operated individually, support capacity is limited. Thank you for your understanding'}
              </ListItem>
            </ul>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}

function Section({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">{title}</h2>
      <div>{children}</div>
    </section>
  )
}

function ExampleSection({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="pl-4 border-l-2 border-gray-200">
      <h3 className="font-semibold text-lg mb-4 text-gray-900">{title}</h3>
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

function SmallListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start text-gray-600 leading-relaxed text-sm">
      <span className="text-gray-300 mr-3 mt-1.5 flex-shrink-0">−</span>
      <span>{children}</span>
    </li>
  )
}
