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

        {(() => {
          switch (language) {
            case 'ja':
              return (
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
                <ListItem>アナリティクス情報(匿名の使用統計)は、インターネット接続が利用可能な場合に自動的にFirebase Analyticsに送信されます</ListItem>
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

            <Section title="第10条(アフィリエイトプログラム)">
              <p className="text-gray-600 leading-relaxed mb-6">本アプリは、アプリの開発・維持のサポート手段として、第三者サービス(例:iHerb)への紹介コードまたはアフィリエイトリンクを含む場合があります。ユーザーがこれらのリンクを通じて購入を行った場合:</p>
              <ul className="space-y-4">
                <ListItem>当方は第三者サービスから手数料を受け取る場合があります</ListItem>
                <ListItem>ユーザーに追加費用は発生しません</ListItem>
                <ListItem>これらの紹介コードの使用は完全に任意です</ListItem>
              </ul>
            </Section>

            <Section title="第11条(多言語対応)">
              <p className="text-gray-600 leading-relaxed mb-6">本アプリは、ユーザーインターフェースにおいて以下の言語に対応しています:</p>
              <ul className="space-y-4">
                <ListItem>英語、日本語、スペイン語、ポルトガル語、ドイツ語、フランス語、中国語(簡体字)、韓国語、イタリア語、インドネシア語、ロシア語、トルコ語、オランダ語、ポーランド語、タイ語、ベトナム語、アラビア語、ヒンディー語、ペルシャ語(ファルシ語)</ListItem>
                <ListItem>法的文書(利用規約およびプライバシーポリシー)は現在、英語と日本語のみで提供されています</ListItem>
                <ListItem>その他の言語のユーザーには、法的文書の英語版が表示されます</ListItem>
              </ul>
            </Section>

            <Section title="第12条(サポート)">
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

            <Section title="第13条(準拠法・裁判管轄)">
              <p className="text-gray-600 leading-relaxed">
                本規約の解釈にあたっては、日本法を準拠法とします。本アプリに関して紛争が生じた場合には、当方の所在地を管轄する裁判所を専属的合意管轄とします。
              </p>
            </Section>
          </div>
              )

            case 'es':
              return (
                <div className="space-y-16">
                  <Section title="Artículo 1 (Aplicación)">
                    <p className="text-gray-600 leading-relaxed">
                      Estos Términos de Servicio definen las condiciones para usar la aplicación de smartphone &quot;MASCALE&quot; (en adelante, &quot;esta Aplicación&quot;) proporcionada por Takuya Atsugi (en adelante, &quot;nosotros&quot;). Al usar esta Aplicación, se considera que has aceptado estos Términos.
                    </p>
                  </Section>

                  <Section title="Artículo 2 (Contenido de la Aplicación)">
                    <p className="text-gray-600 leading-relaxed mb-6">Esta Aplicación es una aplicación diseñada para que los usuarios registren entrenamientos (entrenamiento de fuerza, cardio, etc.) y gestionen ese historial en formato de calendario.</p>
                    <p className="font-semibold mb-4 text-gray-900">Características Principales:</p>
                    <ul className="space-y-4">
                      <ListItem>Gestión de registros de entrenamiento en formato de calendario</ListItem>
                      <ListItem>Registro de series, peso y repeticiones para cada ejercicio</ListItem>
                      <ListItem>Cambio de unidad de peso (kg/lb)</ListItem>
                      <ListItem>Visualización del historial de entrenamiento</ListItem>
                      <ListItem>Todos los datos se almacenan localmente en el dispositivo usando base de datos SQLite</ListItem>
                    </ul>
                  </Section>

                  <Section title="Artículo 3 (Provisión Gratuita y Monetización Futura)">
                    <p className="text-gray-600 leading-relaxed mb-6">Esta Aplicación se proporciona actualmente de forma gratuita. Sin embargo, podemos agregar las siguientes funciones de monetización en el futuro.</p>
                    <ul className="space-y-4">
                      <ListItem>Visualización de anuncios: Publicidad dentro de la aplicación</ListItem>
                      <ListItem>Compras dentro de la aplicación: Provisión de eliminación de anuncios y funciones premium (artículos no consumibles, restaurables)</ListItem>
                    </ul>
                    <p className="text-gray-600 leading-relaxed mt-6">Si se agregan estas funciones, actualizaremos estos Términos y la Política de Privacidad y notificaremos a los usuarios dentro de la aplicación con anticipación.</p>
                  </Section>

                  <Section title="Artículo 4 (Entorno de Uso)">
                    <p className="text-gray-600 leading-relaxed mb-6">El uso de esta Aplicación requiere un dispositivo smartphone compatible (iOS/Android).</p>
                    <ul className="space-y-4">
                      <ListItem>Esta Aplicación está diseñada como offline-first y puede usarse sin conexión a Internet para funciones básicas</ListItem>
                      <ListItem>La información de análisis (estadísticas de uso anónimas) se envía automáticamente a Firebase Analytics cuando hay una conexión a Internet disponible</ListItem>
                      <ListItem>Si se agrega funcionalidad de sincronización en la nube en el futuro, se requerirá una conexión a Internet</ListItem>
                      <ListItem>Los usuarios son responsables de los costos de configurar estos entornos (tarifas de comunicación, etc.)</ListItem>
                    </ul>
                  </Section>

                  <Section title="Artículo 5 (Actos Prohibidos)">
                    <p className="text-gray-600 leading-relaxed mb-4">Los siguientes actos están prohibidos al usar esta Aplicación.</p>
                    <ul className="space-y-4">
                      <ListItem>Actos que violen leyes u orden público y moral</ListItem>
                      <ListItem>Actos relacionados con actividades criminales</ListItem>
                      <ListItem>Modificación no autorizada, ingeniería inversa o descompilación de funciones de la aplicación</ListItem>
                      <ListItem>Acceso directo a la base de datos de la aplicación (SQLite) para manipular datos ilegalmente</ListItem>
                      <ListItem>Actos que destruyan o interfieran con servidores o funciones de red que puedan introducirse en el futuro</ListItem>
                      <ListItem>Actos que probablemente interfieran con las operaciones de la aplicación</ListItem>
                      <ListItem>Recopilar o acumular información personal sobre otros usuarios (para futuras agregaciones de funciones)</ListItem>
                      <ListItem>Acceso no autorizado o intentos de hacerlo</ListItem>
                      <ListItem>Uso comercial no autorizado de esta Aplicación</ListItem>
                      <ListItem>Uso fraudulento de compras dentro de la aplicación o abuso de reembolsos (para futuras agregaciones de funciones)</ListItem>
                      <ListItem>Otros actos que consideremos inapropiados</ListItem>
                    </ul>
                  </Section>

                  <Section title="Artículo 6 (Suspensión de la Provisión de la Aplicación)">
                    <p className="text-gray-600 leading-relaxed mb-4">Podemos suspender o interrumpir la provisión de toda o parte de esta Aplicación sin previo aviso a los usuarios si determinamos que existe cualquiera de las siguientes circunstancias.</p>
                    <ul className="space-y-4">
                      <ListItem>Al realizar mantenimiento o actualizaciones del sistema de la aplicación</ListItem>
                      <ListItem>Cuando la provisión de esta Aplicación se vuelve difícil debido a fuerza mayor como terremotos, rayos, incendios, cortes de energía o desastres naturales</ListItem>
                      <ListItem>Cuando determinamos que la provisión de esta Aplicación es difícil por otras razones</ListItem>
                    </ul>
                  </Section>

                  <Section title="Artículo 7 (Exención de Responsabilidad)">
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                      <p>1. Esta Aplicación es una herramienta para gestionar registros de entrenamiento y no proporciona consejo médico, diagnóstico o tratamiento. Si tienes problemas de salud, consulta a un médico o especialista.</p>
                      <p>2. No ofrecemos garantías sobre el contenido, operación o calidad de esta Aplicación.</p>
                      <p>3. No aceptamos responsabilidad por ningún daño derivado del uso de esta Aplicación (incluida pero no limitada a pérdida de datos, falla del dispositivo u otros daños directos o indirectos).</p>
                      <p>4. Esta Aplicación almacena datos localmente en el dispositivo del usuario usando base de datos SQLite. Hay riesgos de pérdida de datos debido a falla del dispositivo, pérdida, actualizaciones del sistema operativo, mal funcionamiento de la aplicación, etc. Los usuarios deben respaldar los datos bajo su propia responsabilidad según sea necesario.</p>
                      <p>5. La versión actual no proporciona funcionalidad de respaldo en la nube. Incluso si esta funcionalidad se agrega en el futuro, no garantizamos la integridad o disponibilidad de los datos.</p>
                    </div>
                  </Section>

                  <Section title="Artículo 8 (Cambios en los Términos)">
                    <p className="text-gray-600 leading-relaxed">
                      Podemos cambiar estos Términos en cualquier momento sin previo aviso a los usuarios cuando se considere necesario. Los Términos revisados entrarán en vigencia cuando se publiquen dentro de esta Aplicación.
                    </p>
                  </Section>

                  <Section title="Artículo 9 (Manejo de Información Personal)">
                    <p className="text-gray-600 leading-relaxed">
                      El manejo de información personal en esta Aplicación está sujeto a la{' '}
                      <Link href="/privacy" className="text-green-600 hover:text-green-700 underline decoration-1 underline-offset-2">
                        Política de Privacidad
                      </Link>
                      {' '}separada.
                    </p>
                  </Section>

                  <Section title="Artículo 10 (Programa de Afiliados)">
                    <p className="text-gray-600 leading-relaxed mb-6">La Aplicación puede incluir códigos de referencia o enlaces de afiliados a servicios de terceros (por ejemplo, iHerb) como medio de apoyo al desarrollo y mantenimiento de la Aplicación. Cuando los usuarios realizan compras a través de estos enlaces:</p>
                    <ul className="space-y-4">
                      <ListItem>Podemos recibir una comisión del servicio de terceros</ListItem>
                      <ListItem>No hay costo adicional para los usuarios</ListItem>
                      <ListItem>El uso de estos códigos de referencia es completamente voluntario</ListItem>
                    </ul>
                  </Section>

                  <Section title="Artículo 11 (Soporte Multilingüe)">
                    <p className="text-gray-600 leading-relaxed mb-6">La Aplicación admite los siguientes idiomas para la interfaz de usuario y documentos legales:</p>
                    <ul className="space-y-4">
                      <ListItem>Inglés, Japonés, Español, Portugués, Alemán, Francés, Chino (Simplificado), Coreano, Italiano, Indonesio, Ruso, Turco, Holandés, Polaco, Tailandés, Vietnamita, Árabe, Hindi y Persa (Farsi)</ListItem>
                      <ListItem>Los documentos legales (Términos de Servicio y Política de Privacidad) están ahora disponibles en los 19 idiomas</ListItem>
                      <ListItem>Si bien nos esforzamos por la precisión en las traducciones, la versión japonesa sirve como la versión oficial</ListItem>
                    </ul>
                  </Section>

                  <Section title="Artículo 12 (Soporte)">
                    <p className="text-gray-600 leading-relaxed mb-8">Para consultas sobre esta Aplicación, contáctanos en la siguiente dirección de correo electrónico.</p>
                    <div className="space-y-2 text-gray-600">
                      <p>
                        <span className="text-gray-500 text-sm">Correo Electrónico</span><br />
                        <a href="mailto:takuya.atsugi911@gmail.com" className="text-green-600 hover:text-green-700 underline decoration-1 underline-offset-2">
                          takuya.atsugi911@gmail.com
                        </a>
                      </p>
                      <p>
                        <span className="text-gray-500 text-sm">Idioma Soportado</span><br />
                        Solo japonés
                      </p>
                    </div>
                  </Section>

                  <Section title="Artículo 13 (Ley Aplicable y Jurisdicción)">
                    <p className="text-gray-600 leading-relaxed">
                      Estos Términos se regirán por la ley japonesa. En caso de cualquier disputa relacionada con esta Aplicación, el tribunal con jurisdicción sobre nuestra ubicación tendrá jurisdicción exclusiva.
                    </p>
                  </Section>
                </div>
              )

            case 'pt':
              return (
                <div className="space-y-16">
                  <Section title="Artigo 1 (Aplicação)">
                    <p className="text-gray-600 leading-relaxed">
                      Estes Termos de Serviço definem as condições para usar o aplicativo de smartphone &quot;MASCALE&quot; (doravante referido como &quot;este Aplicativo&quot;) fornecido por Takuya Atsugi (doravante referido como &quot;nós&quot;). Ao usar este Aplicativo, você é considerado como tendo concordado com estes Termos.
                    </p>
                  </Section>

                  <Section title="Artigo 2 (Conteúdo do Aplicativo)">
                    <p className="text-gray-600 leading-relaxed mb-6">Este Aplicativo é um aplicativo projetado para os usuários registrarem treinos (treinamento de força, cardio, etc.) e gerenciarem esse histórico em formato de calendário.</p>
                    <p className="font-semibold mb-4 text-gray-900">Principais Recursos:</p>
                    <ul className="space-y-4">
                      <ListItem>Gestão de registros de treino em formato de calendário</ListItem>
                      <ListItem>Registro de séries, peso e repetições para cada exercício</ListItem>
                      <ListItem>Alternância de unidade de peso (kg/lb)</ListItem>
                      <ListItem>Visualização do histórico de treino</ListItem>
                      <ListItem>Todos os dados são armazenados localmente no dispositivo usando banco de dados SQLite</ListItem>
                    </ul>
                  </Section>

                  <Section title="Artigo 3 (Fornecimento Gratuito e Monetização Futura)">
                    <p className="text-gray-600 leading-relaxed mb-6">Este Aplicativo é atualmente fornecido gratuitamente. No entanto, podemos adicionar os seguintes recursos de monetização no futuro.</p>
                    <ul className="space-y-4">
                      <ListItem>Exibição de anúncios: Publicidade no aplicativo</ListItem>
                      <ListItem>Compras no aplicativo: Fornecimento de remoção de anúncios e recursos premium (itens não consumíveis, restauráveis)</ListItem>
                    </ul>
                    <p className="text-gray-600 leading-relaxed mt-6">Se esses recursos forem adicionados, atualizaremos estes Termos e a Política de Privacidade e notificaremos os usuários dentro do aplicativo com antecedência.</p>
                  </Section>

                  <Section title="Artigo 4 (Ambiente de Uso)">
                    <p className="text-gray-600 leading-relaxed mb-6">O uso deste Aplicativo requer um dispositivo smartphone compatível (iOS/Android).</p>
                    <ul className="space-y-4">
                      <ListItem>Este Aplicativo é projetado como offline-first e pode ser usado sem conexão à Internet para recursos básicos</ListItem>
                      <ListItem>Informações de análise (estatísticas de uso anônimas) são enviadas automaticamente para o Firebase Analytics quando uma conexão à Internet está disponível</ListItem>
                      <ListItem>Se a funcionalidade de sincronização na nuvem for adicionada no futuro, uma conexão à Internet será necessária</ListItem>
                      <ListItem>Os usuários são responsáveis pelos custos de configurar esses ambientes (taxas de comunicação, etc.)</ListItem>
                    </ul>
                  </Section>

                  <Section title="Artigo 5 (Atos Proibidos)">
                    <p className="text-gray-600 leading-relaxed mb-4">Os seguintes atos são proibidos ao usar este Aplicativo.</p>
                    <ul className="space-y-4">
                      <ListItem>Atos que violem leis ou ordem pública e moral</ListItem>
                      <ListItem>Atos relacionados a atividades criminosas</ListItem>
                      <ListItem>Modificação não autorizada, engenharia reversa ou descompilação de funções do aplicativo</ListItem>
                      <ListItem>Acesso direto ao banco de dados do aplicativo (SQLite) para manipular dados ilegalmente</ListItem>
                      <ListItem>Atos que destruam ou interfiram com servidores ou funções de rede que possam ser introduzidos no futuro</ListItem>
                      <ListItem>Atos que provavelmente interfiram com as operações do aplicativo</ListItem>
                      <ListItem>Coletar ou acumular informações pessoais sobre outros usuários (para futuras adições de recursos)</ListItem>
                      <ListItem>Acesso não autorizado ou tentativas de fazê-lo</ListItem>
                      <ListItem>Uso comercial não autorizado deste Aplicativo</ListItem>
                      <ListItem>Uso fraudulento de compras no aplicativo ou abuso de reembolsos (para futuras adições de recursos)</ListItem>
                      <ListItem>Outros atos que consideramos inapropriados</ListItem>
                    </ul>
                  </Section>

                  <Section title="Artigo 6 (Suspensão do Fornecimento do Aplicativo)">
                    <p className="text-gray-600 leading-relaxed mb-4">Podemos suspender ou interromper o fornecimento de todo ou parte deste Aplicativo sem aviso prévio aos usuários se determinarmos que existe qualquer uma das seguintes circunstâncias.</p>
                    <ul className="space-y-4">
                      <ListItem>Ao realizar manutenção ou atualizações do sistema do aplicativo</ListItem>
                      <ListItem>Quando o fornecimento deste Aplicativo se torna difícil devido a força maior, como terremotos, raios, incêndios, quedas de energia ou desastres naturais</ListItem>
                      <ListItem>Quando determinamos que o fornecimento deste Aplicativo é difícil por outras razões</ListItem>
                    </ul>
                  </Section>

                  <Section title="Artigo 7 (Isenção de Responsabilidade)">
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                      <p>1. Este Aplicativo é uma ferramenta para gerenciar registros de treino e não fornece aconselhamento médico, diagnóstico ou tratamento. Se você tiver problemas de saúde, consulte um médico ou especialista.</p>
                      <p>2. Não oferecemos garantias sobre o conteúdo, operação ou qualidade deste Aplicativo.</p>
                      <p>3. Não aceitamos responsabilidade por quaisquer danos decorrentes do uso deste Aplicativo (incluindo, mas não limitado a perda de dados, falha do dispositivo ou outros danos diretos ou indiretos).</p>
                      <p>4. Este Aplicativo armazena dados localmente no dispositivo do usuário usando banco de dados SQLite. Existem riscos de perda de dados devido a falha do dispositivo, perda, atualizações do sistema operacional, mau funcionamento do aplicativo, etc. Os usuários devem fazer backup dos dados sob sua própria responsabilidade conforme necessário.</p>
                      <p>5. A versão atual não fornece funcionalidade de backup na nuvem. Mesmo se essa funcionalidade for adicionada no futuro, não garantimos a integridade ou disponibilidade dos dados.</p>
                    </div>
                  </Section>

                  <Section title="Artigo 8 (Alterações nos Termos)">
                    <p className="text-gray-600 leading-relaxed">
                      Podemos alterar estes Termos a qualquer momento sem aviso prévio aos usuários quando considerado necessário. Os Termos revisados entrarão em vigor quando publicados dentro deste Aplicativo.
                    </p>
                  </Section>

                  <Section title="Artigo 9 (Tratamento de Informações Pessoais)">
                    <p className="text-gray-600 leading-relaxed">
                      O tratamento de informações pessoais neste Aplicativo está sujeito à{' '}
                      <Link href="/privacy" className="text-green-600 hover:text-green-700 underline decoration-1 underline-offset-2">
                        Política de Privacidade
                      </Link>
                      {' '}separada.
                    </p>
                  </Section>

                  <Section title="Artigo 10 (Programa de Afiliados)">
                    <p className="text-gray-600 leading-relaxed mb-6">O Aplicativo pode incluir códigos de referência ou links de afiliados para serviços de terceiros (por exemplo, iHerb) como meio de apoiar o desenvolvimento e manutenção do Aplicativo. Quando os usuários fazem compras através desses links:</p>
                    <ul className="space-y-4">
                      <ListItem>Podemos receber uma comissão do serviço de terceiros</ListItem>
                      <ListItem>Não há custo adicional para os usuários</ListItem>
                      <ListItem>O uso desses códigos de referência é totalmente voluntário</ListItem>
                    </ul>
                  </Section>

                  <Section title="Artigo 11 (Suporte Multilíngue)">
                    <p className="text-gray-600 leading-relaxed mb-6">O Aplicativo suporta os seguintes idiomas para a interface do usuário e documentos legais:</p>
                    <ul className="space-y-4">
                      <ListItem>Inglês, Japonês, Espanhol, Português, Alemão, Francês, Chinês (Simplificado), Coreano, Italiano, Indonésio, Russo, Turco, Holandês, Polonês, Tailandês, Vietnamita, Árabe, Hindi e Persa (Farsi)</ListItem>
                      <ListItem>Os documentos legais (Termos de Serviço e Política de Privacidade) estão agora disponíveis em todos os 19 idiomas</ListItem>
                      <ListItem>Embora nos esforcemos pela precisão nas traduções, a versão japonesa serve como a versão oficial</ListItem>
                    </ul>
                  </Section>

                  <Section title="Artigo 12 (Suporte)">
                    <p className="text-gray-600 leading-relaxed mb-8">Para consultas sobre este Aplicativo, entre em contato conosco no seguinte endereço de e-mail.</p>
                    <div className="space-y-2 text-gray-600">
                      <p>
                        <span className="text-gray-500 text-sm">E-mail</span><br />
                        <a href="mailto:takuya.atsugi911@gmail.com" className="text-green-600 hover:text-green-700 underline decoration-1 underline-offset-2">
                          takuya.atsugi911@gmail.com
                        </a>
                      </p>
                      <p>
                        <span className="text-gray-500 text-sm">Idioma Suportado</span><br />
                        Apenas japonês
                      </p>
                    </div>
                  </Section>

                  <Section title="Artigo 13 (Lei Aplicável e Jurisdição)">
                    <p className="text-gray-600 leading-relaxed">
                      Estes Termos serão regidos pela lei japonesa. Em caso de quaisquer disputas relacionadas a este Aplicativo, o tribunal com jurisdição sobre nossa localização terá jurisdição exclusiva.
                    </p>
                  </Section>
                </div>
              )

            case 'de':
              return (
                <div className="space-y-16">
                  <Section title="Artikel 1 (Anwendung)">
                    <p className="text-gray-600 leading-relaxed">
                      Diese Nutzungsbedingungen definieren die Bedingungen für die Nutzung der Smartphone-Anwendung &quot;MASCALE&quot; (im Folgenden als &quot;diese App&quot; bezeichnet), die von Takuya Atsugi (im Folgenden als &quot;wir&quot; bezeichnet) bereitgestellt wird. Durch die Nutzung dieser App gelten Sie als mit diesen Bedingungen einverstanden.
                    </p>
                  </Section>

                  <Section title="Artikel 2 (App-Inhalt)">
                    <p className="text-gray-600 leading-relaxed mb-6">Diese App ist eine Anwendung, die es Benutzern ermöglicht, Trainings (Krafttraining, Cardio usw.) aufzuzeichnen und diese Historie im Kalenderformat zu verwalten.</p>
                    <p className="font-semibold mb-4 text-gray-900">Hauptfunktionen:</p>
                    <ul className="space-y-4">
                      <ListItem>Verwaltung von Trainingsaufzeichnungen im Kalenderformat</ListItem>
                      <ListItem>Aufzeichnung von Sätzen, Gewicht und Wiederholungen für jede Übung</ListItem>
                      <ListItem>Wechsel der Gewichtseinheit (kg/lb)</ListItem>
                      <ListItem>Visualisierung der Trainingshistorie</ListItem>
                      <ListItem>Alle Daten werden lokal auf dem Gerät mit SQLite-Datenbank gespeichert</ListItem>
                    </ul>
                  </Section>

                  <Section title="Artikel 3 (Kostenlose Bereitstellung und zukünftige Monetarisierung)">
                    <p className="text-gray-600 leading-relaxed mb-6">Diese App wird derzeit kostenlos bereitgestellt. Wir können jedoch in Zukunft die folgenden Monetarisierungsfunktionen hinzufügen.</p>
                    <ul className="space-y-4">
                      <ListItem>Anzeigenschaltung: In-App-Werbung</ListItem>
                      <ListItem>In-App-Käufe: Bereitstellung von Werbeentfernung und Premium-Funktionen (nicht verbrauchbare Artikel, wiederherstellbar)</ListItem>
                    </ul>
                    <p className="text-gray-600 leading-relaxed mt-6">Wenn diese Funktionen hinzugefügt werden, werden wir diese Bedingungen und die Datenschutzrichtlinie aktualisieren und die Benutzer im Voraus innerhalb der App benachrichtigen.</p>
                  </Section>

                  <Section title="Artikel 4 (Nutzungsumgebung)">
                    <p className="text-gray-600 leading-relaxed mb-6">Die Nutzung dieser App erfordert ein kompatibles Smartphone-Gerät (iOS/Android).</p>
                    <ul className="space-y-4">
                      <ListItem>Diese App ist als Offline-First konzipiert und kann ohne Internetverbindung für grundlegende Funktionen genutzt werden</ListItem>
                      <ListItem>Analyseinformationen (anonyme Nutzungsstatistiken) werden automatisch an Firebase Analytics gesendet, wenn eine Internetverbindung verfügbar ist</ListItem>
                      <ListItem>Wenn in Zukunft Cloud-Synchronisierungsfunktionen hinzugefügt werden, wird eine Internetverbindung erforderlich sein</ListItem>
                      <ListItem>Benutzer sind für die Kosten der Einrichtung dieser Umgebungen (Kommunikationsgebühren usw.) verantwortlich</ListItem>
                    </ul>
                  </Section>

                  <Section title="Artikel 5 (Verbotene Handlungen)">
                    <p className="text-gray-600 leading-relaxed mb-4">Die folgenden Handlungen sind bei der Nutzung dieser App verboten.</p>
                    <ul className="space-y-4">
                      <ListItem>Handlungen, die gegen Gesetze oder öffentliche Ordnung und Moral verstoßen</ListItem>
                      <ListItem>Handlungen im Zusammenhang mit kriminellen Aktivitäten</ListItem>
                      <ListItem>Unbefugte Änderung, Reverse Engineering oder Dekompilierung von App-Funktionen</ListItem>
                      <ListItem>Direkter Zugriff auf die App-Datenbank (SQLite) zur illegalen Manipulation von Daten</ListItem>
                      <ListItem>Handlungen, die Server oder Netzwerkfunktionen zerstören oder stören, die in Zukunft eingeführt werden können</ListItem>
                      <ListItem>Handlungen, die wahrscheinlich den App-Betrieb stören</ListItem>
                      <ListItem>Sammeln oder Anhäufen persönlicher Informationen über andere Benutzer (für zukünftige Funktionserweiterungen)</ListItem>
                      <ListItem>Unbefugter Zugriff oder Versuche dazu</ListItem>
                      <ListItem>Unbefugte kommerzielle Nutzung dieser App</ListItem>
                      <ListItem>Betrügerische Nutzung von In-App-Käufen oder Missbrauch von Rückerstattungen (für zukünftige Funktionserweiterungen)</ListItem>
                      <ListItem>Andere Handlungen, die wir als unangemessen erachten</ListItem>
                    </ul>
                  </Section>

                  <Section title="Artikel 6 (Aussetzung der App-Bereitstellung)">
                    <p className="text-gray-600 leading-relaxed mb-4">Wir können die Bereitstellung dieser App ganz oder teilweise ohne vorherige Ankündigung an die Benutzer aussetzen oder unterbrechen, wenn wir feststellen, dass eine der folgenden Umstände vorliegt.</p>
                    <ul className="space-y-4">
                      <ListItem>Bei Durchführung von Wartung oder Updates am App-System</ListItem>
                      <ListItem>Wenn die Bereitstellung dieser App aufgrund höherer Gewalt wie Erdbeben, Blitzschlag, Feuer, Stromausfällen oder Naturkatastrophen schwierig wird</ListItem>
                      <ListItem>Wenn wir feststellen, dass die Bereitstellung dieser App aus anderen Gründen schwierig ist</ListItem>
                    </ul>
                  </Section>

                  <Section title="Artikel 7 (Haftungsausschluss)">
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                      <p>1. Diese App ist ein Tool zur Verwaltung von Trainingsaufzeichnungen und bietet keine medizinische Beratung, Diagnose oder Behandlung. Wenn Sie gesundheitliche Bedenken haben, konsultieren Sie bitte einen Arzt oder Spezialisten.</p>
                      <p>2. Wir geben keine Garantien hinsichtlich des Inhalts, des Betriebs oder der Qualität dieser App ab.</p>
                      <p>3. Wir übernehmen keine Verantwortung für Schäden, die sich aus der Nutzung dieser App ergeben (einschließlich, aber nicht beschränkt auf Datenverlust, Geräteausfall oder andere direkte oder indirekte Schäden).</p>
                      <p>4. Diese App speichert Daten lokal auf dem Gerät des Benutzers mit SQLite-Datenbank. Es besteht das Risiko von Datenverlust durch Geräteausfall, Verlust, Betriebssystem-Updates, App-Fehlfunktionen usw. Benutzer müssen ihre Daten bei Bedarf in eigener Verantwortung sichern.</p>
                      <p>5. Die aktuelle Version bietet keine Cloud-Backup-Funktionalität. Selbst wenn diese Funktionalität in Zukunft hinzugefügt wird, garantieren wir nicht die Datenintegrität oder Verfügbarkeit.</p>
                    </div>
                  </Section>

                  <Section title="Artikel 8 (Änderungen der Bedingungen)">
                    <p className="text-gray-600 leading-relaxed">
                      Wir können diese Bedingungen jederzeit ohne Ankündigung an die Benutzer ändern, wenn dies als notwendig erachtet wird. Die überarbeiteten Bedingungen treten in Kraft, wenn sie innerhalb dieser App veröffentlicht werden.
                    </p>
                  </Section>

                  <Section title="Artikel 9 (Umgang mit persönlichen Informationen)">
                    <p className="text-gray-600 leading-relaxed">
                      Der Umgang mit persönlichen Informationen in dieser App unterliegt der separaten{' '}
                      <Link href="/privacy" className="text-green-600 hover:text-green-700 underline decoration-1 underline-offset-2">
                        Datenschutzrichtlinie
                      </Link>
                      .
                    </p>
                  </Section>

                  <Section title="Artikel 10 (Partnerprogramm)">
                    <p className="text-gray-600 leading-relaxed mb-6">Die App kann Empfehlungscodes oder Affiliate-Links zu Drittanbieterdiensten (z.B. iHerb) als Mittel zur Unterstützung der Entwicklung und Wartung der App enthalten. Wenn Benutzer über diese Links Käufe tätigen:</p>
                    <ul className="space-y-4">
                      <ListItem>Wir können eine Provision vom Drittanbieterdienst erhalten</ListItem>
                      <ListItem>Für Benutzer entstehen keine zusätzlichen Kosten</ListItem>
                      <ListItem>Die Verwendung dieser Empfehlungscodes ist vollständig freiwillig</ListItem>
                    </ul>
                  </Section>

                  <Section title="Artikel 11 (Mehrsprachige Unterstützung)">
                    <p className="text-gray-600 leading-relaxed mb-6">Die App unterstützt die folgenden Sprachen für die Benutzeroberfläche und rechtliche Dokumente:</p>
                    <ul className="space-y-4">
                      <ListItem>Englisch, Japanisch, Spanisch, Portugiesisch, Deutsch, Französisch, Chinesisch (Vereinfacht), Koreanisch, Italienisch, Indonesisch, Russisch, Türkisch, Niederländisch, Polnisch, Thailändisch, Vietnamesisch, Arabisch, Hindi und Persisch (Farsi)</ListItem>
                      <ListItem>Die rechtlichen Dokumente (Nutzungsbedingungen und Datenschutzrichtlinie) sind jetzt in allen 19 Sprachen verfügbar</ListItem>
                      <ListItem>Obwohl wir uns um Genauigkeit in den Übersetzungen bemühen, dient die japanische Version als offizielle Version</ListItem>
                    </ul>
                  </Section>

                  <Section title="Artikel 12 (Support)">
                    <p className="text-gray-600 leading-relaxed mb-8">Für Anfragen zu dieser App kontaktieren Sie uns bitte unter der folgenden E-Mail-Adresse.</p>
                    <div className="space-y-2 text-gray-600">
                      <p>
                        <span className="text-gray-500 text-sm">E-Mail</span><br />
                        <a href="mailto:takuya.atsugi911@gmail.com" className="text-green-600 hover:text-green-700 underline decoration-1 underline-offset-2">
                          takuya.atsugi911@gmail.com
                        </a>
                      </p>
                      <p>
                        <span className="text-gray-500 text-sm">Unterstützte Sprache</span><br />
                        Nur Japanisch
                      </p>
                    </div>
                  </Section>

                  <Section title="Artikel 13 (Anwendbares Recht und Gerichtsstand)">
                    <p className="text-gray-600 leading-relaxed">
                      Diese Bedingungen unterliegen japanischem Recht. Im Falle von Streitigkeiten bezüglich dieser App hat das Gericht mit Zuständigkeit für unseren Standort die ausschließliche Gerichtsbarkeit.
                    </p>
                  </Section>
                </div>
              )

            case 'fr':
              return (
                <div className="space-y-16">
                  <Section title="Article 1 (Application)">
                    <p className="text-gray-600 leading-relaxed">
                      Ces Conditions d&apos;Utilisation définissent les conditions d&apos;utilisation de l&apos;application smartphone &quot;MASCALE&quot; (ci-après dénommée &quot;cette Application&quot;) fournie par Takuya Atsugi (ci-après dénommé &quot;nous&quot;). En utilisant cette Application, vous êtes réputé avoir accepté ces Conditions.
                    </p>
                  </Section>

                  <Section title="Article 2 (Contenu de l'Application)">
                    <p className="text-gray-600 leading-relaxed mb-6">Cette Application est une application conçue pour permettre aux utilisateurs d&apos;enregistrer des entraînements (musculation, cardio, etc.) et de gérer cet historique au format calendrier.</p>
                    <p className="font-semibold mb-4 text-gray-900">Fonctionnalités Principales:</p>
                    <ul className="space-y-4">
                      <ListItem>Gestion des enregistrements d&apos;entraînement au format calendrier</ListItem>
                      <ListItem>Enregistrement des séries, poids et répétitions pour chaque exercice</ListItem>
                      <ListItem>Changement d&apos;unité de poids (kg/lb)</ListItem>
                      <ListItem>Visualisation de l&apos;historique d&apos;entraînement</ListItem>
                      <ListItem>Toutes les données sont stockées localement sur l&apos;appareil à l&apos;aide d&apos;une base de données SQLite</ListItem>
                    </ul>
                  </Section>

                  <Section title="Article 3 (Fourniture Gratuite et Monétisation Future)">
                    <p className="text-gray-600 leading-relaxed mb-6">Cette Application est actuellement fournie gratuitement. Cependant, nous pouvons ajouter les fonctionnalités de monétisation suivantes à l&apos;avenir.</p>
                    <ul className="space-y-4">
                      <ListItem>Affichage de publicités: Publicité dans l&apos;application</ListItem>
                      <ListItem>Achats intégrés: Fourniture de suppression de publicités et de fonctionnalités premium (articles non consommables, restaurables)</ListItem>
                    </ul>
                    <p className="text-gray-600 leading-relaxed mt-6">Si ces fonctionnalités sont ajoutées, nous mettrons à jour ces Conditions et la Politique de Confidentialité et informerons les utilisateurs dans l&apos;application à l&apos;avance.</p>
                  </Section>

                  <Section title="Article 4 (Environnement d'Utilisation)">
                    <p className="text-gray-600 leading-relaxed mb-6">L&apos;utilisation de cette Application nécessite un appareil smartphone compatible (iOS/Android).</p>
                    <ul className="space-y-4">
                      <ListItem>Cette Application est conçue comme hors ligne d&apos;abord et peut être utilisée sans connexion Internet pour les fonctionnalités de base</ListItem>
                      <ListItem>Les informations d&apos;analyse (statistiques d&apos;utilisation anonymes) sont automatiquement envoyées à Firebase Analytics lorsqu&apos;une connexion Internet est disponible</ListItem>
                      <ListItem>Si une fonctionnalité de synchronisation cloud est ajoutée à l&apos;avenir, une connexion Internet sera requise</ListItem>
                      <ListItem>Les utilisateurs sont responsables des coûts de configuration de ces environnements (frais de communication, etc.)</ListItem>
                    </ul>
                  </Section>

                  <Section title="Article 5 (Actes Interdits)">
                    <p className="text-gray-600 leading-relaxed mb-4">Les actes suivants sont interdits lors de l&apos;utilisation de cette Application.</p>
                    <ul className="space-y-4">
                      <ListItem>Actes qui violent les lois ou l&apos;ordre public et les mœurs</ListItem>
                      <ListItem>Actes liés à des activités criminelles</ListItem>
                      <ListItem>Modification non autorisée, rétro-ingénierie ou décompilation des fonctions de l&apos;application</ListItem>
                      <ListItem>Accès direct à la base de données de l&apos;application (SQLite) pour manipuler illégalement les données</ListItem>
                      <ListItem>Actes qui détruisent ou interfèrent avec les serveurs ou les fonctions réseau qui peuvent être introduits à l&apos;avenir</ListItem>
                      <ListItem>Actes susceptibles d&apos;interférer avec les opérations de l&apos;application</ListItem>
                      <ListItem>Collecte ou accumulation d&apos;informations personnelles sur d&apos;autres utilisateurs (pour de futures ajouts de fonctionnalités)</ListItem>
                      <ListItem>Accès non autorisé ou tentatives de le faire</ListItem>
                      <ListItem>Utilisation commerciale non autorisée de cette Application</ListItem>
                      <ListItem>Utilisation frauduleuse d&apos;achats intégrés ou abus de remboursements (pour de futures ajouts de fonctionnalités)</ListItem>
                      <ListItem>Autres actes que nous jugeons inappropriés</ListItem>
                    </ul>
                  </Section>

                  <Section title="Article 6 (Suspension de la Fourniture de l'Application)">
                    <p className="text-gray-600 leading-relaxed mb-4">Nous pouvons suspendre ou interrompre la fourniture de tout ou partie de cette Application sans préavis aux utilisateurs si nous déterminons que l&apos;une des circonstances suivantes existe.</p>
                    <ul className="space-y-4">
                      <ListItem>Lors de la maintenance ou des mises à jour du système de l&apos;application</ListItem>
                      <ListItem>Lorsque la fourniture de cette Application devient difficile en raison de force majeure telle que tremblements de terre, foudre, incendies, pannes de courant ou catastrophes naturelles</ListItem>
                      <ListItem>Lorsque nous déterminons que la fourniture de cette Application est difficile pour d&apos;autres raisons</ListItem>
                    </ul>
                  </Section>

                  <Section title="Article 7 (Clause de Non-Responsabilité)">
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                      <p>1. Cette Application est un outil pour gérer les enregistrements d&apos;entraînement et ne fournit pas de conseils médicaux, de diagnostic ou de traitement. Si vous avez des problèmes de santé, veuillez consulter un médecin ou un spécialiste.</p>
                      <p>2. Nous n&apos;offrons aucune garantie concernant le contenu, le fonctionnement ou la qualité de cette Application.</p>
                      <p>3. Nous n&apos;acceptons aucune responsabilité pour les dommages résultant de l&apos;utilisation de cette Application (y compris, mais sans s&apos;y limiter, la perte de données, la défaillance de l&apos;appareil ou autres dommages directs ou indirects).</p>
                      <p>4. Cette Application stocke les données localement sur l&apos;appareil de l&apos;utilisateur à l&apos;aide d&apos;une base de données SQLite. Il existe des risques de perte de données dus à une défaillance de l&apos;appareil, une perte, des mises à jour du système d&apos;exploitation, des dysfonctionnements de l&apos;application, etc. Les utilisateurs doivent sauvegarder les données sous leur propre responsabilité si nécessaire.</p>
                      <p>5. La version actuelle ne fournit pas de fonctionnalité de sauvegarde cloud. Même si cette fonctionnalité est ajoutée à l&apos;avenir, nous ne garantissons pas l&apos;intégrité ou la disponibilité des données.</p>
                    </div>
                  </Section>

                  <Section title="Article 8 (Modifications des Conditions)">
                    <p className="text-gray-600 leading-relaxed">
                      Nous pouvons modifier ces Conditions à tout moment sans préavis aux utilisateurs lorsque cela est jugé nécessaire. Les Conditions révisées entreront en vigueur lorsqu&apos;elles seront publiées dans cette Application.
                    </p>
                  </Section>

                  <Section title="Article 9 (Traitement des Informations Personnelles)">
                    <p className="text-gray-600 leading-relaxed">
                      Le traitement des informations personnelles dans cette Application est soumis à la{' '}
                      <Link href="/privacy" className="text-green-600 hover:text-green-700 underline decoration-1 underline-offset-2">
                        Politique de Confidentialité
                      </Link>
                      {' '}séparée.
                    </p>
                  </Section>

                  <Section title="Article 10 (Programme d'Affiliation)">
                    <p className="text-gray-600 leading-relaxed mb-6">L&apos;Application peut inclure des codes de parrainage ou des liens d&apos;affiliation vers des services tiers (par exemple, iHerb) comme moyen de soutenir le développement et la maintenance de l&apos;Application. Lorsque les utilisateurs effectuent des achats via ces liens:</p>
                    <ul className="space-y-4">
                      <ListItem>Nous pouvons recevoir une commission du service tiers</ListItem>
                      <ListItem>Il n&apos;y a pas de coût supplémentaire pour les utilisateurs</ListItem>
                      <ListItem>L&apos;utilisation de ces codes de parrainage est entièrement volontaire</ListItem>
                    </ul>
                  </Section>

                  <Section title="Article 11 (Support Multilingue)">
                    <p className="text-gray-600 leading-relaxed mb-6">L&apos;Application prend en charge les langues suivantes pour l&apos;interface utilisateur et les documents juridiques:</p>
                    <ul className="space-y-4">
                      <ListItem>Anglais, Japonais, Espagnol, Portugais, Allemand, Français, Chinois (Simplifié), Coréen, Italien, Indonésien, Russe, Turc, Néerlandais, Polonais, Thaï, Vietnamien, Arabe, Hindi et Persan (Farsi)</ListItem>
                      <ListItem>Les documents juridiques (Conditions d&apos;Utilisation et Politique de Confidentialité) sont maintenant disponibles dans les 19 langues</ListItem>
                      <ListItem>Bien que nous nous efforcions d&apos;assurer l&apos;exactitude des traductions, la version japonaise fait foi</ListItem>
                    </ul>
                  </Section>

                  <Section title="Article 12 (Support)">
                    <p className="text-gray-600 leading-relaxed mb-8">Pour toute question concernant cette Application, veuillez nous contacter à l&apos;adresse e-mail suivante.</p>
                    <div className="space-y-2 text-gray-600">
                      <p>
                        <span className="text-gray-500 text-sm">E-mail</span><br />
                        <a href="mailto:takuya.atsugi911@gmail.com" className="text-green-600 hover:text-green-700 underline decoration-1 underline-offset-2">
                          takuya.atsugi911@gmail.com
                        </a>
                      </p>
                      <p>
                        <span className="text-gray-500 text-sm">Langue Prise en Charge</span><br />
                        Japonais uniquement
                      </p>
                    </div>
                  </Section>

                  <Section title="Article 13 (Loi Applicable et Juridiction)">
                    <p className="text-gray-600 leading-relaxed">
                      Ces Conditions sont régies par le droit japonais. En cas de litige concernant cette Application, le tribunal ayant juridiction sur notre emplacement aura juridiction exclusive.
                    </p>
                  </Section>
                </div>
              )

            case 'zh':
              return (
                <div className="space-y-16">
                  <Section title="第1条（适用）">
                    <p className="text-gray-600 leading-relaxed">
                      本服务条款规定了使用由Takuya Atsugi（以下简称"我方"）提供的智能手机应用程序"MASCALE"（以下简称"本应用"）的条件。使用本应用即表示您同意本条款。
                    </p>
                  </Section>

                  <Section title="第2条（应用内容）">
                    <p className="text-gray-600 leading-relaxed mb-6">本应用是一款旨在让用户记录训练（力量训练、有氧运动等）并以日历格式管理历史记录的应用程序。</p>
                    <p className="font-semibold mb-4 text-gray-900">主要功能：</p>
                    <ul className="space-y-4">
                      <ListItem>以日历格式管理训练记录</ListItem>
                      <ListItem>记录每个练习的组数、重量和次数</ListItem>
                      <ListItem>切换重量单位（kg/lb）</ListItem>
                      <ListItem>训练历史可视化</ListItem>
                      <ListItem>所有数据使用SQLite数据库存储在设备本地</ListItem>
                    </ul>
                  </Section>

                  <Section title="第3条（免费提供和未来变现）">
                    <p className="text-gray-600 leading-relaxed mb-6">本应用目前免费提供。但是，我们可能在未来添加以下变现功能。</p>
                    <ul className="space-y-4">
                      <ListItem>广告展示：应用内广告</ListItem>
                      <ListItem>应用内购买：提供去除广告和高级功能（非消耗性项目，可恢复）</ListItem>
                    </ul>
                    <p className="text-gray-600 leading-relaxed mt-6">如果添加这些功能，我们将更新本条款和隐私政策，并提前在应用内通知用户。</p>
                  </Section>

                  <Section title="第4条（使用环境）">
                    <p className="text-gray-600 leading-relaxed mb-6">使用本应用需要兼容的智能手机设备（iOS/Android）。</p>
                    <ul className="space-y-4">
                      <ListItem>本应用采用离线优先设计，基本功能可在无互联网连接的情况下使用</ListItem>
                      <ListItem>分析信息（匿名使用统计）在有互联网连接时会自动发送到Firebase Analytics</ListItem>
                      <ListItem>如果未来添加云同步功能，将需要互联网连接</ListItem>
                      <ListItem>用户负责设置这些环境的费用（通信费等）</ListItem>
                    </ul>
                  </Section>

                  <Section title="第5条（禁止行为）">
                    <p className="text-gray-600 leading-relaxed mb-4">使用本应用时禁止以下行为。</p>
                    <ul className="space-y-4">
                      <ListItem>违反法律或公共秩序和道德的行为</ListItem>
                      <ListItem>与犯罪活动相关的行为</ListItem>
                      <ListItem>未经授权修改、逆向工程或反编译应用功能</ListItem>
                      <ListItem>直接访问应用数据库（SQLite）以非法操纵数据</ListItem>
                      <ListItem>破坏或干扰未来可能引入的服务器或网络功能的行为</ListItem>
                      <ListItem>可能干扰应用运营的行为</ListItem>
                      <ListItem>收集或积累其他用户的个人信息（用于未来功能添加）</ListItem>
                      <ListItem>未经授权的访问或尝试访问</ListItem>
                      <ListItem>未经授权将本应用用于商业用途</ListItem>
                      <ListItem>欺诈性使用应用内购买或滥用退款（用于未来功能添加）</ListItem>
                      <ListItem>我们认为不适当的其他行为</ListItem>
                    </ul>
                  </Section>

                  <Section title="第6条（暂停应用提供）">
                    <p className="text-gray-600 leading-relaxed mb-4">如果我们确定存在以下任何情况，我们可以在不事先通知用户的情况下暂停或中断提供全部或部分本应用。</p>
                    <ul className="space-y-4">
                      <ListItem>对应用系统进行维护或更新时</ListItem>
                      <ListItem>由于地震、雷电、火灾、停电或自然灾害等不可抗力导致提供本应用变得困难时</ListItem>
                      <ListItem>我们确定由于其他原因提供本应用很困难时</ListItem>
                    </ul>
                  </Section>

                  <Section title="第7条（免责声明）">
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                      <p>1. 本应用是管理训练记录的工具，不提供医疗建议、诊断或治疗。如果您有健康问题，请咨询医生或专家。</p>
                      <p>2. 我们不对本应用的内容、运行或质量提供任何保证。</p>
                      <p>3. 我们不对使用本应用造成的任何损害（包括但不限于数据丢失、设备故障或其他直接或间接损害）承担任何责任。</p>
                      <p>4. 本应用使用SQLite数据库在用户设备上本地存储数据。存在因设备故障、丢失、操作系统更新、应用故障等造成数据丢失的风险。用户应在必要时自行负责备份数据。</p>
                      <p>5. 当前版本不提供云备份功能。即使将来添加此功能，我们也不保证数据的完整性或可用性。</p>
                    </div>
                  </Section>

                  <Section title="第8条（条款变更）">
                    <p className="text-gray-600 leading-relaxed">
                      我们可以在认为必要时随时更改本条款，无需通知用户。修订后的条款在本应用内发布时生效。
                    </p>
                  </Section>

                  <Section title="第9条（个人信息处理）">
                    <p className="text-gray-600 leading-relaxed">
                      本应用中个人信息的处理受单独的
                      <Link href="/privacy" className="text-green-600 hover:text-green-700 underline decoration-1 underline-offset-2">
                        隐私政策
                      </Link>
                      约束。
                    </p>
                  </Section>

                  <Section title="第10条（联盟计划）">
                    <p className="text-gray-600 leading-relaxed mb-6">应用可能包含第三方服务（例如iHerb）的推荐代码或联盟链接，作为支持应用开发和维护的一种手段。当用户通过这些链接进行购买时：</p>
                    <ul className="space-y-4">
                      <ListItem>我们可能会从第三方服务获得佣金</ListItem>
                      <ListItem>用户无需支付额外费用</ListItem>
                      <ListItem>使用这些推荐代码完全自愿</ListItem>
                    </ul>
                  </Section>

                  <Section title="第11条（多语言支持）">
                    <p className="text-gray-600 leading-relaxed mb-6">应用支持以下语言的用户界面和法律文件：</p>
                    <ul className="space-y-4">
                      <ListItem>英语、日语、西班牙语、葡萄牙语、德语、法语、中文（简体）、韩语、意大利语、印尼语、俄语、土耳其语、荷兰语、波兰语、泰语、越南语、阿拉伯语、印地语和波斯语（法尔西语）</ListItem>
                      <ListItem>法律文件（服务条款和隐私政策）现已提供全部19种语言版本</ListItem>
                      <ListItem>虽然我们力求翻译准确，但日语版本为官方版本</ListItem>
                    </ul>
                  </Section>

                  <Section title="第12条（支持）">
                    <p className="text-gray-600 leading-relaxed mb-8">有关本应用的咨询，请通过以下电子邮件地址与我们联系。</p>
                    <div className="space-y-2 text-gray-600">
                      <p>
                        <span className="text-gray-500 text-sm">电子邮件</span><br />
                        <a href="mailto:takuya.atsugi911@gmail.com" className="text-green-600 hover:text-green-700 underline decoration-1 underline-offset-2">
                          takuya.atsugi911@gmail.com
                        </a>
                      </p>
                      <p>
                        <span className="text-gray-500 text-sm">支持语言</span><br />
                        仅日语
                      </p>
                    </div>
                  </Section>

                  <Section title="第13条（适用法律和管辖权）">
                    <p className="text-gray-600 leading-relaxed">
                      本条款受日本法律管辖。如果发生与本应用相关的任何争议，对我方所在地有管辖权的法院具有专属管辖权。
                    </p>
                  </Section>
                </div>
              )

            case 'ko':
              return (
                <div className="space-y-16">
                  <Section title="제1조 (적용)">
                    <p className="text-gray-600 leading-relaxed">
                      본 서비스 약관은 Takuya Atsugi(이하 &quot;당사&quot;)가 제공하는 스마트폰 애플리케이션 &quot;MASCALE&quot;(이하 &quot;본 앱&quot;)의 이용 조건을 정의합니다. 본 앱을 사용함으로써 귀하는 본 약관에 동의한 것으로 간주됩니다.
                    </p>
                  </Section>

                  <Section title="제2조 (앱 콘텐츠)">
                    <p className="text-gray-600 leading-relaxed mb-6">본 앱은 사용자가 훈련(근력 운동, 유산소 운동 등)을 기록하고 그 이력을 달력 형식으로 관리하도록 설계된 애플리케이션입니다.</p>
                    <p className="font-semibold mb-4 text-gray-900">주요 기능:</p>
                    <ul className="space-y-4">
                      <ListItem>달력 형식의 훈련 기록 관리</ListItem>
                      <ListItem>각 운동에 대한 세트, 무게, 반복 횟수 기록</ListItem>
                      <ListItem>무게 단위 전환 (kg/lb)</ListItem>
                      <ListItem>훈련 이력 시각화</ListItem>
                      <ListItem>모든 데이터는 SQLite 데이터베이스를 사용하여 기기에 로컬로 저장됩니다</ListItem>
                    </ul>
                  </Section>

                  <Section title="제3조 (무료 제공 및 향후 수익화)">
                    <p className="text-gray-600 leading-relaxed mb-6">본 앱은 현재 무료로 제공됩니다. 그러나 향후 다음과 같은 수익화 기능을 추가할 수 있습니다.</p>
                    <ul className="space-y-4">
                      <ListItem>광고 표시: 앱 내 광고</ListItem>
                      <ListItem>앱 내 구매: 광고 제거 및 프리미엄 기능 제공 (비소모성 항목, 복원 가능)</ListItem>
                    </ul>
                    <p className="text-gray-600 leading-relaxed mt-6">이러한 기능이 추가되는 경우 본 약관과 개인정보 보호정책을 업데이트하고 앱 내에서 사전에 사용자에게 알려드리겠습니다.</p>
                  </Section>

                  <Section title="제4조 (사용 환경)">
                    <p className="text-gray-600 leading-relaxed mb-6">본 앱을 사용하려면 호환 가능한 스마트폰 기기(iOS/Android)가 필요합니다.</p>
                    <ul className="space-y-4">
                      <ListItem>본 앱은 오프라인 우선으로 설계되어 기본 기능에 대해 인터넷 연결 없이 사용할 수 있습니다</ListItem>
                      <ListItem>분석 정보(익명 사용 통계)는 인터넷 연결이 가능할 때 자동으로 Firebase Analytics로 전송됩니다</ListItem>
                      <ListItem>향후 클라우드 동기화 기능이 추가되면 인터넷 연결이 필요합니다</ListItem>
                      <ListItem>사용자는 이러한 환경 설정 비용(통신비 등)에 대한 책임이 있습니다</ListItem>
                    </ul>
                  </Section>

                  <Section title="제5조 (금지 행위)">
                    <p className="text-gray-600 leading-relaxed mb-4">본 앱 사용 시 다음 행위가 금지됩니다.</p>
                    <ul className="space-y-4">
                      <ListItem>법률이나 공공 질서 및 도덕을 위반하는 행위</ListItem>
                      <ListItem>범죄 활동과 관련된 행위</ListItem>
                      <ListItem>앱 기능의 무단 수정, 리버스 엔지니어링 또는 디컴파일</ListItem>
                      <ListItem>앱 데이터베이스(SQLite)에 직접 액세스하여 불법적으로 데이터를 조작하는 행위</ListItem>
                      <ListItem>향후 도입될 수 있는 서버 또는 네트워크 기능을 파괴하거나 방해하는 행위</ListItem>
                      <ListItem>앱 운영을 방해할 가능성이 있는 행위</ListItem>
                      <ListItem>다른 사용자에 대한 개인 정보 수집 또는 축적 (향후 기능 추가 시)</ListItem>
                      <ListItem>무단 액세스 또는 그 시도</ListItem>
                      <ListItem>본 앱의 무단 상업적 사용</ListItem>
                      <ListItem>앱 내 구매의 부정 사용 또는 환불 남용 (향후 기능 추가 시)</ListItem>
                      <ListItem>당사가 부적절하다고 판단하는 기타 행위</ListItem>
                    </ul>
                  </Section>

                  <Section title="제6조 (앱 제공 중단)">
                    <p className="text-gray-600 leading-relaxed mb-4">당사는 다음 중 하나의 상황이 존재한다고 판단하는 경우 사용자에게 사전 통지 없이 본 앱의 전부 또는 일부 제공을 중단하거나 중단할 수 있습니다.</p>
                    <ul className="space-y-4">
                      <ListItem>앱 시스템의 유지보수 또는 업데이트를 수행할 때</ListItem>
                      <ListItem>지진, 낙뢰, 화재, 정전 또는 자연재해와 같은 불가항력으로 인해 본 앱 제공이 어려워질 때</ListItem>
                      <ListItem>기타 이유로 본 앱 제공이 어렵다고 판단할 때</ListItem>
                    </ul>
                  </Section>

                  <Section title="제7조 (면책 조항)">
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                      <p>1. 본 앱은 훈련 기록 관리를 위한 도구이며 의료 조언, 진단 또는 치료를 제공하지 않습니다. 건강 문제가 있는 경우 의사 또는 전문가와 상담하십시오.</p>
                      <p>2. 당사는 본 앱의 내용, 작동 또는 품질에 대해 어떠한 보증도 하지 않습니다.</p>
                      <p>3. 당사는 본 앱 사용으로 인한 어떠한 손해(데이터 손실, 기기 고장 또는 기타 직간접적 손해를 포함하되 이에 국한되지 않음)에 대해 책임을 지지 않습니다.</p>
                      <p>4. 본 앱은 SQLite 데이터베이스를 사용하여 사용자 기기에 데이터를 로컬로 저장합니다. 기기 고장, 분실, OS 업데이트, 앱 오작동 등으로 인한 데이터 손실 위험이 있습니다. 사용자는 필요에 따라 자신의 책임 하에 데이터를 백업해야 합니다.</p>
                      <p>5. 현재 버전에는 클라우드 백업 기능이 제공되지 않습니다. 향후 이 기능이 추가되더라도 데이터 무결성 또는 가용성을 보장하지 않습니다.</p>
                    </div>
                  </Section>

                  <Section title="제8조 (약관 변경)">
                    <p className="text-gray-600 leading-relaxed">
                      당사는 필요하다고 판단되는 경우 사용자에게 통지 없이 언제든지 본 약관을 변경할 수 있습니다. 개정된 약관은 본 앱 내에 게시될 때 효력이 발생합니다.
                    </p>
                  </Section>

                  <Section title="제9조 (개인정보 처리)">
                    <p className="text-gray-600 leading-relaxed">
                      본 앱의 개인정보 처리는 별도의{' '}
                      <Link href="/privacy" className="text-green-600 hover:text-green-700 underline decoration-1 underline-offset-2">
                        개인정보 보호정책
                      </Link>
                      의 적용을 받습니다.
                    </p>
                  </Section>

                  <Section title="제10조 (제휴 프로그램)">
                    <p className="text-gray-600 leading-relaxed mb-6">앱은 앱의 개발 및 유지보수를 지원하는 수단으로 제3자 서비스(예: iHerb)에 대한 추천 코드 또는 제휴 링크를 포함할 수 있습니다. 사용자가 이러한 링크를 통해 구매할 때:</p>
                    <ul className="space-y-4">
                      <ListItem>당사는 제3자 서비스로부터 수수료를 받을 수 있습니다</ListItem>
                      <ListItem>사용자에게 추가 비용은 없습니다</ListItem>
                      <ListItem>이러한 추천 코드의 사용은 전적으로 자발적입니다</ListItem>
                    </ul>
                  </Section>

                  <Section title="제11조 (다국어 지원)">
                    <p className="text-gray-600 leading-relaxed mb-6">앱은 사용자 인터페이스 및 법적 문서에 대해 다음 언어를 지원합니다:</p>
                    <ul className="space-y-4">
                      <ListItem>영어, 일본어, 스페인어, 포르투갈어, 독일어, 프랑스어, 중국어(간체), 한국어, 이탈리아어, 인도네시아어, 러시아어, 터키어, 네덜란드어, 폴란드어, 태국어, 베트남어, 아랍어, 힌디어 및 페르시아어(파르시)</ListItem>
                      <ListItem>법적 문서(서비스 약관 및 개인정보 보호정책)는 이제 19개 언어 모두로 제공됩니다</ListItem>
                      <ListItem>번역의 정확성을 위해 노력하고 있지만 일본어 버전이 공식 버전입니다</ListItem>
                    </ul>
                  </Section>

                  <Section title="제12조 (지원)">
                    <p className="text-gray-600 leading-relaxed mb-8">본 앱에 대한 문의사항은 다음 이메일 주소로 문의하시기 바랍니다.</p>
                    <div className="space-y-2 text-gray-600">
                      <p>
                        <span className="text-gray-500 text-sm">이메일</span><br />
                        <a href="mailto:takuya.atsugi911@gmail.com" className="text-green-600 hover:text-green-700 underline decoration-1 underline-offset-2">
                          takuya.atsugi911@gmail.com
                        </a>
                      </p>
                      <p>
                        <span className="text-gray-500 text-sm">지원 언어</span><br />
                        일본어만
                      </p>
                    </div>
                  </Section>

                  <Section title="제13조 (준거법 및 관할권)">
                    <p className="text-gray-600 leading-relaxed">
                      본 약관은 일본 법률의 적용을 받습니다. 본 앱과 관련하여 분쟁이 발생하는 경우 당사 소재지를 관할하는 법원이 전속 관할권을 갖습니다.
                    </p>
                  </Section>
                </div>
              )

            case 'it':
              return (
                <div className="space-y-16">
                  <Section title="Articolo 1 (Applicazione)">
                    <p className="text-gray-600 leading-relaxed">
                      Questi Termini di Servizio definiscono le condizioni per l&apos;utilizzo dell&apos;applicazione per smartphone &quot;MASCALE&quot; (di seguito denominata &quot;questa Applicazione&quot;) fornita da Takuya Atsugi (di seguito denominato &quot;noi&quot;). Utilizzando questa Applicazione, si presume che tu abbia accettato questi Termini.
                    </p>
                  </Section>

                  <Section title="Articolo 2 (Contenuto dell'Applicazione)">
                    <p className="text-gray-600 leading-relaxed mb-6">Questa Applicazione è un&apos;applicazione progettata per consentire agli utenti di registrare allenamenti (allenamento di forza, cardio, ecc.) e gestire quella cronologia in formato calendario.</p>
                    <p className="font-semibold mb-4 text-gray-900">Funzionalità Principali:</p>
                    <ul className="space-y-4">
                      <ListItem>Gestione dei record di allenamento in formato calendario</ListItem>
                      <ListItem>Registrazione di serie, peso e ripetizioni per ogni esercizio</ListItem>
                      <ListItem>Cambio unità di peso (kg/lb)</ListItem>
                      <ListItem>Visualizzazione della cronologia degli allenamenti</ListItem>
                      <ListItem>Tutti i dati sono memorizzati localmente sul dispositivo utilizzando il database SQLite</ListItem>
                    </ul>
                  </Section>

                  <Section title="Articolo 3 (Fornitura Gratuita e Monetizzazione Futura)">
                    <p className="text-gray-600 leading-relaxed mb-6">Questa Applicazione è attualmente fornita gratuitamente. Tuttavia, potremmo aggiungere le seguenti funzionalità di monetizzazione in futuro.</p>
                    <ul className="space-y-4">
                      <ListItem>Visualizzazione annunci: Pubblicità nell&apos;app</ListItem>
                      <ListItem>Acquisti in-app: Fornitura di rimozione annunci e funzionalità premium (articoli non consumabili, ripristinabili)</ListItem>
                    </ul>
                    <p className="text-gray-600 leading-relaxed mt-6">Se queste funzionalità vengono aggiunte, aggiorneremo questi Termini e l&apos;Informativa sulla Privacy e informeremo gli utenti all&apos;interno dell&apos;app in anticipo.</p>
                  </Section>

                  <Section title="Articolo 4 (Ambiente di Utilizzo)">
                    <p className="text-gray-600 leading-relaxed mb-6">L&apos;utilizzo di questa Applicazione richiede un dispositivo smartphone compatibile (iOS/Android).</p>
                    <ul className="space-y-4">
                      <ListItem>Questa Applicazione è progettata come offline-first e può essere utilizzata senza connessione Internet per le funzionalità di base</ListItem>
                      <ListItem>Le informazioni di analisi (statistiche di utilizzo anonime) vengono inviate automaticamente a Firebase Analytics quando è disponibile una connessione Internet</ListItem>
                      <ListItem>Se in futuro viene aggiunta la funzionalità di sincronizzazione cloud, sarà necessaria una connessione Internet</ListItem>
                      <ListItem>Gli utenti sono responsabili dei costi di configurazione di questi ambienti (tariffe di comunicazione, ecc.)</ListItem>
                    </ul>
                  </Section>

                  <Section title="Articolo 5 (Atti Proibiti)">
                    <p className="text-gray-600 leading-relaxed mb-4">I seguenti atti sono proibiti quando si utilizza questa Applicazione.</p>
                    <ul className="space-y-4">
                      <ListItem>Atti che violano le leggi o l&apos;ordine pubblico e la morale</ListItem>
                      <ListItem>Atti relativi ad attività criminali</ListItem>
                      <ListItem>Modifica non autorizzata, reverse engineering o decompilazione delle funzioni dell&apos;app</ListItem>
                      <ListItem>Accesso diretto al database dell&apos;app (SQLite) per manipolare illegalmente i dati</ListItem>
                      <ListItem>Atti che distruggono o interferiscono con server o funzioni di rete che potrebbero essere introdotte in futuro</ListItem>
                      <ListItem>Atti che probabilmente interferiranno con le operazioni dell&apos;app</ListItem>
                      <ListItem>Raccolta o accumulo di informazioni personali su altri utenti (per future aggiunte di funzionalità)</ListItem>
                      <ListItem>Accesso non autorizzato o tentativi di farlo</ListItem>
                      <ListItem>Uso commerciale non autorizzato di questa Applicazione</ListItem>
                      <ListItem>Uso fraudolento di acquisti in-app o abuso di rimborsi (per future aggiunte di funzionalità)</ListItem>
                      <ListItem>Altri atti che riteniamo inappropriati</ListItem>
                    </ul>
                  </Section>

                  <Section title="Articolo 6 (Sospensione della Fornitura dell'Applicazione)">
                    <p className="text-gray-600 leading-relaxed mb-4">Potremmo sospendere o interrompere la fornitura di tutta o parte di questa Applicazione senza preavviso agli utenti se determiniamo che esiste una delle seguenti circostanze.</p>
                    <ul className="space-y-4">
                      <ListItem>Durante la manutenzione o gli aggiornamenti del sistema dell&apos;app</ListItem>
                      <ListItem>Quando la fornitura di questa Applicazione diventa difficile a causa di forza maggiore come terremoti, fulmini, incendi, interruzioni di corrente o calamità naturali</ListItem>
                      <ListItem>Quando determiniamo che la fornitura di questa Applicazione è difficile per altri motivi</ListItem>
                    </ul>
                  </Section>

                  <Section title="Articolo 7 (Esclusione di Responsabilità)">
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                      <p>1. Questa Applicazione è uno strumento per gestire i record di allenamento e non fornisce consulenza medica, diagnosi o trattamento. Se hai problemi di salute, consulta un medico o uno specialista.</p>
                      <p>2. Non forniamo garanzie riguardo al contenuto, al funzionamento o alla qualità di questa Applicazione.</p>
                      <p>3. Non accettiamo responsabilità per eventuali danni derivanti dall&apos;uso di questa Applicazione (inclusi ma non limitati a perdita di dati, guasto del dispositivo o altri danni diretti o indiretti).</p>
                      <p>4. Questa Applicazione memorizza i dati localmente sul dispositivo dell&apos;utente utilizzando il database SQLite. Esistono rischi di perdita di dati dovuti a guasto del dispositivo, perdita, aggiornamenti del sistema operativo, malfunzionamenti dell&apos;app, ecc. Gli utenti devono eseguire il backup dei dati sotto la propria responsabilità secondo necessità.</p>
                      <p>5. La versione attuale non fornisce funzionalità di backup cloud. Anche se questa funzionalità viene aggiunta in futuro, non garantiamo l&apos;integrità o la disponibilità dei dati.</p>
                    </div>
                  </Section>

                  <Section title="Articolo 8 (Modifiche ai Termini)">
                    <p className="text-gray-600 leading-relaxed">
                      Potremmo modificare questi Termini in qualsiasi momento senza preavviso agli utenti quando ritenuto necessario. I Termini revisionati entreranno in vigore quando pubblicati all&apos;interno di questa Applicazione.
                    </p>
                  </Section>

                  <Section title="Articolo 9 (Trattamento delle Informazioni Personali)">
                    <p className="text-gray-600 leading-relaxed">
                      Il trattamento delle informazioni personali in questa Applicazione è soggetto all&apos;
                      <Link href="/privacy" className="text-green-600 hover:text-green-700 underline decoration-1 underline-offset-2">
                        Informativa sulla Privacy
                      </Link>
                      {' '}separata.
                    </p>
                  </Section>

                  <Section title="Articolo 10 (Programma di Affiliazione)">
                    <p className="text-gray-600 leading-relaxed mb-6">L&apos;Applicazione può includere codici di riferimento o link di affiliazione a servizi di terze parti (ad es. iHerb) come mezzo per supportare lo sviluppo e la manutenzione dell&apos;Applicazione. Quando gli utenti effettuano acquisti tramite questi link:</p>
                    <ul className="space-y-4">
                      <ListItem>Potremmo ricevere una commissione dal servizio di terze parti</ListItem>
                      <ListItem>Non ci sono costi aggiuntivi per gli utenti</ListItem>
                      <ListItem>L&apos;uso di questi codici di riferimento è completamente volontario</ListItem>
                    </ul>
                  </Section>

                  <Section title="Articolo 11 (Supporto Multilingue)">
                    <p className="text-gray-600 leading-relaxed mb-6">L&apos;Applicazione supporta le seguenti lingue per l&apos;interfaccia utente e i documenti legali:</p>
                    <ul className="space-y-4">
                      <ListItem>Inglese, Giapponese, Spagnolo, Portoghese, Tedesco, Francese, Cinese (Semplificato), Coreano, Italiano, Indonesiano, Russo, Turco, Olandese, Polacco, Tailandese, Vietnamita, Arabo, Hindi e Persiano (Farsi)</ListItem>
                      <ListItem>I documenti legali (Termini di Servizio e Informativa sulla Privacy) sono ora disponibili in tutte le 19 lingue</ListItem>
                      <ListItem>Sebbene ci sforziamo di garantire l&apos;accuratezza nelle traduzioni, la versione giapponese funge da versione ufficiale</ListItem>
                    </ul>
                  </Section>

                  <Section title="Articolo 12 (Supporto)">
                    <p className="text-gray-600 leading-relaxed mb-8">Per richieste riguardanti questa Applicazione, contattaci al seguente indirizzo email.</p>
                    <div className="space-y-2 text-gray-600">
                      <p>
                        <span className="text-gray-500 text-sm">Email</span><br />
                        <a href="mailto:takuya.atsugi911@gmail.com" className="text-green-600 hover:text-green-700 underline decoration-1 underline-offset-2">
                          takuya.atsugi911@gmail.com
                        </a>
                      </p>
                      <p>
                        <span className="text-gray-500 text-sm">Lingua Supportata</span><br />
                        Solo giapponese
                      </p>
                    </div>
                  </Section>

                  <Section title="Articolo 13 (Legge Applicabile e Giurisdizione)">
                    <p className="text-gray-600 leading-relaxed">
                      Questi Termini saranno regolati dalla legge giapponese. In caso di controversie riguardanti questa Applicazione, il tribunale con giurisdizione sulla nostra ubicazione avrà giurisdizione esclusiva.
                    </p>
                  </Section>
                </div>
              )

            case 'id':
              return (
                <div className="space-y-16">
                  <Section title="Pasal 1 (Penerapan)">
                    <p className="text-gray-600 leading-relaxed">
                      Ketentuan Layanan ini mendefinisikan kondisi untuk menggunakan aplikasi smartphone &quot;MASCALE&quot; (selanjutnya disebut sebagai &quot;Aplikasi ini&quot;) yang disediakan oleh Takuya Atsugi (selanjutnya disebut sebagai &quot;kami&quot;). Dengan menggunakan Aplikasi ini, Anda dianggap telah menyetujui Ketentuan ini.
                    </p>
                  </Section>

                  <Section title="Pasal 2 (Konten Aplikasi)">
                    <p className="text-gray-600 leading-relaxed mb-6">Aplikasi ini adalah aplikasi yang dirancang untuk memungkinkan pengguna mencatat latihan (latihan kekuatan, kardio, dll.) dan mengelola riwayat tersebut dalam format kalender.</p>
                    <p className="font-semibold mb-4 text-gray-900">Fitur Utama:</p>
                    <ul className="space-y-4">
                      <ListItem>Manajemen catatan latihan dalam format kalender</ListItem>
                      <ListItem>Pencatatan set, berat, dan pengulangan untuk setiap latihan</ListItem>
                      <ListItem>Pengalihan unit berat (kg/lb)</ListItem>
                      <ListItem>Visualisasi riwayat latihan</ListItem>
                      <ListItem>Semua data disimpan secara lokal di perangkat menggunakan database SQLite</ListItem>
                    </ul>
                  </Section>

                  <Section title="Pasal 3 (Penyediaan Gratis dan Monetisasi Masa Depan)">
                    <p className="text-gray-600 leading-relaxed mb-6">Aplikasi ini saat ini disediakan secara gratis. Namun, kami dapat menambahkan fitur monetisasi berikut di masa depan.</p>
                    <ul className="space-y-4">
                      <ListItem>Tampilan iklan: Iklan dalam aplikasi</ListItem>
                      <ListItem>Pembelian dalam aplikasi: Penyediaan penghapusan iklan dan fitur premium (item tidak dapat dikonsumsi, dapat dipulihkan)</ListItem>
                    </ul>
                    <p className="text-gray-600 leading-relaxed mt-6">Jika fitur-fitur ini ditambahkan, kami akan memperbarui Ketentuan ini dan Kebijakan Privasi dan memberi tahu pengguna dalam aplikasi sebelumnya.</p>
                  </Section>

                  <Section title="Pasal 4 (Lingkungan Penggunaan)">
                    <p className="text-gray-600 leading-relaxed mb-6">Menggunakan Aplikasi ini memerlukan perangkat smartphone yang kompatibel (iOS/Android).</p>
                    <ul className="space-y-4">
                      <ListItem>Aplikasi ini dirancang sebagai offline-first dan dapat digunakan tanpa koneksi internet untuk fitur dasar</ListItem>
                      <ListItem>Informasi analitik (statistik penggunaan anonim) secara otomatis dikirim ke Firebase Analytics ketika koneksi internet tersedia</ListItem>
                      <ListItem>Jika fungsionalitas sinkronisasi cloud ditambahkan di masa depan, koneksi internet akan diperlukan</ListItem>
                      <ListItem>Pengguna bertanggung jawab atas biaya pengaturan lingkungan ini (biaya komunikasi, dll.)</ListItem>
                    </ul>
                  </Section>

                  <Section title="Pasal 5 (Tindakan yang Dilarang)">
                    <p className="text-gray-600 leading-relaxed mb-4">Tindakan berikut dilarang saat menggunakan Aplikasi ini.</p>
                    <ul className="space-y-4">
                      <ListItem>Tindakan yang melanggar hukum atau ketertiban umum dan moral</ListItem>
                      <ListItem>Tindakan terkait aktivitas kriminal</ListItem>
                      <ListItem>Modifikasi tidak sah, rekayasa balik, atau dekompilasi fungsi aplikasi</ListItem>
                      <ListItem>Akses langsung ke database aplikasi (SQLite) untuk memanipulasi data secara ilegal</ListItem>
                      <ListItem>Tindakan yang menghancurkan atau mengganggu server atau fungsi jaringan yang mungkin diperkenalkan di masa depan</ListItem>
                      <ListItem>Tindakan yang kemungkinan akan mengganggu operasi aplikasi</ListItem>
                      <ListItem>Mengumpulkan atau mengakumulasi informasi pribadi tentang pengguna lain (untuk penambahan fitur di masa depan)</ListItem>
                      <ListItem>Akses tidak sah atau upaya untuk melakukannya</ListItem>
                      <ListItem>Penggunaan komersial tidak sah dari Aplikasi ini</ListItem>
                      <ListItem>Penggunaan curang pembelian dalam aplikasi atau penyalahgunaan pengembalian dana (untuk penambahan fitur di masa depan)</ListItem>
                      <ListItem>Tindakan lain yang kami anggap tidak pantas</ListItem>
                    </ul>
                  </Section>

                  <Section title="Pasal 6 (Penangguhan Penyediaan Aplikasi)">
                    <p className="text-gray-600 leading-relaxed mb-4">Kami dapat menangguhkan atau menghentikan penyediaan semua atau sebagian dari Aplikasi ini tanpa pemberitahuan sebelumnya kepada pengguna jika kami menentukan bahwa salah satu dari keadaan berikut ada.</p>
                    <ul className="space-y-4">
                      <ListItem>Saat melakukan pemeliharaan atau pembaruan sistem aplikasi</ListItem>
                      <ListItem>Ketika penyediaan Aplikasi ini menjadi sulit karena keadaan kahar seperti gempa bumi, petir, kebakaran, pemadaman listrik, atau bencana alam</ListItem>
                      <ListItem>Ketika kami menentukan bahwa penyediaan Aplikasi ini sulit karena alasan lain</ListItem>
                    </ul>
                  </Section>

                  <Section title="Pasal 7 (Penafian)">
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                      <p>1. Aplikasi ini adalah alat untuk mengelola catatan latihan dan tidak memberikan saran medis, diagnosis, atau perawatan. Jika Anda memiliki masalah kesehatan, silakan berkonsultasi dengan dokter atau spesialis.</p>
                      <p>2. Kami tidak memberikan jaminan mengenai konten, operasi, atau kualitas Aplikasi ini.</p>
                      <p>3. Kami tidak menerima tanggung jawab atas kerusakan apa pun yang timbul dari penggunaan Aplikasi ini (termasuk tetapi tidak terbatas pada kehilangan data, kegagalan perangkat, atau kerusakan langsung atau tidak langsung lainnya).</p>
                      <p>4. Aplikasi ini menyimpan data secara lokal di perangkat pengguna menggunakan database SQLite. Ada risiko kehilangan data karena kegagalan perangkat, kehilangan, pembaruan OS, kerusakan aplikasi, dll. Pengguna harus mencadangkan data atas tanggung jawab mereka sendiri sesuai kebutuhan.</p>
                      <p>5. Versi saat ini tidak menyediakan fungsionalitas cadangan cloud. Bahkan jika fungsionalitas ini ditambahkan di masa depan, kami tidak menjamin integritas atau ketersediaan data.</p>
                    </div>
                  </Section>

                  <Section title="Pasal 8 (Perubahan Ketentuan)">
                    <p className="text-gray-600 leading-relaxed">
                      Kami dapat mengubah Ketentuan ini kapan saja tanpa pemberitahuan kepada pengguna ketika dianggap perlu. Ketentuan yang direvisi akan berlaku ketika diposting dalam Aplikasi ini.
                    </p>
                  </Section>

                  <Section title="Pasal 9 (Penanganan Informasi Pribadi)">
                    <p className="text-gray-600 leading-relaxed">
                      Penanganan informasi pribadi dalam Aplikasi ini tunduk pada{' '}
                      <Link href="/privacy" className="text-green-600 hover:text-green-700 underline decoration-1 underline-offset-2">
                        Kebijakan Privasi
                      </Link>
                      {' '}terpisah.
                    </p>
                  </Section>

                  <Section title="Pasal 10 (Program Afiliasi)">
                    <p className="text-gray-600 leading-relaxed mb-6">Aplikasi dapat menyertakan kode referensi atau tautan afiliasi ke layanan pihak ketiga (misalnya, iHerb) sebagai sarana untuk mendukung pengembangan dan pemeliharaan Aplikasi. Ketika pengguna melakukan pembelian melalui tautan ini:</p>
                    <ul className="space-y-4">
                      <ListItem>Kami dapat menerima komisi dari layanan pihak ketiga</ListItem>
                      <ListItem>Tidak ada biaya tambahan untuk pengguna</ListItem>
                      <ListItem>Penggunaan kode referensi ini sepenuhnya sukarela</ListItem>
                    </ul>
                  </Section>

                  <Section title="Pasal 11 (Dukungan Multibahasa)">
                    <p className="text-gray-600 leading-relaxed mb-6">Aplikasi mendukung bahasa berikut untuk antarmuka pengguna dan dokumen hukum:</p>
                    <ul className="space-y-4">
                      <ListItem>Inggris, Jepang, Spanyol, Portugis, Jerman, Prancis, Mandarin (Sederhana), Korea, Italia, Indonesia, Rusia, Turki, Belanda, Polandia, Thailand, Vietnam, Arab, Hindi, dan Persia (Farsi)</ListItem>
                      <ListItem>Dokumen hukum (Ketentuan Layanan dan Kebijakan Privasi) sekarang tersedia dalam semua 19 bahasa</ListItem>
                      <ListItem>Meskipun kami berusaha untuk akurasi dalam terjemahan, versi Jepang berfungsi sebagai versi resmi</ListItem>
                    </ul>
                  </Section>

                  <Section title="Pasal 12 (Dukungan)">
                    <p className="text-gray-600 leading-relaxed mb-8">Untuk pertanyaan mengenai Aplikasi ini, silakan hubungi kami di alamat email berikut.</p>
                    <div className="space-y-2 text-gray-600">
                      <p>
                        <span className="text-gray-500 text-sm">Email</span><br />
                        <a href="mailto:takuya.atsugi911@gmail.com" className="text-green-600 hover:text-green-700 underline decoration-1 underline-offset-2">
                          takuya.atsugi911@gmail.com
                        </a>
                      </p>
                      <p>
                        <span className="text-gray-500 text-sm">Bahasa yang Didukung</span><br />
                        Hanya Jepang
                      </p>
                    </div>
                  </Section>

                  <Section title="Pasal 13 (Hukum yang Mengatur dan Yurisdiksi)">
                    <p className="text-gray-600 leading-relaxed">
                      Ketentuan ini akan diatur oleh hukum Jepang. Dalam hal terjadi sengketa mengenai Aplikasi ini, pengadilan dengan yurisdiksi atas lokasi kami akan memiliki yurisdiksi eksklusif.
                    </p>
                  </Section>
                </div>
              )

            case 'ru':
              return (
                <div className="space-y-16">
                  <Section title="Статья 1 (Применение)">
                    <p className="text-gray-600 leading-relaxed">
                      Настоящие Условия использования определяют условия использования мобильного приложения &quot;MASCALE&quot; (далее именуемого &quot;это Приложение&quot;), предоставляемого Takuya Atsugi (далее именуемым &quot;мы&quot;). Используя это Приложение, вы считаетесь согласившимся с настоящими Условиями.
                    </p>
                  </Section>

                  <Section title="Статья 2 (Содержание приложения)">
                    <p className="text-gray-600 leading-relaxed mb-6">Это Приложение предназначено для того, чтобы пользователи могли записывать тренировки (силовые тренировки, кардио и т.д.) и управлять этой историей в формате календаря.</p>
                    <p className="font-semibold mb-4 text-gray-900">Основные функции:</p>
                    <ul className="space-y-4">
                      <ListItem>Управление записями тренировок в формате календаря</ListItem>
                      <ListItem>Запись подходов, веса и повторений для каждого упражнения</ListItem>
                      <ListItem>Переключение единиц веса (кг/фунты)</ListItem>
                      <ListItem>Визуализация истории тренировок</ListItem>
                      <ListItem>Все данные хранятся локально на устройстве с использованием базы данных SQLite</ListItem>
                    </ul>
                  </Section>

                  <Section title="Статья 3 (Бесплатное предоставление и будущая монетизация)">
                    <p className="text-gray-600 leading-relaxed mb-6">Это Приложение в настоящее время предоставляется бесплатно. Однако в будущем мы можем добавить следующие функции монетизации.</p>
                    <ul className="space-y-4">
                      <ListItem>Показ рекламы: Реклама в приложении</ListItem>
                      <ListItem>Покупки в приложении: Предоставление удаления рекламы и премиум-функций (невосполняемые предметы, восстанавливаемые)</ListItem>
                    </ul>
                    <p className="text-gray-600 leading-relaxed mt-6">Если эти функции будут добавлены, мы обновим настоящие Условия и Политику конфиденциальности и заранее уведомим пользователей в приложении.</p>
                  </Section>

                  <Section title="Статья 4 (Среда использования)">
                    <p className="text-gray-600 leading-relaxed mb-6">Для использования этого Приложения требуется совместимое смартфон-устройство (iOS/Android).</p>
                    <ul className="space-y-4">
                      <ListItem>Это Приложение разработано с приоритетом автономной работы и может использоваться без подключения к Интернету для основных функций</ListItem>
                      <ListItem>Аналитическая информация (анонимная статистика использования) автоматически отправляется в Firebase Analytics при наличии подключения к Интернету</ListItem>
                      <ListItem>Если в будущем будет добавлена функциональность облачной синхронизации, потребуется подключение к Интернету</ListItem>
                      <ListItem>Пользователи несут ответственность за расходы на настройку этих сред (платы за связь и т.д.)</ListItem>
                    </ul>
                  </Section>

                  <Section title="Статья 5 (Запрещенные действия)">
                    <p className="text-gray-600 leading-relaxed mb-4">При использовании этого Приложения запрещены следующие действия.</p>
                    <ul className="space-y-4">
                      <ListItem>Действия, нарушающие законы или общественный порядок и мораль</ListItem>
                      <ListItem>Действия, связанные с преступной деятельностью</ListItem>
                      <ListItem>Несанкционированная модификация, обратная разработка или декомпиляция функций приложения</ListItem>
                      <ListItem>Прямой доступ к базе данных приложения (SQLite) для незаконного манипулирования данными</ListItem>
                      <ListItem>Действия, которые разрушают или препятствуют работе серверов или сетевых функций, которые могут быть введены в будущем</ListItem>
                      <ListItem>Действия, которые могут помешать работе приложения</ListItem>
                      <ListItem>Сбор или накопление личной информации о других пользователях (для будущих добавлений функций)</ListItem>
                      <ListItem>Несанкционированный доступ или попытки его осуществления</ListItem>
                      <ListItem>Несанкционированное коммерческое использование этого Приложения</ListItem>
                      <ListItem>Мошенническое использование покупок в приложении или злоупотребление возвратами средств (для будущих добавлений функций)</ListItem>
                      <ListItem>Другие действия, которые мы считаем неуместными</ListItem>
                    </ul>
                  </Section>

                  <Section title="Статья 6 (Приостановка предоставления приложения)">
                    <p className="text-gray-600 leading-relaxed mb-4">Мы можем приостановить или прекратить предоставление всего или части этого Приложения без предварительного уведомления пользователей, если мы определим наличие любого из следующих обстоятельств.</p>
                    <ul className="space-y-4">
                      <ListItem>При проведении технического обслуживания или обновлений системы приложения</ListItem>
                      <ListItem>Когда предоставление этого Приложения становится затруднительным из-за форс-мажорных обстоятельств, таких как землетрясения, молния, пожары, отключения электроэнергии или стихийные бедствия</ListItem>
                      <ListItem>Когда мы определяем, что предоставление этого Приложения затруднено по другим причинам</ListItem>
                    </ul>
                  </Section>

                  <Section title="Статья 7 (Отказ от ответственности)">
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                      <p>1. Это Приложение является инструментом для управления записями тренировок и не предоставляет медицинских советов, диагностики или лечения. Если у вас есть проблемы со здоровьем, пожалуйста, проконсультируйтесь с врачом или специалистом.</p>
                      <p>2. Мы не даем никаких гарантий относительно содержания, работы или качества этого Приложения.</p>
                      <p>3. Мы не несем ответственности за любой ущерб, возникший в результате использования этого Приложения (включая, помимо прочего, потерю данных, сбой устройства или другие прямые или косвенные повреждения).</p>
                      <p>4. Это Приложение хранит данные локально на устройстве пользователя с использованием базы данных SQLite. Существуют риски потери данных из-за сбоя устройства, потери, обновлений ОС, неисправностей приложения и т.д. Пользователи должны создавать резервные копии данных на свой страх и риск по мере необходимости.</p>
                      <p>5. Текущая версия не предоставляет функциональность облачного резервного копирования. Даже если эта функциональность будет добавлена в будущем, мы не гарантируем целостность или доступность данных.</p>
                    </div>
                  </Section>

                  <Section title="Статья 8 (Изменения в Условиях)">
                    <p className="text-gray-600 leading-relaxed">
                      Мы можем изменить настоящие Условия в любое время без уведомления пользователей, когда сочтем это необходимым. Пересмотренные Условия вступят в силу при публикации в этом Приложении.
                    </p>
                  </Section>

                  <Section title="Статья 9 (Обработка личной информации)">
                    <p className="text-gray-600 leading-relaxed">
                      Обработка личной информации в этом Приложении регулируется отдельной{' '}
                      <Link href="/privacy" className="text-green-600 hover:text-green-700 underline decoration-1 underline-offset-2">
                        Политикой конфиденциальности
                      </Link>
                      .
                    </p>
                  </Section>

                  <Section title="Статья 10 (Партнерская программа)">
                    <p className="text-gray-600 leading-relaxed mb-6">Приложение может включать реферальные коды или партнерские ссылки на сторонние сервисы (например, iHerb) в качестве средства поддержки разработки и обслуживания Приложения. Когда пользователи совершают покупки по этим ссылкам:</p>
                    <ul className="space-y-4">
                      <ListItem>Мы можем получать комиссию от стороннего сервиса</ListItem>
                      <ListItem>Для пользователей нет дополнительных затрат</ListItem>
                      <ListItem>Использование этих реферальных кодов полностью добровольно</ListItem>
                    </ul>
                  </Section>

                  <Section title="Статья 11 (Многоязычная поддержка)">
                    <p className="text-gray-600 leading-relaxed mb-6">Приложение поддерживает следующие языки для пользовательского интерфейса и юридических документов:</p>
                    <ul className="space-y-4">
                      <ListItem>Английский, японский, испанский, португальский, немецкий, французский, китайский (упрощенный), корейский, итальянский, индонезийский, русский, турецкий, голландский, польский, тайский, вьетнамский, арабский, хинди и персидский (фарси)</ListItem>
                      <ListItem>Юридические документы (Условия использования и Политика конфиденциальности) теперь доступны на всех 19 языках</ListItem>
                      <ListItem>Хотя мы стремимся к точности в переводах, японская версия служит официальной версией</ListItem>
                    </ul>
                  </Section>

                  <Section title="Статья 12 (Поддержка)">
                    <p className="text-gray-600 leading-relaxed mb-8">По вопросам, касающимся этого Приложения, пожалуйста, свяжитесь с нами по следующему адресу электронной почты.</p>
                    <div className="space-y-2 text-gray-600">
                      <p>
                        <span className="text-gray-500 text-sm">Электронная почта</span><br />
                        <a href="mailto:takuya.atsugi911@gmail.com" className="text-green-600 hover:text-green-700 underline decoration-1 underline-offset-2">
                          takuya.atsugi911@gmail.com
                        </a>
                      </p>
                      <p>
                        <span className="text-gray-500 text-sm">Поддерживаемый язык</span><br />
                        Только японский
                      </p>
                    </div>
                  </Section>

                  <Section title="Статья 13 (Применимое право и юрисдикция)">
                    <p className="text-gray-600 leading-relaxed">
                      Настоящие Условия регулируются японским законодательством. В случае любых споров, касающихся этого Приложения, суд с юрисдикцией над нашим местоположением будет иметь исключительную юрисдикцию.
                    </p>
                  </Section>
                </div>
              )

            case 'tr':
              return (
                <div className="space-y-16">
                  <Section title="Madde 1 (Uygulama)">
                    <p className="text-gray-600 leading-relaxed">
                      Bu Hizmet Şartları, Takuya Atsugi (bundan böyle &quot;biz&quot; olarak anılacaktır) tarafından sağlanan &quot;MASCALE&quot; akıllı telefon uygulamasının (bundan böyle &quot;bu Uygulama&quot; olarak anılacaktır) kullanım koşullarını tanımlar. Bu Uygulamayı kullanarak bu Şartları kabul etmiş sayılırsınız.
                    </p>
                  </Section>

                  <Section title="Madde 2 (Uygulama İçeriği)">
                    <p className="text-gray-600 leading-relaxed mb-6">Bu Uygulama, kullanıcıların antrenmanları (kuvvet antrenmanı, kardio vb.) kaydetmesine ve bu geçmişi takvim formatında yönetmesine olanak tanıyan bir uygulamadır.</p>
                    <p className="font-semibold mb-4 text-gray-900">Ana Özellikler:</p>
                    <ul className="space-y-4">
                      <ListItem>Takvim formatında antrenman kayıtlarının yönetimi</ListItem>
                      <ListItem>Her egzersiz için set, ağırlık ve tekrar kaydı</ListItem>
                      <ListItem>Ağırlık birimi değiştirme (kg/lb)</ListItem>
                      <ListItem>Antrenman geçmişinin görselleştirilmesi</ListItem>
                      <ListItem>Tüm veriler SQLite veritabanı kullanılarak cihazda yerel olarak depolanır</ListItem>
                    </ul>
                  </Section>

                  <Section title="Madde 3 (Ücretsiz Sağlama ve Gelecekteki Monetizasyon)">
                    <p className="text-gray-600 leading-relaxed mb-6">Bu Uygulama şu anda ücretsiz olarak sağlanmaktadır. Ancak gelecekte aşağıdaki monetizasyon özelliklerini ekleyebiliriz.</p>
                    <ul className="space-y-4">
                      <ListItem>Reklam gösterimi: Uygulama içi reklamcılık</ListItem>
                      <ListItem>Uygulama içi satın almalar: Reklam kaldırma ve premium özelliklerin sağlanması (tüketilemeyen öğeler, geri yüklenebilir)</ListItem>
                    </ul>
                    <p className="text-gray-600 leading-relaxed mt-6">Bu özellikler eklenirse, bu Şartları ve Gizlilik Politikasını güncelleyeceğiz ve kullanıcıları uygulama içinde önceden bilgilendireceğiz.</p>
                  </Section>

                  <Section title="Madde 4 (Kullanım Ortamı)">
                    <p className="text-gray-600 leading-relaxed mb-6">Bu Uygulamayı kullanmak için uyumlu bir akıllı telefon cihazı (iOS/Android) gereklidir.</p>
                    <ul className="space-y-4">
                      <ListItem>Bu Uygulama çevrimdışı öncelikli olarak tasarlanmıştır ve temel özellikler için internet bağlantısı olmadan kullanılabilir</ListItem>
                      <ListItem>Analitik bilgiler (anonim kullanım istatistikleri) internet bağlantısı mevcut olduğunda otomatik olarak Firebase Analytics&apos;e gönderilir</ListItem>
                      <ListItem>Gelecekte bulut senkronizasyon işlevi eklenirse, internet bağlantısı gerekli olacaktır</ListItem>
                      <ListItem>Kullanıcılar bu ortamları kurmak için gereken maliyetlerden (iletişim ücretleri vb.) sorumludur</ListItem>
                    </ul>
                  </Section>

                  <Section title="Madde 5 (Yasaklanan Eylemler)">
                    <p className="text-gray-600 leading-relaxed mb-4">Bu Uygulamayı kullanırken aşağıdaki eylemler yasaktır.</p>
                    <ul className="space-y-4">
                      <ListItem>Yasalara veya kamu düzenine ve ahlaka aykırı eylemler</ListItem>
                      <ListItem>Suç faaliyetleriyle ilgili eylemler</ListItem>
                      <ListItem>Uygulama işlevlerinin yetkisiz değiştirilmesi, tersine mühendislik veya derlemesinin çözülmesi</ListItem>
                      <ListItem>Verileri yasadışı şekilde manipüle etmek için uygulamanın veritabanına (SQLite) doğrudan erişim</ListItem>
                      <ListItem>Gelecekte tanıtılabilecek sunucu veya ağ işlevlerini yok eden veya engelleyen eylemler</ListItem>
                      <ListItem>Uygulama operasyonlarına müdahale etmesi muhtemel eylemler</ListItem>
                      <ListItem>Diğer kullanıcılar hakkında kişisel bilgi toplama veya biriktirme (gelecekteki özellik eklemeleri için)</ListItem>
                      <ListItem>Yetkisiz erişim veya bunu deneme</ListItem>
                      <ListItem>Bu Uygulamanın yetkisiz ticari kullanımı</ListItem>
                      <ListItem>Uygulama içi satın almaların hileli kullanımı veya para iadelerinin kötüye kullanılması (gelecekteki özellik eklemeleri için)</ListItem>
                      <ListItem>Uygunsuz bulduğumuz diğer eylemler</ListItem>
                    </ul>
                  </Section>

                  <Section title="Madde 6 (Uygulama Sağlamanın Askıya Alınması)">
                    <p className="text-gray-600 leading-relaxed mb-4">Aşağıdaki koşullardan herhangi birinin mevcut olduğunu belirlersek, kullanıcılara önceden haber vermeksizin bu Uygulamanın tamamının veya bir bölümünün sağlanmasını askıya alabilir veya kesintiye uğratabiliriz.</p>
                    <ul className="space-y-4">
                      <ListItem>Uygulama sisteminin bakımını veya güncellemelerini gerçekleştirirken</ListItem>
                      <ListItem>Depremler, yıldırım, yangınlar, elektrik kesintileri veya doğal afetler gibi mücbir sebeplerden dolayı bu Uygulamayı sağlamak zorlaştığında</ListItem>
                      <ListItem>Başka nedenlerle bu Uygulamayı sağlamanın zor olduğunu belirlediğimizde</ListItem>
                    </ul>
                  </Section>

                  <Section title="Madde 7 (Sorumluluk Reddi)">
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                      <p>1. Bu Uygulama antrenman kayıtlarını yönetmek için bir araçtır ve tıbbi tavsiye, teşhis veya tedavi sağlamaz. Sağlık sorunlarınız varsa, lütfen bir doktor veya uzmanla görüşün.</p>
                      <p>2. Bu Uygulamanın içeriği, işleyişi veya kalitesi hakkında herhangi bir garanti vermiyoruz.</p>
                      <p>3. Bu Uygulamanın kullanımından kaynaklanan herhangi bir zarardan (veri kaybı, cihaz arızası veya diğer doğrudan veya dolaylı zararlar dahil ancak bunlarla sınırlı olmamak üzere) sorumluluk kabul etmiyoruz.</p>
                      <p>4. Bu Uygulama SQLite veritabanını kullanarak kullanıcının cihazında verileri yerel olarak depolar. Cihaz arızası, kayıp, işletim sistemi güncellemeleri, uygulama arızaları vb. nedeniyle veri kaybı riskleri vardır. Kullanıcılar gerektiğinde kendi sorumluluklarında verileri yedeklemelidir.</p>
                      <p>5. Mevcut sürüm bulut yedekleme işlevi sağlamaz. Bu işlev gelecekte eklense bile veri bütünlüğünü veya kullanılabilirliğini garanti etmiyoruz.</p>
                    </div>
                  </Section>

                  <Section title="Madde 8 (Şartlarda Değişiklikler)">
                    <p className="text-gray-600 leading-relaxed">
                      Gerekli gördüğümüzde kullanıcılara haber vermeden bu Şartları istediğimiz zaman değiştirebiliriz. Gözden geçirilmiş Şartlar, bu Uygulama içinde yayınlandığında yürürlüğe girer.
                    </p>
                  </Section>

                  <Section title="Madde 9 (Kişisel Bilgilerin İşlenmesi)">
                    <p className="text-gray-600 leading-relaxed">
                      Bu Uygulamadaki kişisel bilgilerin işlenmesi ayrı{' '}
                      <Link href="/privacy" className="text-green-600 hover:text-green-700 underline decoration-1 underline-offset-2">
                        Gizlilik Politikası
                      </Link>
                      &apos;na tabidir.
                    </p>
                  </Section>

                  <Section title="Madde 10 (Bağlı Kuruluş Programı)">
                    <p className="text-gray-600 leading-relaxed mb-6">Uygulama, Uygulamanın geliştirilmesini ve bakımını destekleme aracı olarak üçüncü taraf hizmetlere (örn. iHerb) yönlendirme kodları veya bağlı kuruluş bağlantıları içerebilir. Kullanıcılar bu bağlantılar üzerinden satın alma yaptığında:</p>
                    <ul className="space-y-4">
                      <ListItem>Üçüncü taraf hizmetten komisyon alabiliriz</ListItem>
                      <ListItem>Kullanıcılar için ek maliyet yoktur</ListItem>
                      <ListItem>Bu yönlendirme kodlarının kullanımı tamamen isteğe bağlıdır</ListItem>
                    </ul>
                  </Section>

                  <Section title="Madde 11 (Çok Dilli Destek)">
                    <p className="text-gray-600 leading-relaxed mb-6">Uygulama, kullanıcı arabirimi ve yasal belgeler için aşağıdaki dilleri destekler:</p>
                    <ul className="space-y-4">
                      <ListItem>İngilizce, Japonca, İspanyolca, Portekizce, Almanca, Fransızca, Çince (Basitleştirilmiş), Korece, İtalyanca, Endonezce, Rusça, Türkçe, Hollandaca, Lehçe, Tayca, Vietnamca, Arapça, Hintçe ve Farsça (Farsi)</ListItem>
                      <ListItem>Yasal belgeler (Hizmet Şartları ve Gizlilik Politikası) artık 19 dilin tümünde mevcuttur</ListItem>
                      <ListItem>Çevirilerde doğruluk için çaba gösteriyor olsak da, Japonca sürüm resmi sürüm olarak hizmet eder</ListItem>
                    </ul>
                  </Section>

                  <Section title="Madde 12 (Destek)">
                    <p className="text-gray-600 leading-relaxed mb-8">Bu Uygulamayla ilgili sorularınız için lütfen aşağıdaki e-posta adresinden bizimle iletişime geçin.</p>
                    <div className="space-y-2 text-gray-600">
                      <p>
                        <span className="text-gray-500 text-sm">E-posta</span><br />
                        <a href="mailto:takuya.atsugi911@gmail.com" className="text-green-600 hover:text-green-700 underline decoration-1 underline-offset-2">
                          takuya.atsugi911@gmail.com
                        </a>
                      </p>
                      <p>
                        <span className="text-gray-500 text-sm">Desteklenen Dil</span><br />
                        Yalnızca Japonca
                      </p>
                    </div>
                  </Section>

                  <Section title="Madde 13 (Geçerli Hukuk ve Yargı Yetkisi)">
                    <p className="text-gray-600 leading-relaxed">
                      Bu Şartlar Japon yasalarına tabidir. Bu Uygulamayla ilgili herhangi bir anlaşmazlık durumunda, konumumuz üzerinde yargı yetkisine sahip mahkeme münhasır yargı yetkisine sahip olacaktır.
                    </p>
                  </Section>
                </div>
              )

            case 'nl':
              return (
                <div className="space-y-16">
                  <Section title="Artikel 1 (Toepassing)">
                    <p className="text-gray-600 leading-relaxed">
                      Deze Servicevoorwaarden definiëren de voorwaarden voor het gebruik van de smartphone-applicatie &quot;MASCALE&quot; (hierna &quot;deze Applicatie&quot; genoemd) verstrekt door Takuya Atsugi (hierna &quot;wij&quot; genoemd). Door deze Applicatie te gebruiken, wordt u geacht akkoord te zijn gegaan met deze Voorwaarden.
                    </p>
                  </Section>

                  <Section title="Artikel 2 (Applicatie-inhoud)">
                    <p className="text-gray-600 leading-relaxed mb-6">Deze Applicatie is een applicatie ontworpen om gebruikers in staat te stellen trainingen (krachttraining, cardio, enz.) op te nemen en die geschiedenis in kalenderformaat te beheren.</p>
                    <p className="font-semibold mb-4 text-gray-900">Hoofdfuncties:</p>
                    <ul className="space-y-4">
                      <ListItem>Beheer van trainingsrecords in kalenderformaat</ListItem>
                      <ListItem>Opname van sets, gewicht en herhalingen voor elke oefening</ListItem>
                      <ListItem>Wisselen van gewichtseenheid (kg/lb)</ListItem>
                      <ListItem>Visualisatie van trainingsgeschiedenis</ListItem>
                      <ListItem>Alle gegevens worden lokaal op het apparaat opgeslagen met behulp van SQLite-database</ListItem>
                    </ul>
                  </Section>

                  <Section title="Artikel 3 (Gratis verstrekking en toekomstige monetisatie)">
                    <p className="text-gray-600 leading-relaxed mb-6">Deze Applicatie wordt momenteel gratis aangeboden. We kunnen echter in de toekomst de volgende monetisatiefuncties toevoegen.</p>
                    <ul className="space-y-4">
                      <ListItem>Advertentieweergave: In-app advertenties</ListItem>
                      <ListItem>In-app aankopen: Het verstrekken van advertentieverwijdering en premium functies (niet-verbruikbare items, herstelbaar)</ListItem>
                    </ul>
                    <p className="text-gray-600 leading-relaxed mt-6">Als deze functies worden toegevoegd, zullen we deze Voorwaarden en het Privacybeleid bijwerken en gebruikers vooraf in de app informeren.</p>
                  </Section>

                  <Section title="Artikel 4 (Gebruiksomgeving)">
                    <p className="text-gray-600 leading-relaxed mb-6">Het gebruik van deze Applicatie vereist een compatibel smartphone-apparaat (iOS/Android).</p>
                    <ul className="space-y-4">
                      <ListItem>Deze Applicatie is ontworpen als offline-first en kan worden gebruikt zonder internetverbinding voor basisfuncties</ListItem>
                      <ListItem>Analytics-informatie (anonieme gebruiksstatistieken) wordt automatisch naar Firebase Analytics verzonden wanneer een internetverbinding beschikbaar is</ListItem>
                      <ListItem>Als in de toekomst cloud-synchronisatiefunctionaliteit wordt toegevoegd, is een internetverbinding vereist</ListItem>
                      <ListItem>Gebruikers zijn verantwoordelijk voor de kosten van het instellen van deze omgevingen (communicatiekosten, enz.)</ListItem>
                    </ul>
                  </Section>

                  <Section title="Artikel 5 (Verboden handelingen)">
                    <p className="text-gray-600 leading-relaxed mb-4">De volgende handelingen zijn verboden bij het gebruik van deze Applicatie.</p>
                    <ul className="space-y-4">
                      <ListItem>Handelingen die wetten of openbare orde en moraal schenden</ListItem>
                      <ListItem>Handelingen gerelateerd aan criminele activiteiten</ListItem>
                      <ListItem>Ongeautoriseerde wijziging, reverse engineering of decompilatie van app-functies</ListItem>
                      <ListItem>Directe toegang tot de database van de app (SQLite) om gegevens illegaal te manipuleren</ListItem>
                      <ListItem>Handelingen die servers of netwerkfuncties vernietigen of verstoren die in de toekomst kunnen worden geïntroduceerd</ListItem>
                      <ListItem>Handelingen die waarschijnlijk de app-operaties zullen verstoren</ListItem>
                      <ListItem>Het verzamelen of accumuleren van persoonlijke informatie over andere gebruikers (voor toekomstige functietoevoegingen)</ListItem>
                      <ListItem>Ongeautoriseerde toegang of pogingen daartoe</ListItem>
                      <ListItem>Ongeautoriseerd commercieel gebruik van deze Applicatie</ListItem>
                      <ListItem>Frauduleus gebruik van in-app aankopen of misbruik van restituties (voor toekomstige functietoevoegingen)</ListItem>
                      <ListItem>Andere handelingen die wij ongepast achten</ListItem>
                    </ul>
                  </Section>

                  <Section title="Artikel 6 (Opschorting van applicatieverstrekking)">
                    <p className="text-gray-600 leading-relaxed mb-4">We kunnen de verstrekking van de gehele of een deel van deze Applicatie opschorten of onderbreken zonder voorafgaande kennisgeving aan gebruikers als we bepalen dat een van de volgende omstandigheden bestaat.</p>
                    <ul className="space-y-4">
                      <ListItem>Bij het uitvoeren van onderhoud of updates aan het app-systeem</ListItem>
                      <ListItem>Wanneer de verstrekking van deze Applicatie moeilijk wordt door overmacht zoals aardbevingen, bliksem, branden, stroomstoringen of natuurrampen</ListItem>
                      <ListItem>Wanneer we bepalen dat de verstrekking van deze Applicatie om andere redenen moeilijk is</ListItem>
                    </ul>
                  </Section>

                  <Section title="Artikel 7 (Disclaimer)">
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                      <p>1. Deze Applicatie is een hulpmiddel voor het beheren van trainingsrecords en biedt geen medisch advies, diagnose of behandeling. Als u gezondheidsproblemen heeft, raadpleeg dan een arts of specialist.</p>
                      <p>2. We bieden geen garanties met betrekking tot de inhoud, werking of kwaliteit van deze Applicatie.</p>
                      <p>3. We aanvaarden geen verantwoordelijkheid voor schade die voortvloeit uit het gebruik van deze Applicatie (inclusief maar niet beperkt tot gegevensverlies, apparaatstoringen of andere directe of indirecte schade).</p>
                      <p>4. Deze Applicatie slaat gegevens lokaal op het apparaat van de gebruiker op met behulp van SQLite-database. Er zijn risico&apos;s van gegevensverlies door apparaatdefecten, verlies, OS-updates, app-storingen, enz. Gebruikers moeten indien nodig gegevens back-uppen onder hun eigen verantwoordelijkheid.</p>
                      <p>5. De huidige versie biedt geen cloud-back-upfunctionaliteit. Zelfs als deze functionaliteit in de toekomst wordt toegevoegd, garanderen we niet de integriteit of beschikbaarheid van gegevens.</p>
                    </div>
                  </Section>

                  <Section title="Artikel 8 (Wijzigingen in Voorwaarden)">
                    <p className="text-gray-600 leading-relaxed">
                      We kunnen deze Voorwaarden op elk moment zonder kennisgeving aan gebruikers wijzigen wanneer dit noodzakelijk wordt geacht. De herziene Voorwaarden treden in werking wanneer ze binnen deze Applicatie worden geplaatst.
                    </p>
                  </Section>

                  <Section title="Artikel 9 (Behandeling van persoonlijke informatie)">
                    <p className="text-gray-600 leading-relaxed">
                      De behandeling van persoonlijke informatie in deze Applicatie is onderworpen aan het afzonderlijke{' '}
                      <Link href="/privacy" className="text-green-600 hover:text-green-700 underline decoration-1 underline-offset-2">
                        Privacybeleid
                      </Link>
                      .
                    </p>
                  </Section>

                  <Section title="Artikel 10 (Partnerprogramma)">
                    <p className="text-gray-600 leading-relaxed mb-6">De Applicatie kan verwijzingscodes of partnerlinks naar diensten van derden (bijv. iHerb) bevatten als een middel om de ontwikkeling en het onderhoud van de Applicatie te ondersteunen. Wanneer gebruikers aankopen doen via deze links:</p>
                    <ul className="space-y-4">
                      <ListItem>We kunnen een commissie ontvangen van de dienst van derden</ListItem>
                      <ListItem>Er zijn geen extra kosten voor gebruikers</ListItem>
                      <ListItem>Het gebruik van deze verwijzingscodes is geheel vrijwillig</ListItem>
                    </ul>
                  </Section>

                  <Section title="Artikel 11 (Meertalige ondersteuning)">
                    <p className="text-gray-600 leading-relaxed mb-6">De Applicatie ondersteunt de volgende talen voor de gebruikersinterface en juridische documenten:</p>
                    <ul className="space-y-4">
                      <ListItem>Engels, Japans, Spaans, Portugees, Duits, Frans, Chinees (Vereenvoudigd), Koreaans, Italiaans, Indonesisch, Russisch, Turks, Nederlands, Pools, Thais, Vietnamees, Arabisch, Hindi en Perzisch (Farsi)</ListItem>
                      <ListItem>Juridische documenten (Servicevoorwaarden en Privacybeleid) zijn nu beschikbaar in alle 19 talen</ListItem>
                      <ListItem>Hoewel we streven naar nauwkeurigheid in vertalingen, dient de Japanse versie als de officiële versie</ListItem>
                    </ul>
                  </Section>

                  <Section title="Artikel 12 (Ondersteuning)">
                    <p className="text-gray-600 leading-relaxed mb-8">Voor vragen over deze Applicatie kunt u contact met ons opnemen via het volgende e-mailadres.</p>
                    <div className="space-y-2 text-gray-600">
                      <p>
                        <span className="text-gray-500 text-sm">E-mail</span><br />
                        <a href="mailto:takuya.atsugi911@gmail.com" className="text-green-600 hover:text-green-700 underline decoration-1 underline-offset-2">
                          takuya.atsugi911@gmail.com
                        </a>
                      </p>
                      <p>
                        <span className="text-gray-500 text-sm">Ondersteunde Taal</span><br />
                        Alleen Japans
                      </p>
                    </div>
                  </Section>

                  <Section title="Artikel 13 (Toepasselijk recht en jurisdictie)">
                    <p className="text-gray-600 leading-relaxed">
                      Deze Voorwaarden worden beheerst door de Japanse wetgeving. In geval van geschillen met betrekking tot deze Applicatie, heeft de rechtbank met jurisdictie over onze locatie exclusieve jurisdictie.
                    </p>
                  </Section>
                </div>
              )

            case 'en':
            default:
              return (
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
                <ListItem>Analytics information (anonymous usage statistics) is automatically sent to Firebase Analytics when an internet connection is available</ListItem>
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

            <Section title="Article 10 (Affiliate Program)">
              <p className="text-gray-600 leading-relaxed mb-6">The App may include referral codes or affiliate links to third-party services (e.g., iHerb) as a means of supporting the development and maintenance of the App. When users make purchases through these links:</p>
              <ul className="space-y-4">
                <ListItem>We may receive a commission from the third-party service</ListItem>
                <ListItem>There is no additional cost to users</ListItem>
                <ListItem>The use of these referral codes is entirely voluntary</ListItem>
              </ul>
            </Section>

            <Section title="Article 11 (Multilingual Support)">
              <p className="text-gray-600 leading-relaxed mb-6">The App supports the following languages for the user interface:</p>
              <ul className="space-y-4">
                <ListItem>English, Japanese, Spanish, Portuguese, German, French, Chinese (Simplified), Korean, Italian, Indonesian, Russian, Turkish, Dutch, Polish, Thai, Vietnamese, Arabic, Hindi, and Persian (Farsi)</ListItem>
                <ListItem>Legal documents (Terms of Service and Privacy Policy) are currently available in English and Japanese only</ListItem>
                <ListItem>For users of other languages, English versions of the legal documents will be displayed</ListItem>
              </ul>
            </Section>

            <Section title="Article 12 (Support)">
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

            <Section title="Article 13 (Governing Law and Jurisdiction)">
              <p className="text-gray-600 leading-relaxed">
                These Terms shall be governed by Japanese law. In the event of any disputes regarding this App, the court with jurisdiction over our location shall have exclusive jurisdiction.
              </p>
            </Section>
          </div>
              )
          }
        })()}
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
