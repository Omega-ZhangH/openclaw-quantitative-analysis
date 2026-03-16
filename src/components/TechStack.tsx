import { motion } from 'framer-motion'

const techItems = [
  { category: '运行环境', items: ['Mac mini (本地部署)', 'macOS / Linux', 'Python 3.11+'] },
  { category: '数据采集', items: ['东方财富 API', '新浪财经 API', 'requests / httpx'] },
  { category: '策略分析', items: ['pandas (CSV处理)', 'numpy (数值计算)', '自定义策略引擎'] },
  { category: '后端服务', items: ['Python FastAPI', 'Node.js (可选)', 'SQLite (可选)'] },
  { category: '前端展示', items: ['React + TypeScript', 'Vite', 'TailwindCSS'] },
  { category: '消息推送', items: ['飞书开放平台 API', '飞书机器人 Webhook', '结构化消息卡片'] },
]

export default function TechStack() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl font-bold text-slate-100 mb-2">技术栈</h2>
        <p className="text-slate-400">系统各层技术选型</p>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {techItems.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-xl border border-slate-700 bg-slate-900/60 p-5"
          >
            <p className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-3">{group.category}</p>
            <ul className="space-y-1.5">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-slate-300 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-500" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
