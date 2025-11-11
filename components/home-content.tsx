import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, FileText } from "lucide-react"



export function HomeContent() {
  const latestNews = [
    {
      id: 1,
      title: "Медициналық қызметтерді алу үшін Сіз мемлекеттік қызметтер порталы арқылы онлайн жазыла аласыз",
      date: "28 қаңтар 2025 ж.",
      image: "/medical-online-registration.jpg",
    },
    {
      id: 2,
      title: "Қолданысқа арналған жадынама. Мемлекеттік құжаттарды электронды түрде қабылдау",
      date: "08 мамыр 2023 ж.",
      image: "/electronic-documents.jpg",
    },
  ]

  const quickActions = [
    { title: "ФОТОБАЯН", icon: FileText, color: "bg-red-500" },
    { title: "БЕЙНЕБАЯН", icon: FileText, color: "bg-red-500" },
    { title: "МЕМЛЕКЕТТІК ТАҢБАЛАР", icon: FileText, color: "bg-red-500" },
    { title: "СЫБАЙЛАС ЖЕМҚОРЛЫҚ ТУРАЛЫ", icon: FileText, color: "bg-red-500" },
  ]

  const documents = [
    "Мемлекеттік сатып алу",
    "Хаттама № 1 17-01-2025",
    "Хабарландыру № 1 10-01-25",
    "Хаттама № 1 13 18-10-2024",
    "Хабарландыру № 13 11-10-24",
  ]

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Left Sidebar - Latest News */}
          <div className="lg:col-span-3">
            <Card>
              <CardContent className="p-4">
                <h2 className="text-lg font-bold mb-4 text-gray-700">СОҢҒЫ ЖАҢАЛЫҚТАР</h2>
                <div className="space-y-4">
                  {latestNews.map((news) => (
                    <Link key={news.id} href={`/news/${news.id}`} className="block group">
                      <div className="space-y-2">
                        <img
                          src={news.image || "/placeholder.svg"}
                          alt={news.title}
                          className="w-full h-32 object-cover rounded"
                        />
                        <p className="text-sm font-medium group-hover:text-cyan-600 transition-colors line-clamp-2">
                          {news.title}
                        </p>
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {news.date}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link href="/news">
                  <Button className="w-full mt-4 bg-cyan-500 hover:bg-cyan-600">Барлық жаңалықтар</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Center Content - Featured News */}
          <div className="lg:col-span-6">
            <Card className="mb-6">
              <CardContent className="p-0">
                <img
                  src="/medical-services-banner.jpg"
                  alt="Featured"
                  className="w-full h-64 md:h-96 object-cover rounded-t"
                />
                <div className="p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-cyan-600 mb-2">Қолданысқа арналған жадынама</h2>
                  <p className="text-gray-600 mb-4">
                    Мемлекеттік құжаттарды электронды түрде қабылдау жүйесі арқылы онлайн жазылу
                  </p>
                  <Link href="/patients">
                    <Button className="bg-red-500 hover:bg-red-600">Толығырақ</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="bg-gradient-to-br from-cyan-500 to-cyan-600 text-white">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-1">15+</div>
                  <div className="text-sm">Жыл тәжірибе</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-1">5000+</div>
                  <div className="text-sm">Емделген науқас</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-cyan-500 to-cyan-600 text-white">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-1">98%</div>
                  <div className="text-sm">Қанағаттану</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Sidebar - Director & Quick Actions */}
  
          <div className="lg:col-span-3 space-y-6">
            {/* Director Card */}
        <Link href="/about/chief">
    <Card className="cursor-pointer hover:shadow-lg transition-shadow">
      <CardContent className="p-4">
        <h2 className="text-lg font-bold mb-4 text-gray-700">БАС ДӘРІГЕРДІҢ БЛОГЫ</h2>
        <img
          src="/medical-director-portrait.jpg"
          alt="Director"
          className="w-full h-48 object-cover rounded mb-3"
        />
        <h3 className="font-bold text-center">Нұрлан</h3>
        <p className="text-sm text-center text-gray-600">Әмірұлы</p>
      </CardContent>
    </Card>
  </Link>
            {/* Quick Actions */}
            <div className="space-y-3">
              {quickActions.map((action, index) => (
                <Link key={index} href="#">
                  <Card className={`${action.color} text-white hover:opacity-90 transition-opacity cursor-pointer`}>
                    <CardContent className="p-4 flex items-center gap-3">
                      <action.icon className="h-5 w-5" />
                      <span className="font-medium text-sm">{action.title}</span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Documents */}
            <Card className="bg-cyan-50">
              <CardContent className="p-4">
                <h3 className="font-bold mb-3 text-cyan-700">МЕМЛЕКЕТТІК САТЫП АЛУ</h3>
                <div className="space-y-2">
                  {documents.map((doc, index) => (
                    <Link
                      key={index}
                      href="#"
                      className="block p-2 bg-cyan-100 hover:bg-cyan-200 rounded text-sm transition-colors"
                    >
                      {doc}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
