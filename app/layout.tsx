import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'HyperChain - 下一代 Layer1 区块链',
  description: '结合 PoS 和 PoW 的创新混合共识机制，为金融科技企业提供高性能、去中心化的区块链基础设施。支持 OP Stack 和 ZK Stack 构建 Layer2 网络。',
  keywords: 'blockchain, layer1, layer2, ethereum, pos, pow, evm, fintech, op stack, zk stack, optimism, zksync, 区块链',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-body`}>
        <div className="relative min-h-screen overflow-x-hidden bg-slate-950 noise-bg">
          {/* Background gradient mesh */}
          <div className="fixed inset-0 bg-gradient-mesh opacity-60" />
          
          {/* Animated background orbs */}
          <div className="pointer-events-none fixed inset-0 overflow-hidden">
            <div className="absolute -left-40 -top-40 h-96 w-96 animate-float rounded-full bg-primary-600/20 blur-3xl" />
            <div className="animate-delay-300 absolute -right-40 top-1/4 h-96 w-96 animate-float rounded-full bg-accent-purple/20 blur-3xl" />
            <div className="animate-delay-500 absolute bottom-1/4 left-1/3 h-96 w-96 animate-float rounded-full bg-accent-cyan/20 blur-3xl" />
          </div>

          <div className="relative z-10">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
