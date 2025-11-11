"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Search, Facebook, Youtube, Instagram, Twitter, ChevronDown, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isPatientsOpen, setIsPatientsOpen] = useState(false)
  const [isSpecialistsOpen, setIsSpecialistsOpen] = useState(false)
  const [isBoardOpen, setIsBoardOpen] = useState(false)

  // Біреуі ашылғанда басқаларын жабу функциялары
  const handleAboutChange = (open: boolean) => {
    setIsAboutOpen(open)
    if (open) {
      setIsPatientsOpen(false)
      setIsSpecialistsOpen(false)
      setIsBoardOpen(false)
    }
  }

  const handlePatientsChange = (open: boolean) => {
    setIsPatientsOpen(open)
    if (open) {
      setIsAboutOpen(false)
      setIsSpecialistsOpen(false)
      setIsBoardOpen(false)
    }
  }

  const handleSpecialistsChange = (open: boolean) => {
    setIsSpecialistsOpen(open)
    if (open) {
      setIsAboutOpen(false)
      setIsPatientsOpen(false)
      setIsBoardOpen(false)
    }
  }

  const handleBoardChange = (open: boolean) => {
    setIsBoardOpen(open)
    if (open) {
      setIsAboutOpen(false)
      setIsPatientsOpen(false)
      setIsSpecialistsOpen(false)
    }
  }

  const navLinks = [
    { href: "/services", label: "ҚЫЗМЕТТЕР" },
    { href: "/news", label: "ХАБАРЛАНДЫРУЛАР" },
    { href: "/contact", label: "БАЙЛАНЫС" },
  ]

  const aboutMenuItems = [
    {
      href: "/reports/financial-report-h1-2024",
      label: "Қызылорда облысының денсаулық сақтау басқармасының Қызылорда облыстық тері-венерология диспансері шаруашылық жүргізу құқығындағы мемлекеттік коммуналдық кәсіпорнының 2024 жылдың І жартыжылдық қаржылық есебі",
    },
    {
      href: "/about/chief",
      label: "Бас дәрігердің блогы",
    },
    {
      href: "/services/internal-audit",
      label: "Ішкі аудит және емделушіге қолдау көрсету қызметтері",
    },
    {
      href: "/reports/financial-report-q1-2024",
      label: "2024 жылдын 1 тоқсанының қаржылық есебі",
    },
    {
      href: "/compliance",
      label: "Комплаенс қызметы",
    },
    {
      href: "/prices",
      label: "Баға прейскуранты",
    },
    {
      href: "/about/history",
      label: "Мекеме тарихы",
    },
    {
      href: "/doctors",
      label: "Біздің қызметкерлер",
    },
  ]

  const patientsMenuItems = [
    {
      href: "/prices",
      label: "Бағалар тізімі",
    },
    {
      href: "/patients/memo",
      label: "Науқастарға арналған жадынама",
    },
    {
      href: "/schedule",
      label: "Жұмыс кестесі",
    },
  ]

  const specialistsMenuItems = [
    {
      href: "/specialists/legal",
      label: "Заңнамалық база",
    },
    {
      href: "/specialists/info",
      label: "Пайдалы ақпарат",
    },
    {
      href: "/specialists/articles",
      label: "Статьялар",
    },
  ]

  const boardMenuItems = [
    {
      href: "/board/protocol-1-2025",
      label: "Хаттама № 1 - 2025",
    },
    {
      href: "/board/protocol-3-2024",
      label: "Хаттама № 3 - 2024",
    },
    {
      href: "/board/protocol-2-2024",
      label: "Хаттама № 2 - 2024",
    },
    {
      href: "/board/protocol-7-2024",
      label: "Хаттама 7 - 2024",
    },
    {
      href: "/board/protocol-6-2024",
      label: "Хаттама 6 - 2024",
    },
    {
      href: "/board/protocol-1-2024",
      label: "Хаттама 1 - 2024",
    },
    {
      href: "/board/protocol-5-2023",
      label: "Хаттама 5 - 2023",
    },
    {
      href: "/board/protocol-4-2023",
      label: "Хаттама 4 - 2023",
    },
    {
      href: "/board/protocol-3-2023",
      label: "Хаттама 3 - 2023",
    },
    {
      href: "/board/protocol-2-2023",
      label: "Хаттама 2 - 2023",
    },
    {
      href: "/board/protocol-1-2023",
      label: "Хаттама 1 - 2023",
    },
  ]

  const topLinks = [
    { href: "/patients", label: "Науқастарға" },
    { href: "/info", label: "Пайдалы ақпарат" },
    { href: "/compliance", label: "Комплаенс қызметы" },
  ]

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="bg-cyan-400 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-xs md:text-sm">
            <div className="hidden md:flex items-center gap-4">
              {topLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Link href="#" className="hover:bg-white/20 p-1.5 rounded">
                <Youtube className="h-4 w-4" />
              </Link>
              <Link href="#" className="hover:bg-white/20 p-1.5 rounded">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="#" className="hover:bg-white/20 p-1.5 rounded">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" className="hover:bg-white/20 p-1.5 rounded">
                <Twitter className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img src="/kazakhstan-emblem-logo.jpg" alt="Logo" className="h-16 w-16 md:h-20 md:w-20" />
              <div>
                <p className="text-xs md:text-sm text-gray-600">Қызылорда облысының денсаулық сақтау басқармасының</p>
                <h1 className="text-lg md:text-2xl font-bold text-red-600">
                  «ҚЫЗЫЛОРДА ОБЛЫСТЫҚ ТЕРІ-ВЕНЕРОЛОГИЯ ДИСПАНСЕРІ»
                </h1>
                <p className="text-xs md:text-sm text-gray-600">
                  шаруашылық жүргізу құқығындағы коммуналдық мемлекеттік кәсіпорны
                </p>
              </div>
            </div>

            <div className="hidden lg:flex flex-col items-end gap-2">
              <div className="relative w-64">
                <Input placeholder="Сайттан іздеу..." className="pr-10" />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-600">CALL-ЦЕНТР</p>
                <a href="tel:+77242400001" className="text-xl font-bold text-cyan-600 hover:text-cyan-700">
                  +7 (7242) 40-00-01
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-cyan-500">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <nav className="hidden lg:flex items-center">
              <Link
                href="/"
                className="px-4 py-3 text-sm font-medium text-white hover:bg-cyan-600 transition-colors flex items-center gap-1"
              >
                <Home className="h-4 w-4" />
                БАСТЫ БЕТ
              </Link>
              <Collapsible open={isAboutOpen} onOpenChange={handleAboutChange} className="relative">
                <CollapsibleTrigger className="px-4 py-3 text-sm font-medium text-white hover:bg-cyan-600 transition-colors flex items-center gap-1">
                  МЕКЕМЕ ТУРАЛЫ
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isAboutOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="absolute top-full left-0 bg-gradient-to-br from-teal-600 to-teal-700 min-w-[600px] z-50 mt-0 shadow-lg">
                  <div className="flex flex-col">
                    {aboutMenuItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="px-4 py-3 text-sm text-white hover:bg-teal-800/50 transition-colors border-b border-teal-500/50 last:border-b-0"
                        onClick={() => setIsAboutOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
              <Collapsible open={isPatientsOpen} onOpenChange={handlePatientsChange} className="relative">
                <CollapsibleTrigger className="px-4 py-3 text-sm font-medium text-white hover:bg-cyan-600 transition-colors flex items-center gap-1">
                  ЕМДЕЛУШІЛЕРГЕ
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isPatientsOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="absolute top-full left-0 bg-gradient-to-br from-teal-600 to-teal-700 min-w-[400px] z-50 mt-0 shadow-lg">
                  <div className="flex flex-col">
                    {patientsMenuItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="px-4 py-3 text-sm text-white hover:bg-teal-800/50 transition-colors border-b border-teal-500/50 last:border-b-0"
                        onClick={() => setIsPatientsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
              <Collapsible open={isSpecialistsOpen} onOpenChange={handleSpecialistsChange} className="relative">
                <CollapsibleTrigger className="px-4 py-3 text-sm font-medium text-white hover:bg-cyan-600 transition-colors flex items-center gap-1">
                  МАМАНДАРҒА
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isSpecialistsOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="absolute top-full left-0 bg-gradient-to-br from-teal-600 to-teal-700 min-w-[350px] z-50 mt-0 shadow-lg">
                  <div className="flex flex-col">
                    {specialistsMenuItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="px-4 py-3 text-sm text-white hover:bg-teal-800/50 transition-colors border-b border-teal-500/50 last:border-b-0"
                        onClick={() => setIsSpecialistsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
              <Collapsible open={isBoardOpen} onOpenChange={handleBoardChange} className="relative">
                <CollapsibleTrigger className="px-4 py-3 text-sm font-medium text-white hover:bg-cyan-600 transition-colors flex items-center gap-1">
                  БАЙҚАУШЫ КЕҢЕС
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isBoardOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="absolute top-full left-0 bg-gradient-to-br from-teal-600 to-teal-700 min-w-[300px] z-50 mt-0 shadow-lg">
                  <div className="flex flex-col">
                    {boardMenuItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="px-4 py-3 text-sm text-white hover:bg-teal-800/50 transition-colors border-b border-teal-500/50 last:border-b-0"
                        onClick={() => setIsBoardOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-sm font-medium text-white hover:bg-cyan-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-cyan-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t bg-white">
          <nav className="container mx-auto flex flex-col">
            <Link
              href="/"
              className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors border-b flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="h-4 w-4" />
              БАСТЫ БЕТ
            </Link>
            <Collapsible open={isAboutOpen} onOpenChange={handleAboutChange}>
              <CollapsibleTrigger className="w-full px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors border-b flex items-center justify-between">
                <span>МЕКЕМЕ ТУРАЛЫ</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isAboutOpen ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="bg-gradient-to-br from-teal-50 to-teal-100">
                {aboutMenuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block px-8 py-3 text-sm text-gray-700 hover:bg-teal-200 hover:text-teal-700 transition-colors border-b border-teal-200 last:border-b-0"
                    onClick={() => {
                      setIsAboutOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </CollapsibleContent>
            </Collapsible>
            <Collapsible open={isPatientsOpen} onOpenChange={handlePatientsChange}>
              <CollapsibleTrigger className="w-full px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors border-b flex items-center justify-between">
                <span>ЕМДЕЛУШІЛЕРГЕ</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isPatientsOpen ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="bg-gradient-to-br from-teal-50 to-teal-100">
                {patientsMenuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block px-8 py-3 text-sm text-gray-700 hover:bg-teal-200 hover:text-teal-700 transition-colors border-b border-teal-200 last:border-b-0"
                    onClick={() => {
                      setIsPatientsOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </CollapsibleContent>
            </Collapsible>
            <Collapsible open={isSpecialistsOpen} onOpenChange={handleSpecialistsChange}>
              <CollapsibleTrigger className="w-full px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors border-b flex items-center justify-between">
                <span>МАМАНДАРҒА</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isSpecialistsOpen ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="bg-gradient-to-br from-teal-50 to-teal-100">
                {specialistsMenuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block px-8 py-3 text-sm text-gray-700 hover:bg-teal-200 hover:text-teal-700 transition-colors border-b border-teal-200 last:border-b-0"
                    onClick={() => {
                      setIsSpecialistsOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </CollapsibleContent>
            </Collapsible>
            <Collapsible open={isBoardOpen} onOpenChange={handleBoardChange}>
              <CollapsibleTrigger className="w-full px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors border-b flex items-center justify-between">
                <span>БАЙҚАУШЫ КЕҢЕС</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isBoardOpen ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="bg-gradient-to-br from-teal-50 to-teal-100">
                {boardMenuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block px-8 py-3 text-sm text-gray-700 hover:bg-teal-200 hover:text-teal-700 transition-colors border-b border-teal-200 last:border-b-0"
                    onClick={() => {
                      setIsBoardOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </CollapsibleContent>
            </Collapsible>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-cyan-600 transition-colors border-b"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
