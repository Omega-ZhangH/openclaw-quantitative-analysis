import { motion } from 'framer-motion'
import { Clock, Download, FileText, BarChart2, Send } from 'lucide-react'

const steps = [
  { icon: Clock, label: '定时触发', desc: '每分钟 cron 任务', color: 'text-emerald-400', bg: 'bg-emerald-900/30 border-emerald-800' },
  { icon: Download, label: '获取行情', desc: '调用 A 股 API 拉取实时价格', color: 'text-sky-400', bg: 'bg-sky-900/30 border-sky-800' },
  { icon: FileText, label: '读取策略', desc: '加载本地 CSV 策略文件', color: 'text-violet-400', bg: 'bg-violet-900/30 border-violet-800' },
  { icon: BarChart2, label: '策略匹配', desc: '价格与买入/卖出/止损点位对比', color: 'text-yellow-400', bg: 'bg-yellow-900/30 border-yellow-800' },
  { icon: Send, label: '飞书推送', desc: '触发信号时发送消息卡片', color: 'text-orange-400', bg: 'bg-orange-900/30 border-orange-800' },
]

export default function DataFlow() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl font-bold text-slate-100 mb-2">数据流程</h2>
        <p className="text-slate-400">从定时触发到消息推送的完整时序</p>
      </motion.div>
      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-700 hidden md:block" />
        <div className="space-y-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex items-start gap-4 rounded-xl border p-5 ${step.bg} md:ml-16`}
            >
              <div className={`w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0`}>
                <step.icon className={`w-5 h-5 ${step.color}`} />
              </div>
              <div>
                <p className="font-semibold text-slate-200">{step.label}</p>
                <p className="text-sm text-slate-400 mt-0.5">{step.desc}</p>
              </div>
              <span className="ml-auto text-xs text-slate-600 font-mono">Step {i + 1}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
