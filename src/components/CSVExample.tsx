import { motion } from 'framer-motion'

const csvData = [
  { code: '600519', name: '贵州茅台', buy: '1650.00', sell: '1800.00', stop: '1600.00', qty: '100', strategy: '趋势跟踪' },
  { code: '000001', name: '平安银行', buy: '12.50', sell: '14.00', stop: '11.80', qty: '500', strategy: '均值回归' },
  { code: '300750', name: '宁德时代', buy: '185.00', sell: '210.00', stop: '178.00', qty: '200', strategy: '突破策略' },
  { code: '601318', name: '中国平安', buy: '42.00', sell: '48.50', stop: '40.00', qty: '300', strategy: '价值投资' },
]

const headers = ['股票代码', '股票名称', '买入价', '卖出价', '止损价', '持仓数量', '策略类型']

export default function CSVExample() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl font-bold text-slate-100 mb-2">CSV 策略模型示例</h2>
        <p className="text-slate-400">本地策略文件数据结构展示</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-xl border border-slate-700 bg-slate-900/60 overflow-hidden"
      >
        {/* file header bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-3 text-xs text-slate-400 font-mono">strategy_model.csv</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                {headers.map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-sky-400 uppercase tracking-wider whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {csvData.map((row, i) => (
                <tr key={row.code} className={`border-b border-slate-800 ${i % 2 === 0 ? 'bg-slate-900/40' : ''}`}>
                  <td className="px-4 py-3 font-mono text-emerald-400">{row.code}</td>
                  <td className="px-4 py-3 text-slate-200">{row.name}</td>
                  <td className="px-4 py-3 text-sky-300 font-mono">{row.buy}</td>
                  <td className="px-4 py-3 text-green-400 font-mono">{row.sell}</td>
                  <td className="px-4 py-3 text-red-400 font-mono">{row.stop}</td>
                  <td className="px-4 py-3 text-slate-300 font-mono">{row.qty}</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 rounded-full text-xs bg-violet-900/50 text-violet-300 border border-violet-800">
                      {row.strategy}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  )
}
