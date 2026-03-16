import { motion } from 'framer-motion'
import { Database, FileSpreadsheet, Cpu, Bell } from 'lucide-react'
import Header from './components/Header'
import ArchitectureDiagram from './components/ArchitectureDiagram'
import ModuleCard from './components/ModuleCard'
import TechStack from './components/TechStack'
import DataFlow from './components/DataFlow'
import CSVExample from './components/CSVExample'

const modules = [
  {
    icon: Database,
    title: '数据采集层',
    subtitle: '实时获取 A 股市场行情数据',
    color: 'bg-emerald-600',
    items: [
      '对接东方财富 / 新浪财经 API',
      '获取股票代码、实时价格、成交量',
      '支持批量查询多只股票',
      '数据缓存与异常重试机制',
    ],
  },
  {
    icon: FileSpreadsheet,
    title: '策略分析层',
    subtitle: '读取 CSV 模型，匹配价格点位',
    color: 'bg-sky-600',
    items: [
      '加载本地 CSV 策略配置文件',
      '实时价格与买入/卖出/止损价对比',
      '支持趋势跟踪、均值回归等策略',
      '生成 BUY / SELL / HOLD 信号',
    ],
  },
  {
    icon: Cpu,
    title: '决策执行层',
    subtitle: '生成结构化交易建议报告',
    color: 'bg-violet-600',
    items: [
      '汇总多只股票的策略信号',
      '可选接入大模型进行市场分析',
      '输出结构化决策报告',
      '记录历史信号日志',
    ],
  },
  {
    icon: Bell,
    title: '消息推送层',
    subtitle: '飞书机器人实时推送交易信号',
    color: 'bg-orange-500',
    items: [
      '调用飞书开放平台 Webhook API',
      '发送富文本消息卡片',
      '包含股票代码、价格、建议操作',
      '支持自定义推送频率与过滤规则',
    ],
  },
]

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1e]">
      <Header />

      {/* Architecture */}
      <ArchitectureDiagram />

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-slate-800" />
      </div>

      {/* Modules */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold text-slate-100 mb-2">核心模块</h2>
          <p className="text-slate-400">系统四大功能层详细说明</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {modules.map((mod, i) => (
            <ModuleCard key={mod.title} {...mod} delay={i * 0.1} />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-slate-800" />
      </div>

      {/* Data Flow */}
      <DataFlow />

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-slate-800" />
      </div>

      {/* CSV Example */}
      <CSVExample />

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-slate-800" />
      </div>

      {/* Tech Stack */}
      <TechStack />

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
        OpenClaw 量化交易分析系统 · 本地部署 · Mac mini
      </footer>
    </div>
  )
}
