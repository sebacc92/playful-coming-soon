"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Globe, ChevronDown, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const translations = {
  en: {
    title: "We're Building Something Fun!",
    subtitle: "Our new exciting project is coming soon. Stay tuned!",
  },
  es: {
    title: "¡Estamos Construyendo Algo Divertido!",
    subtitle: "Nuestro nuevo y emocionante proyecto llegará pronto. ¡Mantente atento!",
  },
  hi: {
    title: "हम कुछ मजेदार बना रहे हैं!",
    subtitle: "हमारा नया रोमांचक प्रोजेक्ट जल्द आ रहा है। बने रहिए!",
  },
  zh: {
    title: "我们正在构建有趣的东西！",
    subtitle: "我们的新项目即将推出。敬请期待！",
  },
}

const languageNames = {
  en: "English",
  es: "Español",
  hi: "हिन्दी",
  zh: "中文",
}

export default function ComingSoonPage() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setIsDarkMode(prefersDark)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode)
  }, [isDarkMode])

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)

  const t = translations[language]

  return (
    <div
      className={cn(
        "min-h-screen flex flex-col items-center justify-center p-4 transition-colors duration-300",
        "bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300",
        "dark:from-purple-900 dark:via-purple-800 dark:to-purple-700",
      )}
    >
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-3xl animate-blob"></div>
        <div
          className="absolute w-96 h-96 bg-indigo-400/20 dark:bg-indigo-600/20 rounded-full blur-3xl animate-blob animation-delay-2000"
          style={{ top: "50%", left: "50%" }}
        ></div>
        <div
          className="absolute w-96 h-96 bg-pink-400/20 dark:bg-pink-600/20 rounded-full blur-3xl animate-blob animation-delay-4000"
          style={{ bottom: "0", right: "0" }}
        ></div>
      </div>

      {/* Header with language and theme toggles */}
      <header className="fixed top-0 w-full max-w-7xl mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center space-x-1">
          <Globe className="h-5 w-5 text-purple-700 dark:text-purple-300" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center space-x-1 h-8 px-2 text-purple-700 dark:text-purple-300"
              >
                <span>{languageNames[language]}</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {Object.entries(languageNames).map(([lang, name]) => (
                <DropdownMenuItem key={lang} onClick={() => setLanguage(lang)}>
                  {name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="text-purple-700 dark:text-purple-300">
          {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          <span className="sr-only">Toggle dark mode</span>
        </Button>
      </header>

      {/* Main content */}
      <main className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto space-y-8 z-10">
        <Rocket className="h-24 w-24 text-purple-600 dark:text-purple-400 animate-bounce" />
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-purple-800 dark:text-purple-200">
            {t.title}
          </h1>
          <p className="text-lg md:text-xl text-purple-700 dark:text-purple-300 max-w-2xl">{t.subtitle}</p>
        </div>
      </main>
    </div>
  )
}

