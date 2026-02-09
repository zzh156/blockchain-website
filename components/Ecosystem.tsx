'use client'

import { Wallet, Code2, LineChart, Globe2, Blocks, FileCode } from 'lucide-react'

const Ecosystem = () => {
  const ecosystemItems = [
    {
      icon: Wallet,
      title: 'HyperWallet',
      description: '安全便捷的数字资产钱包',
      status: '开发中',
      link: '#',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Blocks,
      title: '区块浏览器',
      description: '实时查询链上数据',
      status: '开发中',
      link: '#',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Code2,
      title: '开发者工具',
      description: 'SDK、CLI 和开发框架',
      status: '开发中',
      link: '#',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FileCode,
      title: 'Layer 2 部署工具',
      description: '一键部署 OP/ZK Stack',
      status: '开发中',
      link: '#',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: LineChart,
      title: 'DeFi 协议',
      description: '去中心化金融基础设施',
      status: '开发中',
      link: '#',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Globe2,
      title: '跨链桥',
      description: '与其他链安全互通',
      status: '开发中',
      link: '#',
      color: 'from-cyan-500 to-blue-500',
    },
  ]

  const partners = [
    { name: 'Optimism Foundation', logo: '⚡' },
    { name: 'zkSync Labs', logo: '🔐' },
    { name: '金融科技企业', logo: '🏦' },
    { name: '区块链基金', logo: '💼' },
    { name: '技术合作伙伴', logo: '🚀' },
    { name: '安全审计机构', logo: '🛡️' },
  ]

  return (
    <section id="ecosystem" className="section-container">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold text-white sm:text-5xl">
            生态系统
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            完善的开发工具和应用生态，助力开发者构建创新应用
          </p>
        </div>

        <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ecosystemItems.map((item, index) => {
            const Icon = item.icon
            const statusColors = {
              '已上线': 'bg-green-500/20 text-green-400 border-green-500/30',
              '测试中': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
              '开发中': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
              '规划中': 'bg-slate-500/20 text-slate-400 border-slate-500/30',
            }

            return (
              <a
                key={item.title}
                href={item.link}
                className="card-glow group block p-8 transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 inline-flex">
                  <div
                    className={`rounded-2xl bg-gradient-to-br ${item.color} p-4 shadow-lg transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon size={28} className="text-white" />
                  </div>
                </div>

                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-display text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${
                      statusColors[item.status as keyof typeof statusColors]
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <p className="mb-4 leading-relaxed text-slate-400">
                  {item.description}
                </p>

                <div className="flex items-center text-sm font-medium text-primary-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  了解更多
                  <svg
                    className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </a>
            )
          })}
        </div>

        <div className="card-glow p-10 lg:p-12">
          <div className="mb-10 text-center">
            <h3 className="mb-4 font-display text-3xl font-bold text-white">
              合作伙伴
            </h3>
            <p className="mx-auto max-w-2xl text-slate-400">
              与行业领先企业携手，共建区块链未来
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className="group flex flex-col items-center justify-center rounded-xl border border-slate-800/50 bg-slate-900/30 p-6 transition-all duration-300 hover:border-primary-500/50 hover:bg-slate-800/50"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="mb-3 text-4xl transition-transform duration-300 group-hover:scale-110">
                  {partner.logo}
                </div>
                <p className="text-center text-xs font-medium text-slate-500 transition-colors duration-300 group-hover:text-slate-400">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="#partnerships"
              className="inline-flex items-center space-x-2 font-display text-sm font-medium text-primary-400 transition-colors hover:text-primary-300"
            >
              <span>成为合作伙伴</span>
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ecosystem
