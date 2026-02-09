'use client'

import { Github, Twitter, MessageCircle, Mail } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    产品: [
      { name: '主网', href: '#' },
      { name: '测试网', href: '#' },
      { name: '区块浏览器', href: '#' },
      { name: '钱包', href: '#' },
    ],
    开发者: [
      { name: '开发文档', href: '#' },
      { name: 'API 参考', href: '#' },
      { name: 'SDK', href: '#' },
      { name: 'Layer 2 工具', href: '#' },
    ],
    资源: [
      { name: '白皮书', href: '#' },
      { name: '技术规范', href: '#' },
      { name: '博客', href: '#' },
      { name: '帮助中心', href: '#' },
    ],
    社区: [
      { name: 'Discord', href: '#' },
      { name: 'Telegram', href: '#' },
      { name: 'Twitter', href: '#' },
      { name: '论坛', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: MessageCircle, href: '#', label: 'Discord' },
    { icon: Mail, href: '#', label: 'Email' },
  ]

  return (
    <footer className="relative border-t border-slate-800/50 bg-slate-950/50 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
          <div className="col-span-2">
            <div className="mb-6 flex items-center space-x-3">
              <div className="relative h-10 w-10">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary-500 to-accent-purple" />
                <div className="absolute inset-0.5 rounded-lg bg-slate-950" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-xl font-bold gradient-text">H</span>
                </div>
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                Hyper<span className="gradient-text">Chain</span>
              </span>
            </div>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-slate-400">
              下一代 Layer1 区块链，支持 OP Stack 和 ZK Stack 构建高性能 Layer2 网络，为去中心化未来提供动力。
            </p>
            
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/50 text-slate-400 transition-all duration-300 hover:bg-primary-500/20 hover:text-primary-400"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors duration-200 hover:text-primary-400"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-slate-800/50 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h3 className="mb-2 font-display text-lg font-semibold text-white">
                订阅我们的动态
              </h3>
              <p className="text-sm text-slate-400">
                获取最新的技术更新和生态系统新闻
              </p>
            </div>
            <form className="flex w-full max-w-md gap-2">
              <input
                type="email"
                placeholder="输入您的邮箱"
                className="flex-1 rounded-full border border-slate-700 bg-slate-900/50 px-6 py-3 text-sm text-white placeholder-slate-500 backdrop-blur-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
              />
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-primary-600 to-primary-500 px-6 py-3 font-display text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/50"
              >
                订阅
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800/50 pt-8 text-sm text-slate-500 md:flex-row">
          <p>© 2024 HyperChain. 保留所有权利。</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="transition-colors hover:text-slate-300">
              隐私政策
            </a>
            <a href="#" className="transition-colors hover:text-slate-300">
              服务条款
            </a>
            <a href="#" className="transition-colors hover:text-slate-300">
              Cookie 政策
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
