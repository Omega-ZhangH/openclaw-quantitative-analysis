import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ModuleCardProps {
  icon: LucideIcon
  title: string
  subtitle: string
  color: string
  items: string[]
  delay?: number
}

export default function ModuleCard({ icon: Icon, title, subtitle, color, items, delay = 0 }: ModuleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="card-glow rounded-xl border border-slate-700 bg-slate-900/60 p-6 backdrop-blur"
    >
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-slate-100 mb-1">{title}</h3>
      <p className="text-sm text-slate-400 mb-4">{subtitle}</p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
