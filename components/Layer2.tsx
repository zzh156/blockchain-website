'use client'

import { Layers, Rocket, Zap, Shield } from 'lucide-react'

const Layer2 = () => {
  const layer2Solutions = [
    {
      name: 'OP Stack',
      icon: Rocket,
      description: 'Optimistic Rollup 技术栈',
      color: 'from-red-500 to-orange-500',
      features: [
        { title: '兼容性强', desc: '完全兼容 Optimism 生态工具链' },
        { title: '快速部署', desc: '使用 OP Stack 快速启动 Layer2' },
        { title: '低成本', desc: '交易成本降低 10-100 倍' },
        { title: '安全继承', desc: '继承 HyperChain 的安全性' },
      ],
      stats: [
        { label: 'TPS', value: '40000+' },
        { label: '确认时间', value: '< 0.1s' },
        { label: '成本降低', value: '99%' },
      ],
    },
    {
      name: 'ZK Stack',
      icon: Shield,
      description: 'Zero-Knowledge Rollup 技术栈',
      color: 'from-purple-500 to-indigo-500',
      features: [
        { title: '零知识证明', desc: '使用 ZK-SNARK 技术保证隐私' },
        { title: '即时终局性', desc: '无需等待挑战期，立即确认' },
        { title: '极致安全', desc: '密码学级别的安全保证' },
        { title: '高性能', desc: '批量证明提升吞吐量' },
      ],
      stats: [
        { label: 'TPS', value: '20000+' },
        { label: '终局性', value: '即时' },
        { label: '隐私性', value: '增强' },
      ],
    },
  ]

  return (
    <section id="layer2" className="section-container bg-gradient-to-b from-transparent via-slate-900/30 to-transparent">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-primary-500 to-accent-purple p-4 shadow-lg shadow-primary-500/30">
            <Layers size={32} className="text-white" />
          </div>
          <h2 className="mb-4 font-display text-4xl font-bold text-white sm:text-5xl">
            Layer 2 扩展方案
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-400">
            原生支持 OP Stack 和 ZK Stack，构建高性能、低成本的 Layer2 网络
          </p>
        </div>

        {/* Layer2 Solutions Comparison */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          {layer2Solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <div
                key={solution.name}
                className="card-glow group relative overflow-hidden p-10"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Background gradient */}
                <div
                  className={`absolute right-0 top-0 h-96 w-96 bg-gradient-to-br ${solution.color} opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
                />

                <div className="relative">
                  {/* Icon and Title */}
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <div
                        className={`mb-4 inline-flex rounded-2xl bg-gradient-to-br ${solution.color} p-4 shadow-lg`}
                      >
                        <Icon size={32} className="text-white" />
                      </div>
                      <h3 className="mb-2 font-display text-3xl font-bold text-white">
                        {solution.name}
                      </h3>
                      <p className="text-lg text-slate-400">{solution.description}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8 space-y-4">
                    {solution.features.map((feature) => (
                      <div key={feature.title} className="flex items-start space-x-3">
                        <div className="mt-1 flex-shrink-0">
                          <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${solution.color}`} />
                        </div>
                        <div>
                          <h4 className="mb-1 font-display text-sm font-semibold text-white">
                            {feature.title}
                          </h4>
                          <p className="text-xs leading-relaxed text-slate-500">
                            {feature.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 rounded-xl border border-slate-800/50 bg-slate-900/50 p-4">
                    {solution.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className={`mb-1 font-display text-xl font-bold bg-gradient-to-r ${solution.color} bg-clip-text text-transparent`}>
                          {stat.value}
                        </div>
                        <div className="text-xs text-slate-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Why Layer 2 on HyperChain */}
        <div className="card-glow p-10 lg:p-12">
          <div className="mb-10 text-center">
            <h3 className="mb-4 font-display text-3xl font-bold text-white">
              为什么选择 HyperChain 构建 Layer 2？
            </h3>
            <p className="mx-auto max-w-2xl text-slate-400">
              基于 HyperChain 构建的 Layer2 网络，继承所有技术优势
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: '🚀',
                title: '快速部署',
                desc: '使用标准化工具链，几分钟内启动 Layer2',
              },
              {
                icon: '💰',
                title: '成本更低',
                desc: 'HyperChain 低 Gas 费用，Layer2 成本进一步降低',
              },
              {
                icon: '🔒',
                title: '安全保障',
                desc: '继承 Layer1 的混合共识安全性',
              },
              {
                icon: '🌐',
                title: '生态兼容',
                desc: '与以太坊 Layer2 生态工具完全兼容',
              },
            ].map((benefit, index) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-slate-800/50 bg-slate-900/30 p-6 transition-all duration-300 hover:border-primary-500/50 hover:bg-slate-800/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 text-4xl">{benefit.icon}</div>
                <h4 className="mb-2 font-display text-lg font-semibold text-white">
                  {benefit.title}
                </h4>
                <p className="text-sm leading-relaxed text-slate-400">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* Use Cases */}
          <div className="mt-12">
            <h4 className="mb-6 text-center font-display text-2xl font-bold text-white">
              Layer 2 应用场景
            </h4>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'DeFi 协议', desc: '高频交易和复杂金融产品' },
                { title: 'NFT 市场', desc: '低成本铸造和交易' },
                { title: '游戏应用', desc: '高性能链游基础设施' },
                { title: '支付网络', desc: '即时低成本支付方案' },
                { title: '企业应用', desc: '隐私保护的企业级应用' },
                { title: 'DAO 治理', desc: '高效的链上治理系统' },
              ].map((useCase) => (
                <div
                  key={useCase.title}
                  className="flex items-start space-x-3 rounded-lg border border-slate-800/30 bg-slate-900/20 p-4"
                >
                  <Zap size={20} className="mt-1 flex-shrink-0 text-primary-400" />
                  <div>
                    <h5 className="mb-1 font-display text-sm font-semibold text-white">
                      {useCase.title}
                    </h5>
                    <p className="text-xs text-slate-500">{useCase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="mb-6 font-display text-2xl font-bold text-white">
            准备构建您的 Layer 2 网络？
          </h3>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#docs-layer2" className="btn-primary">
              查看 Layer 2 文档
            </a>
            <a href="#builder-program" className="btn-secondary">
              申请构建者支持
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Layer2
