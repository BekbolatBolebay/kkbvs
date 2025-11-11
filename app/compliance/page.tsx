import { BackButton } from "@/components/back-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, FileText, Users, AlertTriangle } from "lucide-react"

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <BackButton />

        <div className="mt-6">
          <Card>
            <CardHeader className="bg-gradient-to-r from-red-500 to-orange-600 text-white">
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8" />
                <div>
                  <CardTitle className="text-2xl md:text-3xl">Комплаенс қызметі</CardTitle>
                  <CardDescription className="text-white/90">Сыбайлас жемқорлыққа қарсы іс-қимыл</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <Tabs defaultValue="analysis" className="w-full">
                <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 gap-2 h-auto">
                  <TabsTrigger value="analysis" className="py-3">
                    <FileText className="h-4 w-4 mr-2" />
                    Ішкі талдау
                  </TabsTrigger>
                  <TabsTrigger value="working-group" className="py-3">
                    <Users className="h-4 w-4 mr-2" />
                    Жұмыс тобы
                  </TabsTrigger>
                  <TabsTrigger value="recommendations" className="py-3">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Ұсынымдар
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="analysis" className="space-y-6 mt-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Сыбайлас жемқорлық тәуекелдеріне ішкі талдау нәтижелері бойынша талдамалық анықтамасы
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">30 мамыр 2025 жыл</p>

                    <div className="space-y-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">КІРІСПЕ БӨЛІМІ</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 text-sm">
                          <p>
                            1. «Қызылорда облыстық тері-венерология диспансері» ШЖҚ КМК-ны (әрі қарай - Кәсіпорын)
                            қызметіне сыбайлас жемқорлық тәуекелдеріне ішкі талдау объектісі болып табылады.
                          </p>
                          <p>
                            2. Сыбайлас жемқорлық тәуекелдеріне ішкі талдау Қазақстан Республикасы Мемлекеттік қызмет
                            істері және сыбайлас жемқорлыққа қарсы іс-қимыл агенттігі Төрағасының 2016 жылғы 19
                            қазандағы №12 бұйрығына және Қазақстан Республикасы Сыбайлас жемқорлыққа қарсы іс-қимыл
                            агенттігі (Сыбайлас жемқорлыққа қарсы қызмет) Төрағасының 2023 жылғы 16 қаңтардағы №21
                            бұйрығымен бекітілген Сыбайлас жемқорлық тәуекелдеріне ішкі талдау жүргізудің үлгілік
                            қағидаларына сәйкес жүргізілді.
                          </p>
                          <p>4. Сыбайлас жемқорлық тәуекелдерінің ішкі талдау жүргізу 2024 жылды қамтыды.</p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">СИПАТТАМА БӨЛІМІ</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-sm">
                          <div>
                            <h4 className="font-semibold mb-2">І. Талдау бағыттары:</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                              <li>Мемлекеттік сатып алу саласына сыбайлас жемқорлық тәуекелдерін анықтау</li>
                              <li>
                                Персоналды басқару, оның ішінде сыбайлас жемқорлық тәуекелдеріне шалдыққан лауазымдарды
                                айқындау
                              </li>
                              <li>Мүдделер қақтығысын реттеу</li>
                              <li>Мемлекеттік қызметтер көрсету</li>
                              <li>Ақпараттық жүйелерді әзірлеу және пайдалану</li>
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">III. Персоналды басқару</h4>
                            <p className="text-gray-700">
                              Кәсіпорын штат саны 107 штат бірлік. Кадрлық құрам бойынша: бекітілген құрылымға сәйкес
                              дәрігерлер – 19; медбикелер -44,5; кіші буын – 19,5; медициналық емес қызметкерлер -24.
                            </p>
                            <p className="text-gray-700 mt-2">
                              2024 жылы қолданылған тәртіптік шара - 6; Мерзімінен бұрын тәртіптік шараны алу – 1.
                            </p>
                            <p className="text-gray-700 mt-2">
                              2024 жылдарында сыбайлас жемқорлық сипатына жататын заң бұзушылықтар орын алмаған және
                              сыбайлас жемқорлыққа қатысты сотқа жүгіну фактілері болмаған.
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">IV. Мүдделер қақтығысын реттеу</h4>
                            <p className="text-gray-700">
                              2024 жылы Кәсіпорында мүдделер қақтығысы фактілері анықталған жоқ.
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">V. Мемлекеттік қызметтер</h4>
                            <p className="text-gray-700 mb-2">Кәсіпорында мемлекеттік қызметтің 3 түрі көрсетіледі:</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                              <li>Еңбекке уақытша жарамсыздық парағын беру (больничный лист)</li>
                              <li>Стационарлық науқастың медициналық картасынан үзінді көшірме беру</li>
                              <li>
                                Уақытша еңбекке жарамсыздық туралы анықтама беру (справка) студент, мектеп, балабақшаға
                              </li>
                            </ul>
                            <p className="text-gray-700 mt-2">
                              2024 жылы Кәсіпорында 3247 келуші мемлекеттік қызмет алған. Көрсетілген мемлекеттік
                              қызметтер бойынша сыбайлас жемқорлық көріністері орын алған жоқ.
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">VI. Мемлекеттік сатып алу</h4>
                            <p className="text-gray-700 mb-2">
                              2024 жылы мемлекеттік сатып алулар бойынша 156 келісім шарт жасасқан:
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                              <li>Бір көзден сатып алу - 24</li>
                              <li>Ашық конкурс - жоқ</li>
                              <li>Баға сұранысы бойынша - 82</li>
                              <li>Электронды магазин – 46</li>
                              <li>Алдын ала біліктілік іріктеу конкурсымен – 1</li>
                              <li>Шекаралық келісімді пайдалана отырып конкурстың екінші кезеңі - 3</li>
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">VIII. Жеке және заңды тұлғалардың өтініштері</h4>
                            <p className="text-gray-700">
                              2024 жылы барлығы 52 өтініш тіркелген, оның ішінде 1 өтініш жеке тұлғалардан, 50 өтініш
                              заңды тұлғалардан түскен. Келіп түскен өтініштер мерзімінде жауап берілген. Сыбайлас
                              жемқорлық фактілері орын алмаған.
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="working-group" className="space-y-6 mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Жұмыс тобының құрамы</CardTitle>
                      <CardDescription>Кәсіпорынның 2025 жылғы 23 сәуір №55A-05/01 бұйрығымен құрылған</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                          <Users className="h-6 w-6 text-cyan-600 mt-1" />
                          <div>
                            <h4 className="font-semibold">Каракаева Гулистан Токтановна</h4>
                            <p className="text-sm text-gray-600">Бас дәрігердің ішкі аудит жөніндегі орынбасары</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                          <Users className="h-6 w-6 text-cyan-600 mt-1" />
                          <div>
                            <h4 className="font-semibold">Кадиркулова Динара Тілшінбаевна</h4>
                            <p className="text-sm text-gray-600">Мемлекеттік сатып алу маманы</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                          <Users className="h-6 w-6 text-cyan-600 mt-1" />
                          <div>
                            <h4 className="font-semibold">Бутабекова Майра Айтбаевна</h4>
                            <p className="text-sm text-gray-600">Комплаенс-офицері, заңгер маманы</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Жария талқылау хаттамасы</CardTitle>
                      <CardDescription>26 мамыр 2025 жыл</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm">
                      <p>
                        <strong>Төрағалық еткен:</strong> С.Усейнов
                      </p>
                      <div>
                        <h4 className="font-semibold mb-2">Шешімдер:</h4>
                        <ol className="list-decimal list-inside space-y-2 text-gray-700">
                          <li>
                            Қызылорда облысының денсаулық сақтау басқармасының «Қызылорда облыстық тері венерология
                            диспансері» ШЖҚ КМК қызметіне сыбайлас жемқорлық тәуекелдеріне жүргізілген ішкі талдау
                            нәтижелері бойынша талдамалық анықтама назарға алынсын.
                          </li>
                          <li>
                            Мемлекеттік сатып алу маманы Д. Кадиркулова талдамалық анықтамада көрсетілген ұсынымдар
                            бойынша жұмыстар жүргізілсін.
                          </li>
                          <li>
                            Заңгері М.Бутабекова талдамалық анықтамада көрсетілген ұсынымдардың орындалу нәтижесін
                            Кәсіпорынның ресми интернет ресурстарына енгізілуін қамтамасыз етсін.
                          </li>
                        </ol>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="recommendations" className="space-y-6 mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Ұсынымдар</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                        <h4 className="font-semibold text-yellow-800 mb-2">Мемлекеттік сатып алу бойынша:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-yellow-900">
                          <li>Мемлекеттік сатып алудағы заң бұзушылықтарға жол бермеуге</li>
                          <li>Мемлекеттік сатып алу бойынша құқықтық оқытулар жүргізу</li>
                          <li>
                            Мемлекеттік сатып алуларды «Мемлекеттік сатып алу туралы» ҚР заңының талаптарына сәйкес
                            жүзеге асыру
                          </li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                        <h4 className="font-semibold text-blue-800 mb-2">Өтініштерді қарау бойынша:</h4>
                        <p className="text-sm text-blue-900">
                          Алдағы уақытта Е – өтініш kz порталына тіркелген заңды және жеке тұлғалардың өтініштерін заң
                          аясында мұқият қарап, уақытылы мерзімінен кешіктірмей жауап жолдап отыру.
                        </p>
                      </div>

                      <div className="bg-green-50 border-l-4 border-green-400 p-4">
                        <h4 className="font-semibold text-green-800 mb-2">Қорытынды:</h4>
                        <p className="text-sm text-green-900">
                          Прокурорлық қадағалау актілері келіп түскен жоқ. Сот тәртібімен даулар деректері орын алмаған.
                          Сыбайлас жемқорлық фактісі орын алуына жол берілген жоқ.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
