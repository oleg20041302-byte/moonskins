"use client"

import { useState } from "react"
import { Moon, Search } from "lucide-react"

export default function MoonSkins() {
  const [currency, setCurrency] = useState('RUB')
  const [language, setLanguage] = useState('RU')
  const [selectedSkins, setSelectedSkins] = useState([])
  const [selectedPayment, setSelectedPayment] = useState('VISA')

  const currencies = {
    RUB: '₽',
    USD: '$',
    EUR: '€',
  }

  const translations = {
    RU: {
      sellSkins: 'Продать скины',
      partners: 'Партнёрам',
      support: 'Поддержка',
      steamLogin: 'Войти через Steam',
      home: 'Главная',
      sellCs: 'Продать скины CS2',
      tradeLink: 'Вставьте свою ссылку на обмен',
      search: 'Поиск по скинам',
      price: 'Цена',
      selectAll: 'Выбрать все',
      payout: 'Моментальная выплата доступна',
      minimum: 'Минимальная сумма продажи',
      payment: 'Выберите способ оплаты',
      sellButton: 'Продать скины',
      footer: 'Лучший сервис для продажи скинов CS2',
    },
    EN: {
      sellSkins: 'Sell Skins',
      partners: 'Partners',
      support: 'Support',
      steamLogin: 'Login via Steam',
      home: 'Home',
      sellCs: 'Sell CS2 Skins',
      tradeLink: 'Insert your trade link',
      search: 'Search skins',
      price: 'Price',
      selectAll: 'Select all',
      payout: 'Instant payout available',
      minimum: 'Minimum sale amount',
      payment: 'Choose payment method',
      sellButton: 'Sell skins',
      footer: 'Best service for selling CS2 skins',
    },
  }

  const t = translations[language as keyof typeof translations]

  const skins = [
    {
      name: 'Paracord Knife | Slaughter',
      wear: 'MW',
      price: 145218,
    },
    {
      name: 'AWP | Exothermic',
      wear: 'FT',
      price: 6235,
    },
    {
      name: 'AK-47 | Slate',
      wear: 'WW',
      price: 2418,
    },
    {
      name: 'USP-S | Alpine Camo',
      wear: 'FT',
      price: 345,
    },
    {
      name: 'Glock-18 | Coral Bloom',
      wear: 'FT',
      price: 734,
    },
    {
      name: 'SSG 08 | Grey Smoke',
      wear: 'FT',
      price: 435,
    },
  ]

  const toggleSkin = (index: number) => {
    if (selectedSkins.includes(index)) {
      setSelectedSkins(selectedSkins.filter((item) => item !== index))
    } else {
      setSelectedSkins([...selectedSkins, index])
    }
  }

  const totalPrice = selectedSkins.reduce((acc, skinIndex) => {
    return acc + skins[skinIndex].price
  }, 0)

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050816]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B5CFF] to-[#4DA3FF] flex items-center justify-center">
              <Moon size={22} />
            </div>

            <div>
              <h1 className="text-3xl font-black leading-none">MOON</h1>
              <p className="text-[#7B5CFF] tracking-[0.35em] text-xs mt-1">
                SKINS
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm text-zinc-300">
            <a href="#" className="text-white">
              {t.sellSkins}
            </a>
            <a href="#">{t.partners}</a>
            <a href="#">{t.support}</a>
          </nav>

          <div className="flex items-center gap-3">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-[#1B1E26] border border-[#2E3345] rounded-xl px-3 py-3 text-sm"
            >
              <option value="RU">RU</option>
              <option value="EN">EN</option>
            </select>

            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-[#1B1E26] border border-[#2E3345] rounded-xl px-3 py-3 text-sm"
            >
              <option value="RUB">RUB</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>

            <button className="bg-gradient-to-r from-[#7B5CFF] to-[#4DA3FF] px-6 py-3 rounded-2xl font-black">
              {t.steamLogin}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1280px] mx-auto px-6 py-8">
        <div className="mb-6 text-sm text-zinc-500 flex items-center gap-2">
          <span>{t.home}</span>
          <span>›</span>
          <span className="text-white">{t.sellCs}</span>
        </div>

        <h1 className="text-5xl font-black text-center text-white/10 mb-8 uppercase">
          {t.sellCs}
        </h1>

        <div className="bg-[#232734] border border-[#2E3345] rounded-2xl p-5 mb-5">
          <p className="text-sm text-zinc-400 mb-3">{t.tradeLink}</p>

          <input
            defaultValue="https://steamcommunity.com/tradeoffer/new/?partner=0000000"
            className="w-full bg-[#1B1E26] border border-[#2E3345] rounded-xl px-5 py-4 outline-none"
          />
        </div>

        <div className="grid grid-cols-[1fr_290px] gap-6">
          <div>
            <div className="bg-[#232734] border border-[#2E3345] rounded-2xl p-3 mb-5 flex items-center gap-3">
              <div className="flex-1 bg-[#1B1E26] border border-[#2E3345] rounded-xl px-5 py-4 flex items-center gap-3">
                <Search size={18} className="text-zinc-500" />

                <input
                  placeholder={t.search}
                  className="bg-transparent outline-none w-full"
                />
              </div>

              <button className="bg-[#1B1E26] border border-[#2E3345] px-6 py-4 rounded-xl text-zinc-300">
                {t.price}
              </button>

              <button className="bg-[#1B1E26] border border-[#2E3345] px-6 py-4 rounded-xl text-zinc-300">
                {t.selectAll}
              </button>
            </div>

            <div className="bg-[#232734] border border-[#2E3345] rounded-2xl p-3 h-[760px] overflow-y-auto">
              <div className="grid grid-cols-6 gap-3">
                {skins.map((item, index) => {
                  const isSelected = selectedSkins.includes(index)

                  return (
                    <div
                      key={index}
                      onClick={() => toggleSkin(index)}
                      className={`rounded-xl overflow-hidden transition cursor-pointer border ${
                        isSelected
                          ? 'border-[#FF8A2A] shadow-lg shadow-[#FF8A2A]/20 bg-[#313748]'
                          : 'border-[#343B4E] bg-[#2A2F3D] hover:border-[#FF8A2A]/60'
                      }`}
                    >
                      <div className="p-3 text-xs text-zinc-500 font-semibold">
                        {item.wear}
                      </div>

                      <div className="h-20 flex items-center justify-center px-4">
                        <div className="w-full h-full rounded-lg bg-gradient-to-br from-[#1B1E26] to-[#232734]"></div>
                      </div>

                      <div className="p-3">
                        <h3 className="text-xs font-semibold leading-snug mb-3 text-white min-h-[38px]">
                          {item.name}
                        </h3>

                        <p className="text-[#FF8A2A] text-xl font-black">
                          {item.price.toLocaleString()} {currencies[currency]}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <aside className="bg-[#232734] border border-[#2E3345] rounded-2xl p-5 h-fit sticky top-24">
            <div className="flex items-center justify-between mb-4">
              <p className="text-zinc-400 text-sm">
                {language === 'RU'
                  ? `Выбрано ${selectedSkins.length} предметов`
                  : `Selected ${selectedSkins.length} items`}
              </p>

              <div className="bg-[#1B1E26] border border-[#2E3345] px-3 py-2 rounded-lg text-sm">
                {currency}
              </div>
            </div>

            <h2 className="text-5xl font-black mb-6">
              {totalPrice.toLocaleString()} {currencies[currency]}
            </h2>

            <div className="space-y-3 mb-8 text-sm text-zinc-400">
              <p>{t.payout}</p>
              <p>
                {t.minimum}: 85 {currencies[currency]}
              </p>
            </div>

            <h3 className="text-lg font-bold mb-4">{t.payment}</h3>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {['VISA', 'Mastercard', 'Bitcoin', 'Ethereum', 'USDT', 'TON'].map((item) => {
                const active = selectedPayment === item

                return (
                  <button
                    key={item}
                    onClick={() => setSelectedPayment(item)}
                    className={`rounded-xl py-5 border transition ${
                      active
                        ? 'bg-[#FF8A2A]/10 border-[#FF8A2A] text-white'
                        : 'bg-[#1B1E26] border-[#2E3345] text-zinc-500 hover:border-[#FF8A2A]/50'
                    }`}
                  >
                    {item}
                  </button>
                )
              })}
            </div>

            <button
              onClick={() => {
                alert(
                  language === 'RU'
                    ? `Продажа отправлена. Метод: ${selectedPayment}`
                    : `Sale submitted. Method: ${selectedPayment}`
                )
              }}
              className="w-full bg-[#FF6B57] hover:bg-[#ff7a69] transition rounded-xl py-5 text-lg font-black uppercase"
            >
              {t.sellButton}
            </button>
          </aside>
        </div>
      </main>

      <footer className="border-t border-white/5 bg-[#050816]">
        <div className="max-w-[1280px] mx-auto px-6 py-10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B5CFF] to-[#4DA3FF] flex items-center justify-center">
              <Moon size={24} />
            </div>

            <div>
              <h3 className="text-3xl font-black leading-none">MOON</h3>
              <p className="text-[#7B5CFF] tracking-[0.35em] text-xs mt-1">
                SKINS
              </p>
              <p className="text-zinc-500 text-sm mt-2">{t.footer}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
