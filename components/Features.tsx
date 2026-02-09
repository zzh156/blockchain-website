'use client'

import { Shield, Zap, Users, Code, Globe, Lock } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: '极致性能',
      description: 'PoS 共识机制提供 10,000+ TPS 的交易速度，满足企业级应用需求，实现秒级确认。',
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      icon: Users,
      title: '公平挖矿',
      description: 'CPU 优化的 PoW 算法，抗 ASIC 设计，让每个普通用户都能使用个人电脑参与挖矿获得代币。',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Shield,
      title: '安全可靠',
      description: '独立的共识层和验证机制，结合 PoS 质押保证网络安全，独立于以太坊的安全性保障。',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Code,
      title: 'EVM 兼容',
      description: '完全兼容以太坊虚拟机，支持 Solidity 智能合约，开发者可以无缝迁移现有应用。',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Globe,
      title: 'Layer 2 就绪',
      description: '原生支持 OP Stack 和 ZK Stack，轻松构建高性能 Layer2 扩展网络，实现无限扩容。',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Lock,
      title: '企业级',
      description: '为金融科技企业提供高可用性、低延迟的区块链基础设施，支持复杂的业务场景。',
      gradient: 'from-rose-500 to-red-500',
    },
  ]

  return (
    <section id="features" className="section-container">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold text-white sm:text-5xl">
            核心特性
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            创新的混合共识机制，平衡性能、安全和去中心化
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="card-glow group p-8 transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 inline-flex">
                  <div
                    className={`relative rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 shadow-lg transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon size={28} className="text-white" />
                    <div className="absolute inset-0 rounded-2xl bg-white opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20" />
                  </div>
                </div>

                <h3 className="mb-3 font-display text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-slate-400">
                  {feature.description}
                </p>

                <div className="mt-6 flex items-center text-sm font-medium text-primary-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
