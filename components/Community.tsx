'use client'

import { MessageSquare, Users, BookOpen, Trophy, Github, Send } from 'lucide-react'

const Community = () => {
  const communityChannels = [
    {
      icon: MessageSquare,
      name: 'Discord',
      description: '加入我们的 Discord 社区，与开发者和用户实时交流',
      members: '...',
      color: 'from-indigo-500 to-purple-500',
      link: '#',
    },
    {
      icon: Send,
      name: 'Telegram',
      description: '在 Telegram 群组中获取最新动态和技术支持',
      members: '10+',
      color: 'from-cyan-500 to-blue-500',
      link: '#',
    },
    {
      icon: Github,
      name: 'GitHub',
      description: '查看开源代码，参与项目开发和贡献',
      members: '',
      color: 'from-slate-600 to-slate-500',
      link: '#',
    },
    {
      icon: BookOpen,
      name: '开发者论坛',
      description: '深度技术讨论和最佳实践分享',
      members: '10+',
      color: 'from-green-500 to-emerald-500',
      link: '#',
    },
  ]

  const programs = [
    {
      icon: Trophy,
      title: 'Layer 2 黑客松',
      description: '构建创新的 Layer 2 应用，赢取丰厚奖金',
      reward: '总奖池 $200K',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: Users,
      title: 'Layer 2 构建者计划',
      description: '获得技术支持和资金扶持构建 Layer 2',
      reward: '最高 $100K',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: BookOpen,
      title: '开发者资助',
      description: '优秀项目可获得技术和资金支持',
      reward: '最高 $50K',
      color: 'from-purple-500 to-indigo-500',
    },
  ]

  return (
    <section id="community" className="section-container">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold text-white sm:text-5xl">
            加入社区
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            与全球开发者和用户一起，共建去中心化的未来
          </p>
        </div>

        <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {communityChannels.map((channel, index) => {
            const Icon = channel.icon
            return (
              <a
                key={channel.name}
                href={channel.link}
                className="card-glow group block p-8 transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 inline-flex">
                  <div
                    className={`rounded-2xl bg-gradient-to-br ${channel.color} p-4 shadow-lg transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon size={28} className="text-white" />
                  </div>
                </div>

                <h3 className="mb-2 font-display text-xl font-semibold text-white">
                  {channel.name}
                </h3>
                
                <p className="mb-4 text-sm leading-relaxed text-slate-400">
                  {channel.description}
                </p>

                <div className="flex items-center text-sm">
                  <Users size={16} className="mr-2 text-slate-500" />
                  <span className="font-medium text-slate-300">{channel.members} 成员</span>
                </div>
              </a>
            )
          })}
        </div>

        <div className="mb-16">
          <h3 className="mb-8 text-center font-display text-3xl font-bold text-white">
            社区计划
          </h3>
          
          <div className="grid gap-6 lg:grid-cols-3">
            {programs.map((program, index) => {
              const Icon = program.icon
              return (
                <div
                  key={program.title}
                  className="card-glow group p-8"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-6 inline-flex">
                    <div
                      className={`rounded-2xl bg-gradient-to-br ${program.color} p-4 shadow-lg`}
                    >
                      <Icon size={28} className="text-white" />
                    </div>
                  </div>

                  <h4 className="mb-3 font-display text-xl font-semibold text-white">
                    {program.title}
                  </h4>
                  
                  <p className="mb-4 leading-relaxed text-slate-400">
                    {program.description}
                  </p>

                  <div className="inline-flex items-center rounded-full bg-gradient-to-r from-primary-500/20 to-accent-purple/20 px-4 py-2">
                    <span className="font-display text-sm font-semibold gradient-text">
                      {program.reward}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="card-glow relative overflow-hidden p-12 text-center">
          <div className="absolute right-0 top-0 h-96 w-96 bg-gradient-to-br from-primary-500/20 to-transparent blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 bg-gradient-to-tr from-accent-purple/20 to-transparent blur-3xl" />
          
          <div className="relative">
            <h3 className="mb-4 font-display text-3xl font-bold text-white sm:text-4xl">
              准备好开始了吗?
            </h3>
            <p className="mb-8 text-lg text-slate-300">
              立即加入 HyperChain，构建下一代区块链应用
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="#docs" className="btn-primary">
                开发文档
              </a>
              <a href="#start" className="btn-secondary">
                快速开始
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Community
