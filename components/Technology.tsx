'use client'

import { Server, Database, Lock, Layers } from 'lucide-react'

const Technology = () => {
  const techStack = [
    {
      category: '执行层',
      icon: Layers,
      color: 'from-blue-500 to-cyan-500',
      items: [
        { name: 'EVM 虚拟机', description: '完全兼容以太坊智能合约' },
        { name: 'Solidity 支持', description: '使用熟悉的开发语言' },
        { name: 'Web3 API', description: '标准化的接口调用' },
      ],
    },
    {
      category: '共识层',
      icon: Server,
      color: 'from-purple-500 to-pink-500',
      items: [
        { name: 'PoS 验证', description: '质押保证网络安全' },
        { name: 'PoW 挖矿', description: 'CPU 友好的公平分配' },
        { name: '混合机制', description: '平衡效率与去中心化' },
      ],
    },
    {
      category: '数据层',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      items: [
        { name: '分片存储', description: '高效的数据管理方案' },
        { name: '状态剪枝', description: '优化存储空间' },
        { name: '快照同步', description: '快速节点启动' },
      ],
    },
    {
      category: '安全层',
      icon: Lock,
      color: 'from-orange-500 to-red-500',
      items: [
        { name: '密码学验证', description: '先进的加密算法' },
        { name: '审计机制', description: '持续的安全审计' },
        { name: '漏洞赏金', description: '社区驱动的安全' },
      ],
    },
  ]

  return (
    <section id="technology" className="section-container bg-gradient-to-b from-transparent via-slate-900/30 to-transparent">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold text-white sm:text-5xl">
            技术架构
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            模块化设计，每一层都经过精心优化
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((stack, index) => {
            const Icon = stack.icon
            return (
              <div
                key={stack.category}
                className="card-glow group relative overflow-hidden p-8"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stack.color} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}
                />

                <div className="relative mb-6">
                  <div
                    className={`inline-flex rounded-xl bg-gradient-to-br ${stack.color} p-3 shadow-lg`}
                  >
                    <Icon size={24} className="text-white" />
                  </div>
                </div>

                <h3 className="relative mb-6 font-display text-2xl font-bold text-white">
                  {stack.category}
                </h3>

                <ul className="relative space-y-4">
                  {stack.items.map((item) => (
                    <li key={item.name} className="group/item">
                      <div className="flex items-start space-x-3">
                        <div className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r ${stack.color}`} />
                        <div>
                          <div className="mb-1 font-display text-sm font-semibold text-white">
                            {item.name}
                          </div>
                          <div className="text-xs leading-relaxed text-slate-500">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#docs"
            className="inline-flex items-center space-x-2 rounded-full border-2 border-primary-500/50 bg-slate-900/50 px-8 py-4 font-display font-semibold text-slate-100 backdrop-blur-sm transition-all duration-300 hover:border-primary-500 hover:bg-primary-500/10 hover:scale-105"
          >
            <span>查看技术文档</span>
            <svg
              className="h-5 w-5"
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
    </section>
  )
}

export default Technology
