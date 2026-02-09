'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: '技术', href: '#technology' },
    { name: '共识机制', href: '#consensus' },
    { name: 'Layer 2', href: '#layer2' },
    { name: '生态系统', href: '#ecosystem' },
    { name: '路线图', href: '#roadmap' },
    { name: '社区', href: '#community' },
  ]

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-xl shadow-lg shadow-primary-900/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link href="/" className="group flex items-center space-x-3">
          <div className="relative h-10 w-10">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary-500 to-accent-purple transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0.5 rounded-lg bg-slate-950" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-xl font-bold gradient-text">H</span>
            </div>
          </div>
          <span className="font-display text-2xl font-bold tracking-tight text-white">
            Hyper<span className="gradient-text">Chain</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative px-4 py-2 font-display text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-gradient-to-r from-primary-500 to-accent-cyan transition-all duration-300 group-hover:w-3/4" />
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden items-center space-x-4 lg:flex">
          <a
            href="#docs"
            className="rounded-full px-6 py-2.5 font-display text-sm font-semibold text-slate-300 transition-all duration-300 hover:text-white"
          >
            开发文档
          </a>
          <a
            href="#start"
            className="btn-primary text-sm"
          >
            立即开始
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="rounded-lg p-2 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white lg:hidden"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl lg:hidden">
          <div className="space-y-1 px-6 pb-6 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-lg px-4 py-3 font-display text-base font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <div className="space-y-2 pt-4">
              <a
                href="#docs"
                className="block w-full rounded-full border-2 border-primary-500/50 bg-slate-900/50 px-6 py-3 text-center font-display text-sm font-semibold text-slate-100 backdrop-blur-sm"
              >
                开发文档
              </a>
              <a
                href="#start"
                className="block w-full rounded-full bg-gradient-to-r from-primary-600 to-primary-500 px-6 py-3 text-center font-display text-sm font-semibold text-white"
              >
                立即开始
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
