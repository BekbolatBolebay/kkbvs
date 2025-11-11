import { BackButton } from "@/components/back-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FileText } from "lucide-react"

export default function BoardPage() {
  const protocols = [
    {
      id: "protocol-2",
      title: "№2 Хаттама - 2025 жыл 31 наурыз",
      date: "31 наурыз 2025",
      attendees: ["Т.Нұрғазайұлы (төраға)", "Н.Омір", "Б.Арғынбаев", "Х.Күлшенбегова"],
      agenda: [
        {
          title: "1. Байқау кеңесінің өткен отырысының шешімдерінің орындалуы туралы ақпараттық тыңдау",
          decision:
            "Байқау кеңесі мүшелері бірауыздан ШЕШІМ қабылдады: Дауыс беру қорытындылары: «Иә» 4-дауыс, «Қарсы» дауыс, «Қалыс» дауыс. Шешім қабылданды: бір ауыздан «Иә» 4 дауыс",
        },
        {
          title: "2. Кәсіпорынның 2025 жылғы қаржы-шаруашылық қызметінің бірінші қаржы жылдығына орындалу есебі",
          decision: "Есепті тыңдау бойынша Байқау кеңесі мүшелері бірауыздан ШЕШІМ қабылдады",
        },
        {
          title: "3. 2025 жылдың І қартал жылдық мемлекеттік сатып алу жоспарының орындалуы туралы",
          decision: "Байқау кеңесі мүшелері бірауыздан ШЕШІМ қабылдады",
        },
        {
          title: "4. Штат кестесіне ішінара өзгеріс енгізу және бекіту",
          decision:
            "Байқау кеңесі мүшелері бірауыздан ШЕШІМ қабылдады. Күн тәртібінен төраға Т. Нұрғазайұлы таныстырды.",
        },
      ],
    },
    {
      id: "protocol-3",
      title: "№3 Хаттама - 2025 жыл 07 қазан",
      date: "07 қазан 2025",
      attendees: ["Т.Нұрғазайұлы (төраға)", "Б.Арғынбаев", "Х.Күлшенбегова"],
      agenda: [
        {
          title:
            "Денсаулық сақтау саласындағы байқау кеңесі бар шаруашылық жүргізу құқығындағы коммуналдық мемлекеттік кәсіпорнының басшысының (бас дәрігер) бос лауазымына конкурстық іріктеу жүргізуге хабарлама жариялау",
          decision:
            "Байқау кеңесінің шешімі: Хабарлама жариялау туралы шешім қабылданды. Конкурс 15 күн ішінде жарияланады.",
        },
      ],
    },
    {
      id: "protocol-4",
      title: "№4 Хаттама - 2025 жыл 28 қазан",
      date: "28 қазан 2025",
      attendees: ["Т.Нұрғазайұлы (төраға)", "Б.Арғынбаев", "Х.Күлшенбегова"],
      absent: ["Б.С. Тұрдалиева"],
      agenda: [
        {
          title:
            "Денсаулық сақтау саласындағы Байқау кеңесі бар «Қызылорда облыстық тері венерология диспансері» шаруашылық жүргізу құқығындағы коммуналдық мемлекеттік кәсіпорнының басшысының бос лауазымына үміткердің құжаттарын қарау, өңдеуге жіберу туралы шешім қабылдау",
          decision:
            "Үміткер Омір Нұрлан Омірұлының құжаттарын қарау және өңдеуге жіберу туралы шешім қабылданды. Дауыс беру: «Иә» 3 дауыс, «Қарсы» 0 дауыс, «Қалыс» 0 дауыс",
        },
      ],
    },
    {
      id: "protocol-5",
      title: "№5 Хаттама - 2025 жыл 29 қазан",
      date: "29 қазан 2025",
      attendees: ["Т.Нұрғазайұлы (төраға)", "Б.Арғынбаев", "Х.Күлшенбегова"],
      absent: ["Б.С. Тұрдалиева"],
      agenda: [
        {
          title:
            "«Қызылорда облыстық тері-венерология диспансері» шаруашылық жүргізу құқығындағы коммуналдық мемлекеттік кәсіпорнының бас дәрігер бос лауазымына орналасуға конкурстың өңдеуге сатысының нәтижелерін қарау",
          decision:
            "ШЕШІМ ЕТТІ: 1. Үміткер: Омір Нұрлан Омірұлы - конкурстың өңдеуге сатысына жіберілсін. 2. Үміткермен өңдеуге сатысының мерзімі 2025 жылғы 29 қазан сағат 15:00-ге белгіленсін.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <BackButton />

        <div className="mt-6">
          <Card>
            <CardHeader className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
              <CardTitle className="text-2xl md:text-3xl">Байқаушы кеңес</CardTitle>
              <CardDescription className="text-white/90">Байқаушы кеңестің отырыстарының хаттамалары</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {protocols.map((protocol) => (
                  <AccordionItem key={protocol.id} value={protocol.id} className="border rounded-lg">
                    <AccordionTrigger className="px-4 hover:no-underline hover:bg-gray-50">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-cyan-600" />
                        <div className="text-left">
                          <div className="font-semibold">{protocol.title}</div>
                          <div className="text-sm text-gray-500">{protocol.date}</div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <div className="space-y-4 pt-4">
                        <div>
                          <h4 className="font-semibold text-sm text-gray-700 mb-2">Қатысқандар:</h4>
                          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                            {protocol.attendees.map((attendee, idx) => (
                              <li key={idx}>{attendee}</li>
                            ))}
                          </ul>
                          {protocol.absent && (
                            <p className="text-sm text-gray-600 mt-2">
                              <span className="font-semibold">Қатыспағандар:</span> {protocol.absent.join(", ")}
                            </p>
                          )}
                        </div>

                        <div>
                          <h4 className="font-semibold text-sm text-gray-700 mb-2">Күн тәртібі:</h4>
                          <div className="space-y-3">
                            {protocol.agenda.map((item, idx) => (
                              <div key={idx} className="bg-gray-50 p-3 rounded">
                                <p className="text-sm font-medium text-gray-800 mb-2">{item.title}</p>
                                <p className="text-sm text-gray-600">{item.decision}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
