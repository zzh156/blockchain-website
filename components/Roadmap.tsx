'use client'

import { CheckCircle2, Circle, Clock } from 'lucide-react'

const Roadmap = () => {
  const roadmapPhases = [
    {
      quarter: 'Q1 2026',
      status: 'completed',
      title: '测试网启动',
      items: [
        '核心协议开发完成',
        'PoS 共识机制上线',
        'PoW 挖矿算法部署',
        '开发者测试网发布',
      ],
    },
    {
      quarter: 'Q2 2026',
      status: 'current',
      title: '主网上线',
      items: [
        '主网正式启动',
        '钱包和区块浏览器发布',
        '智能合约审计完成',
        '第一批验证节点上线',
      ],
    },
    {
      quarter: 'Q3 2026',
      status: 'current',
      title: 'Layer 2 基础设施',
      items: [
        'OP Stack 集成测试',
        'ZK Stack 适配开发',
        'Layer 2 开发工具发布',
        'DeFi 协议部署',
      ],
    },
    {
      quarter: 'Q4 2026',
      status: 'planned',
      title: 'Layer 2 生态扩展',
      items: [
        '首批 Layer 2 网络上线',
        '跨链桥开发完成',
        '企业合作伙伴扩展',
        'Layer 2 构建者激励计划',
      ],
    },
    {
      quarter: 'Q1 2027',
      status: 'planned',
      title: '性能优化与治理',
      items: [
        '分片技术实施',
        '治理机制升级',
        '全球节点扩展',
        'Layer 2 互操作性增强',
      ],
    },
    {
      quarter: 'Q1 2027',
      status: 'planned',
      title: '企业级应用',
      items: [
        '金融科技解决方案',
        '企业级 API 发布',
        '合规框架建立',
        '机构级节点支持',
      ],
    },
  ]

  const StatusIcon = ({ status }: { status: string }) => {
    if (status === 'completed') {
      return <CheckCircle2 size={24} className="text-green-400" />
    } else if (status === 'current') {
      return <Clock size={24} className="text-primary-400" />
    }
    return <Circle size={24} className="text-slate-600" />
  }

  return (
    <section id="roadmap" className="section-container bg-gradient-to-b from-transparent via-slate-900/30 to-transparent">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold text-white sm:text-5xl">
            发展路线图
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            持续迭代，稳步推进区块链技术创新
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary-500 via-slate-700 to-slate-800 lg:block" />

          <div className="space-y-12">
            {roadmapPhases.map((phase, index) => {
              const isLeft = index % 2 === 0
              const statusColors = {
                completed: 'border-green-500/50 bg-green-500/10',
                current: 'border-primary-500/50 bg-primary-500/10',
                planned: 'border-slate-700/50 bg-slate-800/30',
              }

              return (
                <div
                  key={phase.quarter}
                  className={`relative flex items-center ${
                    isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="w-full lg:w-5/12">
                    <div
                      className={`card-glow p-8 ${
                        statusColors[phase.status as keyof typeof statusColors]
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <span className="rounded-full bg-slate-900/80 px-4 py-1.5 font-display text-sm font-semibold text-slate-300">
                          {phase.quarter}
                        </span>
                        <StatusIcon status={phase.status} />
                      </div>

                      <h3 className="mb-4 font-display text-2xl font-bold text-white">
                        {phase.title}
                      </h3>

                      <ul className="space-y-3">
                        {phase.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start space-x-3"
                          >
                            <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-400" />
                            <span className="text-sm leading-relaxed text-slate-300">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {phase.status === 'current' && (
                        <div className="mt-4 inline-flex items-center space-x-2 rounded-full bg-primary-500/20 px-4 py-2 text-xs font-semibold text-primary-300">
                          <div className="h-2 w-2 animate-pulse rounded-full bg-primary-400" />
                          <span>进行中</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="absolute left-1/2 hidden h-6 w-6 -translate-x-1/2 lg:block">
                    <div
                      className={`h-full w-full rounded-full border-4 ${
                        phase.status === 'completed'
                          ? 'border-green-400 bg-green-500'
                          : phase.status === 'current'
                          ? 'border-primary-400 bg-primary-500 animate-pulse'
                          : 'border-slate-600 bg-slate-700'
                      }`}
                    />
                  </div>

                  <div className="hidden w-5/12 lg:block" />
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="mb-6 text-slate-400">
            想要了解更多技术细节？
          </p>
          <a
            href="#whitepaper"
            className="btn-primary"
          >
            查看白皮书
          </a>
        </div>
      </div>
    </section>
  )
}

export default Roadmap
