'use client'

import { Cpu, Shield, TrendingUp } from 'lucide-react'

const Consensus = () => {
  return (
    <section id="consensus" className="section-container">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold text-white sm:text-5xl">
            混合共识机制
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            创新结合 PoS 和 PoW，实现安全、高效、公平的区块链网络
          </p>
        </div>

        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          {/* PoS Card */}
          <div className="card-glow group relative overflow-hidden p-10">
            <div className="absolute right-0 top-0 h-64 w-64 bg-gradient-to-br from-primary-500/20 to-transparent blur-3xl" />
            
            <div className="relative">
              <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-primary-600 to-primary-500 p-4 shadow-lg shadow-primary-500/50">
                <Shield size={32} className="text-white" />
              </div>

              <h3 className="mb-4 font-display text-3xl font-bold text-white">
                权益证明 (PoS)
              </h3>
              
              <p className="mb-6 text-lg leading-relaxed text-slate-300">
                验证节点通过质押代币参与网络共识，保证区块链的安全性和终局性。
              </p>

              <div className="space-y-4">
                {[
                  { title: '高吞吐量', desc: '实现 10,000+ TPS 的交易处理能力' },
                  { title: '快速确认', desc: '秒级交易确认，提升用户体验' },
                  { title: '能源高效', desc: '低能耗运行，环保可持续' }
                ].map((item) => (
                  <div key={item.title} className="flex items-start space-x-3">
                    <div className="mt-1 flex-shrink-0">
                      <svg className="h-6 w-6 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="mb-1 font-display font-semibold text-white">{item.title}</h4>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* PoW Card */}
          <div className="card-glow group relative overflow-hidden p-10">
            <div className="absolute left-0 top-0 h-64 w-64 bg-gradient-to-br from-accent-purple/20 to-transparent blur-3xl" />
            
            <div className="relative">
              <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-accent-purple to-purple-600 p-4 shadow-lg shadow-purple-500/50">
                <Cpu size={32} className="text-white" />
              </div>

              <h3 className="mb-4 font-display text-3xl font-bold text-white">
                工作量证明 (PoW)
              </h3>
              
              <p className="mb-6 text-lg leading-relaxed text-slate-300">
                基于智能合约的 CPU 优化挖矿算法，让每个人都能公平获得代币。
              </p>

              <div className="space-y-4">
                {[
                  { title: '公平分配', desc: '任何人都可以使用个人电脑参与挖矿' },
                  { title: '抗 ASIC', desc: '算法针对 CPU 优化，避免算力集中' },
                  { title: '去中心化', desc: '降低参与门槛，增强网络韧性' }
                ].map((item) => (
                  <div key={item.title} className="flex items-start space-x-3">
                    <div className="mt-1 flex-shrink-0">
                      <svg className="h-6 w-6 text-accent-purple" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="mb-1 font-display font-semibold text-white">{item.title}</h4>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* How it Works */}
        <div className="card-glow p-10 lg:p-12">
          <div className="mb-8 text-center">
            <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-4 shadow-lg shadow-cyan-500/50">
              <TrendingUp size={32} className="text-white" />
            </div>
            <h3 className="mb-4 font-display text-3xl font-bold text-white">
              工作原理
            </h3>
            <p className="mx-auto max-w-2xl text-slate-400">
              两种机制相互补充，共同维护网络安全与公平
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { num: '1', color: 'primary', title: 'PoS 验证区块', desc: '验证节点通过质押参与共识，快速产生并验证新区块' },
              { num: '2', color: 'purple', title: 'PoW 分配代币', desc: '矿工通过 CPU 计算获得挖矿奖励，实现代币的公平分配' },
              { num: '3', color: 'cyan', title: '智能合约协调', desc: '链上智能合约自动调节难度，确保系统稳定运行' }
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-${step.color}-500/20 to-${step.color}-600/20 font-display text-2xl font-bold text-${step.color}-400`}>
                    {step.num}
                  </div>
                </div>
                <h4 className="mb-2 font-display text-lg font-semibold text-white">
                  {step.title}
                </h4>
                <p className="text-sm text-slate-400">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Consensus
