// src/components/Header.jsx
import { useState, useEffect } from 'react'
import { FiMoon, FiSun, FiMenu, FiX, FiChevronDown, FiUser, FiLogIn } from 'react-icons/fi'

const Header = () => {
  const [theme, setTheme] = useState('light')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index)
  }

  const menuItems = [
    { name: 'صفحه اصلی', hasDropdown: false },
    { 
      name: 'محصولات', 
      hasDropdown: true,
      subItems: ['محصولات ویژه', 'جدیدترین ها', 'پرفروش ترین ها', 'تخفیف دار', 'همه محصولات']
    },
    { 
      name: 'خدمات', 
      hasDropdown: true,
      subItems: ['پشتیبانی', 'نصب و راه اندازی', 'مشاوره رایگان', 'گارانتی', 'آموزش']
    },
    { name: 'درباره ما', hasDropdown: false },
    { name: 'وبلاگ', hasDropdown: false },
    { name: 'تماس با ما', hasDropdown: false }
  ]

  return (
    <header className={`${theme === 'dark' ? 'bg-gradient-to-r from-blood-red to-black' : 'bg-gradient-to-r from-red-700 to-red-900'} shadow-lg sticky top-0 z-50`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-white hover:text-gray-200 transition">
              GOT<span className="text-yellow-300">HAM</span>
            </a>
          </div>

          {/* Desktop Navigation - RTL */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="px-4 py-2 text-white hover:bg-red-900 rounded-lg flex items-center transition"
                    >
                      {item.name}
                      <FiChevronDown className="mr-1" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {openDropdown === index && (
                      <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-900 shadow-lg rounded-lg py-1 z-50 border border-red-800">
                        {item.subItems.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href="#"
                            className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-red-100 dark:hover:bg-red-800 transition text-right"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href="#"
                    className="px-4 py-2 text-white hover:bg-red-900 rounded-lg transition"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Auth Buttons and Theme Toggle */}
          <div className="flex items-center space-x-2">
            {/* Sign Up Button */}
            <a
              href="/signup"
              className="hidden md:flex items-center px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded-lg transition font-medium"
            >
              <FiUser className="ml-1" />
              ثبت نام
            </a>
            
            {/* Login Button */}
            <a
              href="/login"
              className="hidden md:flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition font-medium"
            >
              <FiLogIn className="ml-1" />
              ورود
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition text-white"
              aria-label="تغییر تم"
            >
              {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-white/10 hover:bg-white/20 transition text-white"
              aria-label="منو"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - RTL */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 text-right">
            {menuItems.map((item, index) => (
              <div key={index} className="mb-2">
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="w-full flex flex-row-reverse justify-between items-center px-4 py-3 text-white hover:bg-red-900 rounded-lg transition"
                    >
                      {item.name}
                      <FiChevronDown className={`transition-transform ${openDropdown === index ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {openDropdown === index && (
                      <div className="pr-6 mt-1 space-y-1">
                        {item.subItems.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href="#"
                            className="block px-4 py-2 text-white hover:bg-red-800 rounded transition"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href="#"
                    className="block px-4 py-3 text-white hover:bg-red-900 rounded-lg transition"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}

            {/* Mobile Auth Buttons */}
            <div className="mt-4 space-y-2">
              <a
                href="/signup"
                className="flex items-center justify-center px-4 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded-lg transition font-medium"
              >
                <FiUser className="ml-1" />
                ثبت نام
              </a>
              <a
                href="/login"
                className="flex items-center justify-center px-4 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition font-medium"
              >
                <FiLogIn className="ml-1" />
                ورود
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header