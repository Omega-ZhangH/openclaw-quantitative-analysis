import { motion } from 'framer-motion'
import { ArrowRight, Globe, FileSpreadsheet, Brain, MessageSquare } from 'lucide-react'

const nodes = [
  { id: 1, icon: Globe, label: 'A股数据源', sublabel: '东方财富 / 新浪财经 API', color: 'bg-emerald-600' },
  { id: 2, icon: FileSpreadsheet, label: '数据采集模块', sublabel: '实时价格 / 成交量 / 涨跌幅', color: 'bg-sky-600' },
  { id: 3, icon: Brain, label: '策略分析引擎', sublabel: 'CSV模型匹配 / 信号生成', color: 'bg-violet-600' },
  { id: 4, icon: MessageSquare, label: '飞书推送', sublabel: '买卖信号 / 实时通知', color: 'bg-orange-500' },
]

export default function ArchitectureDiagram() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl font-bold text-slate-100 mb-2">系统架构图</h2>
        <p className="text-slate-400">从数据采集到消息推送的完整链路</p>
      </motion.div>

      {/* Main flow */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 mb-12">
        {nodes.map((node, i) => (
          <div key={node.id} className="flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col items-center text-center w-44"
            >
              <div className={`w-16 h-16 rounded-2xl ${node.color} flex items-center justify-center mb-3 shadow-lg`}>
                <node.icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm font-semibold text-slate-200">{node.label}</p>
              <p className="text-xs text-slate-500 mt-1">{node.sublabel}</p>
            </motion.div>
            {i < nodes.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.1 }}
                className="hidden md:flex items-center mx-2"
              >
                <ArrowRight className="w-6 h-6 text-sky-500" />
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Strategy engine detail */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="rounded-xl border border-violet-800/50 bg-violet-900/10 p-6"
      >
        <h3 className="text-sm font-semibold text-violet-300 mb-4 text-center">策略分析引擎 — 内部流程</h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {['读取CSV策略文件', '匹配实时价格', '计算买卖信号', '生成决策报告'].map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-violet-700 flex items-center justify-center text-xs font-bold text-white">
                  {i + 1}
                </div>
                <p className="text-xs text-slate-300 mt-2 text-center w-20">{step}</p>
              </div>
              {i < 3 && <ArrowRight className="w-4 h-4 text-violet-500 hidden sm:block" />}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
