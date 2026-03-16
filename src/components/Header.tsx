import { motion } from 'framer-motion'
import { TrendingUp, Zap, Bell, Database } from 'lucide-react'

export default function Header() {
  return (
    <header className="relative overflow-hidden border-b border-slate-800 bg-[#0a0f1e]">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-900/20 via-transparent to-indigo-900/20" />
      <div className="relative max-w-6xl mx-auto px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingUp className="w-10 h-10 text-sky-400" />
            <h1 className="text-4xl font-bold gradient-text">OpenClaw</h1>
          </div>
          <p className="text-2xl font-semibold text-slate-200 mb-3">量化交易分析系统</p>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            基于 Mac mini 的本地量化交易决策系统，实时获取 A 股数据，智能分析买卖策略，飞书即时推送
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { icon: Database, label: 'A股实时数据' },
              { icon: Zap, label: 'CSV策略引擎' },
              { icon: TrendingUp, label: '智能买卖信号' },
              { icon: Bell, label: '飞书消息推送' },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 text-sky-300 text-sm"
              >
                <Icon className="w-4 h-4" />
                {label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </header>
  )
}
