'use client'

import { ArrowRight, Play, Zap } from 'lucide-react'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [stats, setStats] = useState({
    tps: 0,
    nodes: 0,
    transactions: 0,
  })

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      
      setStats({
        tps: Math.floor(progress * 10000),
        nodes: Math.floor(progress * 1000),
        transactions: Math.floor(progress * 1000000),
      })

      if (step >= steps) clearInterval(timer)
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="section-container relative">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-8 inline-flex animate-fade-in items-center space-x-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-2 backdrop-blur-sm">
            <Zap size={16} className="text-primary-400" />
            <span className="font-display text-sm font-medium text-primary-300">
              测试网已上线 • Layer 2 扩展就绪
            </span>
          </div>

          <h1 className="mb-6 animate-slide-up font-display text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            下一代
            <span className="gradient-text"> Layer1 </span>
            区块链
          </h1>

          <p className="animate-slide-up animate-delay-100 mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            结合 <span className="font-semibold text-primary-400">PoS</span> 和{' '}
            <span className="font-semibold text-accent-purple">PoW</span>{' '}
            的创新混合共识机制，兼顾高性能与去中心化。
            支持 <span className="font-semibold text-accent-cyan">OP Stack</span> 和{' '}
            <span className="font-semibold text-accent-orange">ZK Stack</span> 构建 Layer2 网络。
          </p>

          <div className="animate-slide-up animate-delay-200 mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#start" className="btn-primary group">
              立即开始
              <ArrowRight
                size={20}
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a href="#video" className="btn-secondary group">
              <Play size={20} className="mr-2" />
              观看介绍
            </a>
          </div>

          <div className="animate-scale-in animate-delay-300 mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { label: '理论吞吐量', value: stats.tps.toLocaleString(), suffix: ' TPS', icon: '⚡' },
              { label: '节点目标', value: stats.nodes.toLocaleString(), suffix: '+', icon: '🌐' },
              { label: '预计每日交易量', value: (stats.transactions / 1000000).toFixed(1), suffix: 'M+', icon: '📊' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="card-glow group p-6 transition-all duration-300 hover:scale-105"
              >
                <div className="mb-2 text-4xl">{stat.icon}</div>
                <div className="mb-1 font-display text-3xl font-bold text-white sm:text-4xl">
                  {stat.value}
                  <span className="gradient-text">{stat.suffix}</span>
                </div>
                <div className="text-sm font-medium text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute left-10 top-20 hidden animate-float opacity-30 lg:block">
          <div className="h-32 w-32 rounded-2xl border border-primary-500/30 bg-primary-500/5 backdrop-blur-sm" />
        </div>
        <div className="animate-delay-300 pointer-events-none absolute bottom-20 right-10 hidden animate-float opacity-30 lg:block">
          <div className="h-24 w-24 rounded-full border border-accent-purple/30 bg-accent-purple/5 backdrop-blur-sm" />
        </div>
      </div>
    </section>
  )
}

export default Hero
